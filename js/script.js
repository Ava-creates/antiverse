const flightPath = {
    curviness: 0.1,
    autoRotate: true,
    values: [
        
  
        { x: 100, y: -50 },
       
        { x: 500, y: -90 },
       
        
    ]
}


const tween = new TimelineLite();

tween.add(
    TweenLite.to("#ship", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const Controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: "#panel-2",
    duration: 10000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('#panel-2')
    .addTo(Controller);