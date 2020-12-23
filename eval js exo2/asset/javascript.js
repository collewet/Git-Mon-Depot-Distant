var n = parseInt(prompt("saisissez un nombre"));
function tableMultiplication(b){
var c = b;

for(i=0;i<=10;i++){


  document.write(i +"x" +c +"="+(i*c));
  document.write("<br><br>");
  }
} 
tableMultiplication(n);