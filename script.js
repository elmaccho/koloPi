const closeNavBtn = document.querySelector('.closeNavBtn')
const openNavBtn = document.querySelector('.openNavBtn')
const nav = document.querySelector('nav')

const navLinks = document.querySelectorAll('.nav_links a')

const teamWrapper = document.querySelector('.team-wrapper')
const teamBoxes = document.querySelectorAll('.team .team-wrapper .team-row .team-box');

const viewInfo = document.querySelector('.view-info')
const infoBoxOpen = document.querySelector('.infoBox-open')
const infoWrapper = document.querySelector('.info-wrapper')

const descImg = document.querySelector('.desc-img')
const descName = document.querySelector('.desc-name')
const descRank = document.querySelector('.desc-rank')
const descDescription = document.querySelector('.desc-description')
const closeInfoBtn = document.querySelector('.closeInfoBtn')

const body = document.querySelector('body')

const teamRows = document.querySelectorAll(".team-row");
const moreTeam = document.querySelector('#moreTeam')

const projectsRows = document.querySelectorAll(".projects-row");
const moreProjects = document.querySelector('#moreProjects')

const changeThemeBtn = document.querySelector('.changeTheme')
const faMoon = document.querySelector('.fa-moon')
const faSun = document.querySelector('.fa-sun')

let currentTeamIndex = 1;
let currentProjectsIndex = 1;

const team = [
  {
    imie: "Opiekun Koła <br>",
    nazwisko: "Porucznik",
    ranga: "Opiekun koła",
    opis: `Sympatyczny człowiek, ale tylko i wyłącznie dla miłych ludzi. 
    Gdy nazwano go Anakinem on już wiedział, że będą żałować, bo będzie Vaderem. 
    Mówi ze nie zna się na niczym, bo tak jest łatwiej o „coaching i mentoring” 
    udowadniając ze każdy z nas może być lepsza osoba jeśli zmieni… siebie dissując 
    tych, którzy nie chcą się odmienić swego życia, bo nie znając didaskaliów Porucznika
     nikt nie wie ze… #szkodaczasu.`,
     zdjecie: "./img/team/opiekun kola.jpg"
  },
  {
    imie: "Wiktor",
    nazwisko: "Wikaliński",
    ranga: "Przewodniczący",
    opis: `Prezes koła. Jako przewodniczący Koła Naukowego, moim celem 
    jest wprowadzenie dynamicznych zmian na naszej uczelni poprzez organizację 
    interesujących projektów oraz wydarzeń. Chcę, aby nasze działania przyczyniły 
    się przede wszystkim do ożywienia atmosfery akademickiej i zapewnienia studentom 
    unikalnych możliwości rozwoju i integracji. Dążymy do tworzenia inspirującego 
    środowiska, które pobudza kreatywność i umożliwia nawiązywanie cennych kontaktów
     wśród studentów z różnych dziedzin.`,
     zdjecie: "img/team/Wiktor Wikalinski.jpg"
  },
  {
    imie: "Zuzanna",
    nazwisko: "Wypchło",
    ranga: "Zastępca przewodniczącego",
    opis: `Rezolutna perfekcjonistka, której nie umknie nawet najmniejszy szczegół. 
    Zacięta, nieustępliwa i zdeterminowana w dążeniu do celu - zodiakalny baran w 
    końcu do czegoś zobowiązuje.`,
     zdjecie: "img/team/Zuzanna Wypchlo.jpg"
  },
  {
    imie: "Patryk",
    nazwisko: "Staniszewski",
    ranga: "Członek zarządu",
    opis: `Decydując się na dołączenie do zarządu koła PI z całego serca pragnę
     wspomagać całą rodzinę PI do tworzenia ekscytujących projektów
    które będą nieść nas jako ambitnych studentów z nieskończonym głodem poszerzania
     horyzontów. Sam, nazywając się nowoczesnym dziadersem kieruje się dyscypliną i 
     starą szkołą ciężkiej pracy na rzecz tego co kocham i w czym się spełniam.`,
     zdjecie: "img/team/Patryk Staniszewski.jpg"
  },
  {
    imie: "Maciej",
    nazwisko: "Chojnacki",
    ranga: "Członek zarządu",
    opis: `Nazywam się Maciej i podjąłem decyzję o dołączeniu do koła w celu
     poszerzenia mojej wiedzy w dziedzinie IT. Oprócz tego, moje zainteresowania
     obejmują siłownię, terrarystykę oraz Web Development.`,
     zdjecie: "img/team/Maciej Chojnacki.jpg"
  },
  {
    imie: "Sebastian",
    nazwisko: "Sitek",
    ranga: "Członek zarządu",
    opis: `z wykształcenia technik informatyk. Oprócz szeroko pojętej dziedziny IT,
     pasjonuje się również motoryzacją, siłownią i finansami. Od najmłodszych lat 
     jestem wielkim entuzjastą gier komputerowych oraz tematyki związanej z e-sportem.
     Wstąpiłem do koła, aby móc współpracować z innymi ambitnymi jednostkami.`,
     zdjecie: "img/team/Sebastian Sitek.png"
  },
  {
    imie: "Kacper",
    nazwisko: "Zieliński",
    ranga: "Członek zarządu",
    opis: `Członek Koła Naukowego oraz student pierwszego roku na kierunku Informatyka.
     Poza szeroko pojętą branżą IT jestem wielkim entuzjastą sportów motorowych oraz 
     piłki nożnej. Wstąpiłem do koła ponieważ chcę być częścią silnej i ambitnej 
     społeczności osób o podobnych zainteresowaniach. Wierzę, że nauki informatyczne 
     mają potencjał do transformacji naszego społeczeństwa i jestem zdecydowany 
     przyczynić się do tej zmiany.`,
     zdjecie: "img/team/Kacper Zielinski.jpg"
  },
  {
    imie: "Dawid",
    nazwisko: "Karsznia",
    ranga: "Członek koła",
    opis: `Mam na imię Dawid. Od dawna moim celem było zostać programistą 
    (w planach jest Full stack). Z tego powodu dołączyłem do koła, bo jak wiadomo,
     największe wyzwania najlepiej pokonuje się w dobrym towarzystwie. Oprócz samego
     programowania interesuję się historią, psychologią oraz uczę się grać na pianinie.`,
     zdjecie: "img/team/Dawid Karsznia.png"
  },
  {
    imie: "Krystian",
    nazwisko: "Głogowski",
    ranga: "Członek koła",
    opis: `Cześć, jestem Krystian. Od najmłodszych lat interesuje mnie informatyka 
    i wszelkie tematy z nią związane. Aby jeszcze bardziej poszerzyć swoją wiedzą w 
    tym temacie postanowiłem dołączyć do Koła PI! Ponadto lubię fotografować oraz 
    interesuje się światem social mediów.`,
     zdjecie: "img/team/Krystian Glogowski.jpg"
  },
  {
    imie: "Rafał",
    nazwisko: "Kozłowski",
    ranga: "Członek koła",
    opis: `Cześć, jestem Rafał posiadam doświadczenie w programowaniu oraz 
    rozwiązywaniu problemów technicznych. Jestem aktywnym członkiem grupy 
    informatycznej gotowym do pomocy w różnych trudności. Bardzo lubię podróżować 
    oraz spędzać aktywnie wolny czas.`,
     zdjecie: "img/team/Rafal Kozlowski.jpeg"
  },
  {
    imie: "Dominik",
    nazwisko: "Kuropatwiński",
    ranga: "Członek koła",
    opis: `Cześć, Jestem Dominik i jestem entuzjasta nowych technologii, 
    filmów fantastycznych i gier wideo. Dołączyłem do tego koła, ponieważ chcę
     stale się rozwijać i być na bieżąco w dziedzinie IT. Moja pasja motywuje mnie
      do ciągłego poszerzania swojej wiedzy aby w przyszłości móc przekazać ją 
      młodszym pokoleniom.`,
     zdjecie: "img/team/Dominik Kuropatwinski.jpg"
  },
  {
    imie: "Slavik",
    nazwisko: "Hryn",
    ranga: "Członek koła",
    opis: `Nazywam się Slavik. Uwielbiam programować, podróżować i zawsze
     jestem otwarty na nowe doświadczenia :)`,
     zdjecie: "img/team/Slavik Hryn.png"
  },
  {
    imie: "Kacper",
    nazwisko: "Stępień",
    ranga: "Członek koła",
    opis: `Jestem Kacper i jestem spokojnym 21-latkiem, który niedawno odkrył pasję 
    do programowania. Gdy mam czas wolny, lubię aktywnie spędzać go na pływaniu lub
     jeździe rowerem. Natomiast wieczorami preferuję relaks przy oglądaniu seriali lub
     grze w towarzystwie znajomych.`,
     zdjecie: "img/team/Kacper Stepien.jpg"
  },
  {
    imie: "Damian",
    nazwisko: "Chmielewski",
    ranga: "Członek koła",
    opis: `Witam, jestem Damian. Interesuje się informatyką, dlatego zdecydowałem
    się dołączyć do koła. Moim celem jest poszerzenie mojej wiedzy. Poza informatyką
    interesuje się grami komputerowymi, piłką nożną oraz fotografią.`,
     zdjecie: "img/team/Damian Chmielewski.jpg"
  },
  {
    imie: "Piotr",
    nazwisko: "Szaruga",
    ranga: "Członek koła",
    opis: `Człowiek interesujący się fotografią. Potrafi modulować swoim głosem.
     Dołączając do koła chciałem pomóc innym z podobnymi zainteresowaniami.`,
     zdjecie: "img/team/Piotr Szaruga.jpg"
  }
]

// team.forEach( (person) => {
//   const box = document.createElement('div')
//   box.classList.add('team-box')
//   box.innerHTML = `
//     <div class=\"circle\">
//         <div class="inner-circle">
//             <img src='${person.zdjecie}' alt="">
//         </div>
//     </div>
//     <div class="name">${person.imie} ${person.nazwisko}</div>`
//   teamWrapper.appendChild(box)
// })

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
    let navLinks = document.querySelectorAll(".nav_links a");
    let sections = document.querySelectorAll("section");
  
    function highlightNavLink() {
      let scrollPosition = window.pageYOffset;
  
      sections.forEach(function(section) {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");
        let navLink = document.querySelector('a[href="#' + sectionId + '"]');
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(function(link) {
            link.classList.remove("active");
          });
          navLink.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", highlightNavLink);
}
const closeInfoBox = (e) => {
  if(viewInfo.contains(e.target) && !infoWrapper.contains(e.target)){
    viewInfo.classList.remove('infoBox-open')
    teamWrapper.style.filter = 'blur(0px)'
    nav.style.filter = 'blur(0px)'
    moreTeam.style.filter = 'blur(0px)'
    body.style.overflowY = 'scroll'
  }
  else if (closeInfoBtn.contains(e.target)){
    viewInfo.classList.remove('infoBox-open')
    teamWrapper.style.filter = 'blur(0px)'
    nav.style.filter = 'blur(0px)'
    moreTeam.style.filter = 'blur(0px)'
    body.style.overflowY = 'scroll'
  }
}
const openInfoBox = (e) => {
  const imgClosest = e.target.closest('.team-box').querySelector('img').getAttribute('src')
  const nameClosest = e.target.closest('.team-box').querySelector('.name').textContent
  const descriptionClosest = e.target.closest('.team-box').querySelector('.description').textContent
  const rankClosest = e.target.closest('.team-box').querySelector('.rank').textContent
  viewInfo.classList.add('infoBox-open')

  descImg.setAttribute('src', imgClosest)
  descName.textContent = nameClosest
  descDescription.textContent = descriptionClosest
  descRank.textContent = rankClosest


  teamWrapper.style.filter = 'blur(2px)'
  nav.style.filter = 'blur(2px)'
  moreTeam.style.filter = 'blur(2px)'
  body.style.overflowY = 'hidden'
}
const showNextTeamRow = () => {
  if (currentTeamIndex < teamRows.length) {
    teamRows[currentTeamIndex].style.display = "flex";
    currentTeamIndex++;

    if (currentTeamIndex === teamRows.length) {
      document.querySelector("#moreTeam").style.display = "none";
    }
  }
}
const showNextProjectRow = () => {
  if (currentProjectsIndex < projectsRows.length) {
    projectsRows[currentProjectsIndex].style.display = "flex";
    currentProjectsIndex++;

    if (currentProjectsIndex === projectsRows.length) {
      document.querySelector("#moreProjects").style.display = "none";
    }
  }
}
const changeTheme = () => {
  if(faMoon.classList.contains('move1')){
    faMoon.classList.toggle('move1')
    faSun.classList.toggle('move2')
    document.documentElement.setAttribute("data-theme", "light")
  } else {
    faMoon.classList.toggle('move1')
    faSun.classList.toggle('move2')
    document.documentElement.setAttribute("data-theme", "dark")
  }
}

for(let navLink of navLinks){
    navLink.addEventListener('click', closeNavMen)
}
for (let teamBox of teamBoxes) {
  teamBox.addEventListener('click', (e)=>{
    openInfoBox(e)
  });
}
closeNavBtn.addEventListener('click', closeNavMen)
openNavBtn.addEventListener('click', openNavMen)
window.addEventListener('scroll', navScroll)
moreTeam.addEventListener('click', showNextTeamRow)
moreProjects.addEventListener('click', showNextProjectRow)
closeInfoBtn.addEventListener('click', closeInfoBox)
changeThemeBtn.addEventListener('click', changeTheme)

document.addEventListener("DOMContentLoaded", navHighlight);
document.addEventListener('click', closeInfoBox)
document.addEventListener('click', outsideNav)
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    viewInfo.classList.remove('infoBox-open')
    teamWrapper.style.filter = 'blur(0px)'
    nav.style.filter = 'blur(0px)'
    moreTeam.style.filter = 'blur(0px)'
    body.style.overflowY = 'scroll'
  }
});