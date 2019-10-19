(()=>{
  const TWO_PI = 2*Math.PI;
  const canvas = document.createElement('canvas');
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
    canvas.style.background = canvasColor;
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

