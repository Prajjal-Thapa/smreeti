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

    Gomu gomu noooo !!!

    HURRAYYY! Thank you for becoming my first Valentine mero kaluu 💖
    Thanks for choosing boring guy like me..
    I would like to thank you for making my life very intresting and 
    not letting me feel lonley...
    
    I gladly  request you please please 
    Please always support me and stay by my side 🥺
    Mainly , Please don’t changeee… stay forever this wayyy 💕
    
    meow meow !!!
    My anticipating wife, please eat healthy food, study hard, wake early
    and makeyour parents proud. Don't worry i will keep reminding you that!!!
    i just want to see you succeed as we grow so, please don't get angry 
    when i remind you that...

    If there is any problem always share it with me. I will always try my best to 
    help you in every possible way whenever you are in need.

    Kaluti,
    I have you made you cry and angry alot .. sorry for that it was not intentional
    I will improve myself anyway.. I just wanna see you happpyy that's it...
    I am abit cringe, I know you don't like that i will try to avoid babe...
    I will try my best and focus on myself so that we can always be together...
    
    Tsuma, I want you to be my Valentine forever.
    I love you so so much mero kaliii ❤️
    You are mine and only mine...
    I am hoping to marry you someday… Please Lord, I hope that happensss 💍❤️

    This is my first time celebrating valentine, sorry this is all i know...
    Please don't mind!!1
    So much love smreetuu...
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

