const openBtn = document.getElementById("openBtn");
const birthdayContent = document.getElementById("birthdayContent");

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

let musicPlaying = false;


openBtn.addEventListener("click", () => {

    birthdayContent.classList.remove("hidden");

    birthdayMusic.play()
        .then(() => {
            musicPlaying = true;
            musicBtn.textContent = "❚❚";
        })
        .catch(() => {
            console.log("Music could not autoplay.");
        });

    createConfetti();

    setTimeout(() => {

        birthdayContent.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);

});


musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        birthdayMusic.pause();

        musicBtn.textContent = "▶";

        musicPlaying = false;

    } else {

        birthdayMusic.play();

        musicBtn.textContent = "❚❚";

        musicPlaying = true;

    }

});


function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );

    const colors = [
        "#C98F9A",
        "#F4DDE1",
        "#D6B36A",
        "#8E5360",
        "#FFF9F5"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(confetti);


        setTimeout(() => {
            confetti.remove();
        }, 6000);

    }

}