const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", function () {
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:linear-gradient(135deg,#ff9a9e,#fecfef);text-align:center;padding:20px;">
            <div>
                <h1 style="color:#ff4d6d;">HURRAYYY ❤️</h1>
                <p style="font-size:20px;">
                Thank you for becoming my first Valentine 💖<br><br>
                I want you to become my Valentine forever.<br>
                I love you so much mero kaliii ❤️<br><br>
                Please always support me and stay together with meee 🥺<br>
                Please don’t changeee… stay forever this wayyyy 💕<br><br>
                I hope to marry you someday… I hope that happensss 💍❤️
                </p>
            </div>
        </div>
    `;
});
