/**
 * 🛠️ ASPPIBRA-DAO: i18n Compliance & Integrity Audit (PAS v3.0)
 * Foco: Home, FAQ, Contact, Pricing e Metadados de Governança.
 */

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

// --- CONFIGURAÇÕES DE ALTA GOVERNANÇA ---
const CONFIG = {
  languages: ['pt', 'en', 'es', 'ar', 'cn', 'fr', 'ru'],
  baseLang: 'pt',
  localesDir: 'src/locales/langs',
  searchPaths: [
    'src/sections/home/**/*.{ts,tsx}',
    'src/sections/faqs/**/*.{ts,tsx}',
    'src/sections/contact/**/*.{ts,tsx}',
    'src/sections/pricing/**/*.{ts,tsx}',
    'src/pages/**/*.{ts,tsx}'
  ],
  reportFile: 'i18n-audit-report.json'
};

const diagnostic = {
  missing: [],      // Usado no código, falta no JSON
  zombies: {},      // No JSON, nunca usado no código
  parity: [],       // Existe em PT, falta nos outros
  duplicates: [],   // Chave repetida no mesmo JSON
  placeholders: [], // Chave existe mas valor está vazio ou é igual à chave
  imports: [],      // t() usado sem useTranslate
  dynamicAlerts: [] // Avisos de chaves dinâmicas (template literals)
};

async function runAudit() {
  console.log('🚀 Iniciando Auditoria de Integridade Sistêmica...');

  // 1. Extração de Chaves e Verificação de Imports
  const usedKeys = new Set();
  const files = await glob(`{${CONFIG.searchPaths.join(',')}}`);

  await Promise.all(files.map(async (file) => {
    const content = await fs.readFile(file, 'utf8');
    
    // Regex Refinado para capturar t('chave') e t(`chave`)
    const staticMatches = content.match(/t\(['"]([^'"]+)['"]\)/g);
    if (staticMatches) {
      staticMatches.forEach(m => usedKeys.add(m.match(/['"]([^'"]+)['"]/)[1]));
      
      if (!content.includes('useTranslate')) {
        diagnostic.imports.push(file);
      }
    }

    // Detecção de Chaves Dinâmicas (Melhoria 3)
    if (content.match(/t\(`([^`]+)`\)/g)) {
      diagnostic.dynamicAlerts.push(file);
    }
  }));

  // 2. Auditoria dos Arquivos JSON (Namespaces e Duplicatas)
  const languageData = {};

  for (const lang of CONFIG.languages) {
    languageData[lang] = {};
    diagnostic.zombies[lang] = [];
    
    const langDir = path.join(CONFIG.localesDir, lang);
    const jsonFiles = await glob(`${langDir}/*.json`);

    for (const jsonFile of jsonFiles) {
      const rawContent = await fs.readFile(jsonFile, 'utf8');
      
      // Detecção de Duplicatas via Regex (Melhoria 1)
      const keysInFile = rawContent.match(/"([^"]+)":/g);
      if (keysInFile) {
        const seen = new Set();
        keysInFile.forEach(k => {
          if (seen.has(k)) diagnostic.duplicates.push(`[${lang}] Duplicada: ${k} em ${path.basename(jsonFile)}`);
          seen.add(k);
        });
      }

      const content = JSON.parse(rawContent);
      const flattened = flattenObject(content);
      Object.assign(languageData[lang], flattened);
    }
  }

  // 3. Cruzamento de Dados (Paridade, Zumbis e Vazios)
  const baseKeys = Object.keys(languageData[CONFIG.baseLang]);

  CONFIG.languages.forEach(lang => {
    const currentKeys = Object.keys(languageData[lang]);

    // Paridade com Base PT
    baseKeys.forEach(key => {
      if (!currentKeys.includes(key)) {
        diagnostic.parity.push(`[${lang.toUpperCase()}] Ausente: ${key}`);
      } else if (!languageData[lang][key] || languageData[lang][key] === key) {
        // Detecção de Placeholders (Melhoria 5)
        diagnostic.placeholders.push(`[${lang.toUpperCase()}] Vazio/Placeholder: ${key}`);
      }
    });

    // Chaves Zumbis (Melhoria 2)
    currentKeys.forEach(key => {
      if (!usedKeys.has(key)) {
        diagnostic.zombies[lang].push(key);
      }
    });
  });

  // Chaves Faltantes (No código mas não no PT)
  usedKeys.forEach(key => {
    if (!languageData[CONFIG.baseLang][key]) {
      diagnostic.missing.push(key);
    }
  });

  await generateReport();
}

// --- UTILITÁRIOS ---

function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

async function generateReport() {
  const hasErrors = diagnostic.missing.length > 0 || diagnostic.parity.length > 0;

  console.log('\n' + '═'.repeat(60));
  console.log('🏛️  RELATÓRIO DE AUDITORIA i18n - MUNDO DIGITAL');
  console.log('═'.repeat(60));

  console.log(`\n🔴 ERROS CRÍTICOS (Missing): ${diagnostic.missing.length}`);
  diagnostic.missing.forEach(k => console.log(`   - ${k}`));

  console.log(`\n🟠 ERROS DE PARIDADE: ${diagnostic.parity.length}`);
  diagnostic.parity.forEach(p => console.log(`   - ${p}`));

  console.log(`\n🟡 PLACEHOLDERS/VAZIOS: ${diagnostic.placeholders.length}`);
  diagnostic.placeholders.forEach(p => console.log(`   - ${p}`));

  console.log(`\n🚫 DUPLICADAS NO JSON: ${diagnostic.duplicates.length}`);
  diagnostic.duplicates.forEach(d => console.log(`   - ${d}`));

  console.log(`\n⚠️  FALHA DE IMPORTAÇÃO (Hook): ${diagnostic.imports.length}`);
  diagnostic.imports.forEach(f => console.log(`   - ${f}`));

  console.log(`\n🧩 ALERTAS DINÂMICOS (Template Literals): ${diagnostic.dynamicAlerts.length}`);
  diagnostic.dynamicAlerts.forEach(f => console.log(`   - Analisar chaves dinâmicas em: ${f}`));

  console.log(`\n🧟 CHAVES ZUMBIS (Não utilizadas):`);
  Object.keys(diagnostic.zombies).forEach(l => {
    console.log(`   - [${l.toUpperCase()}]: ${diagnostic.zombies[l].length} chaves.`);
  });

  // Exportar Relatório JSON (Melhoria 7)
  await fs.writeFile(CONFIG.reportFile, JSON.stringify(diagnostic, null, 2));
  console.log(`\n💾 Relatório completo salvo em: ${CONFIG.reportFile}`);

  console.log('\n' + '═'.repeat(60));
  if (hasErrors) {
    console.log('❌ STATUS: REPROVADO. Corrija os erros antes do deploy.');
    process.exit(1); // Exit Code para CI/CD (Melhoria 4)
  } else {
    console.log('✅ STATUS: APROVADO. Integridade sistêmica garantida.');
    process.exit(0);
  }
}

runAudit();