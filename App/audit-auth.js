const fs = require('fs');
const path = require('path');

// Caminho do arquivo alvo
const TARGET_FILE = path.join(__dirname, 'vite-ts/src/auth/context/jwt/auth-provider.tsx');

// Cores para o terminal
const c = { green: "\x1b[32m", red: "\x1b[31m", yellow: "\x1b[33m", reset: "\x1b[0m", bold: "\x1b[1m" };

console.log(`${c.bold}\n🔍 AUDITORIA DE LÓGICA DE AUTENTICAÇÃO (JWT)${c.reset}\n`);

if (!fs.existsSync(TARGET_FILE)) {
    console.log(`${c.red}❌ ERRO CRÍTICO: Arquivo não encontrado em:${c.reset}`);
    console.log(TARGET_FILE);
    process.exit(1);
}

const content = fs.readFileSync(TARGET_FILE, 'utf8');

// Critérios de Aceite
const checks = [
    { label: 'Função de Login', regex: /const login =/ },
    { label: 'Função de Registro', regex: /const register =/ },
    { label: 'Função de Logout', regex: /const logout =/ },
    { label: 'Decodificação de Token (JWT)', regex: /jwt-decode/ },
    { label: 'Uso da API correta (/auth/login)', regex: /\/auth\/login/ }
];

let missingCount = 0;

console.log(`Analisando: .../auth/context/jwt/auth-provider.tsx\n`);

checks.forEach(check => {
    if (check.regex.test(content)) {
        console.log(`${c.green}✅ ${check.label.padEnd(30)} PRESENTE${c.reset}`);
    } else {
        console.log(`${c.red}❌ ${check.label.padEnd(30)} AUSENTE${c.reset}`);
        missingCount++;
    }
});

console.log(`\n----------------------------------------`);
if (missingCount > 0) {
    console.log(`${c.red}${c.bold}CONCLUSÃO: O arquivo está INCOMPLETO.${c.reset}`);
    console.log(`${c.yellow}Ação necessária: Refatoração completa para injetar a lógica de conexão.${c.reset}`);
} else {
    console.log(`${c.green}${c.bold}CONCLUSÃO: O arquivo está completo e pronto.${c.reset}`);
}
console.log(`----------------------------------------\n`);
