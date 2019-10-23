  function  destroyAll() {
    document.querySelector('.trapezoid-1').style.animation = " destroy1 3000ms ease 1000ms 1 normal forwards"; 
    document.querySelector('.trapezoid-2').style.animation = " destroy2 3000ms 1500ms 1 normal forwards"; 
    document.querySelector('.trapezoid-3').style.animation = " destroy3 3000ms 1200ms 1 normal forwards";  
    document.querySelector('.trapezoid-4').style.animation = " destroy4 3000ms 1700ms 1 normal forwards"; 
    // document.querySelector('.menu_danger').style.animation = " destroy6 3000ms 1700ms 1 normal forwards"; 
    // document.querySelector('.daft-button').style.animation = " destroy8 4500ms 1700ms 1 normal forwards"; 

    document.querySelector('.greetings').style.animation = " destroy7 4500ms 1700ms 1 normal forwards";
    document.querySelector('.button-text').style.animation = " destroy7 4500ms 1000ms 1 normal forwards";
    //document.getElementsByTagName('canvas').style.animation = " destroy5 2500ms 1700ms 1 normal forwards"; 
    document.querySelector('.menu__buttons').style.animation = " destroy5 2500ms 1700ms 1 normal forwards"; 
    setTimeout(writeQuote2, 4000);
   // document.getElementById('lightning').style.animation = " destroy5 2500ms 1700ms 1 normal forwards"; 
    }