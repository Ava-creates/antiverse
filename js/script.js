/*for rocket crashing in  panel -3 */

const flightPath = {
    curviness: 0.5,
    autoRotate: true,
    values: [
        
  
        { x: 100, y: -10 },
       
        { x: 200, y: -40 },

        {x:400,  y:-160},

       {x:800, y:-320},

       {x:850 , y: -400},

       {x: 900, y: -440},

       {x:400, y:-700},
       
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
    duration: 30000,
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
   