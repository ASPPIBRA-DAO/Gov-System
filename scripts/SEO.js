import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * ASPPIBRA GOVERNANCE - SEO & PWA AUTOMATION SCRIPT
 * Build: 2025.12.22
 * Focus: Governance, DAO, Agro, RWA.
 */

// --- ES Modules Environment ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =========================================================
// 1. GLOBAL CONFIGURATION (Institutional Standard)
// =========================================================
const CONFIG = {
  // Domínio oficial do Frontend (Global)
  domain: process.env.PUBLIC_URL || "https://asppibra.com",
  
  appName: "ASPPIBRA Governance",
  appShortName: "ASPPIBRA",
  appDescription: "Sovereign Identity Provider and Governance platform for DAO, Agro, and RWA infrastructure.",
  
  // ✅ DESIGN SYSTEM: Sincronizado com a documentação oficial
  themeColor: "#00A76F",      // Primary Green
  backgroundColor: "#141A21", // Grey 900 (Dark Mode Background)
  
  // Caminho absoluto para a pasta public
  publicDir: path.resolve(__dirname, "../public"),
};

// Páginas para Indexação (Sitemap)
const PUBLIC_PAGES = [
  { url: "/", priority: "1.0", freq: "always" },
  { url: "/auth/jwt/login", priority: "0.8", freq: "monthly" },
  { url: "/auth/jwt/register", priority: "0.8", freq: "monthly" },
];

// =========================================================
// 2. SMART CONTENT GENERATORS
// =========================================================

const getRobotsTxt = () => `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# ✅ Security & Performance: Allow Assets
Allow: /logo/
Allow: /assets/
Allow: /favicon.ico
Allow: /site.webmanifest

# ⛔ Security: Block Internal Logic & Cloudflare Configs
Disallow: /api/
Disallow: /monitoring/
Disallow: /wrangler.toml
Disallow: /wrangler.jsonc
Disallow: /package.json
Disallow: /pnpm-lock.yaml
Disallow: /node_modules/
Disallow: /.git/
Disallow: *.ts
Disallow: *.map

# Global Sitemap
Sitemap: ${CONFIG.domain}/sitemap.xml
`;

const getManifest = () => ({
  name: CONFIG.appName,
  short_name: CONFIG.appShortName,
  description: CONFIG.appDescription,
  start_url: "/",
  display: "standalone",
  orientation: "portrait",
  background_color: CONFIG.backgroundColor,
  theme_color: CONFIG.themeColor,
  icons: [
    { 
      src: "/android-chrome-192x192.png", 
      sizes: "192x192", 
      type: "image/png",
      purpose: "any maskable"
    },
    { 
      src: "/android-chrome-512x512.png", 
      sizes: "512x512", 
      type: "image/png",
      purpose: "any"
    }
  ],
  categories: ["finance", "productivity", "governance"]
});

// =========================================================
// 3. EXECUTION ENGINE
// =========================================================

console.log(`\n🚀 INITIALIZING ASPPIBRA METADATA ENGINE`);
console.log(`    📂 Target Directory: ${CONFIG.publicDir}`);

try {
  // Garantir existência da pasta public
  if (!fs.existsSync(CONFIG.publicDir)) {
    fs.mkdirSync(CONFIG.publicDir, { recursive: true });
  }

  // 1. Geração do Robots.txt
  fs.writeFileSync(path.join(CONFIG.publicDir, "robots.txt"), getRobotsTxt());
  console.log("    ✅ Robots.txt: Generated with Security Rules");

  // 2. Geração do Site.webmanifest
  fs.writeFileSync(
    path.join(CONFIG.publicDir, "site.webmanifest"), 
    JSON.stringify(getManifest(), null, 2)
  );
  console.log("    ✅ Manifest: PWA Identity Synced");

  // 3. Geração do Sitemap.xml
  const today = new Date().toISOString().split("T")[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_PAGES.map(p => `  <url>
    <loc>${CONFIG.domain}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
  
  fs.writeFileSync(path.join(CONFIG.publicDir, "sitemap.xml"), sitemap);
  console.log(`    ✅ Sitemap: Updated for ${CONFIG.domain}`);

} catch (error) {
  console.error("\n❌ FATAL ERROR DURING BUILD:", error);
  process.exit(1);
}

// =========================================================
// 4. PRE-DEPLOY AUDIT (Identity Integrity)
// =========================================================
console.log("\n🔍 Auditing Identity Assets Integrity...");

const assetsToAudit = [
  { file: "favicon.ico", folder: "" },
  { file: "apple-touch-icon.png", folder: "" },
  { file: "android-chrome-512x512.png", folder: "" },
  { file: "logo-full.svg", folder: "logo" },
  { file: "logo-single.svg", folder: "logo" },
  { file: "logo-1.webp", folder: "assets/icons/workspaces" }
];

let errors = 0;

assetsToAudit.forEach(asset => {
  const fullPath = path.join(CONFIG.publicDir, asset.folder, asset.file);
  const shortPath = asset.folder ? `/${asset.folder}/${asset.file}` : `/${asset.file}`;

  if (!fs.existsSync(fullPath)) {
    console.error(`    ❌ [MISSING] ${shortPath}`);
    errors++;
  } else {
    const size = fs.statSync(fullPath).size;
    size === 0 ? console.warn(`    ⚠️  [EMPTY]   ${shortPath}`) : console.log(`    🆗 [FOUND]   ${shortPath}`);
  }
});

console.log("-".repeat(50));

if (errors > 0) {
  console.error(`\n⚠️  AUDIT FAILED: ${errors} critical assets are missing.`);
  console.error(`    Check your 'public' folder before pushing to Cloudflare.`);
  process.exit(1);
} else {
  console.log("\n✨ SYSTEM INTEGRITY: 100% | DOMAIN: GLOBAL | READY FOR DEPLOY.\n");
}