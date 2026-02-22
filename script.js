let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
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
    /*  Sticky bar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
};

/* --------------------------------------- Scroll reveal --------------------------------------*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Home section
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });

// About section
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

// Skills section
ScrollReveal().reveal('.skills .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container .skill-box', { origin: 'bottom', interval: 200 });

// Projects section (use this if your class is .project-box)
ScrollReveal().reveal('.project-box', { origin: 'bottom', interval: 200 });

// Contact section (only if you have a form)
ScrollReveal().reveal('.contact form', { origin: 'bottom' });

// for name //
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// POPUP LOGIC
const readButtons = document.querySelectorAll(".read-more");
const closeBtns = document.querySelectorAll(".close");

// OPEN MODAL
readButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = btn.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "flex";
    });
});

// CLOSE MODAL
closeBtns.forEach(close => {
    close.addEventListener("click", () => {
        close.parentElement.parentElement.style.display = "none";
    });
});

// CLOSE BY CLICKING OUTSIDE
window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});



