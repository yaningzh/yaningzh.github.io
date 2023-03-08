var video = document.getElementById("videoplayer");;
video.loop = false;
video.autoplay = false;
video.load();

function playVideo() {
    video.play();
}
document.getElementById("play").addEventListener("click", playVideo);

function pauseVideo() {
    video.pause();
}
document.getElementById("pause").addEventListener("click", pauseVideo);

var curSpeed = 1;

function slowDown() {
    if (curSpeed / 2 >= 0.5) {
        curSpeed = curSpeed / 2;
        video.playbackRate = curSpeed;
    } else {
        alert("Video is at slowest speed!");
    }
}

document.getElementById("slower").addEventListener("click", slowDown);

function speedUp() {
    if (curSpeed * 2 <= 2) {
        curSpeed = curSpeed * 2;
        video.playbackRate = curSpeed;
    } else {
        alert("Video is at fastest speed!");
    }
}

document.getElementById("faster").addEventListener("click", speedUp);

function skipAhead() {
    if (video.currentTime + 15 <= video.duration) {
        video.currentTime += 15;
    } else {
        video.currentTime = 0;
    }
}

document.getElementById("skip").addEventListener("click", skipAhead);

function mute() {
    if (video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
        document.getElementById("slider").value = video.volume * 100;
        document.getElementById("volume").innerHTML = video.volume * 100 + "%";
	} else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
        document.getElementById("slider").value = 0;
        document.getElementById("volume").innerHTML = 0 + "%";
	}
}

document.getElementById("mute").addEventListener("click", mute);

function volumeSlider() {
    video.muted = false;
    document.getElementById("mute").innerHTML = "Mute";
    video.volume = document.getElementById("slider").value / 100;
    document.getElementById("volume").innerHTML = video.volume * 100 + "%";
}

document.getElementById("slider").addEventListener("change", volumeSlider);