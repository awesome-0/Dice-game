/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var totalscore,playingScore,activePlayer;
var firstTotal = document.getElementById("score-0");
var secondTotal = document.getElementById("score-1") ;
var firstCurrent = document.getElementById("current-0");
var secondCurrent = document.getElementById("current-1");


//document.querySelector("#score-" + activePlayer).textContent = dice;
// document.querySelector("#score-" + 1).innerHTML = '<strong>' + dice + '</strong>';
// console.log(dice);
//var p1 = document.querySelector("#score-1").textContent;
//console.log(p1);
init();
var diceRef = document.querySelector(".dice");



document.querySelector(".btn-roll").addEventListener("click",function(){

   // console.log("button has been clicked");

   //generate a random number
   var dice = Math.floor(Math.random() * 6) + 1;

   //identify the element to switch to  
    
    diceRef.style.display = "block";
    diceRef.src = "dice-" + dice + ".png";

    //update the playingscore
   
   
    if(dice === 1){
        //change the current score of current player to zero 
       // then move to the next player
    
     nextplayer();
       

    }
    else{
        playingScore += dice;
         activePlayer === 0 ? firstCurrent.textContent = playingScore 
         : secondCurrent.textContent = playingScore;

        
    }

});

document.querySelector(".btn-new").addEventListener("click",init);


function log(message){
    console.log(message);
}
function init(){
    totalscore = [0,0];
    playingScore = 0;
    activePlayer = 0;
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1" ).textContent = "Player 2";
    document.querySelector(".dice").style.display = "none";
    
    
    firstTotal.textContent= "0";
    secondTotal.textContent= "0";
    firstCurrent.textContent = "0";
    secondCurrent.textContent = "0";

    document.querySelector(".player-0-panel" ).classList.remove("active");
    document.querySelector(".player-1-panel" ).classList.remove("active");

    document.querySelector(".player-0-panel" ).classList.remove("winner");
    document.querySelector(".player-1-panel" ).classList.remove("winner");
    document.querySelector(".player-0-panel" ).classList.add("active");

}

document.querySelector(".btn-hold").addEventListener("click",function(){


    //add current score to global score
    totalscore[activePlayer] += playingScore;
    activePlayer === 0 ?firstTotal.textContent = totalscore[activePlayer] 
    :secondTotal.textContent = totalscore[activePlayer];

    if(totalscore[activePlayer] >= 15){
        document.getElementById("name-" + activePlayer).textContent = "Winner";
        diceRef.style.display = "none";
        
        document.querySelector(".player-" + activePlayer + "-panel" ).classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel" ).classList.remove("active");
    }
    else{
        nextplayer();
    }
   
  

})

function nextplayer(){
    //change player variable 
    diceRef.style.display = "none";
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


    //set playing score to 0
    playingScore = 0;
    firstCurrent.textContent = "0" ;
    secondCurrent.textContent = "0";


    //toggle player 
    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")


}




