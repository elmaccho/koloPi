const closeNavBtn = document.querySelector('.closeNavBtn')
const openNavBtn = document.querySelector('.openNavBtn')
const nav = document.querySelector('nav')

const navLinks = document.querySelectorAll('.nav_links a')

console.log(navLinks);


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
  