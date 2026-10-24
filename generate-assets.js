// Helper script to generate clean, high-precision SVG industrial assets for products, categories, industries, and projects
import fs from 'fs';
import path from 'path';

const makeSvg = (title, subtitle, iconType, primaryColor = "#0284c7", accentColor = "#f97316") => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="1.5" fill="#334155" opacity="0.4"/>
    </pattern>
  </defs>

  <rect width="800" height="600" fill="url(#cardBg)"/>
  <rect width="800" height="600" fill="url(#dotGrid)"/>

  <!-- Technical Schematic Lines -->
  <g stroke="#334155" stroke-width="1.5" opacity="0.6">
    <circle cx="400" cy="270" r="190" fill="none" stroke-dasharray="6 6"/>
    <circle cx="400" cy="270" r="120" fill="none"/>
    <line x1="160" y1="270" x2="640" y2="270" stroke-dasharray="4 8"/>
    <line x1="400" y1="50" x2="400" y2="490" stroke-dasharray="4 8"/>
  </g>

  <!-- Central Industrial Machine Schematic Icon Based on Type -->
  <g transform="translate(400, 260)">
    <!-- Base Plate -->
    <rect x="-180" y="110" width="360" height="24" rx="4" fill="#334155" stroke="#64748b" stroke-width="2"/>
    
    <!-- Machine Graphic -->
    <polygon points="-120,110 -80,-80 80,-80 120,110" fill="#1e293b" stroke="${primaryColor}" stroke-width="6"/>
    <!-- Rotor / Core -->
    <circle cx="0" cy="15" r="65" fill="#0f172a" stroke="${accentColor}" stroke-width="6"/>
    <circle cx="0" cy="15" r="25" fill="${primaryColor}"/>
    <!-- Feed Chute -->
    <polygon points="-60,-130 60,-130 40,-80 -40,-80" fill="#334155" stroke="#94a3b8" stroke-width="3"/>
    
    <!-- Hydraulic Accents -->
    <line x1="-130" y1="30" x2="-70" y2="110" stroke="${accentColor}" stroke-width="6" stroke-linecap="round"/>
    <line x1="130" y1="30" x2="70" y2="110" stroke="${accentColor}" stroke-width="6" stroke-linecap="round"/>
  </g>

  <!-- Badge / Tag -->
  <rect x="50" y="48" width="160" height="32" rx="6" fill="#0284c7" opacity="0.2"/>
  <rect x="50" y="48" width="160" height="32" rx="6" fill="none" stroke="${primaryColor}" stroke-width="1.5"/>
  <text x="130" y="69" fill="#38bdf8" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle" letter-spacing="1.5">OEM CERTIFIED SPEC</text>

  <!-- Title & Subtitle Card Overlay -->
  <rect x="40" y="470" width="720" height="90" rx="8" fill="#090d16" opacity="0.85" stroke="#334155" stroke-width="1.5"/>
  <text x="65" y="508" fill="#f8fafc" font-family="sans-serif" font-weight="700" font-size="22" letter-spacing="0.5">${title}</text>
  <text x="65" y="538" fill="#94a3b8" font-family="sans-serif" font-size="14">${subtitle}</text>

  <!-- Corner Engineering Accent -->
  <path d="M 750 50 L 750 20 L 720 20" fill="none" stroke="${accentColor}" stroke-width="3"/>
</svg>`;
};

const assets = [
  // Products
  { path: 'public/images/products/jaw-crusher-main.svg', title: 'Heavy-Duty Primary Jaw Crusher', sub: 'Single Toggle / High Reduction Ratio Chamber' },
  { path: 'public/images/products/jaw-crusher-side.svg', title: 'Jaw Crusher Kinematic Assembly', sub: 'Forged Eccentric Shaft & Flywheel Geometry' },
  { path: 'public/images/products/cone-crusher.svg', title: 'Hydraulic Multi-Cylinder Cone Crusher', sub: 'Laminated Crushing Cavity for Cubical Shape' },
  { path: 'public/images/products/roller-mill.svg', title: 'Industrial Pendulum Roller Mill', sub: 'Centrifugal Grinding Ring with Cage Classifier' },
  { path: 'public/images/products/vertical-mill.svg', title: 'Ultrafine Vertical Roller Mill', sub: 'Energy Efficient Segmented Grinding Table' },
  { path: 'public/images/products/vibrating-screen.svg', title: 'Circular Motion Vibrating Screen', sub: 'Multi-Deck Precision Aggregate Classification' },
  { path: 'public/images/products/complete-plant.svg', title: 'Modular Mineral Crushing Plant', sub: 'Synchronized Primary, Secondary & Screening Line' },
  { path: 'public/images/products/pulverizer.svg', title: 'Precision Air Classifier Pulverizer', sub: 'Micron-Scale Non-Metallic Mineral Grinding' },
  { path: 'public/images/products/vibrating-feeder.svg', title: 'Heavy Grizzly Dump Hopper Feeder', sub: 'Bypass Scalping & Uniform Bulk Feeding' },

  // Categories
  { path: 'public/images/products/category-crushing.svg', title: 'Stone Crushing Equipment', sub: 'Jaw, Cone & Impact Reduction Units' },
  { path: 'public/images/products/category-grinding.svg', title: 'Grinding and Milling Machines', sub: 'Pendulum, Ball & Vertical Roller Mills' },
  { path: 'public/images/products/category-pulverizer.svg', title: 'Pulverizers & Micro-Grinders', sub: 'Sub-45 Micron Fine Powder Systems' },
  { path: 'public/images/products/category-screening.svg', title: 'Screening & Classification', sub: 'Linear, Circular & Air Classifier Units' },
  { path: 'public/images/products/category-handling.svg', title: 'Material Handling Equipment', sub: 'Feeders, Conveyors & Bucket Elevators' },
  { path: 'public/images/products/category-plants.svg', title: 'Complete Processing Plants', sub: 'Engineered Flowsheets & Stationary Lines' },

  // Industries
  { path: 'public/images/industries/industry-mining.svg', title: 'Mining & Mineral Ore Processing', sub: 'Continuous Heavy Ore Extraction Flowsheets' },
  { path: 'public/images/industries/industry-cement.svg', title: 'Cement & Construction Aggregates', sub: 'High-Spec Cubical Concrete Stone & Sand' },
  { path: 'public/images/industries/industry-marble.svg', title: 'Marble, Granite & Dimensional Stone', sub: 'Quarry Waste Upcycling & Micronization' },
  { path: 'public/images/industries/industry-infrastructure.svg', title: 'Infrastructure & Railway Ballast', sub: 'High Impact Road Base (WMM) Formulations' },
  { path: 'public/images/industries/industry-chemical.svg', title: 'Industrial Chemical & Glass Minerals', sub: 'Contamination-Free Silica & Feldspar Milling' },
  { path: 'public/images/industries/industry-powder.svg', title: 'Mineral Powder & Micronization', sub: 'Ultra-Fine GCC, Talc, Gypsum & Barite' },

  // Projects
  { path: 'public/images/projects/project-granite.svg', title: 'Hard Rock Granite Crushing Line', sub: 'Jaw & Cone Synchronized Aggregate Station' },
  { path: 'public/images/projects/project-milling.svg', title: 'High-Calcium Limestone Micronizing', sub: 'Closed-Circuit Negative Pressure Mill Flowsheet' },
  { path: 'public/images/projects/project-mining.svg', title: 'Iron Ore Scalping & Primary Sizing', sub: 'Heavy Feeder Skid Station for Heavy ROM Ores' },

  // About & Facility
  { path: 'public/images/about/factory-assembly.svg', title: 'Heavy Fabrication & Machining Bay', sub: 'Precision Boring, Stress Relieving & Assembly' },
  { path: 'public/images/about/quality-testing.svg', title: 'Non-Destructive Testing & Inspection', sub: 'Ultrasonic Flaw Detection & Dynamic Balancing' }
];

assets.forEach(asset => {
  const fullPath = path.resolve(asset.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, makeSvg(asset.title, asset.sub));
});

console.log(`Generated ${assets.length} industrial SVG image assets successfully.`);
