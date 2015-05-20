var rock = document.getElementById('rock'); 
var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');
var announce = document.getElementById("compPickAnnounce");
var thePick = document.createElement('div');
var arr = [rock, scissors, paper];
var userChoice;
var wins = 0, losses = 0;



rock.addEventListener('click', function(){
	var compChoice = Math.floor(Math.random()*3)+1;
	userChoice = 1;	
	compare(userChoice, compChoice, revealCC(compChoice)); 
})

scissors.addEventListener('click', function(){
	var compChoice = Math.floor(Math.random()*3)+1;
	userChoice = 2;	
	compare(userChoice, compChoice, revealCC(compChoice)); 
})

paper.addEventListener('click', function(){
	var compChoice = Math.floor(Math.random()*3)+1;
	userChoice = 3;	
	compare(userChoice, compChoice, revealCC(compChoice)); 
})

function compare(userChoice, compChoice, compChoiceName) {
	if (userChoice === compChoice) {
		document.getElementById("compPickAnnounce").innerHTML='TIE! computer choice was ' + compChoiceName;
	}
	else if (compChoice === 3 && userChoice === 1 ||
		     compChoice === 2 && userChoice === 3 ||
		     compChoice === 1 && userChoice === 2) {
		document.getElementById('compPickAnnounce').innerHTML='YOU LOSE! Computer choice was ' + compChoiceName;
	  losses++;
	  document.getElementById('losses').innerHTML = 'Losses:  '+losses;
	}
	else if (userChoice === 3 && compChoice === 1 ||
		     userChoice === 2 && compChoice === 3 ||
		     userChoice === 1 && compChoice === 2) {
		document.getElementById('compPickAnnounce').innerHTML='YOU WIN! Computer choice was ' + compChoiceName;
	  wins++;
	  document.getElementById('wins').innerHTML = 'Wins:  '+wins;
	}
}

function revealCC(compChoice) {
	
	if (compChoice === 1) {
		showRock();
		return 'rock'
	}
	else if (compChoice === 2) {
		showScissors();
		return 'scissors'
	}
	else if (compChoice === 3) {
		showPaper();
		return 'paper'
	}
}



function showRock(){
		thePick.style.width = "80%";
		thePick.style.height = "80%";
  	thePick.style.paddingBottom = "5%";
  	thePick.style.marginLeft = "5px"
  	thePick.style.float = "left";
    thePick.style.backgroundImage = 'url(rock.png)';
    thePick.style.backgroundSize = "contain";
    thePick.style.backgroundRepeat = "no-repeat"
    thePick.style.borderRadius = "10px";
    thePick.style.transition = "all 1s ease";
    document.getElementById('computerPick').appendChild(thePick);
}

function showScissors(){
	thePick.style.width = "80%";
		thePick.style.height = "80%";
		thePick.style.marginLeft = "5px"
  	thePick.style.paddingBottom = "5%";
  	thePick.style.float = "left";
    thePick.style.backgroundImage = 'url(scissors.png)';
    thePick.style.backgroundSize = "contain";
    thePick.style.backgroundRepeat = "no-repeat";
    thePick.style.borderRadius = "10px";
    thePick.style.transition = "all 1s ease";
    document.getElementById('computerPick').appendChild(thePick);
}

function showPaper(){
	thePick.style.width = "80%";
		thePick.style.height = "80%";
  	thePick.style.paddingBottom = "5%";
  	thePick.style.marginLeft = "5px"
  	thePick.style.float = "left";
    thePick.style.backgroundImage = 'url(paper.png)';
    thePick.style.backgroundSize = "contain";
    thePick.style.backgroundRepeat = "no-repeat";
    thePick.style.borderRadius = "10px";
    thePick.style.transition = "all 1s ease";
    document.getElementById('computerPick').appendChild(thePick);
}