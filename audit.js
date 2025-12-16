
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// === CONFIGURAÇÕES PARA FRONTEND (REACT/VITE) ===
const OUTPUT_FILE = 'RELATORIO_FRONTEND.md';
const __filename = fileURLToPath(import.meta.url);
const SCRIPT_NAME = path.basename(__filename);

// Pastas para ignorar na árvore e na busca de TODOs
const IGNORE_DIRS = [
    'node_modules', 
    '.git', 
    'dist', 
    'build', 
    'coverage', 
    '.vscode', 
    '.idea', 
    '.DS_Store',
    '.idx'
];

// Arquivos vitais para um projeto Vite/React saudável
const CRITICAL_FILES = [
    'package.json',
    'vite.config.ts',      // Configuração do Build
    'tsconfig.json',       // Configuração do TypeScript
    'tsconfig.node.json',  // Configuração TS para Node (Vite)
    'index.html',          // Ponto de entrada do App
    'eslint.config.mjs',   // Linting (ou .eslintrc)
    '.env',                // Variáveis de ambiente locais
    '.env.example'         // Exemplo de variáveis (boa prática)
];

const ROOT_DIR = process.cwd();

let reportContent = `# 🕵️ RELATÓRIO DE AUDITORIA - FRONTEND (REACT/VITE)
Data: ${new Date().toLocaleString()}
Diretório Raiz: ${ROOT_DIR}

---

`;

// 1. FUNÇÃO PARA GERAR ÁRVORE DE DIRETÓRIOS (Limitada para não poluir)
function generateTree(dir, prefix = '', depth = 0) {
    // Limite de profundidade para evitar relatórios gigantescos em frontends complexos
    if (depth > 4) return prefix + '└── ... (profundidade máxima atingida)\n';

    let output = '';
    let files;
    
    try {
        files = fs.readdirSync(dir);
    } catch (e) {
        return prefix + `└── [Erro de leitura: ${e.message}]\n`;
    }
    
    const filteredFiles = files.filter(f => !IGNORE_DIRS.includes(f));
    
    // Ordena: Pastas primeiro, depois arquivos
    filteredFiles.sort((a, b) => {
        const pathA = path.join(dir, a);
        const pathB = path.join(dir, b);
        let statA, statB;
        try { statA = fs.statSync(pathA); } catch { return 0; }
        try { statB = fs.statSync(pathB); } catch { return 0; }
        
        if (statA.isDirectory() && !statB.isDirectory()) return -1;
        if (!statA.isDirectory() && statB.isDirectory()) return 1;
        return a.localeCompare(b);
    });

    filteredFiles.forEach((file, index) => {
        const isLast = index === filteredFiles.length - 1;
        const filePath = path.join(dir, file);
        let stats;
        try { stats = fs.statSync(filePath); } catch { return; }
        
        const marker = isLast ? '└── ' : '├── ';
        output += `${prefix}${marker}${file}${stats.isDirectory() ? '/' : ''}\n`;
        
        if (stats.isDirectory()) {
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            output += generateTree(filePath, newPrefix, depth + 1);
        }
    });
    return output;
}

// 2. FUNÇÃO PARA LER ARQUIVOS CRÍTICOS
function readCriticalFiles() {
    let output = '\n## 2. ⚙️ CONFIGURAÇÕES CRÍTICAS (Frontend)\n';
    
    CRITICAL_FILES.forEach(file => {
        const fullPath = path.join(ROOT_DIR, file);
        if (fs.existsSync(fullPath)) {
            output += `\n### 📄 ${file} (✅ Encontrado)\n`;
            
            // Não lemos .env por segurança, apenas confirmamos existência
            if (file.startsWith('.env')) {
                output += '```text\n(Conteúdo oculto por segurança)\n```\n';
            } else {
                output += '```jsonc\n'; // jsonc destaca bem configs JS/TS/JSON
                try {
                    const content = fs.readFileSync(fullPath, 'utf-8');
                    // Limita o tamanho da saída para configs gigantes
                    if (content.length > 2000) {
                        output += content.substring(0, 2000) + '\n... (arquivo truncado)';
                    } else {
                        output += content;
                    }
                } catch (e) {
                    output += `[Erro ao ler arquivo: ${e.message}]`;
                }
                output += '\n```\n';
            }
        } else {
            // Marca como erro crítico se for package.json ou vite.config.ts
            const icon = (file === '.env' || file === '.env.example') ? '⚠️' : '❌';
            const msg = (file === '.env') ? ' (Crítico para rodar localmente)' : ' (CRÍTICO)';
            output += `\n### ${icon} ${file} ${msg}\n`;
        }
    });
    return output;
}

// 3. VERIFICAÇÃO DE SEGURANÇA E AMBIENTE
function checkEnvironment() {
    let output = '\n## 3. 🛡️ VERIFICAÇÃO DE AMBIENTE E SEGURANÇA\n';
    
    const gitIgnore = path.join(ROOT_DIR, '.gitignore');
    const packageJsonPath = path.join(ROOT_DIR, 'package.json');
    
    // Checa dependências suspeitas ou essenciais
    if (fs.existsSync(packageJsonPath)) {
        try {
            const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
            const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
            
            output += `- **React Version**: ${allDeps['react'] || '❌ Não encontrado'}\n`;
            output += `- **Vite Version**: ${allDeps['vite'] || '❌ Não encontrado'}\n`;
            output += `- **TypeScript**: ${allDeps['typescript'] ? '✅ Sim' : '⚠️ Não'}\n`;
        } catch (e) {
            output += `- **package.json**: ❌ Erro ao analisar JSON\n`;
        }
    }

    // Checa .gitignore
    if (fs.existsSync(gitIgnore)) {
        const content = fs.readFileSync(gitIgnore, 'utf-8');
        const ignoresEnv = content.includes('.env');
        const ignoresNodeModules = content.includes('node_modules');
        const ignoresDist = content.includes('dist');

        output += `- **.gitignore**: ✅ Existe.\n`;
        output += `  - Ignora node_modules? ${ignoresNodeModules ? '✅ Sim' : '❌ NÃO (Crítico!)'}\n`;
        output += `  - Ignora .env? ${ignoresEnv ? '✅ Sim' : '⚠️ NÃO (Risco de vazar chaves de API)'}\n`;
        output += `  - Ignora dist/build? ${ignoresDist ? '✅ Sim' : '⚠️ Não'}\n`;
    } else {
        output += '- **.gitignore**: ❌ NÃO ENCONTRADO (Prioridade Alta)\n';
    }

    return output;
}

// 4. SCANNER DE DÍVIDA TÉCNICA (TODOs)
function scanForTodos(dir) {
    let output = '';
    let files;
    try { files = fs.readdirSync(dir); } catch { return ''; }

    files.forEach(file => {
        const filePath = path.join(dir, file);
        let stats; 
        try { stats = fs.statSync(filePath); } catch { return; }

        if (IGNORE_DIRS.includes(file) || file === OUTPUT_FILE || file === SCRIPT_NAME) return;

        if (stats.isDirectory()) {
            output += scanForTodos(filePath);
        } else if (file.match(/\.(ts|tsx|js|jsx|css|scss|jsonc)$/)) { // Extensões de Frontend
            try {
                const content = fs.readFileSync(filePath, 'utf-8');
                const lines = content.split('\n');
                lines.forEach((line, index) => {
                    // Ignora linhas muito longas (svgs inline, base64)
                    if (line.length > 200) return; 
                    
                    if (line.includes('TODO') || line.includes('FIXME')) {
                        const relativePath = path.relative(ROOT_DIR, filePath);
                        // Limpa caracteres de código markdown para não quebrar a tabela
                        const cleanLine = line.trim().replace(/`/g, "'");
                        output += `- [ ] **${relativePath}:${index + 1}**: \`${cleanLine}\`\n`;
                    }
                });
            } catch (e) {
                // Ignora arquivos binários ou ilegíveis
            }
        }
    });
    return output;
}

// === EXECUÇÃO ===
console.log("🔍 Iniciando auditoria do Frontend...");
console.log(`📂 Diretório alvo: ${ROOT_DIR}`);

if (!fs.existsSync(path.join(ROOT_DIR, 'package.json'))) {
    console.warn("⚠️ AVISO: 'package.json' não encontrado na raiz. Certifique-se de rodar este script DENTRO da pasta 'Frontend'.");
}

// Bloco 1: Árvore
reportContent += '## 1. 🌳 ESTRUTURA DE ARQUIVOS (Resumida)\n```text\n' + generateTree(ROOT_DIR) + '\n```\n';

// Bloco 2: Configs
reportContent += readCriticalFiles();

// Bloco 3: Segurança
reportContent += checkEnvironment();

// Bloco 4: TODOs
const todos = scanForTodos(ROOT_DIR);
reportContent += '\n## 4. 📝 DÍVIDA TÉCNICA (TODOs/FIXMEs)\n' + (todos ? todos : '✅ Nenhum TODO encontrado ou código 100% limpo!') + '\n';

// Salvar
try {
    fs.writeFileSync(path.join(ROOT_DIR, OUTPUT_FILE), reportContent);
    console.log(`✅ Relatório gerado com sucesso: ${OUTPUT_FILE}`);
    console.log(`👉 DICA: Se você estiver rodando isso na raiz do monorepo, mova o script para dentro da pasta 'Frontend/' e rode novamente.`);
} catch (e) {
    console.error(`❌ Erro ao salvar relatório: ${e.message}`);
}
