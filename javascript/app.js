var betValue = 0;
var dice1 = 1;
var dice2 = 1;
var rollTotal = 0;
var rollAtMax = 0;
var amountMax = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  var money = 0;
  betValue = +document.getElementById("bet").value;
  if (betValue > 0) {
    money = betValue;
    while (money > 0) {
      dice1 = rollDice();
      dice2 = rollDice();
      rollTotal++;
      var diceTotal = dice1 + dice2;
      console.log("Total dice: " + diceTotal);
      if (diceTotal === 7) {
        money += 4;
        if(money > amountMax) {
          amountMax += money-amountMax;
          rollAtMax = rollTotal;
          console.log(rollAtMax);
        }
        console.log("Total: $" + money);
      } else {
        money -= 1;
        console.log("Total: $" + money);
      }
    }
    document.getElementById("table1").style.display = "table";
    document.getElementById("initialBet").innerHTML = "$" + betValue;
    document.getElementById("totalRollCount").innerHTML = rollTotal;
    document.getElementById("maxWon").innerHTML = "$" + amountMax;
    document.getElementById("rollCountMax").innerHTML = rollAtMax;
    document.getElementById("play").innerHTML = "Play Again";
    rollTotal = 0;
    amountMax = 0;
    rollAtMax = 0;
  } else {
    alert("Please enter a vaild bet!")
  }
}