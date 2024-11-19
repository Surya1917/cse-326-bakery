// Slideshow
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, i) => {
    slide.style.display = i === n ? "block" : "none";
    dots[i].classList.toggle("active", i === n);
  });

  slideIndex = (n + 1) % slides.length;
}

// Automatic Slideshow
setInterval(() => showSlides(slideIndex), 5000);

// Manual Slide Navigation
function currentSlide(n) {
  showSlides(n - 1);
  slideIndex = n - 1;
}

// Tabs
function showTab(tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabContents.forEach(content => content.classList.remove('active'));
  tabButtons.forEach(button => button.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
}
