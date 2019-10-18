// document.querySelector(".youngerdiv").onmouseover=function(){
//     document.querySelector(".olderdiv").style.backgroundColor = "red";
//   }
//   document.querySelector(".youngerdiv").onmouseout=function(){
//     document.querySelector(".olderdiv").style.backgroundColor = "blue";
//   }
var canvasColorGLobal = '#000000';
var canvas = '';
  (()=>{
    const TWO_PI = 2*Math.PI;
    canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const offSet = 6;

   
    const stepLenghth = 2;


    let w = canvas.width   = innerWidth * 0.7;
    let h = canvas.height  = innerHeight * 0.7;

    const maxLengthLightning = h*0.95;

    let mx = 0;
    let my = 0;
    let toggle = 0;

    let canvasColor = '#232332';
    canvasColorGLobal= '#232332';
    let circles = [];
    let circleCount = 2;



    class Circle {
      constructor(x, y){
        this.x = x || Math.random() * w;
        this.y = y || Math.random() * h;

      }

      draw(x, y) {
        this.x = x || this.x;
        this.y = y || this.y;

        ctx.lineWidth = 1.5;
        ctx.fillStyle = 'white';
        ctx.strokeStyle='red';

        ctx.beginPath();
        ctx.arc(this.x, this.y, 6, 0, TWO_PI);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, 32, 0, TWO_PI);
        ctx.closePath();
        ctx.stroke();

      }

    }

    canvas.onmousemove = e => {
      mx = e.x - canvas.getBoundingClientRect().x;
      my = e.y - canvas.getBoundingClientRect().y;
    }

    window.onmousedown = e => {
      toggle == (circleCount-1)? toggle=0 : toggle++;
    }

    function createLightning(){
      for(let i=0; i< circleCount; i++){
        for(let j=i+1; j< circleCount; j++){
          let dist= getDistance(circles[i],circles[j]);

          

          let chance = dist/maxLengthLightning;

          if(chance>Math.random()) continue;

          let currentColor=chance*255;
          let distColor=`rgb(255,${currentColor},${currentColor})`;

          let stepCount =dist / stepLenghth;
          let startX= circles[i].x;
          let startY = circles[i].y;

          ctx.lineWidth=2.5;
          ctx.strokeStyle=distColor;

          ctx.beginPath();
          ctx.moveTo(circles[i].x, circles[i].y);
          for(let k=stepCount; k>1;k--){

            let currentDist = getDistance(circles[i],{x:startX, y:startY});
            let currentOffSet = Math.sin(currentDist/dist*Math.PI) * offSet;

            startX += (circles[j].x-startX)/k + Math.random()*currentOffSet * 2 - currentOffSet;
            startY += (circles[j].y-startY)/k + Math.random()*currentOffSet * 2 - currentOffSet;
          ctx.lineTo(startX, startY);
          }
          ctx.stroke();
          ctx.closePath();

        }
      }
    }

    function getDistance(a,b) {
      return Math.sqrt( Math.pow(a.x-b.x, 2)+Math.pow(a.y-b.y, 2) );
    }

    function init() {
      canvas.style.background = canvasColorGLobal;
      document.getElementById('lightning').appendChild(canvas);
      for(let i=0; i< circleCount; i++){
        circles.push(new Circle() );
      }
    }

    function loop(){
      ctx.clearRect(0,0, w, h);

      

      circles.map((i)=>{i==circles[toggle]? i.draw(mx, my): i.draw()});
      createLightning();
      requestAnimationFrame(loop);
    }

    init();
    loop();
  })();

 function  changeColor(color) {
  document.querySelector('.trapezoid-1').style.background =`linear-gradient( to bottom, ${color} , white )`; 
  document.querySelector('.trapezoid-2').style.background =`linear-gradient( to left, ${color} , white )`; 
  document.querySelector('.trapezoid-3').style.background =`linear-gradient( to top, ${color} , white )`; 
  document.querySelector('.trapezoid-4').style.background =`linear-gradient( to right, ${color} , white )`; 
  canvas.style.background =`radial-gradient( ${color} , white )`;
  }
  // animation-name: none
  // animation-duration: 0s
  // animation-timing-function: ease
  // animation-delay: 0s
  // animation-iteration-count: 1
  // animation-direction: normal
  // animation-fill-mode: none
  // animation-play-state: running
  function  destroyAll() {
    console.log(document.querySelector('.trapezoid-1').style.animation);
    document.querySelector('.trapezoid-1').style.animation = " destroy1 3000ms ease 1000ms 1 normal forwards"; 
    document.querySelector('.trapezoid-2').style.animation = " destroy2 3000ms 1500ms 1 normal forwards"; 
    document.querySelector('.trapezoid-3').style.animation = " destroy3 3000ms 1200ms 1 normal forwards";  
    document.querySelector('.trapezoid-4').style.animation = " destroy4 3000ms 1700ms 1 normal forwards"; 
    document.querySelector('.menu_danger').style.animation = " destroy6 3000ms 1700ms 1 normal forwards"; 
    document.querySelector('.daft-button').style.animation = " destroy8 4500ms 1700ms 1 normal forwards"; 
    canvas.style.animation = " destroy5 2500ms 1700ms 1 normal forwards"; 
    document.querySelector('.menu__buttons').style.animation = " destroy5 2500ms 1700ms 1 normal forwards"; 
    document.getElementById('lightning').style.animation = " destroy5 2500ms 1700ms 1 normal forwards"; 
    }