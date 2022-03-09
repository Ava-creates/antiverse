
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".zoom img").css({
        width: (100+scroll/5)+"%"
    });
});

const flightPath = {
    curviness: 0.2,
    autoRotate: false,
    values: [
        { x: 10, y: -70 },
        { x: 50, y: -50 },
        { x: 100, y: -43 },
        { x: 150, y: -45 },
        { x: 280, y: -47 },
        { x: 350, y: -50 },
        { x: 410, y: -40 },
        { x: 460, y: -35 },
        { x: 500, y: -40 },
        { x: 550, y: -50 },
     
      

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
    duration: 5000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('#panel-2')
    .addTo(Controller);




/* for the white screen flash between panel -2 and panel -3  */

var Y = document.getElementById("panel-2")


function make_visible()
{
    document.getElementById("splash").style.display="none";
}

let scrollPositionY = 0;




window.addEventListener("scroll", (evt)=>{
    scrollPositionY = window.scrollY;
    console.log("scroll position Y: ", scrollPositionY);
    if(scrollPositionY>800 && scrollPositionY<6000)
    {
        $("#ship").css("top","scrollPositionY");
        if(scrollPositionY<3000)
        {
            $("#pop2").css("visibility","visible");
        }

        else{
            $("#pop2").css("visibility","hidden");
        }

        if(3050<scrollPositionY && scrollPositionY<3900)
        {$("#pop3").css("visibility","visible");}

        else
        {
            $("#pop3").css("visibility","hidden");
        }

        if(4500<scrollPositionY && scrollPositionY<5000)
        {$("#pop1").css("visibility","visible");}

        else
       { ("#pop1").css("visibility","hidden");}

        
    }

    else 
    {
        
        $("#pop3").css("visibility","hidden");
        $("#pop1").css("visibility","hidden");
    }

    if(scrollPositionY>7000 )
    {
        if(scrollPositionY<7500)
        {

          
            $("#ship2").css("top","37rem");
            $("#ship2").css("left","36rem");
       
        }
    }

    else
    {
        $("#ship2").css("top","5rem");
        $("#ship2").css("left","6rem");
    }
    

})



   