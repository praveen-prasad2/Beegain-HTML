
gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin( DrawSVGPlugin);
gsap.defaults({ ease: Linear.easeNone });

function Grow() {
  var self = this;
  this.desktop = {
    scrollTweenObject: null,
    animationActive: !1,
    animations: [],
    initScrollTween: function () {
      self.desktop.viewport = document.querySelector("#viewport");
      self.desktop.world=document.querySelector("#world");
      self.desktop.bee=document.querySelector("#bee");
      gsap.set(self.desktop.bee,{xPercent:-50,yPercent:-50});
      self.desktop.setX=gsap.quickSetter(self.desktop.world,"x","px");
      self.desktop.setY=gsap.quickSetter(self.desktop.world,"y","px");
      self.desktop.setOrigin=gsap.quickSetter(self.desktop.world,"transformOrigin");
      self.desktop.beeProps=gsap.getProperty(self.desktop.bee);
    },
    refreshScrollTween:function(){
        self.desktop.vw=window.innerWidth;
        self.desktop.vh=window.innerHeight;
        self.desktop.worldWidth=self.desktop.world.offsetWidth;
        self.desktop.worldHeight=self.desktop.world.offsetHeight;
        self.desktop.clampX=gsap.utils.clamp(0,self.desktop.worldWidth -self.desktop.vw );
        self.desktop.clampY=gsap.utils.clamp(0,self.desktop.worldHeight - self.desktop.vh);

        if($("body").hasClass("scrollPathDisabled")){
            return !1;
        }
        var progress=0;
        if(self.desktop.scrollTweenObject != null){
            progress=self.desktop.scrollTweenObject.progress();
            self.desktop.scrollTweenObject.totalProgress(0).clear();
        }
        self.desktop.scrollTweenObject=self.desktop.createScrollTween();
        self.desktop.scrollTweenObject.progress(progress);
    },
    createScrollTween: function(){
        var scrollTweenObject=gsap.timeline({
            scrollTrigger:{
                trigger:"#viewport",
                pin:"#viewport",
                start:"top top",
                id:"scene",
                markers:true,
                scrub:!0,
                end:function(){
                    return "+=" + self.desktop.worldHeight;
                },
            },
        });
        scrollTweenObject.to(self.desktop.bee,{
            motionPath:{path:"#scrollPath",align:"scrollPath",autoRotate:!0,start:1,end:0},
            ease:"linear",
            onUpdate: function(){
                const x=self.desktop.beeProps("x");
                const y=self.desktop.beeProps("y");
                self.desktop.setOrigin(x+"px"+y+"px");
                self.desktop.setX(-self.desktop.clampX(x-self.desktop.vw /2));
                self.desktop.setY(-self.desktop.clampY(x-self.desktop.vh /2));
            },
        });
        return scrollTweenObject;
    },
    screen1: function(){
        var screen1=new TimelineMax();
        screen1.fromTo("#line1_1",{drawSVG:"0%"},{drawSVG:"100%",duration:400})
        .fromTo("#line1_2",{drawSVG:"0%"},{drawSVG:"100%",duration:600});
        self.desktop.animations[1]=screen1;
        return screen1;
    }
  };
} 