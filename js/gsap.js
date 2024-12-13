document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin,DrawSVGPlugin)
    // gsap code here!
});


gsap.to(".image", {
    scrollTrigger: {
        trigger: ".image",
        start: "top center",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        markers: true,
        toggleClass: "active",
        // toggleActions: "reverse pause  restart pause",

    },
    x: 800,
    rotation: 360,
    duration: 3
});

const timeline=gsap.timeline({
    scrollTrigger:{
        trigger:"",
        start:"",
        end:"",
        scrub:true,
    }
})

timeline.from("#path",{
    drawSVG:"0",
    duration:1,
})