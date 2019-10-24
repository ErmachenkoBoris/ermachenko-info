  function  destroyAll() {
    document.querySelector('.trapezoid-1').style.animation = " destroy1 3000ms ease 1000ms 1 normal forwards"; 
    document.querySelector('.trapezoid-2').style.animation = " destroy2 3000ms 1500ms 1 normal forwards"; 
    document.querySelector('.trapezoid-3').style.animation = " destroy3 3000ms 1200ms 1 normal forwards";  
    document.querySelector('.trapezoid-4').style.animation = " destroy4 3000ms 1700ms 1 normal forwards"; 
    document.querySelector('.greetings').style.animation = " destroy7 4500ms 1700ms 1 normal forwards";
    document.querySelector('.botton-destroy').style.animation = " destroy7 4500ms 1000ms 1 normal forwards";
    setTimeout(writeQuoteAfter, 4000);
    }