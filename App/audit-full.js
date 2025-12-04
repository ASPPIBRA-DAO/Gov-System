const fs = require('fs');
const path = require('path');

// === CONFIGURAÇÕES DE CAMINHOS ===
// Ajuste estes caminhos se os nomes das suas pastas forem diferentes
const ROOT_DIR = __dirname;
const BACKEND_PATH = path.join(ROOT_DIR, 'backend/worker');
const FRONTEND_PATH = path.join(ROOT_DIR, 'vite-ts');
const REPORT_FILE = 'RELATORIO_INTEGRACAO.md';

// === CORES PARA O TERMINAL ===
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    bold: "\x1b[1m",
};

// === BUFFER DO RELATÓRIO ===
let reportContent = `# 🛡️ Relatório de Prontidão para Integração (Auth JWT)
**Data:** ${new Date().toLocaleString()}
**Escopo:** Frontend (Vite) + Backend (Cloudflare Worker)

---
`;

// === LISTA DE AÇÕES NECESSÁRIAS (TODO LIST) ===
let todoList = [];

// === FUNÇÕES UTILITÁRIAS ===

function log(icon, label, status, color = colors.reset, details = '') {
    console.log(`${icon} ${color}${label.padEnd(40)} ... ${status}${colors.reset}`);
    reportContent += `| ${icon} | ${label} | **${status}** | ${details} |\n`;
    
    if (status.includes('FALHA') || status.includes('AUSENTE')) {
        todoList.push(`[ ] ${label}: ${details || 'Corrigir item'}`);
    }
}

function section(title) {
    console.log(`\n${colors.cyan}${colors.bold}--- ${title} ---${colors.reset}`);
    reportContent += `\n## ${title}\n\n| Item | Verificação | Status | Detalhes |\n|---|---|---|---|\n`;
}

function checkFileExists(basePath, relativePath) {
    const fullPath = path.join(basePath, relativePath);
    return fs.existsSync(fullPath);
}

function checkPackageDependency(basePath, depName, isDev = false) {
    const pkgPath = path.join(basePath, 'package.json');
    if (!fs.existsSync(pkgPath)) return 'NO_PKG';
    
    try {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        const deps = pkg.dependencies || {};
        const devDeps = pkg.devDependencies || {};
        
        if (deps[depName]) return deps[depName];
        if (devDeps[depName]) return devDeps[depName] + ' (dev)';
        return false;
    } catch (e) {
        return 'ERROR';
    }
}

function checkFileContent(basePath, relativePath, searchRegex) {
    const fullPath = path.join(basePath, relativePath);
    if (!fs.existsSync(fullPath)) return false;
    try {
        const content = fs.readFileSync(fullPath, 'utf8');
        return searchRegex.test(content);
    } catch (e) {
        return false;
    }
}

// === AUDITORIA PRINCIPAL ===

async function runAudit() {
    console.clear();
    console.log(`${colors.cyan}🚀 INICIANDO AUDITORIA FULL-STACK${colors.reset}\n`);

    // ---------------------------------------------------------
    // 1. AUDITORIA DO BACKEND (WORKER)
    // ---------------------------------------------------------
    section('1. BACKEND: Dependências e Estrutura');
    
    if (fs.existsSync(BACKEND_PATH)) {
        // Checar Dependências Críticas
        const backendDeps = ['bcryptjs', 'jsonwebtoken', 'hono']; // Hono é opcional, mas comum
        backendDeps.forEach(dep => {
            const version = checkPackageDependency(BACKEND_PATH, dep);
            version && version !== 'NO_PKG'
                ? log('✅', `Dep: ${dep}`, 'INSTALADO', colors.green, `v${version}`)
                : log('❌', `Dep: ${dep}`, 'AUSENTE', colors.red, 'Necessário para Auth');
        });

        // Checar Arquivos de Rota
        const hasAuthRoute = checkFileExists(BACKEND_PATH, 'src/routes/auth.ts');
        hasAuthRoute 
            ? log('✅', 'Rota: src/routes/auth.ts', 'OK', colors.green)
            : log('❌', 'Rota: src/routes/auth.ts', 'AUSENTE', colors.red, 'Criar arquivo para login');

        // Checar Configuração de Segredos (JWT)
        // Nota: Em workers locais checamos .dev.vars ou wrangler.toml
        const hasDevVars = checkFileExists(BACKEND_PATH, '.dev.vars');
        const hasWrangler = checkFileExists(BACKEND_PATH, 'wrangler.toml') || checkFileExists(BACKEND_PATH, 'wrangler.jsonc');
        
        if (hasDevVars) {
            const content = fs.readFileSync(path.join(BACKEND_PATH, '.dev.vars'), 'utf8');
            content.includes('JWT_SECRET')
                ? log('✅', 'Env: JWT_SECRET (.dev.vars)', 'CONFIGURADO', colors.green)
                : log('❌', 'Env: JWT_SECRET (.dev.vars)', 'AUSENTE', colors.red, 'Adicione JWT_SECRET=...');
        } else if (hasWrangler) {
             // Checagem básica se não usa .dev.vars (menos seguro mas comum em dev)
             log('⚠️', 'Arquivo .dev.vars', 'NÃO ENCONTRADO', colors.yellow, 'Verifique onde define JWT_SECRET');
        }

        // Checar se o código usa bcrypt
        const userRoute = 'src/routes/users.ts';
        if (checkFileExists(BACKEND_PATH, userRoute)) {
            const usesHash = checkFileContent(BACKEND_PATH, userRoute, /bcrypt|hash/i);
            usesHash
                ? log('✅', 'Segurança: Hash de Senha', 'DETECTADO', colors.green, 'Em users.ts')
                : log('❌', 'Segurança: Hash de Senha', 'FALHA', colors.red, 'users.ts salva senha pura?');
        }

    } else {
        log('❌', 'Pasta Backend', 'NÃO ENCONTRADA', colors.red, BACKEND_PATH);
    }

    // ---------------------------------------------------------
    // 2. AUDITORIA DO FRONTEND (VITE)
    // ---------------------------------------------------------
    section('2. FRONTEND: Conexão e Cliente');

    if (fs.existsSync(FRONTEND_PATH)) {
        // Checar Dependências
        const frontDeps = ['axios', 'jwt-decode'];
        frontDeps.forEach(dep => {
            const version = checkPackageDependency(FRONTEND_PATH, dep);
            version
                ? log('✅', `Dep: ${dep}`, 'INSTALADO', colors.green, `v${version}`)
                : log('❌', `Dep: ${dep}`, 'AUSENTE', colors.red, 'Instalar via npm');
        });

        // Checar Variáveis de Ambiente
        const envFile = path.join(FRONTEND_PATH, '.env');
        if (fs.existsSync(envFile)) {
            const content = fs.readFileSync(envFile, 'utf8');
            const apiHost = content.match(/VITE_HOST_API=(.*)/);
            if (apiHost && apiHost[1]) {
                log('✅', 'ENV: VITE_HOST_API', 'DEFINIDO', colors.green, apiHost[1].trim());
            } else {
                log('❌', 'ENV: VITE_HOST_API', 'VAZIO/AUSENTE', colors.red, 'Defina a URL do Worker');
            }
        } else {
            log('❌', 'Arquivo .env', 'AUSENTE', colors.red, 'Crie na raiz do front');
        }

        // Checar Configuração do Auth Provider
        const authProviderPath = 'src/auth/context/jwt/auth-provider.tsx';
        if (checkFileExists(FRONTEND_PATH, authProviderPath)) {
            const hasLoginEndpoint = checkFileContent(FRONTEND_PATH, authProviderPath, /auth\/login/);
            hasLoginEndpoint
                ? log('✅', 'AuthProvider: Endpoint', 'CORRETO', colors.green, 'Aponta para /auth/login')
                : log('⚠️', 'AuthProvider: Endpoint', 'VERIFICAR', colors.yellow, 'Não achei string "/auth/login"');
        } else {
            log('⚠️', 'AuthProvider (JWT)', 'NÃO ENCONTRADO', colors.yellow, 'Pasta src/auth existe?');
        }

    } else {
        log('❌', 'Pasta Frontend', 'NÃO ENCONTRADA', colors.red, FRONTEND_PATH);
    }

    // ---------------------------------------------------------
    // 3. RELATÓRIO FINAL
    // ---------------------------------------------------------
    reportContent += `\n## 📝 Plano de Ação (Gerado Automaticamente)\n`;
    if (todoList.length === 0) {
        reportContent += `\nParabéns! Tudo parece estar configurado corretamente para a integração.`;
        console.log(`\n${colors.green}${colors.bold}✔ SISTEMA PRONTO PARA INTEGRAÇÃO!${colors.reset}`);
    } else {
        reportContent += todoList.map(item => `- ${item}`).join('\n');
        console.log(`\n${colors.red}${colors.bold}⚠️ AÇÃO NECESSÁRIA: ${todoList.length} itens encontrados.${colors.reset}`);
        console.log(todoList.map(i => `  ${i}`).join('\n'));
    }

    fs.writeFileSync(path.join(ROOT_DIR, REPORT_FILE), reportContent);
    console.log(`${colors.cyan}\n📄 Relatório detalhado salvo em: ${REPORT_FILE}${colors.reset}`);
}

runAudit();
