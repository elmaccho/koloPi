const closeNavBtn = document.querySelector('.closeNavBtn')
const openNavBtn = document.querySelector('.openNavBtn')
const nav = document.querySelector('nav')


const closeNavMen = () => {
    nav.classList.toggle('nav-toggle')
}
const openNavMen = () => {
    nav.classList.toggle('nav-toggle')
}
const outsideNav = (e) => {
    if(nav.contains(e.target)){
        console.log(e.target);
    }
}

closeNavBtn.addEventListener('click', closeNavMen)
openNavBtn.addEventListener('click', openNavMen)
document.addEventListener('click', outsideNav)