document.addEventListener("DOMContentLoaded", () => {
  const mainVideo = document.getElementById("main-video");
  const clipSlot = document.getElementById("clip-slot");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData(
        "text/plain",
        thumbnail.getAttribute("data-video")
      );
    });
  });

  clipSlot.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  clipSlot.addEventListener("drop", (e) => {
    e.preventDefault();
    const videoSrc = e.dataTransfer.getData("text/plain");
    mainVideo.src = videoSrc;
    mainVideo.play();
  });
});
