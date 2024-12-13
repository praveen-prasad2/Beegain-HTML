document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin,DrawSVGPlugin)
    // gsap code here!
});


// gsap.to(".image", {
//     scrollTrigger: {
//         trigger: ".image",
//         start: "top center",
//         scrub: 1,
//         pin: true,
//         pinSpacing: false,
//         markers: true,
//         toggleClass: "active",
//         // toggleActions: "reverse pause  restart pause",

//     },
//     x: 800,
//     rotation: 360,
//     duration: 3
// });

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".screen1",
        start: "top top",        // When the top of .screen1 reaches the top of the viewport
        end: "bottom bottom",    // When the bottom of .screen1 reaches the bottom of the viewport
        scrub: 5,             // Ensure animation syncs with scroll progress and pauses when scrolling stops
        markers: true            // Debugging markers
    }
});

timeline.fromTo(
    "#path",
    { drawSVG: "0%" },           // Start with no drawing
    { drawSVG: "100%" }          // Fully draw the path
);

