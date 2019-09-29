document.querySelector(".youngerdiv").onmouseover=function(){
    document.querySelector(".olderdiv").style.backgroundColor = "red";
  }
  document.querySelector(".youngerdiv").onmouseout=function(){
    document.querySelector(".olderdiv").style.backgroundColor = "blue";
  }