document.addEventListener("DOMContentLoaded", () => {
    pageLoaded();
})

function pageLoaded() {
    fadeOutLoader();
    handleMainMenu();
    animateTopButton();
    drawTimeline();
    animateAboutMe();
    animateCourses();
}


function fadeOutLoader() {
    document.body.style.overflow = 'hidden';
    document.querySelector(".load-container").classList.add("hide");
    setTimeout(e => {
        document.body.style.overflow = 'auto';
        document.querySelector(".load-container").classList.add("dissapear");
    }, 2700)
}

function handleMainMenu() {
  document.querySelector('.main-menu li:nth-child(1)').addEventListener("click", e => {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })

  document.querySelector('.main-menu li:nth-child(2)').addEventListener("click", e => {
    document.getElementById('technologies').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })

  document.querySelector('.main-menu li:nth-child(3)').addEventListener("click", e => {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })

  document.querySelector('.main-menu li:nth-child(4)').addEventListener("click", e => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
  
}

function animateTopButton() {
    let button = document.querySelector(".go-up");
    let shown = false;
    window.addEventListener("scroll", e => {
        if (document.documentElement.scrollTop > 700 && !shown) {
            button.classList.remove("dissapear");
            setTimeout(e => {
                button.classList.remove("hide");
            }, 100);
            shown = true;
        } else if (document.documentElement.scrollTop <= 700 && shown) {
            button.classList.add("hide");
            setTimeout(e => {
                button.classList.add("dissapear");
            }, 500);
            shown = false;
        }
    })

    button.addEventListener("click", e => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}

function drawTimeline() {
    const canvas = document.querySelector(".timeline canvas");
    const ctx = canvas.getContext("2d");
    const windowWidth = document.querySelector(".timeline").offsetWidth;
    ctx.canvas.width = windowWidth;
    ctx.canvas.height = 30;

    let y = 15;
    let x = windowWidth/12;

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 5*windowWidth/6, y);
    ctx.stroke();

    const points = [0,3,5];

    points.forEach(i => {
        ctx.beginPath();
        ctx.arc(x + windowWidth*i/6, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
    })
}

function animateAboutMe() {
    window.addEventListener("scroll", e => {
        if (document.documentElement.scrollTop > 600 && window.innerWidth > 900) {
            document.querySelector("#about-me").classList.add("appear-left");
            document.querySelector(".about-me-section .info").classList.add("appear-left");
            document.querySelector(".about-me-section .image").classList.add("appear-right");
        }
    })
}

function animateCourses() {
    window.addEventListener("scroll", e => {
        if (document.documentElement.scrollTop > 2700 && window.innerWidth > 900) {
            document.querySelectorAll(".course").forEach(e => {
                e.classList.add("appear-down");
            })
        }
    })
}