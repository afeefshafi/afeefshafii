/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);

});

/* ==========================
   TYPING EFFECT
========================== */

const typingElement =
document.getElementById("typing");

const words = [

    "Tech Enthusiast",
    "Innovative Solution Builder",

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord =
    words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    }else{

        typingElement.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,
    deleting ? 60 : 120);

}

typeEffect();


/* ==========================
   ACTIVE NAV LINKS
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background =
        "rgba(0,0,0,.85)";

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.25)";

    }else{

        header.style.background =
        "rgba(0,0,0,.15)";

        header.style.boxShadow =
        "none";

    }

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements =
document.querySelectorAll(

".section, .skill-card, .project-card, .cert-card"

);

function reveal(){

    revealElements.forEach(el => {

        const position =
        el.getBoundingClientRect().top;

        const screenPosition =
        window.innerHeight - 100;

        if(position < screenPosition){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 120;

        if(current < target){

            counter.innerText =
            `${Math.ceil(
                current + increment
            )}`;

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* ==========================
   EMAILJS
========================== */

/*
1. Create account:
   https://www.emailjs.com

2. Create Service

3. Create Template

4. Replace IDs below
*/

(function(){

    emailjs.init("yuJ5I90PQOKAPSmWx"); /* Public key */

})();

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    emailjs.sendForm(

        "service_hcptht9", /* Your service id */
        "template_8rc0298", /* Your template id */
        this

    )

    .then(() => {

        alert(
        "Message sent successfully!"
        );

        contactForm.reset();

    })

    .catch(error => {

        console.error(error);

        alert(
        "Failed to send message."
        );

    });

});


/* ==========================
   FLOATING PARTICLES
========================== */

const particles =
document.getElementById("particles");

for(let i=0;i<50;i++){

    const particle =
    document.createElement("span");

    particle.style.position =
    "absolute";

    particle.style.width =
    Math.random()*6+2+"px";

    particle.style.height =
    particle.style.width;

    particle.style.borderRadius =
    "50%";

    particle.style.background =
    "rgba(0,212,255,.35)";

    particle.style.left =
    Math.random()*100+"%";

    particle.style.top =
    Math.random()*100+"%";

    particle.style.animation =
    `float ${
    Math.random()*10+10
    }s linear infinite`;

    particles.appendChild(particle);

}


/* ==========================
   FLOAT ANIMATION STYLE
========================== */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes float{

0%{
transform:
translateY(0);
opacity:0;
}

50%{
opacity:1;
}

100%{
transform:
translateY(-200px);
opacity:0;
}

}

.section,
.skill-card,
.project-card,
.cert-card{

opacity:0;
transform:translateY(40px);

transition:
all .8s ease;

}

.show{

opacity:1 !important;
transform:
translateY(0) !important;

}

.navbar a.active{

color:#00d4ff;

}

`;

document.head.appendChild(style);