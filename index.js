var n=Math.random();
var n1=Math.random();
n=Math.round(n*6);
n1=Math.round(n1*6);
if(n==0) n=n+1;
if(n==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(n==2) { document.querySelector(".img1").setAttribute("src","./images/dice2.png");}
else if(n==3) { document.querySelector(".img1").setAttribute("src","./images/dice3.png");}
else if(n==4) { document.querySelector(".img1").setAttribute("src","./images/dice4.png");}
else if(n==5) { document.querySelector(".img1").setAttribute("src","./images/dice5.png");}
else if(n==6) { document.querySelector(".img1").setAttribute("src","./images/dice6.png");}

if(n1==0) n1=n1+1;
if(n1==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(n1==2) { document.querySelector(".img2").setAttribute("src","./images/dice2.png");}
else if(n1==3) { document.querySelector(".img2").setAttribute("src","./images/dice3.png");}
else if(n1==4) { document.querySelector(".img2").setAttribute("src","./images/dice4.png");}
else if(n1==5) { document.querySelector(".img2").setAttribute("src","./images/dice5.png");}
else if(n1==6) { document.querySelector(".img2").setAttribute("src","./images/dice6.png");}

if(n==n1){
    document.querySelector("h1").style.fontSize="60px"
    document.querySelector("h1").textContent="DRAW";
}
else if(n>n1){  document.querySelector("h1").style.fontSize="60px";
    document.querySelector("h1").textContent="  Player1 Is WINNER";
    document.querySelector(".Player1").textContent=" 🚩 Player1 ";
}
else if(n<n1){  document.querySelector("h1").style.fontSize="60px";
    document.querySelector("h1").textContent="Player2 Is WINNER";
     document.querySelector(".Player2").textContent="  Player2 🚩 ";
}
document.querySelector("button").addEventListener("click",function(){
    location.reload() ;});
