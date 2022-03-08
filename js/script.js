let scrollPositionY = 0;


var panel1_sound = new Howl({
    src: ['../audio/cornField.mp3'],
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  var failure_sound = new Howl({
    src: ['../audio/failure.mp3'],
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  var panel2_sound = new Howl({
    src: ['../audio/mountains.mp3'],
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  var panel3_sound = new Howl({
    src: ['../audio/stay.mp3'],
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  var panel4_sound = new Howl({
    src: ['../audio/cornField.mp3'],
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  var panel5_sound = new Howl({
    src: ['../audio/caution.mp3'],
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  var panel6_sound = new Howl({
    src: ['../audio/suspenseWormhole.mp3'],
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

//   howler js
// var id1 = sound.play();
// Fade out the first sound and speed up the second.
//sound.fade(1, 0, 1000, id1);
//sound.rate(1.5, id2);

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

window.addEventListener("scroll", (evt)=>{
    scrollPositionY = window.scrollY;
    console.log("scroll position Y: ", scrollPositionY);
})


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
   