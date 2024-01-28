/*    Menu actions functions   */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

const navLink = document.querySelectorAll('.nav__link');

const hideMenu = () => {
    navMenu.classList.remove('show-menu')
}

const header = document.getElementById('header');

const shadowHeader = () => {
    this.scrollY > 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}


if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}

if (navClose) {
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

navLink.forEach( link => link.addEventListener('click', hideMenu))

window.addEventListener('scroll', shadowHeader)

var indexValue = 0;


function slideShow() { 
    const images = document.getElementsByClassName("carousel");

    var count;

    for(count = 0; count < images.length; count ++){
       // images[count].style.animation = '';
        images[count].style.opacity = 0;
        images[count].style.display = 'none';
    
    }
    indexValue++;
    if(indexValue == images.length) {
        indexValue = 0;
    }
    images[indexValue].style.display = 'block';
    images[indexValue].style.animation = 'fadeIn 5s ease';
    setTimeout(slideShow, 5000);

}

slideShow();

const sections= document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach( current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        console.log("sectionHeight ", sectionHeight)
        console.log("sectionTop ", sectionTop)
        console.log("sectionId ", sectionId)
        console.log("sectionsClass ", sectionsClass)


        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)
