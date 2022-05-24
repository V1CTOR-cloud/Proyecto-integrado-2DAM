//preoloader
const tl = gsap.timeline({ default: { ease: 'power4.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
//tl.to('.slider1', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, "-=1");
tl.fromTo('.blob-top', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('header', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');


//custom cursor
gsap.set(".ball", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
    yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
});

function words() {
    gsap.registerPlugin(TextPlugin);
    const palabras = ['DAILYSENSE',
        'LICENSE ©',
        'The DailySense trademark is registered as a private use and any use of its images or elements used on DailySense platforms (Mobile, Web, etc...) will have to be consulted to the DailySense team.',
    ]

    gsap.to('#titulo', {
        delay: 1,
        duration: 3,
        text: {
            value: palabras[0],
            newClass: "class2",
        }, //power 4 back
        ease: "power4",
        opacity: 1
    });

    gsap.to('#sub', {
        delay: 3,
        duration: 6,
        text: {
            value: palabras[1],
            newClass: "class2",
        }, //power 4 back
        ease: "power4",
        opacity: 1
    });

    gsap.to('#text', {
        delay: 6,
        duration: 6,
        text: {
            value: palabras[2],
            newClass: "class2",
        }, //power 4 back
        ease: "power4",
        opacity: 1
    });
}

words();

let cursor = document.querySelector('.ball');
let footer = document.getElementById('footer');
let blobs = document.querySelector('.blobs');
let logo = document.querySelector('.logo');
let navigation = document.getElementById('navigation');
let navigation1 = document.getElementById('navigation1');
let navigation2 = document.getElementById('navigation2');
let navigation3 = document.getElementById('navigation3');
let navigation4 = document.getElementById('navigation4');
// FOOTER
let navigation5 = document.getElementById('navigation5');
let navigation6 = document.getElementById('navigation6');
let navigation7 = document.getElementById('navigation7');
let navigation8 = document.getElementById('navigation8');

footer.addEventListener("mouseover", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#f4f6fc"
        },
        ease: "power4"
    });
})

footer.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec"
        },
        ease: "power4"
    });
})

//BLOB-TOP

blobs.addEventListener("mouseover", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#f4f6fc"
        },
        ease: "power4"
    });
})

blobs.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec"
        },
        ease: "power4"
    });
})

// LOGO
logo.addEventListener("mouseover", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec",
            scale: 3
        },
        ease: "power4"
    });
})

logo.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec",
            scale: 1
        },
        ease: "power4"
    });
})

// LINKS Y NAVEGACIÓN



// FOOTER

navigation5.addEventListener("mouseover", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "transparent",
            opacity: 0,
            scale: 3
        },
        ease: "power4"
    });
})

navigation5.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#f4f6fc",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

navigation6.addEventListener("mouseover", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "transparent",
            opacity: 0,
            scale: 3
        },
        ease: "power4"
    });
})

navigation6.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#f4f6fc",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

navigation7.addEventListener("mouseover", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "transparent",
            opacity: 0,
            scale: 3
        },
        ease: "power4"
    });
})

navigation7.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#f4f6fc",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

navigation8.addEventListener("mouseover", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "transparent",
            opacity: 0,
            scale: 3
        },
        ease: "power4"
    });
})

navigation8.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#f4f6fc",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

let contactForm = document.querySelector('.contact-container');
document.querySelector('#contacto-btn').onclick = () => {
    gsap.to('.contact-container', {
        duration: 1.5,
        css: {
            left: 0,
            top: 0
        }, //back, elastic, bounce, circ, power4
        ease: "power4"
    });
}


document.querySelector('#close-contact-btn').onclick = () => {
    gsap.to('.contact-container', {
        duration: 1.5,
        css: {
            left: 2000
        },
        ease: "power4"
    });
}

let code = document.querySelector('.code-container');
document.querySelector('#code-btn').onclick = () => {
    gsap.to('.code-container', {
        duration: 1.5,
        css: {
            left: 0,
            top: 0
        }, //back, elastic, bounce, circ, power4
        ease: "power4"
    });
}

document.querySelector('#close-code-btn').onclick = () => {
    gsap.to('.code-container', {
        duration: 1.5,
        css: {
            left: 2000
        },
        ease: "power4"
    });
}

// Dayloo

let dayloo = document.querySelector('.dayloo-container');
document.querySelector('#dayloo-btn').onclick = () => {
    gsap.to('.dayloo-container', {
        duration: 1.5,
        css: {
            left: 0,
            top: 0
        }, //back, elastic, bounce, circ, power4
        ease: "power4"
    });
}

document.querySelector('#close-dayloo-btn').onclick = () => {
    gsap.to('.dayloo-container', {
        duration: 1.5,
        css: {
            left: 2000
        },
        ease: "power4"
    });
}