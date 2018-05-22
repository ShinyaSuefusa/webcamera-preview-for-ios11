const medias = {
  audio : false,
  video : {
    facingMode : {
      exact : "environment"
    }
  }
};
const video = document.getElementById("video");

alert(typeof navigator.getUserMedia);
navigator.getUserMedia(medias, successCallback, errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};