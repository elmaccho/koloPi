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

closeNavBtn.addEventListener('click', closeNavMen)
openNavBtn.addEventListener('click', openNavMen)
document.addEventListener('click', outsideNav)
window.addEventListener('scroll', navScroll)