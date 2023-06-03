const closeNavBtn = document.querySelector('.closeNavBtn')
const openNavBtn = document.querySelector('.openNavBtn')
const nav = document.querySelector('nav')

const navLinks = document.querySelectorAll('.nav_links a')

const teamWrapper = document.querySelector('.team-wrapper')
const teamBoxes = document.querySelectorAll('.team-box');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.getElementsByClassName('team-slide');
let currentSlide = 5;


// Funkcja do przewijania do poprzedniego slajdu
function prevSlide() {
  currentSlide = (currentSlide - 1.15 + slides.length) % slides.length;
  showBoxes();
}

// Funkcja do przewijania do następnego slajdu
function nextSlide() {
  currentSlide = (currentSlide + 1.15) % slides.length;
  console.log(currentSlide);
  showBoxes();
}

// Funkcja do pokazywania odpowiednich boxów w zależności od slajdu
function showBoxes() {
  const slideWidth = slides[0].offsetWidth;
  const slideOffset = -currentSlide * slideWidth;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${slideOffset}px)`;
  }
}

// Obsługa kliknięcia przycisków
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


const closeNavMen = () => {
    nav.classList.toggle('nav-toggle')
}
const openNavMen = () => {
    nav.classList.toggle('nav-toggle')
}
const outsideNav = (e) => {
    if(!nav.contains(e.target) && !openNavBtn.contains(e.target)){
        nav.classList.add('nav-toggle')
    }
}
const navScroll = () => {
    if(window.pageYOffset >= 1){
        nav.classList.add('activeNav')
    } else {
        nav.classList.remove('activeNav')
    }
}
const navHighlight = () => {
    var navLinks = document.querySelectorAll(".nav_links a");
    var sections = document.querySelectorAll("section");
  
    function highlightNavLink() {
      var scrollPosition = window.pageYOffset;
  
      sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute("id");
        var navLink = document.querySelector('a[href="#' + sectionId + '"]');
  
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach(function(link) {
            link.classList.remove("active");
          });
          navLink.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", highlightNavLink);
}

for(let navLink of navLinks){
    navLink.addEventListener('click', closeNavMen)
}
closeNavBtn.addEventListener('click', closeNavMen)
openNavBtn.addEventListener('click', openNavMen)
document.addEventListener('click', outsideNav)
window.addEventListener('scroll', navScroll)
document.addEventListener("DOMContentLoaded", navHighlight);
  