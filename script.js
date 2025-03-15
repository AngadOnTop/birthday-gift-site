const music = document.getElementById("pedro");
        const box = document.getElementById("img-happy");

        box.addEventListener("mouseenter", () => {
            music.play();
        });

        box.addEventListener("mouseleave", () => {
            music.pause();
            music.currentTime = 0; // Resets music when you hover again
        });