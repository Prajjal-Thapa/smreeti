// VARIABLES
const envelope = document.getElementById("envelope");
const flap = envelope.querySelector(".flap");
const valentineContainer = document.getElementById("valentineContainer");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// RANDOM POSITIONS FOR HEARTS AND SPARKLES
document.querySelectorAll('.heart').forEach(h => h.style.setProperty('--rand-x', Math.random()));
document.querySelectorAll('.sparkle').forEach(s => s.style.setProperty('--rand-x', Math.random()));

// ENVELOPE CLICK → OPEN FLAP + POP HEARTS
envelope.addEventListener("click", function() {
    flap.style.transform = "rotateX(180deg)";

    // POP HEARTS
    for (let i = 0; i < 6; i++) {
        const popHeart = document.createElement('div');
        popHeart.classList.add('pop-heart');
        popHeart.style.left = (50 + i*10) + 'px';
        popHeart.style.top = '50px';
        popHeart.style.setProperty('--x', Math.random()*2-1);
        popHeart.style.setProperty('--y', Math.random()*2-1);
        envelope.appendChild(popHeart);
        setTimeout(() => popHeart.remove(), 1200);
    }

    // SHOW QUESTION AFTER FLAP OPENS
    setTimeout(() => {
        envelope.style.display = "none";
        valentineContainer.style.display = "block";
    }, 1000);
});

// NO BUTTON MOVES
noBtn.addEventListener("mouseenter", function() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES BUTTON CLICK → LETTER SLIDES OUT + TYPING
yesBtn.addEventListener("click", function() {
    valentineContainer.style.display = "none";

    const letterDiv = document.createElement('div');
    letterDiv.classList.add('letter-paper');
    document.body.appendChild(letterDiv);

    // SLIDE DOWN FROM TOP
    setTimeout(() => {
        letterDiv.style.transform = "translate(-50%, -50%)";
    }, 50);

    const message = `
    My Dearest Smreeti ❤️,

    HURRAYYY! Thank you for becoming my first Valentine 💖

    I want you to become my Valentine forever.
    I love you so much mero kaliii ❤️

    Please always support me and stay together with meee 🥺
    Please don’t changeee… stay forever this wayyyy 💕

    I hope to marry you someday… I hope that happensss 💍❤️
    `;

    let index = 0;
    const typedSpan = document.createElement('span');
    typedSpan.classList.add('typed-text');
    letterDiv.appendChild(typedSpan);

    function typeLetter() {
        if (index < message.length) {
            typedSpan.textContent += message[index];
            index++;
            setTimeout(typeLetter, 50);
        }
    }

    // delay typing until letter is fully visible
    setTimeout(typeLetter, 1500);
});
