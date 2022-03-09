
// 
let panel6img = document.getElementById("panel6img");

let panel7img = document.getElementById("panel7img");

let isPlaying = false;

// audio assests

let audioInit = document.getElementById("audioInit");

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
    volume: 0.4,
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
  // end of audio 



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
   /*ßß .addIndicators()*/
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
        {
            $("#pop3").css("visibility","visible");
        }

        else
        {
            $("#pop3").css("visibility","hidden");
        }

        if(4500<scrollPositionY && scrollPositionY<5000)
        {
            $("#pop1").css("visibility","visible");
        }

        else
       { 
           $("#pop1").css("visibility","hidden");
        }

        
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
            $("#ship2").css("left","26rem");
           

       
        }
    }

    else
    {
        $("#ship2").css("top","5rem");
        $("#ship2").css("left","6rem");
    }

    
     

})

// playing the audio 
window.addEventListener("click", function(evt){
    // evt.preventDefault();
    var p1sound;
    if(scrollPositionY>=0 && scrollPositionY<=813){
        stopAllAudio();
       p1sound =  panel1_sound.play();
      

    } else if(scrollPositionY>813 && scrollPositionY<=6037){
        // Fade out the first sound and speed up the second.
        // panel2_sound.stop();
        // panel1_sound.stop();
        stopAllAudio();
        panel3_sound.play();

    } else if (scrollPositionY>=7032 && scrollPositionY<=7900){
        stopAllAudio();
        failure_sound.play();
    } else if(scrollPositionY>7900 && scrollPositionY<=8700){
        stopAllAudio();
        panel4_sound.play();
        
    }else if(scrollPositionY>900 && scrollPositionY<=10705){
        stopAllAudio();
        panel5_sound.play();
    }

})

let stopAllAudio = function(){
    panel1_sound.stop();
    panel2_sound.stop();
    panel3_sound.stop();
    panel4_sound.stop();
    panel5_sound.stop();
    panel6_sound.stop();
    failure_sound.stop();
}

   // Change global volume.
//Howler.volume(0.5);

// AOS animations

//Script JS
$(".myGrid div").each(function(index, element){
    element = $(element);
    index += 1;
    element.css("grid-row", index);
  
    if(index == 1){
      element.attr("data-aos", "fade-left");
    }
    else {
      element.attr("data-aos", "fade-right");
    }
  
  });
  
  //Initializing the animation on scroll library
  AOS.init();

  // initializing the parallax animation
  new simpleParallax(panel6img, {
    delay: 5.6,
	orientation: 'right',
});

new simpleParallax(panel7img, {
    delay: 5.6,
	orientation: 'left',
});