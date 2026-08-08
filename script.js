const heart = document.getElementById("heart");
const stars = document.getElementById("stars");
const floatingHearts =
    document.getElementById("floating-hearts");


// ============================================
// ROMANTIC WORDS
// ============================================

const loveWords = [

    "I love you",
    "always you",
    "forever yours",
    "my heart",
    "my happiness",
    "my favorite person",
    "you are my world",
    "only you",
    "my everything",
    "stay with me",
    "my beautiful soul",
    "you make me smile"

];


// ============================================
// HEART EQUATION
// ============================================

function heartFunction(t) {

    const x =
        16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    return {
        x,
        y
    };
}


// ============================================
// CREATE HEART
// ============================================

const totalItems = 160;

for (let i = 0; i < totalItems; i++) {

    const love =
        document.createElement("div");

    love.className = "love";

    love.textContent =
        loveWords[
            i % loveWords.length
        ];


    const t =
        (Math.PI * 2 * i)
        / totalItems;


    const current =
        heartFunction(t);

    const next =
        heartFunction(t + 0.01);


    const scale = 18;


    const x =
        current.x * scale;

    const y =
        -current.y * scale;


    const dx =
        next.x - current.x;

    const dy =
        next.y - current.y;


    const angle =
        Math.atan2(dy, dx)
        * (180 / Math.PI);


    love.style.left =
        `${300 + x}px`;

    love.style.top =
        `${270 + y}px`;


    love.style.transform =
        `translate(-50%, -50%)
         rotate(${angle}deg)`;


    love.style.animationDelay =
        `${i * 0.025}s`;


    heart.appendChild(love);
}


// ============================================
// CREATE STARS
// ============================================

for (let i = 0; i < 140; i++) {

    const star =
        document.createElement("div");

    star.className = "star";


    const size =
        Math.random() * 3 + 1;


    star.style.width =
        `${size}px`;

    star.style.height =
        `${size}px`;


    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;


    star.style.setProperty(
        "--duration",
        `${2 + Math.random() * 4}s`
    );


    star.style.animationDelay =
        `${Math.random() * 5}s`;


    stars.appendChild(star);
}


// ============================================
// FLOATING HEARTS
// ============================================

for (let i = 0; i < 25; i++) {

    const heartParticle =
        document.createElement("div");

    heartParticle.className =
        "floating-heart";

    heartParticle.textContent =
        Math.random() > 0.5
            ? "♥"
            : "♡";


    heartParticle.style.left =
        `${Math.random() * 100}%`;


    heartParticle.style.setProperty(
        "--size",
        `${10 + Math.random() * 20}px`
    );


    heartParticle.style.setProperty(
        "--duration",
        `${8 + Math.random() * 8}s`
    );


    heartParticle.style.setProperty(
        "--delay",
        `${Math.random() * 8}s`
    );


    floatingHearts.appendChild(
        heartParticle
    );
}