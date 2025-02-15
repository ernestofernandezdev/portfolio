document.addEventListener("DOMContentLoaded", () => {
    pageLoaded();
})

function pageLoaded() {
    handleLinks();
    drawTimeline();
}


function handleLinks() {
    
}

function animateMainMenu() {
    document.querySelectorAll(".main-menu li").forEach(el => {
        el.addEventListener("mouseover", e => {
            e.target.classList.remove("reverse-animate-main-menu");
            e.target.classList.add("animate-main-menu");
        })
        el.addEventListener("mouseout", e => {
            e.target.classList.remove("animate-main-menu");
            e.target.classList.add("reverse-animate-main-menu");
        })
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