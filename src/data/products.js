/**
 * Sample catalogue for Tech City Technology Mall.
 * Replace `images` with your own photography or CDN URLs when you go live.
 */

const U = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products = [
  {
    id: "macbook-air-m1",
    name: "Apple MacBook Air M1",
    category: "laptops",
    price: 1450000,
    stock: "in-stock",
    summary: "Apple M1 chip · 8GB unified memory · 256GB SSD · 13.6\" Liquid Retina",
    description:
      "Fanless, silent and impossibly thin. The M2 MacBook Air handles design work, video editing and heavy browser use on a single charge, and weighs just 1.24kg.",
    specs: {
      Brand: "Apple",
      Model: "MacBook Air (M1, 2022)",
      Processor: "Apple M1 8-core",
      Memory: "8GB unified",
      Storage: "256GB SSD",
      Display: "13.6\" Liquid Retina",
      Battery: "Up to 18 hours",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "MagSafe charging plus two Thunderbolt ports",
      "1080p FaceTime HD camera",
      "Four-speaker sound with Spatial Audio",
    ],
    images: [
      U("1517336714731-489689fd1ca8"),
      U("https://unsplash.com/photos/portrait-of-a-young-female-farmer-wearing-a-cowboy-hat-xbNYfc-NGRs"),
      U("1531297484001-80022131f5a1"),
    ],
  },
  {
    id: "dell-optiplex-7090",
    name: "Dell OptiPlex 7090 Desktop",
    category: "desktops",
    price: 690000,
    stock: "in-stock",
    summary: "Core i5 (10th Gen) · 16GB RAM · 1TB HDD + 256GB SSD · 22\" monitor",
    description:
      "A complete office workstation bundle — tower, 22-inch monitor, keyboard and mouse. Configured, updated and ready to plug in the day you collect it.",
    specs: {
      Brand: "Dell",
      Model: "OptiPlex 7090 SFF",
      Processor: "Intel Core i5-10500",
      Memory: "16GB DDR4",
      Storage: "256GB SSD + 1TB HDD",
      Display: "22\" Dell FHD monitor included",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Keyboard and mouse included",
      "Free Windows and Office setup",
      "Volume pricing for offices and schools",
    ],
    images: [
      U("1547082299-de196ea013d6"),
      U("1593640408182-31c70c8268f5"),
      U("1527443224154-c4a3942d3acf"),
    ],
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max 256GB",
    category: "phones",
    price: 1780000,
    stock: "in-stock",
    summary: "A17 Pro · 256GB · Titanium build · 48MP main camera",
    description:
      "The flagship iPhone with a titanium frame, USB-C and the 48MP main camera. Sealed, region-free and activated in-store before you leave.",
    specs: {
      Brand: "Apple",
      Model: "iPhone 15 Pro Max",
      Processor: "A17 Pro",
      Storage: "256GB",
      Display: "6.7\" Super Retina XDR ProMotion",
      Camera: "48MP main + 12MP ultrawide + 12MP 5x tele",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Sealed pack, verified IMEI",
      "Free screen protector and case",
      "Trade-in accepted on your old device",
    ],
    images: [
      U("1592286927505-1def25115558"),
      U("1510557880182-3d4d3cba35a5"),
      U("1580910051074-3eb694886505"),
    ],
  },
  {
    id: "samsung-a55-5g",
    name: "Samsung Galaxy A55 5G",
    category: "phones",
    price: 620000,
    oldPrice: 665000,
    stock: "low-stock",
    summary: "8GB RAM · 256GB · 6.6\" Super AMOLED 120Hz · 5000mAh",
    description:
      "The sweet spot of the Galaxy line: an AMOLED 120Hz screen, a battery that lasts a full working day and four years of Android updates.",
    specs: {
      Brand: "Samsung",
      Model: "Galaxy A55 5G",
      Memory: "8GB RAM",
      Storage: "256GB expandable",
      Display: "6.6\" Super AMOLED 120Hz",
      Battery: "5000mAh, 25W charging",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Dual SIM with 5G on both slots",
      "IP67 dust and water resistance",
      "Four years of OS upgrades",
    ],
    images: [
      U("1610945265064-0e34e5519bbf"),
      U("1511707171634-5f897ff02aa9"),
      U("1523206489230-c012c64b2b48"),
    ],
  },
  {
    id: "pos-terminal-n86",
    name: "PAX A920 POS Terminal",
    category: "pos",
    price: 395000,
    stock: "in-stock",
    summary: "Android 10 · 5.5\" touchscreen · Built-in printer · 4G + Wi-Fi",
    description:
      "A smart Android POS terminal for retail counters, pharmacies and agency banking. Comes with a thermal printer, contactless reader and a battery that survives a full trading day.",
    specs: {
      Brand: "PAX",
      Model: "A920 Pro",
      Connectivity: "4G LTE, Wi-Fi, Bluetooth",
      Printer: "Built-in 58mm thermal",
      Battery: "5250mAh removable",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Ships with two rolls of thermal paper",
      "We help you onboard with your bank or PSP",
      "Bulk pricing for agents and chains",
    ],
    images: [
      U("1556740738-b6a63e27c4df"),
      U("1563013544-824ae1b704d3"),
      U("1607083206968-13611e3d76db"),
    ],
  },
  {
    id: "hikvision-8ch-kit",
    name: "Hikvision 8-Channel CCTV Kit",
    category: "cctv",
    price: 780000,
    stock: "in-stock",
    summary: "8 × 5MP ColorVu cameras · 8CH DVR · 2TB drive · installation included",
    description:
      "A complete surveillance package for shops, homes and small offices. Full-colour night vision, mobile viewing on Hik-Connect, and professional installation by our field team anywhere in Ondo State.",
    specs: {
      Brand: "Hikvision",
      Model: "DS-7208 ColorVu Kit",
      Cameras: "8 × 5MP ColorVu bullet",
      Recorder: "8-channel DVR with 2TB HDD",
      Night: "Full colour up to 40m",
      Warranty: "24 months on recorder, 12 on cameras",
    },
    highlights: [
      "Installation and cabling included within Ondo town",
      "Remote viewing set up on your phone before we leave",
      "Free annual health check",
    ],
    images: [
      U("1557597774-9d273605dfa9"),
      U("1595079676339-1534801ad6cf"),
      U("1570129477492-45c003edd2be"),
    ],
  },
  {
    id: "ps5-slim-bundle",
    name: "PlayStation 5 Slim Bundle",
    category: "gaming",
    price: 1150000,
    stock: "low-stock",
    summary: "1TB Disc Edition · 2 DualSense pads · EA FC 25 included",
    description:
      "The slim PS5 with a second DualSense controller and EA FC 25 in the box — the bundle our customers actually ask for. Set up and tested in-store.",
    specs: {
      Brand: "Sony",
      Model: "PlayStation 5 Slim (Disc)",
      Storage: "1TB SSD",
      Included: "2 DualSense controllers, EA FC 25",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Console tested and updated before pickup",
      "Extra pads and games available in-store",
      "Trade in your PS4 towards the price",
    ],
    images: [
      U("1606813907291-d86efa9b94db"),
      U("1580327344181-c1163234e5a0"),
      U("1493711662062-fa541adb3fc8"),
    ],
  },
  {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5 Headphones",
    category: "accessories",
    price: 385000,
    stock: "in-stock",
    summary: "Industry-leading noise cancelling · 30-hour battery · multipoint",
    description:
      "The headphones we recommend for open-plan offices and long road trips. Eight microphones, 30 hours of battery and a carry case that survives a backpack.",
    specs: {
      Brand: "Sony",
      Model: "WH-1000XM5",
      Battery: "30 hours ANC on",
      Charging: "USB-C, 3 min for 3 hours",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Pairs with two devices at once",
      "Folding travel case included",
      "Try them at our listening counter",
    ],
    images: [
      U("1505740420928-5e560c06d30e"),
      U("1583394838336-acd977736f90"),
      U("1484704849700-f032a568e944"),
    ],
  },
  {
    id: "solar-inverter-3-5kva",
    name: "3.5kVA Solar Inverter System",
    category: "solar",
    price: 1980000,
    stock: "pre-order",
    summary: "3.5kVA hybrid inverter · 4 × 450W panels · 2 × 220Ah lithium batteries",
    description:
      "Power your home or shop through the grid's off days. A hybrid inverter, four panels and lithium storage sized for lights, fans, a fridge, a TV and office equipment. Survey, mounting and wiring handled by our solar team.",
    specs: {
      Brand: "Felicity / Growatt",
      Model: "3.5kVA Hybrid Bundle",
      Panels: "4 × 450W monocrystalline",
      Battery: "2 × 220Ah lithium (LiFePO4)",
      Backup: "6–9 hours typical household load",
      Warranty: "24 months inverter, 60 months battery",
    },
    highlights: [
      "Free load audit before you buy",
      "Installation across Ondo State",
      "Payment can be split across two instalments",
    ],
    images: [
      U("1509391366360-2e959784a276"),
      U("1508514177221-188b1cf16e9d"),
      U("1466611653911-95081537e5b7"),
    ],
  },
  {
    id: "tp-link-deco-x50",
    name: "TP-Link Deco X50 Mesh Wi-Fi (3-pack)",
    category: "accessories",
    price: 310000,
    stock: "in-stock",
    summary: "Wi-Fi 6 AX3000 · covers up to 600m² · wired backhaul support",
    description:
      "Kill the dead spots. Three mesh units that blanket a duplex or a two-floor office in Wi-Fi 6, with a single network name across the whole building.",
    specs: {
      Brand: "TP-Link",
      Model: "Deco X50 (3-pack)",
      Speed: "AX3000 (2402 + 574 Mbps)",
      Coverage: "Up to 600m²",
      Ports: "3 × Gigabit per unit",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "We configure it at your location on request",
      "Works with any Nigerian ISP or router",
      "Parental controls and guest network",
    ],
    images: [
      U("1606904825846-647eb07f5be2"),
      U("1544197150-b99a580bb7a8"),
      U("1558494949-ef010cbdcc31"),
    ],
  },
  {
    id: "oraimo-traveler-15-20000mah",
    name: "Oraimo Traveler 15 20000mAh Power Bank",
    category: "accessories",
    price: 28000,
    oldPrice: 32000,
    stock: "in-stock",
    summary: "15W Type-C fast charging power bank with 20000mAh high capacity.",
    description: "The Oraimo Traveler 15 (OPB-1201P) delivers reliable power for Apple, Samsung, and more. Features AniFast technology, Type-C input & output, and built-in flashlight illumination.",
    specs: {
      Brand: "Oraimo",
      Model: "Traveler 15 (OPB-1201P)",
      Capacity: "20000mAh",
      Output: "15W Type-C Fast Charging",
      Warranty: "365 Days Oraimo Warranty",
    },
    highlights: [
      "Fully charges phones up to 4 times",
      "Type-C In & Out ports",
      "Up to 100-hour LED illumination",
    ],
    images: ["/00caa72e-dc57-4ded-b73f-5a93f01d1808.JPG"],
  },
  {
    id: "handheld-mini-fan",
    name: "Portable Handheld Mini Fan with Stand",
    category: "accessories",
    price: 6500,
    oldPrice: 8000,
    stock: "in-stock",
    summary: "Rechargeable portable mini fan with desk stand and adjustable speeds.",
    description:
      "Stay cool anywhere with this lightweight handheld fan. Comes with a sturdy desktop base stand, quiet motor operation, and convenient USB recharging.",
    specs: {
      Type: "Handheld / Desk Fan",
      Power: "Rechargeable Battery",
      Speed: "Multi-speed adjustable",
      Usage: "Indoor & Outdoor",
    },
    highlights: [
      "Dual usage: handheld or desk stand",
      "Compact and travel-friendly",
      "Rechargeable via USB",
    ],
    images: [
      "/01b87058-7e16-4335-a30a-7c1e70f152d5.JPG", // Real photo from store
      U("https://unsplash.com/photos/a-pink-fan-sitting-on-top-of-a-table-ZBa8Jp411kY"), // Unsplash photo 1
      U("1517336714731-489689fd1ca8"), // Unsplash photo 2
    ],
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    category: "phones",
    price: 1650000,
    oldPrice: 1800000,
    stock: "in-stock",
    summary: "Brand new sealed box Samsung Galaxy S24 Ultra flagship smartphone.",
    description: "Experience next-level mobile AI, titanium durability, and professional-grade photography with the Samsung Galaxy S24 Ultra. Complete with built-in S-Pen support.",
    specs: {
      Brand: "Samsung",
      Model: "Galaxy S24 Ultra",
      Condition: "Brand New (Sealed Box)",
      Warranty: "12 Months Manufacturer Warranty",
    },
    highlights: [
      "Advanced AI features built-in",
      "Titanium frame with S-Pen",
      "Pro-grade quad camera system",
    ],
    images: ["/3d1223c0-a4c5-4e3d-b279-fd8edaac71fe.JPG"],
  },
  {
    id: "oraimo-powerbank-40000mah",
    name: "Oraimo Powerbank 40000mAh Power Bank",
    category: "accessories",
    price: 55000,
    oldPrice: 62000,
    stock: "in-stock",
    summary: "35W ultra-fast charging massive 40000mAh power bank with digital display.",
    description: "Built for heavy power needs, the Oraimo PowerNova Q41 provides up to 10 days of power on a single charge. Features 4 outputs, 2 inputs, and real-time LED percentage tracking.",
    specs: {
      Brand: "Oraimo",
      Model: "Powerbank 40000mAh",
      Capacity: "40000mAh",
      Output: "35W Ultra Fast Charging",
      Warranty: "365 Days Oraimo Warranty",
    },
    highlights: [
      "Real-time digital power display",
      "4 Outputs & 2 Inputs",
      "Fully charges a phone up to 9 times",
    ],
    images: ["/3ebb0794-47d8-448b-8e65-0a7ca6d6b65e.JPG"],
  },
  {
    id: "apple-iphone-unlocked-grade-a",
    name: "Apple iPhone (Grade A, Unlocked)",
    category: "phones",
    price: 450000,
    oldPrice: 490000,
    stock: "in-stock",
    summary: "100% working tested Grade A unlocked iPhone.",
    description: "Fully tested and certified Grade A pre-owned iPhone. Unlocked for all networks with pristine camera, clear sound, and strong battery health.",
    specs: {
      Brand: "Apple",
      Condition: "Grade A (100% Working)",
      Status: "Factory Unlocked",
      Testing: "Fully tested (Camera, Sound, Network Pass)",
    },
    highlights: [
      "Factory unlocked for all networks",
      "Rigorously tested hardware & battery",
      "Ready for immediate use",
    ],
    images: ["/02a3515f-b804-4275-8e8a-530652a528f6.JPG"],
  },
  {
    id: "hikvision-ac1200-router",
    name: "Hikvision AC1200 Dual-Band Wi-Fi 5 Router",
    category: "networking",
    price: 25000,
    oldPrice: 30000,
    stock: "in-stock",
    summary: "High-speed 1.2Gbps wireless router with 4 external antennas.",
    description: "The Hikvision WR12C AC1200 router delivers strong, reliable Wi-Fi coverage for streaming, gaming, and smart devices across homes and offices.",
    specs: {
      Brand: "Hikvision",
      Model: "WR12C AC1200",
      Speed: "Up to 1.2Gbps",
      Band: "Dual-band Wi-Fi (2.4GHz & 5GHz)",
    },
    highlights: [
      "MU-MIMO technology for multiple devices",
      "Built-in parental controls",
      "4 high-gain antennas for wide coverage",
    ],
    images: ["/2f8d115c-1d81-4ef8-916e-5e0b6a7d3733.JPG"],
  },
  {
    id: "oraimo-fast-charging-cables",
    name: "Oraimo Fast Charging Data Cables (Jar Pack)",
    category: "accessories",
    price: 4500,
    oldPrice: 5500,
    stock: "in-stock",
    summary: "Durable, high-speed fast charging cables in retail display jars.",
    description: "Original Oraimo charging and data cables designed for fast power delivery and high-durability tangle-free daily use.",
    specs: {
      Brand: "Oraimo",
      Type: "Fast Charging & Data Cable",
      Warranty: "365 Days Warranty",
    },
    highlights: [
      "Charge fast, stay solid build",
      "Supports rapid data transfer",
      "Tangle-resistant design",
    ],
    images: ["/4bbb5a18-bb54-4795-8995-7d572cef846f.JPG"],
  },
  {
    id: "hp-elitebook-840-g3",
    name: "HP EliteBook 840 G3",
    category: "laptops",
    price: 845000,
    oldPrice: 920000,
    stock: "in-stock",
    summary: "Intel Core i5 (7th Gen) · 8GB RAM · 128GB NVMe SSD · 14\" FHD",
    description:
      "A business-class ultrabook built for long days on the move. The EliteBook 840 G3 pairs an 7th-generation Core i5 with a 14-inch anti-glare display, a full magnesium chassis and HP Sure View privacy. Ideal for consultants, accountants and anyone who lives in spreadsheets.",
    specs: {
      Brand: "HP",
      Model: "EliteBook 840 G3",
      Processor: "Intel Core i5-7267U",
      Memory: "8GB DDR4",
      Storage: "128GB NVMe SSD",
      Display: "14\" FHD IPS anti-glare",
      Battery: "Up to 9 hours",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Backlit spill-resistant keyboard",
      "Fingerprint reader and IR camera",
      "Thunderbolt 4, HDMI 2.0 and USB-A ports",
    ],
    images: [
      U("1496181133206-80ce9b88a853"),
      U("1517336714731-489689fd1ca8"),
      U("1541807084-5c52b6b3adef"),
    ],
  },
  
  {
    id: "smart-home-starter",
    name: "Smart Home Starter Kit",
    category: "smart-home",
    price: 265000,
    stock: "in-stock",
    summary: "Smart doorbell · 4 smart bulbs · 2 smart sockets · hub included",
    description:
      "A gentle way into smart home tech: a video doorbell, colour-changing bulbs and sockets you can switch from your phone. Everything talks to one app.",
    specs: {
      Brand: "Tuya Ecosystem",
      Model: "Starter Kit v2",
      Included: "Doorbell, 4 bulbs, 2 sockets, hub",
      App: "Smart Life (iOS and Android)",
      Warranty: "12 months in-store warranty",
    },
    highlights: [
      "Works with Alexa and Google Home",
      "We pair every device before handover",
      "Expand any time with extra bulbs or cameras",
    ],
    images: [
      U("1558002038-1055907df827"),
      U("1585771724684-38269d6639fd"),
      U("1517430816045-df4b7de11d1d"),
    ],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aMatch = a.category === product.category ? 0 : 1;
      const bMatch = b.category === product.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);

export const stockMeta = {
  "in-stock": { label: "In Stock", className: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  "low-stock": { label: "Low Stock", className: "bg-amber-50 text-amber-700 ring-amber-200" },
  "pre-order": { label: "Pre-Order", className: "bg-navy-50 text-navy-600 ring-navy-200" },
};
