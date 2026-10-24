/**
 * Industrial E-Waste & Scrap Management Equipment Catalog Data
 */

export const productCategories = [
  {
    id: "e-waste-shredders",
    slug: "e-waste-shredders",
    name: "E-Waste Shredders & Granulators",
    shortDescription: "High-torque dual and quad shaft shredders built to break down computers, servers, PCBs, batteries, and appliances.",
    image: "/images/products/category-crushing.svg"
  },
  {
    id: "pcb-recycling-plants",
    slug: "pcb-recycling-plants",
    name: "PCB Dismantling & Refining Lines",
    shortDescription: "Automated electronic board crushing, dry electrostatic separator, and precious metal recovery systems.",
    image: "/images/products/category-plants.svg"
  },
  {
    id: "scrap-metal-balers",
    slug: "scrap-metal-balers",
    name: "Scrap Metal Balers & Shears",
    shortDescription: "Hydraulic scrap metal compactor balers, alligator shears, and container shears for ferrous & non-ferrous metals.",
    image: "/images/products/category-handling.svg"
  },
  {
    id: "metal-separation",
    slug: "metal-separation",
    name: "Eddy Current & Optical Separators",
    shortDescription: "High-speed eccentric eddy current separators, magnetic drums, and air density tables for copper/aluminum sorting.",
    image: "/images/products/category-screening.svg"
  }
];

export const products = [
  {
    id: "prod-pcb-recovery-plant",
    slug: "automated-pcb-recycling-plant",
    name: "Complete PCB E-Waste Recycling & Metal Separation Plant",
    category: "pcb-recycling-plants",
    categoryName: "PCB Dismantling & Refining Lines",
    shortDescription: "Dry physical separation plant achieving 99% copper, resin powder, and precious metal recovery from electronic circuit boards.",
    description: "Multi-stage automated flowsheet engineered for e-waste processing. Combines primary double-shaft shredding, hammer mill pulverizing, high-voltage electrostatic separator, and cyclone pulse dust collection. Recovers copper, tin, gold, and resin without toxic chemical emission.",
    specifications: [
      { parameter: "Processing Capacity", value: "500 - 2,500 kg/hr" },
      { parameter: "Metal Recovery Rate", value: "≥ 99.2% Purity" },
      { parameter: "Separation Tech", value: "High-Voltage Electrostatic + Air Density" },
      { parameter: "Emission Standard", value: "Closed-Circuit Pulse Dust Collection" }
    ],
    features: [
      "Zero chemical effluents (100% dry physical comminution)",
      "High-purity mixed non-ferrous copper/aluminum extraction",
      "Integrated air classifier and heavy-duty dust scrubbing"
    ],
    images: ["/images/products/pcb-recycling-plant.jpg"]
  },
  {
    id: "prod-dual-shaft-shredder",
    slug: "heavy-dual-shaft-ewaste-shredder",
    name: "Heavy-Duty Dual-Shaft E-Waste Shredder",
    category: "e-waste-shredders",
    categoryName: "E-Waste Shredders & Granulators",
    shortDescription: "High-torque slow-speed shear shredder built for IT scrap, laptop cases, server racks, refrigerators, and circuit boards.",
    description: "Forged alloy steel blades with specialized multi-hook geometries. Designed to rip through hard drive platters, electronic chassis, and dense scrap without stalling, equipped with microcomputer PLC automatic reverse protection on overload.",
    specifications: [
      { parameter: "Drive Power", value: "30 kW - 160 kW Hydraulic / Electric" },
      { parameter: "Throughput", value: "1.5 - 12 Tons/hr" },
      { parameter: "Blade Metallurgy", value: "Forged Cr-Ni-Mo Wear Alloy (HRC 58-62)" },
      { parameter: "Feed Opening", value: "1,200 mm x 900 mm" }
    ],
    features: [
      "Independently driven dual shafts with auto-reverse torque control",
      "Segmented hex shaft mounting for fast blade interchange",
      "Heavy cast housing preventing deformation under high shock loads"
    ],
    images: ["/images/products/dual-shaft-shredder.jpg"]
  },
  {
    id: "prod-eddy-current-separator",
    slug: "eccentric-rotor-eddy-current-separator",
    name: "High-Speed Eccentric Eddy Current Non-Ferrous Separator",
    category: "metal-separation",
    categoryName: "Eddy Current & Optical Separators",
    shortDescription: "Precision sorting machine that repels and ejects aluminum, copper, and brass from shredded e-waste and scrap residue.",
    description: "Equipped with high-intensity neodymium NdFeB permanent magnetic rotor spinning at 3,000 RPM. Creates strong repulsive magnetic eddy forces that propel non-ferrous metals away from plastics, glass, and circuit board resins.",
    specifications: [
      { parameter: "Rotor Speed", value: "Up to 3,200 RPM" },
      { parameter: "Magnetic Strength", value: "> 4,500 Gauss Surface Field" },
      { parameter: "Sorting Efficiency", value: "Up to 98% non-ferrous purity" },
      { parameter: "Belt Width", value: "650 mm - 1,500 mm" }
    ],
    features: [
      "Eccentric rotor design protects shell against ferrous entrapment wear",
      "Vibratory feeder integration for uniform single-layer presentation",
      "Variable frequency speed control for fine-grain tuning"
    ],
    images: ["/images/products/eddy-current-separator.jpg"]
  },
  {
    id: "prod-hydraulic-scrap-baler",
    slug: "heavy-hydraulic-metal-scrap-baler",
    name: "Heavy-Duty Hydraulic Metal Scrap Baling Press",
    category: "scrap-metal-balers",
    categoryName: "Scrap Metal Balers & Shears",
    shortDescription: "High-compression baler for compressing copper wire, aluminum extrusions, steel turnings, and sheet metal scrap into dense cubes.",
    description: "Triple-compression hydraulic cylinder setup delivering 250 to 600 tons of compaction force. Drastically slashes scrap shipping and storage costs by converting loose automotive, construction, and electronic scrap into furnace-ready density bales.",
    specifications: [
      { parameter: "Compaction Force", value: "250 - 630 Metric Tons" },
      { parameter: "Bale Dimensions", value: "400 x 400 mm up to 700 x 700 mm" },
      { parameter: "Cycle Time", value: "60 - 90 Seconds / Bale" },
      { parameter: "Operation Mode", value: "PLC Automatic / Manual Joystick Control" }
    ],
    features: [
      "Hardox 500 replaceable wear plates lining compression chamber",
      "High-pressure hydraulic manifold block with oil cooling circuit",
      "Side-eject or turn-out bale discharge configurations"
    ],
    images: ["/images/products/scrap-baler.jpg"]
  }
];
