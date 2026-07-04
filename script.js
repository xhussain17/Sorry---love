// Scroll to letter
const scrollBtn = document.getElementById("scrollBtn");

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        document.querySelector(".letter").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Music
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener("click", () => {

        if (playing) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
        } else {
            bgMusic.play().catch(() => {});
            musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }

        playing = !playing;

    });
}

// Floating Hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 400);

// Cherry Blossoms
const petalsContainer = document.getElementById("petals-container");

function createPetal() {

    if (!petalsContainer) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = (7 + Math.random() * 5) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 14000);

}

setInterval(createPetal, 500);

// Sparkles
const sparkleContainer = document.getElementById("sparkles-container");

function createSparkle() {

    if (!sparkleContainer) return;

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2500);

}

setInterval(createSparkle, 300);
