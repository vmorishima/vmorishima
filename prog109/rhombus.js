
function upLeft(height,color1,color2,symbol){
  var line="";
  for (i=1;i<=height;i++) {
    line+= "<p>";
    for (x=0;x<height-i;x++){
      line+="<span style='color:white;'>"+symbol+"</span>" ;
    }
    for(j=x;j<height;j++){
      if (j%2) {
line+= "<span style='color:" + color1 + ";'>" + symbol + "</span>";}
else{
line+= "<span style='color:" + color2 + ";'>" + symbol + "</span>"; }
    }
    line+="</p>";
  }
 document.getElementById("upLeft").innerHTML=line;
}



function downLeft(height,color1,color2,symbol){
  var line="";
  for (i=0;i<=height;i++) {
    line+= "<p>";
    for (x=0;x<i;x++){
      line+="<span style='color:white;'>"+symbol+"</span>" ;
    }
    for(j=x;j<height;j++){
      if (j%2) {
line+= "<span style='color:" + color1 + ";'>" + symbol + "</span>";}
else{
line+= "<span style='color:" + color2 + ";'>" + symbol + "</span>"; }
    }
    line+="</p>";
  }
 document.getElementById("downLeft").innerHTML=line;
}


function upRight(height,color1,color2,symbol){
  var line="";
  for (i=1;i<=height;i++) {
    line+= "<p>";
    for (x=1;x<=i;x++){
      if (x%2) {
line+= "<span style='color:" + color1 + ";'>" + symbol + "</span>";}
else{
line+= "<span style='color:" + color2 + ";'>" + symbol + "</span>"; }
      
    }
    for(j=x;j<height;j++){
      line+="<span style='color:white;'>"+symbol+"</span>" ;
    }
    line+="</p>";
  }
 document.getElementById("upRight").innerHTML=line;
}


function downRight(height,color1,color2,symbol){
  var line="";
  for (i=1;i<=height;i++) {
    line+= "<p>";
    for (x=0;x<=height-i;x++){
      if (x%2) {
line+= "<span style='color:" + color1 + ";'>" + symbol + "</span>";}
else{
line+= "<span style='color:" + color2 + ";'>" + symbol + "</span>"; }
      
    }
    for(j=x;j<height;j++){
      line+="<span style='color:white;'>"+symbol+"</span>" ;
    }
    line+="</p>";
  }
 document.getElementById("downRight").innerHTML=line;
}

function rhombus() {
  height = document.getElementById("height").value;
  color1 = document.getElementById("color1").value;
  color2 = document.getElementById("color2").value;
  symbol = document.getElementById("symbol").value;
  upLeft(height,color1,color2,symbol);
  upRight(height,color1,color2,symbol);
  downLeft(height,color1,color2,symbol);
  downRight(height,color1,color2,symbol);
}

