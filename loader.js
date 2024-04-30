const tempOverlay = document.getElementById("loading");
window.addEventListener("load", () => {
  window.setTimeout(() => {
    tempOverlay.className = "hide";
  }, 10);
  window.setTimeout(() => {
    tempOverlay.style.display = "none";
  }, 1765);
});
