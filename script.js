const card = document.getElementById('contact-card');
const body = document.body;
const bubble = document.getElementById('bubble');
const beakNormal = document.getElementById('beak-normal');
const beakAngry = document.getElementById('beak-angry');
const ebrow = document.getElementById('ebrow');
const ebrow2 = document.getElementById('ebrow2');
const sweat = document.getElementById('sweat');

const msgs = [
    "HANDS OFF!! 🔪", "I SEE YOU!! 😡", "BACK AWAY!! 🔪",
    "DON'T DO IT!! 😤", "I WARNED YOU!! 🔪", "GET OUT!! 😡", "LEAVE ME ALONE!","TOO BUSY FOR THAT 😡",
];
let mi = 0;

function goAngry() {
    body.classList.add('angry');
    card.classList.add('hovered');
    bubble.textContent = msgs[mi++ % msgs.length];
    beakNormal.style.opacity = '0';
    beakAngry.style.opacity = '1';
    ebrow.style.transform = 'rotate(-22deg) translate(-4px,7px)';
    ebrow2.style.transform = 'rotate(22deg) translate(4px,-7px)';
    sweat.style.opacity = '1';
}

function goCalm() {
    body.classList.remove('angry');
    card.classList.remove('hovered');
    beakNormal.style.opacity = '1';
    beakAngry.style.opacity = '0';
    ebrow.style.transform = 'none';
    ebrow2.style.transform = 'none';
    sweat.style.opacity = '0';
}

card.addEventListener('mouseenter', goAngry);
card.addEventListener('mouseleave', goCalm);
card.querySelectorAll('.c-row').forEach(r =>
    r.addEventListener('mouseenter', () => { bubble.textContent = msgs[mi++ % msgs.length]; })
);

card.addEventListener("touchstart", goAngry);
card.addEventListener("touchend", goCalm);

const langBtn = document.getElementById("lang-btn");
const wheelModal = document.getElementById("lang-wheel");
const wheelImg = document.getElementById("wheel-img");
const spinBtn = document.getElementById("spin-btn");

let currentRotation = 0;

langBtn.onclick = () => {
    wheelModal.style.display = "flex";
};

wheelModal.onclick = (e) => {
    if (e.target === wheelModal) {
        wheelModal.style.display = "none";
    }
};

spinBtn.onclick = () => {

    const spins = 5 + Math.floor(Math.random() * 3);
    currentRotation += (spins * 360);
    wheelImg.style.transform = `rotate(${currentRotation}deg)`;


};
