const products = [
  {
    title: "IP66 Electric Valve Actuator , Electrical Valve Positioner CHX-1000",
    image: "https://sparemtpl.com/images/actuator/01.jpg",
    description: "IP66 Electric Valve Actuator , Electrical Valve Positioner CHX-1000",
    category: "electric",
    link: "../products-page/IP66-Electric-Valve-Actuator.html",
  },
  {
    title: "Inlet Ring, Balance Drum And Throttle Bush ",
    image: "https://www.tengkai1.com/uploads/202115557/small/c720iii-4-cep-spares-from-hunan-xemc-changsha32105038756.jpg",
    description: "Inlet Ring, Balance Drum, and Throttle Bush for KSB Boiler Feed Water Pump HGC 4/8 for maintenance.",
    category: "power",
    link: "../404.html",
  },
  {
    title: "Mechanical Seal SHP11 - 107",
    image: "https://www.tengkai1.com/uploads/15557/page/small/overhead-insulated-cables-with-rated-voltage7ca20.png",
    description: "KSB BFP CHTC 5/6 Mechanical Seal SHP11-107-E1",
    category: "power",
    link: "details/flender-gearbox.html",
  },
  {
    title: "C720III-4 CEP Spares From Hunan XEMC Changsha Pump",
    image: "https://www.tengkai1.com/uploads/15557/small/tinned-copper-stranded-wire73662.jpg",
    description: "Hunan Changsha Pump Works Condensate Pump Spares C720III-4 Pump Spares",
    category: "power",
    link: "details/flender-gearbox.html",
  },
  {
    title: "Explosion proof ExdIIBT4 IMT04 / M/H2BC, IMT04 / M/H3BC electric actuator ball valve 380v",
    image: "https://www.electric-valveactuator.com/photo/py455182-explosion_proof_exdiibt4_imt04_m_h2bc_imt04_m_h3bc_electric_actuator_ball_valve_380v.jpg",
    description: "Back Stop for Flender Gearbox mainly applied in the cement plant with the models",
    category: "electric",
    link: "../products-page/Explosion=proof-ExdIIBT4-IMT04.html",
  },
  {
    title: "34NM 20mA 18r/min Electric Rotory Actuator 70AI S3.84 MOTF50",
    image: "https://www.electric-valveactuator.com/photo/py33147769-34nm_20ma_18r_min_electric_rotory_actuator_70ai_s3_84_motf50.jpg",
    description: "Santasalo Helical Gear Units Santasalo Horizontal LSS Gear Units",
    category: "electric",
    link: "../products-page/Electric-Rotory-Actuator-70AI.html",
  },
  {
    title: "C720III-4 CEP Spares From Hunan XEMC Changsha Pump",
    image: "https://www.tengkai1.com/uploads/15557/small/tinned-copper-stranded-wire73662.jpg",
    description: "Hunan Changsha Pump Works Condensate Pump Spares C720III-4 Pump Spares",
    category: "electronics",
    link: "details/flender-gearbox.html",
  }
];

function renderProducts(filter = 'all') {
  const productGrid = document.getElementById('productGrid');
  const categoryTitle = document.getElementById('categoryTitle');

  productGrid.innerHTML = '';

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  // Set category title
  const titleMap = {
    all: 'All Products',
    services: 'Services',
    electric: 'Electric Valve Actuator',
    power: 'Power Station Valve',
    electronics: 'Electronics',
  };
  categoryTitle.textContent = titleMap[filter] || 'Products';

  if (filtered.length === 0) {
    productGrid.innerHTML = '<p>No products found in this category.</p>';
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <div class="product-title">${p.title}</div>
      <div class="product-desc">${p.description}</div>
      <a href="${p.link}"><button class="btn">Get Best Price</button></a>
    `;
    productGrid.appendChild(card);
  });
}

function filterCategory(category) {
  renderProducts(category);

  // Remove active class from all sidebar items
  document.querySelectorAll('.sidebar li').forEach(li => {
    li.classList.remove('active-category');
  });

  // Add active class to current item
  const activeLi = document.querySelector(`.sidebar li[data-category="${category}"]`);
  if (activeLi) {
    activeLi.classList.add('active-category');
  }
}

// Initial load
filterCategory('all');

// Product Details Page

const mainImage = document.getElementById("product-main-image");
const thumbnails = document.querySelectorAll(".image-list");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src;
  });
});