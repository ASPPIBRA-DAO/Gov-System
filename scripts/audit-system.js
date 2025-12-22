
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../');

console.log("🔍 INICIANDO AUDITORIA COMPLETA - ASPPIBRA GOVERNANCE\n");

// =========================================================
// 1. AUDITORIA DE DEPENDÊNCIAS (Foco no Bundle de 2MB)
// =========================================================
const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'package.json'), 'utf-8'));
const deps = packageJson.dependencies;

const HEAVY_PACKAGES = [
  { name: 'maplibre-gl', impact: 'Alto (Mapas)', rwa_relevant: true },
  { name: '@react-pdf/renderer', impact: 'Crítico (PDFs)', rwa_relevant: false },
  { name: 'apexcharts', impact: 'Médio (Gráficos)', rwa_relevant: true },
  { name: 'framer-motion', impact: 'Médio (Animações)', rwa_relevant: true },
  { name: 'lodash', impact: 'Médio (Utilidades)', rwa_relevant: false }
];

console.log("📦 [1/2] AUDITORIA DE DEPENDÊNCIAS:");
HEAVY_PACKAGES.forEach(pkg => {
  if (deps[pkg.name]) {
    console.log(`   ⚠️  ENCONTRADO: ${pkg.name.padEnd(20)} | Impacto: ${pkg.impact.padEnd(15)} | RWA: ${pkg.rwa_relevant ? 'Manter' : 'Avaliar Remoção'}`);
  }
});

// =========================================================
// 2. AUDITORIA DE CÓDIGO INTERNO (Enquadramento e Padronização)
// =========================================================
const SECTIONS_DIR = path.join(ROOT_DIR, 'src/sections/home');

console.log("\n📐 [2/2] AUDITORIA DE ENQUADRAMENTO (Layout):");

const auditSectionStyle = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const sectionName = path.basename(filePath);
  
  const hasPadding = content.includes('py:') || content.includes('padding:');
  const hasHardHeight = content.includes('height:') && !content.includes('minHeight:');
  const usesSx = content.includes('sx={');

  console.log(`   📄 Componente: ${sectionName.padEnd(30)}`);
  console.log(`      - Padding Semântico (py): ${hasPadding ? '✅ OK' : '❌ AUSENTE'}`);
  console.log(`      - Altura Fixa (Hardcoded): ${hasHardHeight ? '⚠️ SIM (Corrigir)' : '✅ NÃO'}`);
  console.log(`      - Uso de SX Props: ${usesSx ? '✅ OK' : '⚠️ AVALIAR'}`);
};

// Busca recursiva para encontrar todos os componentes home-*.tsx
const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else if (file.startsWith('home-') && file.endsWith('.tsx')) {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
};

const homeFiles = getAllFiles(SECTIONS_DIR);
homeFiles.forEach(file => auditSectionStyle(file));


console.log("\n--------------------------------------------------");
console.log("✨ AUDITORIA CONCLUÍDA. Use os dados acima para guiar a limpeza.");
