
document.querySelector(".hero-btn").addEventListener("click", () => {
    alert("Hero button clicked!");
});


const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("mouseover", () => {
    navBtn.style.background = "#ffea9a";
});

navBtn.addEventListener("mouseout", () => {
    navBtn.style.background = "#f5d178";
});


const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});


cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease-out";
});
