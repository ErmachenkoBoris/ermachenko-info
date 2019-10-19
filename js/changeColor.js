 function  changeColor(color) {
  document.querySelector('.trapezoid-1').style.background =`linear-gradient( to bottom, ${color} , white )`; 
  document.querySelector('.trapezoid-2').style.background =`linear-gradient( to left, ${color} , white )`; 
  document.querySelector('.trapezoid-3').style.background =`linear-gradient( to top, ${color} , white )`; 
  document.querySelector('.trapezoid-4').style.background =`linear-gradient( to right, ${color} , white )`; 
  canvas.style.background =`radial-gradient( ${color} , white )`;
  }