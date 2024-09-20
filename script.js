// Data for elements in the periodic table
const elements = [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', category: 'non-metal', description: 'Hydrogen is the lightest element.' },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', description: 'Helium is a noble gas.' },
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', description: 'Lithium is a soft metal used in batteries.' },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth-metal', description: 'Beryllium is a hard, gray metal.' },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', category: 'metalloid', description: 'Boron is a metalloid used in glass and ceramics.' },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', category: 'non-metal', description: 'Carbon is the basis of life on Earth.' },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', category: 'non-metal', description: 'Nitrogen is a colorless, odorless gas.' },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', category: 'non-metal', description: 'Oxygen is essential for respiration.' },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', category: 'non-metal', description: 'Fluorine is a highly reactive gas.' },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', description: 'Neon is used in signs and lasers.' },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', description: 'Sodium is a soft, reactive metal.' },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth-metal', description: 'Magnesium is used in lightweight alloys.' },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', category: 'metal', description: 'Aluminum is a lightweight, durable metal.' },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', description: 'Silicon is a semiconductor widely used in electronics.' },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', category: 'non-metal', description: 'Phosphorus is used in fertilizers.' },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', category: 'non-metal', description: 'Sulfur is a yellow crystalline solid.' },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', category: 'non-metal', description: 'Chlorine is a toxic green gas used in water purification.' },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', description: 'Argon is an inert gas used in lighting.' },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', description: 'Potassium is a soft, reactive metal.' },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth-metal', description: 'Calcium is essential for strong bones.' },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', description: 'Scandium is a rare earth metal.' },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', description: 'Titanium is known for its strength and corrosion resistance.' },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', description: 'Vanadium is used in alloys for strength.' },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', description: 'Chromium is used in stainless steel.' },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', description: 'Manganese is used in steel production.' },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', description: 'Iron is the most widely used metal in the world.' },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', description: 'Cobalt is used in batteries and alloys.' },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', description: 'Nickel is used in coins and stainless steel.' },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', description: 'Copper is a highly conductive metal used in wiring.' },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', description: 'Zinc is used to galvanize steel.' },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', category: 'metal', description: 'Gallium is used in semiconductors.' },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', description: 'Germanium is used in electronics and fiber optics.' },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', description: 'Arsenic is a toxic metalloid.' },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', category: 'non-metal', description: 'Selenium is used in electronics and glass.' },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', category: 'non-metal', description: 'Bromine is a dark red liquid.' },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', description: 'Krypton is used in fluorescent lights.' },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', description: 'Rubidium is a soft, highly reactive metal.' },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth-metal', description: 'Strontium is used in fireworks.' },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', description: 'Yttrium is used in superconductors.' },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', description: 'Zirconium is used in nuclear reactors.' },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', description: 'Niobium is used in superconductors.' },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', description: 'Molybdenum is used in high-strength steel alloys.' },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', description: 'Technetium is a radioactive element used in medical imaging.' },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', description: 'Ruthenium is used in electrical contacts.' },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', description: 'Rhodium is used in catalytic converters.' },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', description: 'Palladium is used in catalytic converters and electronics.' },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', description: 'Silver is a precious metal used in coins and jewelry.' },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', description: 'Cadmium is used in batteries and pigments.' },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', category: 'metal', description: 'Indium is used in LCDs and semiconductors.' },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', category: 'metal', description: 'Tin is used in alloys and coatings.' },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', description: 'Antimony is used in flame retardants.' },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', description: 'Tellurium is used in thermoelectric devices.' },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', category: 'non-metal', description: 'Iodine is used in medicine and photography.' },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', description: 'Xenon is used in high-intensity lamps.' },
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali-metal', description: 'Cesium is used in atomic clocks and electronics.' },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth-metal', description: 'Barium is used in contrast agents for medical imaging.' },
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', description: 'Lanthanum is used in camera lenses and catalysts.' },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', description: 'Cerium is used in glass polishing and catalytic converters.' },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', description: 'Praseodymium is used in magnets and aircraft engines.' },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', description: 'Neodymium is used in powerful magnets for electronics.' },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', description: 'Promethium is a radioactive element used in batteries.' },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', description: 'Samarium is used in magnets and cancer treatment.' },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', description: 'Europium is used in phosphorescent materials for displays.' },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', description: 'Gadolinium is used in MRI contrast agents.' },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', description: 'Terbium is used in phosphors for fluorescent lamps.' },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', description: 'Dysprosium is used in magnets and nuclear reactors.' },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', description: 'Holmium is used in laser materials.' },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', description: 'Erbium is used in optical fibers and lasers.' },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', description: 'Thulium is used in portable X-ray devices.' },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', description: 'Ytterbium is used in atomic clocks and lasers.' },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', description: 'Lutetium is used in PET scan detectors.' },
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', description: 'Hafnium is used in control rods for nuclear reactors.' },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', description: 'Tantalum is used in capacitors and surgical instruments.' },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', description: 'Tungsten is used in lightbulb filaments and cutting tools.' },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', description: 'Rhenium is used in high-temperature superalloys.' },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', description: 'Osmium is the densest naturally occurring element.' },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', description: 'Iridium is used in spark plugs and crucibles.' },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', description: 'Platinum is a precious metal used in jewelry and electronics.' },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', description: 'Gold is a precious metal used in coins, jewelry, and electronics.' },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', description: 'Mercury is a liquid metal used in thermometers.' },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', category: 'metal', description: 'Thallium is used in electronics and optics.' },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead', category: 'metal', description: 'Lead is used in batteries and radiation shielding.' },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', category: 'metal', description: 'Bismuth is used in cosmetics and low-melting alloys.' },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium', category: 'metalloid', description: 'Polonium is a radioactive element used in anti-static devices.' },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine', category: 'metalloid', description: 'Astatine is a radioactive element with limited industrial use.' },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', description: 'Radon is a radioactive gas used in cancer treatment.' },
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', description: 'Francium is a highly radioactive element.' },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth-metal', description: 'Radium is a radioactive element once used in luminescent paints.' },
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', description: 'Actinium is used as a neutron source.' },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', description: 'Thorium is used in nuclear reactors.' },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', description: 'Protactinium is used in research related to nuclear reactors.' },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', category: 'actinide', description: 'Uranium is used as a fuel in nuclear power plants.' },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', description: 'Neptunium is a radioactive element used in neutron detection.' },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', description: 'Plutonium is used in nuclear weapons and reactors.' },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', category: 'actinide', description: 'Americium is used in smoke detectors.' },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', description: 'Curium is used in space exploration as a power source.' },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', description: 'Berkelium is a synthetic element used in research.' },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', description: 'Californium is used in neutron radiography.' },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', description: 'Einsteinium is a synthetic element used in scientific research.' },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', description: 'Fermium is a synthetic element used in research on heavy elements.' },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', description: 'Mendelevium is a synthetic element named after Dmitri Mendeleev.' },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', description: 'Nobelium is a synthetic element named after Alfred Nobel.' },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', description: 'Lawrencium is a synthetic element used in atomic research.' },
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', description: 'Rutherfordium is a synthetic element named after Ernest Rutherford.' },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', description: 'Dubnium is a synthetic element named after the city of Dubna.' },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', description: 'Seaborgium is a synthetic element named after Glenn T. Seaborg.' },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', description: 'Bohrium is a synthetic element named after Niels Bohr.' },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', description: 'Hassium is a synthetic element named after the German state of Hesse.' },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', category: 'transition-metal', description: 'Meitnerium is a synthetic element named after Lise Meitner.' },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'transition-metal', description: 'Darmstadtium is a synthetic element named after the city of Darmstadt.' },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', category: 'transition-metal', description: 'Roentgenium is a synthetic element named after Wilhelm Roentgen.' },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', category: 'transition-metal', description: 'Copernicium is a synthetic element named after Nicolaus Copernicus.' },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', category: 'metal', description: 'Nihonium is a synthetic element named after Japan (Nihon).' },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', category: 'metal', description: 'Flerovium is a synthetic element named after the Flerov Laboratory of Nuclear Reactions.' },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', category: 'metal', description: 'Moscovium is a synthetic element named after Moscow, Russia.' },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', category: 'metal', description: 'Livermorium is a synthetic element named after the Lawrence Livermore National Laboratory.' },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', category: 'metal', description: 'Tennessine is a synthetic element named after the U.S. state of Tennessee.' },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', category: 'noble-gas', description: 'Oganesson is a synthetic element named after Yuri Oganessian.' }
];



  
// Table positions for the elements (null values for empty spots)
const tableStructure = [
    // Period 1: Hydrogen and Helium row
    [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
    
    // Period 2: Lithium to Neon row
    [3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
    
    // Period 3: Sodium to Argon row
    [11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
    
    // Period 4: Potassium to Krypton row
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    
    // Period 5: Rubidium to Xenon row
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    
    // Period 6: Cesium to Radon row
    [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    
    // Period 7: Francium to Oganesson row
    [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],

    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    
    // Lanthanides row (Period 6)
    [null, null, null, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, null],
    
    // Actinides row (Period 7)
    [null, null, null, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, null]
  ];
  
  
  // Function to create the periodic table dynamically
  function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
  
    tableStructure.forEach(row => {
      const tr = document.createElement('tr');
  
      row.forEach(pos => {
        const td = document.createElement('td');
  
        if (pos !== null) {
          const element = elements.find(e => e.atomicNumber === pos);
          td.classList.add(element.category);
          td.innerHTML = `
            <span class="atomic-number">${element.atomicNumber}</span>
            <span class="symbol">${element.symbol}</span>
            <span class="name">${element.name}</span>
          `;
  
          // Add click event to display details in modal
          td.addEventListener('click', () => showElementInfo(element));
        } else {
          td.classList.add('empty');
        }
  
        tr.appendChild(td);
      });
  
      table.appendChild(tr);
    });
  }
  
  // Function to display element details in a modal
  function showElementInfo(element) {
    const elementInfo = document.getElementById('elementInfo');
    const infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = `
      <h2>${element.name} (${element.symbol})</h2>
      <p>Atomic Number: ${element.atomicNumber}</p>
      <p>${element.description}</p>
    `;
    elementInfo.style.display = 'block';
  }
  
  // Close the info modal
  const closeInfo = document.getElementById('closeInfo');
  closeInfo.addEventListener('click', () => {
    document.getElementById('elementInfo').style.display = 'none';
  });
  
  // Initialize the periodic table on page load
  window.onload = () => {
    createPeriodicTable();
  };
  