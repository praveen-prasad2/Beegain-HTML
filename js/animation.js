// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

// GSAP Defaults
gsap.defaults({ ease: "none" });

// Function for motion path animation
function beeMotionPath() {
  const bee = document.querySelector("#bee");
  const scrollPath = document.querySelector("#scrollPath");

  gsap.to(bee, {
    motionPath: {
      path: scrollPath,
      align: scrollPath,
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    duration: 1,
    scrollTrigger: {
      trigger: "#viewport",
      pin: true,
      start: "top top",
      end: "bottom+=3000px",
      scrub: true, // Smooth forward and reverse animation
    },
  });
}

// Function to animate lines using DrawSVGPlugin
function animateLines() {
  const line1 = "#line1_1";
  const line2 = "#line1_2";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#viewport",
      start: "top top",
      end: "bottom+=3000px",
      scrub: true,
    },
  });

  tl.fromTo(line1, { drawSVG: "0%" }, { drawSVG: "100%", duration: 2 });
  tl.fromTo(line2, { drawSVG: "0%" }, { drawSVG: "100%", duration: 3 });
}

// Master function to run all animations
function initAnimations() {
  beeMotionPath();
  animateLines();
}

// Initialize animations on page load
window.addEventListener("load", initAnimations);
