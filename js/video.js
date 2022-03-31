var video = document.querySelector("#player1")


window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video.autoplay = false
	video.loop = false	
})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	let volume = document.querySelector("video").volume
	volume *= 100
	document.querySelector("#volume").innerHTML = volume+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	var skipTime = video.currentTime + 15
	
	if (skipTime > video.duration) {
		video.currentTime = 0
		console.log(video.currentTime)
	}

	else {
		video.currentTime = skipTime
		console.log(video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}

	else if (video.muted == true) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

let volume = document.querySelector("#slider")

volume.addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;

	// Need to update this to correct format
	let volume = video.volume 
	volume *= 100
	document.querySelector("#volume").innerHTML = volume +"%"
})

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("#player1").classList.add("oldSchool") 
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("#player1").classList.remove("oldSchool") 
});