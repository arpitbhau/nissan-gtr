// JAI SHREE RAM

function CursorMove() {
    let body = document.querySelector("body");


    body.addEventListener("mousemove", function (dets) {
        body.style.overflow = "hidden"; // To avoid Scollbar
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y,
            duration: 0.5
        });

    });

    body.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
            scale: 2,
            duration: 0.5
        });
    });

    body.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
            scale: 0,
            duration: 0.5
        });
    });
}

CursorMove();


function Intro() {
    let fullBar = document.querySelector("#full-bar");
    let emptyBar = document.querySelector("#empty-bar");
    let startEnginebtn = document.querySelector("#start-engine-btn");
    let audio = document.querySelector("#start-engine-btn audio");
    let tl = gsap.timeline();

    function PlayAudio() {
        audio.play();
    }

    startEnginebtn.addEventListener('click', function () {
        function I1() {
            audio.style.display = "none";
            PlayAudio();
            tl.to("#start-engine-btn", {
                scale: 1.01,
                duration: 0.5
            });

            tl.to(emptyBar, {
                visibility: "hidden"
            });

            tl.to(fullBar, {
                visibility: "visible"
            });
            setTimeout(() => {
                tl.to("#i1", {
                    visibility: "hidden",
                    duration: 0.8
                });
                tl.to("#i1", {
                    display: "none"
                });
            }, 7500);
        }
        I1();
        // Intro - 2 Part

        function I2() {

            setTimeout(() => {
                tl.from("#i2 h3", {
                    visibility: "visible",
                    x: 80,
                    duration: 1,
                    stagger: 0.1
                });

                tl.to("#i2 h3", {
                    visibility: "visible"
                });

                tl.to("#i2 span img:nth-child(1)", {
                    opacity: 1,
                    duration: 1
                });

                setTimeout(() => {
                    tl.to("#i2 span img:nth-child(2)", {
                        opacity: 1,
                        duration: 1
                    });
                }, 1000);



            }, 8100);
        }

        I2();

        function RemoveIntroDivandAddMainDiv() {
            setTimeout(() => {
                tl.to("#intro-wrapper", {
                    top: -1000,
                    duration: 2
                });

                tl.to("#intro-wrapper", {
                    display: "none"
                });

                // adding main div

                tl.to("#main", {
                    visibility: "visible"
                });
            }, 14000);
        }

        RemoveIntroDivandAddMainDiv();

        function AddHeroVideo() {
            let video = document.querySelector("#h-back #videodiv");

            setTimeout(() => {
                video.innerHTML = `<video src="./assets/videos/hero-video.mp4" autoplay loop preload="auto"></video>`;
            }, 15000)
        }

        AddHeroVideo();
    });

}

Intro();

function SetProperBgColor() {
    document.querySelector("body").style.background = "transparent";
    document.querySelector("#hero").style.background = "transparent";
    document.querySelector(".bg-color").style.background = "#000";
}

SetProperBgColor();