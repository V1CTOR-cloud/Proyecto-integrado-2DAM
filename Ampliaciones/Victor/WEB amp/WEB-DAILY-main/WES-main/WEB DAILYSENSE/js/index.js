//custom cursor
gsap.set(".ball", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
    yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
});
// cambia el circulo dependiendo de la velocidad
function raton() {
    var prevEvent, currentEvent;
    document.documentElement.onmousemove = function(event) {
        currentEvent = event;
    }

    var maxSpeed = 0,
        prevSpeed = 0,
        maxPositiveAcc = 0,
        maxNegativeAcc = 0;
    setInterval(function() {
        if (prevEvent && currentEvent) {
            var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
            var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
            var movement = Math.sqrt(movementX * movementX + movementY * movementY);

            //speed=movement/100ms= movement/0.1s= 10*movement/s
            var speed = 10 * movement; //current speed
            var acceleration = 10 * (speed - prevSpeed);

            /*
            if (acceleration > 0) {
                gsap.to('.ball', {
                    duration: 1,
                    height: speed / 80,
                    width: speed / 80
                });
            } else {
                gsap.to('.ball', {
                    duration: 1,
                    height: 20,
                    width: 20
                });
            }
            */
        }
        prevEvent = currentEvent;
        prevSpeed = speed;
    }, 100);

}
raton();



//Text change ( NO FUNCIONA EL ARRAY )
/*
function words() {
    let ok = 0;
    gsap.registerPlugin(TextPlugin);
    let palabras = ['Simplicity', 'Elegance', 'Innovation'];

    gsap.to('#text', {
        delay: 1,
        duration: 3,
        text: {
            value: palabras[0],
            newClass: "class2",
        }, //power 4 back
        ease: "power2"
    });
}
words();
*/

//Text typing

function words() {
    let ok = 0;
    gsap.registerPlugin(TextPlugin);
    const palabra = "The #1 mobile application for taking care of your loved ones"

    gsap.to('#sub', {
        delay: 1,
        duration: 6,
        text: {
            value: palabra,
            newClass: "class2",
        }, //power 4 back
        ease: "power4",
        opacity: 1
    });
}
words();




// magnetic button
var mWrap = document.querySelectorAll(".magnetic-wrap");

function parallaxIt(e, wrap, movement = 1) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var boundingRect = wrap.mArea.getBoundingClientRect();
    var halfDiff = Math.abs(boundingRect.width - boundingRect.height) / 2;
    var relX = e.pageX - boundingRect.left - halfDiff;
    var relY = e.pageY - boundingRect.top;

    gsap.to(wrap.mContent, {
        x: (relX - boundingRect.width / 2) * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) * movement,
        ease: "power1",
        duration: 0.8
    });
}

mWrap.forEach(function(wrap) {
    wrap.mContent = wrap.querySelector(".js-magnetic-content");
    wrap.mArea = wrap.querySelector(".js-magnetic-area");

    wrap.mArea.addEventListener("mousemove", function(e) {
        parallaxIt(e, wrap);
    });

    wrap.mArea.addEventListener("mouseleave", function(e) {
        gsap.to(wrap.mContent, {
            scale: 1,
            x: 0,
            y: 0,
            ease: "power3",
            duration: 0.8
        });
    });
});


// Cambiamos el color cuando entra al footer
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

navigation.addEventListener("mouseover", () => {
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

navigation.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

navigation1.addEventListener("mouseover", () => {
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

navigation1.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

navigation2.addEventListener("mouseover", () => {
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

navigation2.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

navigation3.addEventListener("mouseover", () => {
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

navigation3.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

navigation4.addEventListener("mouseover", () => {
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

navigation4.addEventListener("mouseout", () => {
    gsap.to('.ball', {
        duration: 1.5,
        css: {
            backgroundColor: "#4263ec",
            opacity: 1,
            scale: 1
        },
        ease: "power4"
    });
})

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
    contactForm.classList.toggle('active');
}


document.querySelector('#close-contact-btn').onclick = () => {
    contactForm.classList.remove('active');
}