/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });



/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement =
    document.getElementById("typing");


const words = [

    "Frontend Developer",

    "React Developer",

    "JavaScript Developer",

    "Web Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}


typeEffect();



/* =====================================================
   THEME
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


let lightMode = false;


themeBtn.addEventListener("click", () => {

    lightMode = !lightMode;


    if (lightMode) {

        document.documentElement
            .style.setProperty(
                "--bg",
                "#f8fafc"
            );

        document.documentElement
            .style.setProperty(
                "--text",
                "#0f172a"
            );

        document.documentElement
            .style.setProperty(
                "--muted",
                "#64748b"
            );

        document.documentElement
            .style.setProperty(
                "--card",
                "rgba(255,255,255,0.85)"
            );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.documentElement
            .style.setProperty(
                "--bg",
                "#050816"
            );

        document.documentElement
            .style.setProperty(
                "--text",
                "#f8fafc"
            );

        document.documentElement
            .style.setProperty(
                "--muted",
                "#94a3b8"
            );

        document.documentElement
            .style.setProperty(
                "--card",
                "rgba(15,23,42,0.68)"
            );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});



/* =====================================================
   SCROLL TOP
===================================================== */

const scrollTop =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        contactForm.reset();

    }
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".skill-box, " +
        ".project-card, " +
        ".experience-card, " +
        ".certificate-card, " +
        ".education-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    === `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

    }
);