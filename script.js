fetch('files/videos.json')
    .then(response => response.json())
    .then(data => {
        let i = 0;
        let yourTimeIsOut = 1000;
        let toggleThing = true;
        function putRandomVideo() {
            let vid = document.getElementById("main");
            vid.pause();
            const randomVid = data[Math.floor(Math.random() * data.length)];
            vid.getElementsByTagName('source')[0].src = randomVid.link;
            vid.load();
            vid.play();
            vid.loop = true;
        }
        function putVideoFromKeyboard(e) {
            if (e.which == 13) {
                putRandomVideo();
            }
        }
        function chaosMode() {
            let vid = document.getElementById("main");
            vid.pause();
            setTimeout(function () {
                const randomVid = data[Math.floor(Math.random() * data.length)];
                vid.getElementsByTagName('source')[0].src = randomVid.link;
                if (i == 0) {
                    vid.load();
                    vid.playbackRate += 0.1;
                    if (yourTimeIsOut > 50) {
                        yourTimeIsOut -= 20;
                    }
                    else {
                        yourTimeIsOut = 100;
                        vid.playbackRate = 10;
                    }
                    chaosMode();
                }
                vid.play();
            }, yourTimeIsOut);
        }
        function vidPlaybackUp(e) {
            let vid = document.getElementById("main");
            if (e.which == 107) {
                vid.playbackRate += 0.05;
            }
            if (e.which == 39) {
                vid.playbackRate += 0.1;
            }
            if (e.which == 97) {
                vid.playbackRate = 1.1;
            }
            if (e.which == 98) {
                vid.playbackRate = 1.2;
            }
            if (e.which == 99) {
                vid.playbackRate = 1.3;
            }
            if (e.which == 100) {
                vid.playbackRate = 1.4;
            }
            if (e.which == 101) {
                vid.playbackRate = 1.5;
            }
            if (e.which == 102) {
                vid.playbackRate = 1.6;
            }
            if (e.which == 103) {
                vid.playbackRate = 1.7;
            }
            if (e.which == 104) {
                vid.playbackRate = 1.8;
            }
            if (e.which == 105) {
                vid.playbackRate = 1.9;
            }
            if (e.which == 96) {
                vid.playbackRate = 2.0;
            }
            if (e.which == 110) {
                vid.playbackRate = 1.0;
            }
        }
        function vidPlaybackDown(e) {
            let vid = document.getElementById("main");
            if (e.which == 109) {
                vid.playbackRate -= 0.05;
            }
            if (e.which == 37) {
                vid.playbackRate -= 0.1;
            }
            if (e.which == 57) {
                vid.playbackRate = 0.9;
            }
            if (e.which == 56) {
                vid.playbackRate = 0.8;
            }
            if (e.which == 55) {
                vid.playbackRate = 0.7;
            }
            if (e.which == 54) {
                vid.playbackRate = 0.6;
            }
            if (e.which == 53) {
                vid.playbackRate = 0.5;
            }
            if (e.which == 52) {
                vid.playbackRate = 0.4;
            }
            if (e.which == 51) {
                vid.playbackRate = 0.3;
            }
            if (e.which == 50) {
                vid.playbackRate = 0.2;
            }
            if (e.which == 49) {
                vid.playbackRate = 0.1;
            }
            if (e.which == 48) {
                vid.playbackRate = 0.05;
            }
        }
        function togglePitchShifting(e) {
            let vid = document.getElementById("main");
            if (e.which == 80) {
                vid.mozPreservesPitch = false;
                vid.preservesPitch = false;
            }
            else if (e.which == 78) {
                vid.mozPreservesPitch = true;
                vid.preservesPitch = true;
            }
        }
        let first = document.querySelector(".generate");
        let second = document.getElementById("chaos");
        first.addEventListener('click', putRandomVideo);
        second.addEventListener('click', chaosMode);
        document.addEventListener('keypress', putVideoFromKeyboard);
        document.addEventListener('keydown', vidPlaybackUp);
        document.addEventListener('keydown', vidPlaybackDown);
        document.addEventListener('keydown', togglePitchShifting);
    });