/**
 * Centralized Industrial Product Catalog Data
 * Note: Specifications, performance figures, and capacities are illustrative client placeholders
 * and marked for replacement with certified OEM technical datasheets.
 */

export const productCategories = [
  {
    id: "crushers",
    slug: "crushers",
    name: "Stone Crushing Equipment",
    shortDescription: "High-reduction crushing machines engineered for quarrying, mining, and aggregate production.",
    image: "/images/products/category-crushing.svg"
  },
  {
    id: "grinding-mills",
    slug: "grinding-mills",
    name: "Grinding and Milling Machines",
    shortDescription: "Fine and ultra-fine pulverizing solutions for minerals, ores, chemicals, and industrial compounds.",
    image: "/images/products/category-grinding.svg"
  },
  {
    id: "pulverizers",
    slug: "pulverizers",
    name: "Pulverizers & Micro-Grinders",
    shortDescription: "Precision impact and classifier mills designed for non-metallic mineral micronization.",
    image: "/images/products/category-pulverizer.svg"
  },
  {
    id: "screening",
    slug: "screening",
    name: "Screening & Classification",
    shortDescription: "Heavy-duty vibrating screens and air classifiers for accurate sizing and particle separation.",
    image: "/images/products/category-screening.svg"
  },
  {
    id: "material-handling",
    slug: "material-handling",
    name: "Material Handling & Feeders",
    shortDescription: "Vibrating feeders, robust belt conveyors, and bucket elevators built for bulk abrasive solids.",
    image: "/images/products/category-handling.svg"
  },
  {
    id: "complete-plants",
    slug: "complete-plants",
    name: "Complete Processing Plants",
    shortDescription: "Turnkey plant layouts integrating primary crushing, secondary reduction, sizing, and storage.",
    image: "/images/products/category-plants.svg"
  }
];

export const products = [
  {
    id: "prod-jc-jaw-crusher",
    slug: "heavy-duty-jaw-crusher",
    name: "Heavy-Duty Primary Jaw Crusher",
    category: "crushers",
    categoryName: "Stone Crushing Equipment",
    shortDescription: "Deep symmetrical crushing chamber designed for primary reduction of hard granite, basalt, and iron ore.",
    description: "Built with forged eccentric shafts, premium spherical roller bearings, and heavy cast manganese steel jaws. Engineered specifically for continuous primary crushing in demanding mining and quarrying applications where feed size is large and rock compressive strength is high.",
    featured: true,
    images: [
      "/images/products/jaw-crusher-main.svg",
      "/images/products/jaw-crusher-side.svg"
    ],
    // Only genuine structural or placeholder engineering parameters (no fabricated throughput claims)
    specifications: [
      { parameter: "Crushing Stage", value: "Primary Reduction" },
      { parameter: "Drive Type", value: "V-Belt / Heavy Electric Motor" },
      { parameter: "Eccentric Shaft Material", value: "Forged Alloy Steel" },
      { parameter: "Jaw Plate Configuration", value: "Corrugated High-Manganese Alloy (Mn18Cr2)" },
      { parameter: "Discharge Adjustment", value: "Hydraulic Wedge or Shim Shifting Mechanism" },
      { parameter: "Lubrication System", value: "Centralized Manual or Auto-Grease Distribution" }
    ],
    applications: [
      "Quarrying & Aggregates",
      "Metallic & Non-Metallic Mineral Extraction",
      "Construction Demolition & Concrete Recycling",
      "Cement Plant Raw Material Feed"
    ],
    status: "Configurable OEM Model"
  },
  {
    id: "prod-cone-crusher",
    slug: "hydraulic-cone-crusher",
    name: "Hydraulic Multi-Cylinder Cone Crusher",
    category: "crushers",
    categoryName: "Stone Crushing Equipment",
    shortDescription: "Secondary and tertiary crushing unit providing high cubical shape aggregate and tight particle sizing.",
    description: "Features a laminated crushing cavity principle with automated tramp-iron release and hydraulic clearing cylinders. Ideal for processing abrasive ores and hard rock with low wear liner consumption.",
    featured: true,
    images: [
      "/images/products/cone-crusher.svg"
    ],
    specifications: [
      { parameter: "Crushing Stage", value: "Secondary / Tertiary Crushing" },
      { parameter: "Cavity Types Available", value: "Coarse, Medium, Fine, Extra-Fine" },
      { parameter: "Control System", value: "PLC Hydraulic Monitoring & Auto-Calibration" },
      { parameter: "Safety Mechanism", value: "Accumulator Tramp Iron Overload Release" },
      { parameter: "Lubrication", value: "Independent Oil Cooling & Filtration Unit" }
    ],
    applications: [
      "Manufactured Sand Production",
      "High-Spec Highway Asphalt Aggregate",
      "Iron Ore, Copper & Gold Heap Leaching Sizing"
    ],
    status: "Configurable OEM Model"
  },
  {
    id: "prod-raymond-roller-mill",
    slug: "industrial-pendulum-roller-mill",
    name: "Industrial Pendulum Roller Mill",
    category: "grinding-mills",
    categoryName: "Grinding and Milling Machines",
    shortDescription: "Reliable medium-speed pulverizer for calcite, limestone, gypsum, barite, and bentonite powder production.",
    description: "Combines crushing, grinding, pneumatic classification, and dust collection in a single closed-circuit system. Employs multi-roller centrifugal grinding against a bull ring with variable frequency classifier wheel for exact fineness adjustment.",
    featured: true,
    images: [
      "/images/products/roller-mill.svg"
    ],
    specifications: [
      { parameter: "Fineness Range", value: "80 mesh to 400 mesh (0.178 mm – 0.038 mm)" },
      { parameter: "Classifier Type", value: "Dynamic Variable Frequency Cage Rotor" },
      { parameter: "Ring & Roller Material", value: "65Mn / Alloy High-Chromium White Cast Iron" },
      { parameter: "Air System", value: "Closed-Loop Negative Pressure Circulation" },
      { parameter: "Dust Collection", value: "Pulse-Jet Fabric Filter or Cyclone System" }
    ],
    applications: [
      "Flue Gas Desulfurization (FGD) Limestone",
      "Coating & Paint Filler Processing",
      "Gypsum Plaster & Dry Mortar Production",
      "Activated Carbon & Chemical Mineral Powders"
    ],
    status: "Configurable OEM Model"
  },
  {
    id: "prod-vertical-roller-mill",
    slug: "ultrafine-vertical-roller-mill",
    name: "Ultrafine Vertical Roller Mill (VRM)",
    category: "grinding-mills",
    categoryName: "Grinding and Milling Machines",
    shortDescription: "High-efficiency vertical grinding table system optimized for large-scale industrial mineral micro-powders.",
    description: "Vertical design with hydraulic arm loading system and integrated multi-head dynamic classifier. Delivers significantly lower power consumption per ton compared to traditional ball mills.",
    featured: true,
    images: [
      "/images/products/vertical-mill.svg"
    ],
    specifications: [
      { parameter: "Feed Moisture Tolerance", value: "Up to 15% with integrated hot gas drying" },
      { parameter: "Classifier Configuration", value: "Single or Multi-Rotor Top Classifier" },
      { parameter: "Table Liner Design", value: "Segmented Replaceable Ni-Hard / Hi-Cr Plates" },
      { parameter: "Grinding Pressure", value: "Hydropneumatic Spring Cylinder Control" }
    ],
    applications: [
      "Slag & Cement Raw Grinding",
      "Calcium Carbonate (GCC) Micropowder",
      "Coal Injection Pulverization for Boilers",
      "Talc & Kaolin Fine Processing"
    ],
    status: "Configurable OEM Model"
  },
  {
    id: "prod-vibrating-screen",
    slug: "inclined-circular-vibrating-screen",
    name: "Heavy-Duty Circular Vibrating Screen",
    category: "screening",
    categoryName: "Screening & Classification",
    shortDescription: "Multi-deck circular motion screening unit for accurate grading of aggregates, gravel, and quarry stones.",
    description: "Features eccentric shaft vibration exciter, heavy coil suspension springs, and modular deck layouts. Supports woven wire mesh, perforated plates, or polyurethane panels.",
    featured: true,
    images: [
      "/images/products/vibrating-screen.svg"
    ],
    specifications: [
      { parameter: "Deck Options", value: "1, 2, 3, or 4 Decks" },
      { parameter: "Motion Type", value: "Circular Motion / Elliptical Amplitude" },
      { parameter: "Media Compatibility", value: "Woven Wire, Polyurethane, Perforated Plate" },
      { parameter: "Exciter Drive", value: "Flange-Mounted Eccentric Unit with Counterweights" }
    ],
    applications: [
      "Quarry Aggregate Sizing",
      "Mining Scalping and Pre-Screening",
      "Sand Grading and Water Washing Screening"
    ],
    status: "Configurable OEM Model"
  },
  {
    id: "prod-turnkey-plant",
    slug: "integrated-mineral-processing-plant",
    name: "Modular Mineral Crushing & Grinding Plant",
    category: "complete-plants",
    categoryName: "Complete Processing Plants",
    shortDescription: "Complete stationary or skid-mounted process line designed for turnkey crushing, sizing, and milling flowsheets.",
    description: "End-to-end engineered plant incorporating primary hopper, vibrating feeder, primary jaw crusher, secondary cone/impact crusher, multi-deck sizing screens, surge bins, and automated electrical control room.",
    featured: true,
    images: [
      "/images/products/complete-plant.svg"
    ],
    specifications: [
      { parameter: "Plant Structure", value: "Heavy Steel Structural Support Skids or Civil Foundations" },
      { parameter: "Electrical Control", value: "Centralized Motor Control Center (MCC) & SCADA/PLC" },
      { parameter: "Inter-Stage Transport", value: "Enclosed or Open Heavy-Duty Belt Conveyors" },
      { parameter: "Environmental Controls", value: "Water Mist Dust Suppression & Enclosure Hoods" }
    ],
    applications: [
      "Granite Quarrying Projects",
      "Gold & Polymetallic Ore Crushing Facilities",
      "High-Volume Infrastructure Highway Projects"
    ],
    status: "Configurable OEM Model"
  },
  {
    id: "prod-air-classifier-mill",
    slug: "precision-air-classifier-mill",
    name: "Precision Air Classifier Pulverizer",
    category: "pulverizers",
    categoryName: "Pulverizers & Micro-Grinders",
    shortDescription: "Impact grinding disc paired with an internal dynamic classifier for narrow particle size distribution.",
    description: "Specially engineered for non-stick, heat-sensitive, and soft-to-medium hardness materials. Fine-tunes particle top-cut by regulating classifier rpm without interrupting the continuous milling process.",
    featured: false,
    images: [
      "/images/products/pulverizer.svg"
    ],
    specifications: [
      { parameter: "Rotor Type", value: "Pin Disc / Hammer / Beater Blade" },
      { parameter: "Cut Point (d97)", value: "Configurable down to 5–45 microns" },
      { parameter: "Material Contact", value: "Carbon Steel or 304/316 Stainless Steel" }
    ],
    applications: [
      "Pigments, Dyes & Resins",
      "Pharmaceutical Inactives & Fine Chemicals",
      "Agricultural Chemicals and Fertilizers"
    ],
    status: "Configurable OEM Model"
  },
  {
    id: "prod-apron-vibrating-feeder",
    slug: "heavy-duty-vibrating-feeder",
    name: "Heavy-Duty Grizzly Vibrating Feeder",
    category: "material-handling",
    categoryName: "Material Handling & Feeders",
    shortDescription: "Rugged dump hopper feeder with adjustable grizzly bars to scalpe undersized material before primary jaw crushers.",
    description: "Protects primary crushers from blinding and excessive wear by bypassing natural fines. Heavy dual vibrator motors provide uniform forward linear feeding.",
    featured: false,
    images: [
      "/images/products/vibrating-feeder.svg"
    ],
    specifications: [
      { parameter: "Drive Mechanism", value: "Dual Unbalance Vibrating Motors / Exciter" },
      { parameter: "Grizzly Section", value: "Tapered Manganese Steel Adjustable Spacing" },
      { parameter: "Liner Plates", value: "Bolt-On Hardox / Wear Resistant AR Steel" }
    ],
    applications: [
      "Quarry Raw Material Dump Bins",
      "Mining Truck Dump Stations",
      "Clinker and Bulk Mineral Reclaim Feeders"
    ],
    status: "Configurable OEM Model"
  }
];
