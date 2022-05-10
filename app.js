// gsap.to('.text', { y: 100, opacity: 0,   duration: 1 })
// gsap.fromTo('.text', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })

const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } })

tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.5 })

tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0deg' }, '<50%')

tl.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<')


// cookie jump
tl.fromTo('.cookie', { y: 0, rotation: '0deg' }, { y: -20, rotation: '-20deg', yoyo: true, repeat: -1 })
tl.fromTo('#crumbs', { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, '<')


// fading the cookie out
const button = document.querySelector('button');

button.addEventListener('click', () => {
    gsap.to('.cookie-container', { opacity: 0, y: 100, duration: 0.75, ease: "power1.out" })
})



function classToggle() {
    const navs = document.querySelectorAll('#nav-menu')

    navs.forEach(nav => nav.classList.toggle('show'));
}

document.querySelector('.header_toggle')
    .addEventListener('click', classToggle);

function closeToggle() {
    const closes = document.querySelectorAll('#nav-menu')

    closes.forEach(close => close.classList.remove('show'));
}

document.querySelector('.header_close')
    .addEventListener('click', closeToggle);



const icon = document.getElementById("dark-mode");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.setAttribute('name', 'sunny-outline');
    } else {
        icon.setAttribute('name', 'moon-outline');
    }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



$('.owl-carousel').owlCarousel({
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}