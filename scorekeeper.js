var button1 = document.getElementById ("button1");
var button2 = document.querySelector("#button2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input[type = 'number']")
var totalGame = document.querySelector("p span");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

button1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		console.log(p1Score, winningScore);
		if(p1Score === winningScore){
			gameOver = true;
			player1.classList.add("winner");
		}
		player1.textContent = p1Score;
	}
});

button2.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			player2.classList.add("winner");
		gameOver = true;
		}
	player2.textContent = p2Score;
	}
});


resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	player1.textContent = 0;
	player2.textContent = 0;
	player1.classList.remove("winner");
	player2.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	totalGame.textContent = this.value;
	winningScore = Number(numInput.value);
	reset();
});