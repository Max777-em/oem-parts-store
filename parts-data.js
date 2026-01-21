// Parts Catalog Data for MaxVoltix
const partsData = {
    tesla: {
        name: "Tesla",
        logo: "tesla-parts.png",
        categories: [
            {
                name: "Battery & Charging",
                parts: [
                    { name: "High Voltage Battery Pack", price: "Contact for Price", sku: "TSL-BAT-001" },
                    { name: "Battery Management System", price: "Contact for Price", sku: "TSL-BAT-002" },
                    { name: "Charging Port Assembly", price: "$450 - $850", sku: "TSL-CHG-001" },
                    { name: "Onboard Charger", price: "$800 - $1,200", sku: "TSL-CHG-002" },
                    { name: "Supercharger Adapter", price: "$150 - $250", sku: "TSL-CHG-003" }
                ]
            },
            {
                name: "Drive Unit & Motor",
                parts: [
                    { name: "Rear Drive Unit", price: "Contact for Price", sku: "TSL-DRV-001" },
                    { name: "Front Drive Unit (Dual Motor)", price: "Contact for Price", sku: "TSL-DRV-002" },
                    { name: "Drive Unit Bearings", price: "$200 - $400", sku: "TSL-DRV-003" },
                    { name: "Inverter Assembly", price: "$1,500 - $2,500", sku: "TSL-DRV-004" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Brake Caliper Set", price: "$350 - $600", sku: "TSL-BRK-001" },
                    { name: "Brake Rotor Set", price: "$200 - $450", sku: "TSL-BRK-002" },
                    { name: "Brake Pads (Front)", price: "$89 - $150", sku: "TSL-BRK-003" },
                    { name: "Brake Pads (Rear)", price: "$79 - $130", sku: "TSL-BRK-004" },
                    { name: "Air Suspension Strut", price: "$800 - $1,400", sku: "TSL-SUS-001" },
                    { name: "Control Arm Assembly", price: "$250 - $450", sku: "TSL-SUS-002" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Front Bumper Cover", price: "$600 - $1,200", sku: "TSL-BDY-001" },
                    { name: "Rear Bumper Cover", price: "$500 - $1,000", sku: "TSL-BDY-002" },
                    { name: "Side Mirror Assembly", price: "$400 - $800", sku: "TSL-BDY-003" },
                    { name: "Door Handle Assembly", price: "$150 - $350", sku: "TSL-BDY-004" },
                    { name: "Headlight Assembly", price: "$800 - $1,500", sku: "TSL-BDY-005" },
                    { name: "Taillight Assembly", price: "$400 - $700", sku: "TSL-BDY-006" }
                ]
            },
            {
                name: "Interior & Electronics",
                parts: [
                    { name: "Touchscreen Display (MCU)", price: "$1,200 - $2,000", sku: "TSL-INT-001" },
                    { name: "Instrument Cluster", price: "$500 - $900", sku: "TSL-INT-002" },
                    { name: "Steering Wheel Assembly", price: "$600 - $1,000", sku: "TSL-INT-003" },
                    { name: "Seat Assembly", price: "$800 - $1,500", sku: "TSL-INT-004" },
                    { name: "HVAC Blower Motor", price: "$200 - $400", sku: "TSL-INT-005" }
                ]
            },
            {
                name: "Cooling System",
                parts: [
                    { name: "Radiator Assembly", price: "$400 - $700", sku: "TSL-COL-001" },
                    { name: "Coolant Pump", price: "$250 - $450", sku: "TSL-COL-002" },
                    { name: "Thermal Management System", price: "$800 - $1,400", sku: "TSL-COL-003" },
                    { name: "A/C Compressor", price: "$500 - $900", sku: "TSL-COL-004" }
                ]
            }
        ]
    },
    cadillac: {
        name: "Cadillac",
        logo: "cadillac-parts.png",
        categories: [
            {
                name: "Engine Components",
                parts: [
                    { name: "Engine Assembly", price: "Contact for Price", sku: "CAD-ENG-001" },
                    { name: "Turbocharger", price: "$1,200 - $2,500", sku: "CAD-ENG-002" },
                    { name: "Fuel Injector Set", price: "$400 - $800", sku: "CAD-ENG-003" },
                    { name: "Timing Chain Kit", price: "$350 - $600", sku: "CAD-ENG-004" },
                    { name: "Oil Pump", price: "$200 - $400", sku: "CAD-ENG-005" }
                ]
            },
            {
                name: "Transmission",
                parts: [
                    { name: "Automatic Transmission", price: "Contact for Price", sku: "CAD-TRN-001" },
                    { name: "Torque Converter", price: "$400 - $800", sku: "CAD-TRN-002" },
                    { name: "Transmission Control Module", price: "$300 - $600", sku: "CAD-TRN-003" },
                    { name: "Shift Solenoid Pack", price: "$150 - $350", sku: "CAD-TRN-004" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Brembo Brake Caliper Set", price: "$800 - $1,500", sku: "CAD-BRK-001" },
                    { name: "Performance Brake Rotors", price: "$350 - $700", sku: "CAD-BRK-002" },
                    { name: "Brake Pads (Front)", price: "$120 - $250", sku: "CAD-BRK-003" },
                    { name: "Magnetic Ride Shock", price: "$600 - $1,200", sku: "CAD-SUS-001" },
                    { name: "Air Suspension Compressor", price: "$450 - $800", sku: "CAD-SUS-002" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Front Grille Assembly", price: "$500 - $1,000", sku: "CAD-BDY-001" },
                    { name: "LED Headlight Assembly", price: "$1,000 - $2,000", sku: "CAD-BDY-002" },
                    { name: "Side Mirror with Camera", price: "$500 - $900", sku: "CAD-BDY-003" },
                    { name: "Chrome Door Handle Set", price: "$200 - $400", sku: "CAD-BDY-004" }
                ]
            },
            {
                name: "Interior & Electronics",
                parts: [
                    { name: "CUE Infotainment Screen", price: "$800 - $1,500", sku: "CAD-INT-001" },
                    { name: "Digital Instrument Cluster", price: "$600 - $1,200", sku: "CAD-INT-002" },
                    { name: "Leather Seat Assembly", price: "$1,000 - $2,000", sku: "CAD-INT-003" },
                    { name: "Bose Speaker System", price: "$400 - $800", sku: "CAD-INT-004" }
                ]
            }
        ]
    },
    lincoln: {
        name: "Lincoln",
        logo: "lincoln-parts.png",
        categories: [
            {
                name: "Engine Components",
                parts: [
                    { name: "Twin-Turbo V6 Engine", price: "Contact for Price", sku: "LNC-ENG-001" },
                    { name: "EcoBoost Turbocharger", price: "$1,000 - $2,000", sku: "LNC-ENG-002" },
                    { name: "Fuel Pump Assembly", price: "$300 - $550", sku: "LNC-ENG-003" },
                    { name: "Intake Manifold", price: "$400 - $700", sku: "LNC-ENG-004" }
                ]
            },
            {
                name: "Transmission",
                parts: [
                    { name: "10-Speed Automatic Transmission", price: "Contact for Price", sku: "LNC-TRN-001" },
                    { name: "Transmission Valve Body", price: "$500 - $900", sku: "LNC-TRN-002" },
                    { name: "Transfer Case", price: "$800 - $1,400", sku: "LNC-TRN-003" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Brake Caliper Set", price: "$400 - $750", sku: "LNC-BRK-001" },
                    { name: "Brake Rotor Set", price: "$250 - $500", sku: "LNC-BRK-002" },
                    { name: "Adaptive Suspension Shock", price: "$500 - $950", sku: "LNC-SUS-001" },
                    { name: "Air Spring Assembly", price: "$350 - $650", sku: "LNC-SUS-002" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Signature Grille", price: "$600 - $1,100", sku: "LNC-BDY-001" },
                    { name: "Adaptive LED Headlight", price: "$900 - $1,600", sku: "LNC-BDY-002" },
                    { name: "Power Running Board Motor", price: "$400 - $700", sku: "LNC-BDY-003" }
                ]
            },
            {
                name: "Interior & Electronics",
                parts: [
                    { name: "SYNC Infotainment System", price: "$700 - $1,300", sku: "LNC-INT-001" },
                    { name: "Revel Audio Speaker Set", price: "$500 - $1,000", sku: "LNC-INT-002" },
                    { name: "Massage Seat Module", price: "$400 - $750", sku: "LNC-INT-003" }
                ]
            }
        ]
    },
    gmc: {
        name: "GMC",
        logo: "gmc-parts.png",
        categories: [
            {
                name: "Engine Components",
                parts: [
                    { name: "V8 Engine Assembly", price: "Contact for Price", sku: "GMC-ENG-001" },
                    { name: "Duramax Diesel Engine", price: "Contact for Price", sku: "GMC-ENG-002" },
                    { name: "Fuel Injector Set", price: "$500 - $900", sku: "GMC-ENG-003" },
                    { name: "Exhaust Manifold", price: "$300 - $550", sku: "GMC-ENG-004" }
                ]
            },
            {
                name: "Transmission & Drivetrain",
                parts: [
                    { name: "Allison Transmission", price: "Contact for Price", sku: "GMC-TRN-001" },
                    { name: "Transfer Case Assembly", price: "$800 - $1,500", sku: "GMC-TRN-002" },
                    { name: "Front Differential", price: "$600 - $1,100", sku: "GMC-TRN-003" },
                    { name: "Rear Axle Assembly", price: "$900 - $1,600", sku: "GMC-TRN-004" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Heavy Duty Brake Caliper", price: "$350 - $650", sku: "GMC-BRK-001" },
                    { name: "Brake Rotor Set", price: "$200 - $450", sku: "GMC-BRK-002" },
                    { name: "Rancho Shock Absorber", price: "$150 - $300", sku: "GMC-SUS-001" },
                    { name: "Leaf Spring Pack", price: "$400 - $700", sku: "GMC-SUS-002" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Front Bumper Assembly", price: "$600 - $1,200", sku: "GMC-BDY-001" },
                    { name: "MultiPro Tailgate", price: "$1,500 - $2,500", sku: "GMC-BDY-002" },
                    { name: "LED Headlight Assembly", price: "$700 - $1,300", sku: "GMC-BDY-003" },
                    { name: "Fender Flare Set", price: "$300 - $600", sku: "GMC-BDY-004" }
                ]
            },
            {
                name: "Towing & Accessories",
                parts: [
                    { name: "Tow Hitch Assembly", price: "$400 - $750", sku: "GMC-TOW-001" },
                    { name: "Trailer Brake Controller", price: "$150 - $300", sku: "GMC-TOW-002" },
                    { name: "Bed Liner", price: "$300 - $550", sku: "GMC-ACC-001" }
                ]
            }
        ]
    },
    jeep: {
        name: "Jeep",
        logo: "jeep-parts.png",
        categories: [
            {
                name: "Engine Components",
                parts: [
                    { name: "Pentastar V6 Engine", price: "Contact for Price", sku: "JEP-ENG-001" },
                    { name: "4xe Hybrid Motor", price: "Contact for Price", sku: "JEP-ENG-002" },
                    { name: "Turbocharger Assembly", price: "$800 - $1,400", sku: "JEP-ENG-003" },
                    { name: "Cold Air Intake", price: "$250 - $450", sku: "JEP-ENG-004" }
                ]
            },
            {
                name: "Drivetrain & 4x4",
                parts: [
                    { name: "Dana 44 Axle Assembly", price: "$1,200 - $2,000", sku: "JEP-DRV-001" },
                    { name: "Transfer Case", price: "$900 - $1,600", sku: "JEP-DRV-002" },
                    { name: "Locking Differential", price: "$500 - $900", sku: "JEP-DRV-003" },
                    { name: "Drive Shaft", price: "$300 - $550", sku: "JEP-DRV-004" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Lift Kit (2-4 inch)", price: "$500 - $1,200", sku: "JEP-SUS-001" },
                    { name: "Fox Racing Shocks", price: "$400 - $800", sku: "JEP-SUS-002" },
                    { name: "Heavy Duty Brake Kit", price: "$600 - $1,100", sku: "JEP-BRK-001" },
                    { name: "Control Arm Set", price: "$350 - $650", sku: "JEP-SUS-003" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Hardtop Assembly", price: "$2,000 - $3,500", sku: "JEP-BDY-001" },
                    { name: "Soft Top Kit", price: "$800 - $1,500", sku: "JEP-BDY-002" },
                    { name: "Steel Front Bumper", price: "$600 - $1,200", sku: "JEP-BDY-003" },
                    { name: "LED Light Bar", price: "$200 - $500", sku: "JEP-BDY-004" },
                    { name: "Fender Flares", price: "$400 - $750", sku: "JEP-BDY-005" }
                ]
            },
            {
                name: "Off-Road Accessories",
                parts: [
                    { name: "Winch Assembly", price: "$500 - $1,200", sku: "JEP-OFF-001" },
                    { name: "Rock Sliders", price: "$400 - $800", sku: "JEP-OFF-002" },
                    { name: "Skid Plate Set", price: "$350 - $700", sku: "JEP-OFF-003" },
                    { name: "Beadlock Wheels", price: "$300 - $600 each", sku: "JEP-OFF-004" }
                ]
            }
        ]
    },
    dodge: {
        name: "Dodge",
        logo: "dodge-parts.png",
        categories: [
            {
                name: "Engine Components",
                parts: [
                    { name: "HEMI V8 Engine", price: "Contact for Price", sku: "DOD-ENG-001" },
                    { name: "Hellcat Supercharger", price: "$5,000 - $8,000", sku: "DOD-ENG-002" },
                    { name: "Performance Camshaft", price: "$500 - $900", sku: "DOD-ENG-003" },
                    { name: "Cold Air Intake System", price: "$300 - $550", sku: "DOD-ENG-004" },
                    { name: "Long Tube Headers", price: "$800 - $1,400", sku: "DOD-ENG-005" }
                ]
            },
            {
                name: "Transmission & Drivetrain",
                parts: [
                    { name: "8-Speed Automatic Transmission", price: "Contact for Price", sku: "DOD-TRN-001" },
                    { name: "Tremec 6-Speed Manual", price: "Contact for Price", sku: "DOD-TRN-002" },
                    { name: "Performance Clutch Kit", price: "$600 - $1,100", sku: "DOD-TRN-003" },
                    { name: "Driveshaft Assembly", price: "$400 - $750", sku: "DOD-TRN-004" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Brembo Brake Package", price: "$2,500 - $4,500", sku: "DOD-BRK-001" },
                    { name: "Drilled & Slotted Rotors", price: "$400 - $750", sku: "DOD-BRK-002" },
                    { name: "Performance Brake Pads", price: "$150 - $300", sku: "DOD-BRK-003" },
                    { name: "Bilstein Shock Set", price: "$600 - $1,100", sku: "DOD-SUS-001" },
                    { name: "Lowering Spring Kit", price: "$300 - $550", sku: "DOD-SUS-002" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Widebody Fender Kit", price: "$2,000 - $3,500", sku: "DOD-BDY-001" },
                    { name: "Carbon Fiber Hood", price: "$1,500 - $2,800", sku: "DOD-BDY-002" },
                    { name: "Rear Spoiler", price: "$400 - $800", sku: "DOD-BDY-003" },
                    { name: "LED Headlight Assembly", price: "$900 - $1,600", sku: "DOD-BDY-004" }
                ]
            },
            {
                name: "Performance Parts",
                parts: [
                    { name: "Performance Tune (PCM)", price: "$500 - $900", sku: "DOD-PRF-001" },
                    { name: "Cat-Back Exhaust System", price: "$800 - $1,500", sku: "DOD-PRF-002" },
                    { name: "High-Flow Throttle Body", price: "$350 - $600", sku: "DOD-PRF-003" }
                ]
            }
        ]
    },
    hummer: {
        name: "Hummer",
        logo: "hummer-parts.png",
        categories: [
            {
                name: "Electric Powertrain",
                parts: [
                    { name: "Ultium Battery Pack", price: "Contact for Price", sku: "HUM-BAT-001" },
                    { name: "Electric Drive Motor", price: "Contact for Price", sku: "HUM-MOT-001" },
                    { name: "Inverter Module", price: "$2,000 - $3,500", sku: "HUM-MOT-002" },
                    { name: "Charging Port Assembly", price: "$500 - $900", sku: "HUM-CHG-001" }
                ]
            },
            {
                name: "Drivetrain & 4x4",
                parts: [
                    { name: "CrabWalk Motor Assembly", price: "Contact for Price", sku: "HUM-DRV-001" },
                    { name: "E-Locker Differential", price: "$1,200 - $2,000", sku: "HUM-DRV-002" },
                    { name: "Adaptive Air Suspension", price: "$1,500 - $2,800", sku: "HUM-SUS-001" },
                    { name: "Extract Mode Components", price: "$800 - $1,400", sku: "HUM-SUS-002" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Brembo Brake Package", price: "$2,000 - $3,500", sku: "HUM-BRK-001" },
                    { name: "Regenerative Brake Module", price: "$600 - $1,100", sku: "HUM-BRK-002" },
                    { name: "35-inch Tire Set", price: "$1,600 - $2,800", sku: "HUM-WHL-001" },
                    { name: "Beadlock Wheel Set", price: "$2,000 - $3,500", sku: "HUM-WHL-002" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Infinity Roof Panel Set", price: "$3,000 - $5,000", sku: "HUM-BDY-001" },
                    { name: "Front Grille Assembly", price: "$1,200 - $2,000", sku: "HUM-BDY-002" },
                    { name: "Rock Sliders", price: "$800 - $1,400", sku: "HUM-BDY-003" },
                    { name: "LED Light Bar", price: "$400 - $800", sku: "HUM-BDY-004" }
                ]
            },
            {
                name: "Interior & Electronics",
                parts: [
                    { name: "13.4\" Touchscreen Display", price: "$1,500 - $2,500", sku: "HUM-INT-001" },
                    { name: "Super Cruise Module", price: "$1,000 - $1,800", sku: "HUM-INT-002" },
                    { name: "Bose Sound System", price: "$800 - $1,400", sku: "HUM-INT-003" }
                ]
            }
        ]
    },
    chevrolet: {
        name: "Chevrolet",
        logo: "chevrolet-parts.png",
        categories: [
            {
                name: "Engine Components",
                parts: [
                    { name: "LS/LT V8 Engine", price: "Contact for Price", sku: "CHV-ENG-001" },
                    { name: "LT4 Supercharged Engine", price: "Contact for Price", sku: "CHV-ENG-002" },
                    { name: "Performance Camshaft", price: "$450 - $850", sku: "CHV-ENG-003" },
                    { name: "LS Intake Manifold", price: "$400 - $700", sku: "CHV-ENG-004" },
                    { name: "Long Tube Headers", price: "$700 - $1,300", sku: "CHV-ENG-005" }
                ]
            },
            {
                name: "Transmission & Drivetrain",
                parts: [
                    { name: "10-Speed Automatic", price: "Contact for Price", sku: "CHV-TRN-001" },
                    { name: "TR6060 Manual Transmission", price: "Contact for Price", sku: "CHV-TRN-002" },
                    { name: "Posi Rear Differential", price: "$800 - $1,400", sku: "CHV-TRN-003" },
                    { name: "Performance Half Shafts", price: "$400 - $750", sku: "CHV-TRN-004" }
                ]
            },
            {
                name: "Brakes & Suspension",
                parts: [
                    { name: "Z51 Brake Package", price: "$2,000 - $3,500", sku: "CHV-BRK-001" },
                    { name: "Carbon Ceramic Rotors", price: "$4,000 - $7,000", sku: "CHV-BRK-002" },
                    { name: "Magnetic Ride Shocks", price: "$800 - $1,400", sku: "CHV-SUS-001" },
                    { name: "Performance Sway Bar Kit", price: "$300 - $550", sku: "CHV-SUS-002" }
                ]
            },
            {
                name: "Body & Exterior",
                parts: [
                    { name: "Carbon Flash Ground Effects", price: "$1,500 - $2,800", sku: "CHV-BDY-001" },
                    { name: "Performance Spoiler", price: "$600 - $1,100", sku: "CHV-BDY-002" },
                    { name: "LED Headlight Assembly", price: "$800 - $1,500", sku: "CHV-BDY-003" },
                    { name: "Hood Vent Insert", price: "$200 - $400", sku: "CHV-BDY-004" }
                ]
            },
            {
                name: "Performance Parts",
                parts: [
                    { name: "Borla Cat-Back Exhaust", price: "$1,200 - $2,000", sku: "CHV-PRF-001" },
                    { name: "Cold Air Intake", price: "$350 - $600", sku: "CHV-PRF-002" },
                    { name: "Performance Tune", price: "$500 - $900", sku: "CHV-PRF-003" },
                    { name: "Forged Wheels Set", price: "$2,500 - $4,500", sku: "CHV-PRF-004" }
                ]
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = partsData;
}
