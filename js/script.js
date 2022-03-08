const flightPath = {
    curviness: 0.2,
    autoRotate: true,
    values: [
        { x: 100, y: -30 },
        { x: 300, y: 90 },
        { x: 500, y: -30 },
        { x: 700, y: 90 },
        { x: 900, y: -30 },
        { x: 1100, y: 90 },
        { x: window.innerWidth, y: -30 }
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to("#ship2", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const Controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: "#panel-3",
    duration: 15000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('#panel-3')
    .addTo(Controller);

/* for displaying text in panel 3 */

var texts=["the earthhhhhh", "it it is flattttt", "aaaaaa"];


var d= 0;

if(d<25)
{
    $(".texts").text(texts[0])
}

else if( d>25 && d<50 )
{
    $(".texts").text(texts[1])
}

else
{
    $(".texts").text(texts[0])
}



/* for the white screen flash between panel -2 and panel -3  */

var Y = document.getElementById("panel-2")


function make_visible()
{
    document.getElementById("splash").style.display="none";
}


console.log(Y.scrollTop)
if(Y.scrollTop==10)
{

    setTimeout(make_visible(), 3000);
    console.log(Y.scrollTop)

}
   