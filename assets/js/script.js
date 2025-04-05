document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

const header = document.getElementById("mainHeader");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    header.style.top = "0";
  } else {
    header.style.top = "-110px";
  }
  lastScrollY = window.scrollY;
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function toggleSubmenu(event) {
  event.preventDefault();
  event.target.closest("li").classList.toggle("open");
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));


// arrow top
// Get reference to the scroll progress element
const progressElement = document.getElementById('scroll-progress');
const button = document.getElementById('scroll-to-top-btn');

// Listen to the scroll event to update progress
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    
    // Calculate the scroll progress percentage
    const scrollProgress = (scrollPosition / scrollHeight) * 100;
    
    // Update the custom property for the conic gradient
    progressElement.style.setProperty('--scroll-progress', scrollProgress);
});

// Scroll to the top on button click
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




// carusel

const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  }

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);


// who we are

const openBtn = document.getElementById("openVideo");
  const closeBtn = document.getElementById("closeVideo");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    iframe.src += ""; // refresh autoplay
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = iframe.src; // reset video
  });


  // details

  const tabItems = document.querySelectorAll('.tab-item');
  const contents = document.querySelectorAll('.tab-content');
  const images = document.querySelectorAll('.tab-image');

  tabItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabIndex = item.getAttribute('data-tab');

      // Remove all actives
      tabItems.forEach(i => i.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      images.forEach(i => i.classList.remove('active'));

      // Add active to selected
      item.classList.add('active');
      contents[tabIndex].classList.add('active');
      images[tabIndex].classList.add('active');
    });
  });


  // certification

  const thumbs = document.querySelectorAll('#thumbs img');
  const preview = document.getElementById('preview');
  const certCode = document.getElementById('certCode');
  let currentIndex = 0;

  function updatePreview(index) {
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');
    const src = thumbs[index].src.replace('120x160', '350x460');
    preview.src = src;
    certCode.textContent = thumbs[index].dataset.cert;
    currentIndex = index;
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updatePreview(index));
  });

  document.getElementById('prev').addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = thumbs.length - 1;
    updatePreview(newIndex);
  });

  document.getElementById('next').addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % thumbs.length;
    updatePreview(newIndex);
  });