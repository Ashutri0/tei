const products = [
    {
      title: "Flender Gearbox H2SH Series Gear Wheel",
      image: "https://www.tengkai1.com/uploads/202115557/small/flender-gearbox-h2sh-series-gear-wheel25512760220.jpg",
      description: "Flender H2SH Series Gearboxes are installed in many cement plants. And the quality is good,",
      category: "services"
    },
    {
      title: "Back Stop RS FXM 85-50DX/H50 For Flender Gearbox",
      image: "https://www.tengkai1.com/uploads/202115557/small/back-stop-rs-fxm-85-50dx-h50-for-flender27060665432.jpg",
      description: "Back Stop for Flender Gearbox mainly applied in the cement plant with the models",
      category: "services"
    },
    {
      title: "Santasalo Helical Gear Units & Spares",
      image: "https://www.tengkai1.com/uploads/202115557/small/santasalo-helical-gear-units-spares28072022731.jpg",
      description: "Santasalo Helical Gear Units Santasalo Horizontal LSS Gear Units",
      category: "services"
    },
    {
      title: "Inlet Ring, Balance Drum And Throttle Bush ",
      image: "https://www.tengkai1.com/uploads/202115557/small/c720iii-4-cep-spares-from-hunan-xemc-changsha32105038756.jpg",
      description: "Inlet Ring, Balance Drum, and Throttle Bush for KSB Boiler Feed Water Pump HGC 4/8 for maintenance.",
      category: "products"
    },
    {
      title: "Mechanical Seal SHP11 - 107",
      image: "https://www.tengkai1.com/uploads/15557/page/small/overhead-insulated-cables-with-rated-voltage7ca20.png",
      description: "KSB BFP CHTC 5/6 Mechanical Seal SHP11-107-E1",
      category: "products"
    },
    {
      title: "C720III-4 CEP Spares From Hunan XEMC Changsha Pump",
      image: "https://www.tengkai1.com/uploads/15557/small/tinned-copper-stranded-wire73662.jpg",
      description: "Hunan Changsha Pump Works Condensate Pump Spares C720III-4 Pump Spares",
      category: "products"
    },
    {
        title: "Flender Gearbox H2SH Series Gear Wheel",
        image: "https://www.tengkai1.com/uploads/202115557/small/flender-gearbox-h2sh-series-gear-wheel25512760220.jpg",
        description: "Flender H2SH Series Gearboxes are installed in many cement plants. And the quality is good,",
        category: "services"
      },
      {
        title: "Back Stop RS FXM 85-50DX/H50 For Flender Gearbox",
        image: "https://www.tengkai1.com/uploads/202115557/small/back-stop-rs-fxm-85-50dx-h50-for-flender27060665432.jpg",
        description: "Back Stop for Flender Gearbox mainly applied in the cement plant with the models",
        category: "services"
      },
      {
        title: "Santasalo Helical Gear Units & Spares",
        image: "https://www.tengkai1.com/uploads/202115557/small/santasalo-helical-gear-units-spares28072022731.jpg",
        description: "Santasalo Helical Gear Units Santasalo Horizontal LSS Gear Units",
        category: "services"
      },
      {
        title: "Inlet Ring, Balance Drum And Throttle Bush ",
        image: "https://www.tengkai1.com/uploads/202115557/small/c720iii-4-cep-spares-from-hunan-xemc-changsha32105038756.jpg",
        description: "Inlet Ring, Balance Drum, and Throttle Bush for KSB Boiler Feed Water Pump HGC 4/8 for maintenance.",
        category: "products"
      },
      {
        title: "Mechanical Seal SHP11 - 107",
        image: "https://www.tengkai1.com/uploads/15557/page/small/overhead-insulated-cables-with-rated-voltage7ca20.png",
        description: "KSB BFP CHTC 5/6 Mechanical Seal SHP11-107-E1",
        category: "products"
      },
      {
        title: "C720III-4 CEP Spares From Hunan XEMC Changsha Pump",
        image: "https://www.tengkai1.com/uploads/15557/small/tinned-copper-stranded-wire73662.jpg",
        description: "Hunan Changsha Pump Works Condensate Pump Spares C720III-4 Pump Spares",
        category: "products"
      }
  ];

  const grid = document.getElementById("productGrid");

  function renderProducts(filter) {
    grid.innerHTML = "";
    products.forEach(product => {
      if (filter === "all" || product.category === filter) {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute('data-category', product.category);
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <div class="card-body">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
          </div>
        `;
        grid.appendChild(card);
      }
    });
    observeAnimations();
  }

  function observeAnimations() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));
  }

  // Filter button logic
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      renderProducts(btn.getAttribute("data-category"));
    });
  });

  // Initial render
  renderProducts("all");