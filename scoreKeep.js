var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var input = document.querySelector("input");
var endScoreDisplay = document.querySelector("p span");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var end = false;
var endScore = 5;

p1Button.addEventListener("click",function(){
  if(!end){
    p1Score++;
    if(p1Score === endScore){
      p1Display.classList.add("winner");
      end = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click",function(){
  if(!end){
    p2Score++;
    if(p2Score === endScore){
      p2Display.classList.add("winner");
      end = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

input.addEventListener("change",function(){
  endScoreDisplay.textContent = this.value;
  endScore = Number(this.value);
  reset();
});

function reset(){
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  end = false;
};
