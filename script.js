const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream. pass to video element, then play
/**
 * Selects the media stream for picture-in-picture.
 * @returns {Promise<void>} A promise that resolves when the media stream is selected.
 */
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      video.play();
    };
  } catch (error) {
    // catch error
    console.log("Whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});

// On load
selectMediaStream();
