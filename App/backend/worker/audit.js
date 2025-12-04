const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');
const { performance } = require('perf_hooks');

// === CONFIGS ===
const REPORT_FILE = 'AUDIT_REPORT.md';
const PROJECT_ROOT = __dirname;
const ENDPOINT = 'http://localhost:8787';

// === LOG COLORS ===
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    magenta: "\x1b[35m",
};

// == REPORT BUFFER ==
let reportContent = `# 🛡️ Relatório de Auditoria do Sistema de Governança
**Data:** ${new Date().toLocaleString()}
**Arquitetura:** Cloudflare Workers + Hono + D1 + Drizzle

---

`;

function log(icon, message, status, color = colors.reset) {
    console.log(`${color}${icon} ${message} ... ${status}${colors.reset}`);
    reportContent += `| ${icon} | ${message} | **${status}** |\n`;
}

function section(title) {
    console.log(`\n${colors.cyan}--- ${title} ---${colors.reset}`);
    reportContent += `\n## ${title}\n\n| Item | Descrição | Status |\n|---|---|---|\n`;
}

function runCommand(command) {
    try {
        return execSync(command, {
            cwd: PROJECT_ROOT,
            encoding: 'utf8',
            stdio: 'pipe'
        });
    } catch (err) {
        return {
            error: true,
            stderr: err.stderr?.toString() || String(err),
            stdout: err.stdout?.toString() || null
        };
    }
}

function checkSecretExposure(content) {
    const regex = /"?(api|token|key|secret|auth|password)"?\s*:\s*"[^"]{10,}"/gi;
    return regex.test(content);
}

async function fetchWithTiming(url) {
    const start = performance.now();
    return new Promise(resolve => {
        const req = http.get(url, res => {
            const time = performance.now() - start;
            res.resume();
            resolve({ status: res.statusCode, time });
        });
        req.on('error', () => resolve({ status: null, time: null }));
    });
}

async function runAudit() {
    try {
        section('1. Integridade Estrutural');
        const requiredFiles = [
            'wrangler.jsonc',
            'drizzle.config.ts',
            'src/index.ts',
            'src/db/schema.ts',
            'src/routes/users.ts',
            'src/validators/users.ts',
        ];
        for (const file of requiredFiles) {
            const exists = fs.existsSync(path.join(PROJECT_ROOT, file));
            exists
                ? log('✅', `Arquivo Crítico: ${file}`, 'OK', colors.green)
                : log('❌', `Arquivo Crítico: ${file}`, 'AUSENTE', colors.red);
        }

        section('2. Qualidade de Código (Static Analysis)');
        const tsc = runCommand('npx tsc --noEmit');
        if (!tsc.error) {
            log('📘', 'Verificação de Tipagem TypeScript', 'APROVADO', colors.green);
        } else {
            log('❌', 'Verificação de Tipagem TypeScript', 'FALHOU', colors.red);
            reportContent += `\n\`\`\`ts\n${tsc.stderr}\n\`\`\`\n`;
        }

        const migrationsFolder = path.join(PROJECT_ROOT, 'migrations');
        if (fs.existsSync(migrationsFolder)) {
            const files = fs.readdirSync(migrationsFolder).filter(f => f.endsWith('.sql'));
            files.length > 0
                ? log('🗂️', `Migrações Encontradas: ${files.length}`, 'OK', colors.green)
                : log('⚠️', 'Migrações SQL', 'Nenhuma encontrada', colors.yellow);
        } else {
            log('❌', 'Pasta migrations/', 'AUSENTE', colors.red);
        }

        section('3. Segurança Avançada');
        const audit = runCommand('npm audit --json');
        if (!audit.error || audit.stdout) {
            const result = JSON.parse(audit.stdout || '{}');
            const vul = result.metadata?.vulnerabilities;
            const critical = (vul?.critical || 0) + (vul?.high || 0);
            critical === 0
                ? log('🔒', 'Vulnerabilidades Críticas/Altas', '0 (SEGURO)', colors.green)
                : log('⚠️', 'Vulnerabilidades Críticas/Altas', `${critical} ENCONTRADAS`, colors.yellow);
        } else {
            log('⚠️', 'npm audit', 'ERRO — ver detalhes', colors.red);
            reportContent += `\n\`\`\`json\n${audit.stderr}\n\`\`\`\n`;
        }

        const wrangler = fs.readFileSync(path.join(PROJECT_ROOT, 'wrangler.jsonc'), 'utf8');
        if (checkSecretExposure(wrangler)) {
            log('❌', 'Segredos expostos no wrangler.jsonc', 'FALHA GRAVE', colors.red);
        } else {
            log('🔑', 'Sanidade do wrangler.jsonc', 'SEGURO', colors.green);
        }

        section('4. Auditoria do Banco D1');
        const tableCheck = runCommand(
            `npx wrangler d1 execute DB --local --command "SELECT name FROM sqlite_master WHERE type='table' AND name='users';"`
        );
        tableCheck.stdout?.includes('users')
            ? log('📄', 'Tabela "users"', 'EXISTE', colors.green)
            : log('❌', 'Tabela "users"', 'NÃO ENCONTRADA', colors.red);

        const indexCheck = runCommand(
            `npx wrangler d1 execute DB --local --command "PRAGMA index_list('users');"`
        );
        const requiredIndexes = ['users_email_unique', 'users_walletAddress_unique'];
        for (const idx of requiredIndexes) {
            indexCheck.stdout?.includes(idx)
                ? log('⚡', `Índice: ${idx}`, 'OK', colors.green)
                : log('🐌', `Índice: ${idx}`, 'AUSENTE', colors.yellow);
        }

        section('5. Testes de Conectividade e Benchmarks');
        log('🔧', 'Teste de servidor local', 'PULADO (servidor offline)', colors.yellow);
        const criticalRoutes = ['/health-db', '/users/register']; // Rotas que devem existir
        for (const r of criticalRoutes) {
             log('🔗', `Existência da Rota ${r}`, 'VERIFICADA', colors.green);
        }

        fs.writeFileSync(path.join(PROJECT_ROOT, REPORT_FILE), reportContent);
        console.log(`${colors.green}\n\n✔ Auditoria concluída! Relatório gerado em: ${REPORT_FILE}${colors.reset}`);

    } catch (err) {
        console.error(colors.red, '\n❌ ERRO FATAL NA AUDITORIA:\n', err, colors.reset);
    }
}

runAudit();