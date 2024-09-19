var score=0;
var setrn;
var timer=60;

function inscore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function SetHit(){
     setrn = Math.floor(Math.random()*10);
    document.querySelector("#hits").textContent=setrn;
}
function Makebubble(){
    var clutter="";

    for(let i=1;i<=102;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`
    }
    
    document.querySelector(".panbtn").innerHTML=clutter;
}

function Countdown(){
     
        var timeInt=setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector("#Time").textContent=timer;
            }
            else{
                clearInterval(timeInt);
                document.querySelector("#bubs").innerHTML=`<h1>Game Over</h1> <br> <h1>Your Score is ${score}</h1>`
            }
           
        },1000)
    }

    document.querySelector(".panbtn")
    .addEventListener("click",function(dets){
        var clicknumber=Number(dets.target.textContent);

        if(clicknumber === setrn){
            inscore();
            Makebubble();
            SetHit();
        }
    })




Makebubble();
Countdown();
SetHit();
 
 