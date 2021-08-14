//Button oversikt

/* Countdown */ //* document.getElementsByClassName("text-2xl font-bold font-numeric")[0].innerText
/* CT-betButton */ //* document.getElementsByClassName("bet-btn")[0]
/* Returnerer true hvis forrige resultat var CT, ellers false */ //*  document.getElementsByClassName("previous-rolls-item")[19].children[0].className == "inline-block w-24 h-24 rounded-full ml-1 coin-ct"
/* Navnet til CT-Coin */ //* document.getElementsByClassName("previous-rolls-item")[19].children[0].className
/* Bet 0.01 (Bytt index for høyere value) */ //* document.getElementsByClassName("bet-input__control")[1]
/* Balance */ //* document.getElementsByClassName("whitespace-no-wrap font-numeric")[1].innerText
// HEI DETTE SKAL VISES I COMMITEN

var bodyEL = document.querySelector("body");

var mainDiv = document.createElement("div");
var mainBtn = document.createElement("button");
mainBtn.innerHTML = "JEG ER EN KANPP";

mainDiv.style.width = 470 + "px";
mainDiv.style.height = 300 + "px";
mainDiv.style.backgroundColor = "lightgrey";

mainDiv.style.position = "fixed";
mainDiv.style.top = 50 + "%";
mainDiv.style.left = 50 + "%";
mainDiv.style.zIndex = 1000;

mainBtn.addEventListener("click", main);

mainDiv.appendChild(mainBtn);
bodyEL.appendChild(mainDiv);

// Globals init
var clickStartTracker = 0,
  currentBet = 0.2,
  startingBet = 0.01,
  processCounter = 0,
  betMultiplier = 1;

setInterval(function () {
  if (processCounter == 1) {
    if (isNewRound()) {
      newRound();
      processCounter = 2;
    }
  } else if (processCounter == 2) {
    checkIfCT();
    placeBet();
  } else if (processCounter == 3) {
    placeBet();

    console.log("PLACEBET");
  } else if (
    document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
      .innerText > 11
  ) {
    goNextStep = 4;
  } else if (processCounter == 4) {
    if (endOfRound()) {
      console.log("ENDOFROUND");
      document.getElementsByClassName("bet-btn")[0].click(); //Make Bet
      processCounter = 1;
    }
  }
}, 1000);

function main() {
  // variabler som endres
  var countdown = document.getElementsByClassName(
    "text-2xl font-bold font-numeric"
  )[0].innerText;

  clickStartTracker++;

  console.log("main start");
  console.log(countdown);
  console.log(clickStartTracker);

  currentBet = 0.05;
  placeBet(currentBet);

  //Husk å oppdatere clickStartTacker til 0 etter runde

  if (clickStartTracker > 1) {
    console.log("Kan ikke trykke start to ganger");
    return;
  }
  console.log("starter likevel");
}

function placeBet(bet) {
  console.log(bet);
  //Passer på at man ikke kan bette om man ikke har nok balance
  if (
    bet >=
    /* Balance */
    document.getElementsByClassName("whitespace-no-wrap font-numeric")[1]
      .innerText
  ) {
    for (i = 1; i <= bet * 100 * betMultiplier; i++) {
      // Trykker på 0.01 bet helt til currentBet er oppfylt (Trenger bedre implementasjon)
      document.getElementsByClassName("bet-input__control")[1].click();
      console.log("Clicked " + i + " times");
    }
    document.getElementsByClassName("bet-btn")[0].click();
  }
}

function newRound() {
  variablesInit();
  console.log("New round started");
}

function checkIfCT() {
  //If win, return til New round
  if (
    document.getElementsByClassName("previous-rolls-item")[19].children[0]
      .className == "inline-block w-24 h-24 rounded-full ml-1 coin-ct"
  ) {
    placeBet(currentBet); // Sjekker om bet er gyldig, så

    betMultiplier = 1;
    processCounter = 1;
  }
  //If lose, går til neste steg (makeDoubleBet)
  else {
    betMultiplier *= 2;
    console.log("betMultiplier: " + betMultiplier);
    processCounter = 3;
  }
}

function makeDoubleBet() {
  // Denne kjøres når roulette result er T-Coin (dobler forrige bet)
  placeBet(currentBet);
  document.getElementsByClassName("bet-btn")[0].click(); //Make Bet
  processCounter = 1;
}

function isNewRound() {
  document.getElementsByClassName("bet-input__control")[0].click();
  if (
    document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
      .innerText > 17
  )
    return true;
  else return false;
}

function variablesInit() {
  clickStartTracker = 0;
  startingBet = 0.01;
  currentBet = startingBet;
  processCounter = 0;
  betMultiplier = 1;
}
