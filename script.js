const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click',() => {
        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight=document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft=document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
    });
arrowLeft.addEventListener('click',() => {
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
// Smooth scroll to sections
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSelector = this.getAttribute("data-target");
        const targetSection = document.querySelector(targetSelector);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Optional: update active link styling
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// === ScrollSpy ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = `.${section.classList[0]}`; // e.g., ".home", ".about"
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-target") === current) {
            link.classList.add("active");
        }
    });
});

// function showSuccessMessage() {
//     setTimeout(() => {
//         alert("Your message has been sent!");
//     }, 100); // slight delay to avoid form auto-clearing before alert
// }

// menu(toggle)
const toggleBtn = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("navbar");

toggleBtn.addEventListener("click", (e) => {
    nav.classList.toggle("active");

    // Switch icon
    if (nav.classList.contains("active")) {
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }

    // Prevent click from propagating to body
    e.stopPropagation();
});
// Click outside to close menu
document.body.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
});


// the form(prevent redirecting)
const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission
    const data = new Fo
    rmData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Network error. Please check your connection.");
    }
});
