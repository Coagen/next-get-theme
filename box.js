const box = document.querySelector(".shrink-box");
const overlay = document.querySelector(".overlay");

window.addEventListener("scroll", () => {
  const overlayRect = overlay.getBoundingClientRect();
  console.log(overlayRect.top);
  // Check position of overlay relative to viewport
  if (overlayRect.top > -5500) {
    box.style.width = "95vw";
    box.style.height = "90vh";
    console.log("high Value");
  } else {
    box.style.width = "40vw";
    box.style.height = "50vh";
    console.log("low Value");
  }
});
