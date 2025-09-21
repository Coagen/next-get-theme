const sections = document.querySelectorAll(".hero"); // get all hero sections
const viewportCenter = window.innerHeight / 2;

function clamp(v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  sections.forEach((section) => {
    const video = section.querySelector("video"); // video in this section
    const overlay = section.querySelector(".overlay"); // overlay in this section

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight - 700;

    // Skip video brightness if no-dark-video
    if (!section.classList.contains("no-dark-video")) {
      // brightness logic here
      // --------------------
      // Video brightness
      // --------------------
      if (scrollTop + window.innerHeight < sectionTop) {
        // section not yet in view → full brightness
        video.style.filter = "brightness(1)";
      } else {
        // section in view → calculate progress
        let progress =
          (scrollTop + window.innerHeight - sectionTop) / sectionHeight;
        progress = clamp(progress, 0, 1);
        const brightness = 1 - 0.99 * progress; // 1 → 0.3
        video.style.filter = `brightness(${brightness})`;
      }
    }
    // Skip overlay opacity if no-overlay
    if (!section.classList.contains("no-overlay")) {
      // overlay logic here
      // --------------------
      // Overlay opacity
      // --------------------
      let overlayProgress =
        (scrollTop + window.innerHeight - sectionTop) / overlay.offsetHeight;
      overlayProgress = clamp(overlayProgress, 0, 1);
      overlay.style.opacity = overlayProgress;
    }
    // Skip heading blur if no-blur
    if (!section.classList.contains("no-blur")) {
      // headings blur logic here
      // --------------------
      // Headings blur
      // --------------------
      const headings = overlay.querySelectorAll("h1,h2,h3");
      headings.forEach((h) => {
        const rect = h.getBoundingClientRect();
        const headingCenter = rect.top + rect.height / 2;

        if (headingCenter >= viewportCenter) {
          const distance = headingCenter - viewportCenter;
          const maxDistance = window.innerHeight / 2;
          const blur = clamp(distance / maxDistance, 0, 1) * 10;
          const headingOpacity = clamp(1 - distance / maxDistance, 0.3, 1);

          h.style.filter = `blur(${blur}px)`;
          h.style.opacity = headingOpacity;
        } else {
          h.style.filter = "blur(0px)";
          h.style.opacity = 1;
        }
      });
    }
  });
});
