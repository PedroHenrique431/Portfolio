let menuIcon = document.querySelector('#menu-celular');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-content, .principal-sobre', { origin: 'top' });
ScrollReveal().reveal('.exp-container, .portfolio-box, .contato form', { origin: 'bottom' });

const typed = new Typed('.multiple-text',{
    strings: ['Economia','Análise de dados'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});


const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".ctf-container i");
const firstCardWidth = carousel.querySelector(".ctf-box").offsetWidth;
const carouselChildrens = [...carousel.children];

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2*carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0,cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


carousel.addEventListener("scroll", infiniteScroll)
