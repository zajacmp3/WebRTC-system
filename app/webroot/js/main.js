var constraints = {video: true};

function successCallback(stream) {
	var video = document.querySelector("video");
	video.src = window.URL.createObjectURL(stream);
}

function errorCallback(error){
	console.log("navigator.getUserMedia error: ", error);
}

navigator.getMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

navigator.getMedia(constraints, successCallback, errorCallback);