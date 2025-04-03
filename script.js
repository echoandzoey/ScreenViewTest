document.addEventListener("DOMContentLoaded", () => {
  const mainVideo = document.getElementById("main-video");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const videoSrc = thumbnail.getAttribute("data-video");
      mainVideo.src = videoSrc;
      mainVideo.play();
    });
  });

  // Optional: Add mute/unmute functionality
  const muteButton = document.createElement("button");
  muteButton.textContent = "Mute/Unmute";
  document.body.appendChild(muteButton);

  muteButton.addEventListener("click", () => {
    mainVideo.muted = !mainVideo.muted;
    thumbnails.forEach((thumbnail) => {
      const video = thumbnail.querySelector("video");
      video.muted = !video.muted;
    });
  });
});
