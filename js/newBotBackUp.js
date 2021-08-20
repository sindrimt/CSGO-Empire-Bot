//Button oversikt

/* Countdown */ //* document.getElementsByClassName("text-2xl font-bold font-numeric")[0].innerText
/* CT-betButton */ //* document.getElementsByClassName("bet-btn")[0]
/* Returnerer true hvis forrige resultat var CT, ellers false */ //*  document.getElementsByClassName("previous-rolls-item")[19].children[0].className == "inline-block w-24 h-24 rounded-full ml-1 coin-ct"
/* Navnet til CT-Coin */ //* document.getElementsByClassName("previous-rolls-item")[19].children[0].className
/* Bet 0.01 (Bytt index for høyere value) */ //* document.getElementsByClassName("bet-input__control")[1]
/* Balance */ //* document.getElementsByClassName("whitespace-no-wrap font-numeric")[1].innerText
// HEI DETTE SKAL VISES I COMMITEN

// Globals init

var bodyEL = document.querySelector("body");
var mainClickCounter = 0;

/* var clickStartTracker = 0,
  currentBet = 0.2,
  startingBet = 0.01,
  processCounter = 0,
  betMultiplier = 1; */

function main() {
  // variabler som endres
  var goNextStep = 1;
  var currentBet = 1;
  var betMulti = 1;

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
      console.log("Place bet");
    }
    if (isRoundEnded()) {
      document.getElementsByClassName("bet-btn")[0].click(); // Make bet
      processCounter = 0;
    }
  }, 1000);
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

function isRoundEnded() {
  if (
    document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
      .innerText <= 5
  )
    return true;
  return false;
}

function variablesInit() {
  clickStartTracker = 0;
  startingBet = 0.01;
  currentBet = startingBet;
  processCounter = 0;
  betMultiplier = 1;
}

function elements() {
  var termdiv = document.createElement("div");
  var termbtn = document.createElement("button");
  termbtn.innerHTML = "JEG ER EN KANPP";

  termbtn.addEventListener("click", startMain);

  termdiv.style.width = 470 + "px";
  termdiv.style.height = 300 + "px";
  termdiv.style.backgroundColor = "lightgrey";

  termdiv.style.position = "fixed";
  termdiv.style.top = 50 + "%";
  termdiv.style.left = 50 + "%";
  //termdiv.style.transform = translate(-50+"%", -50+"%"); Gal syntax, men rett ide
  termdiv.style.zIndex = 1000;

  termdiv.appendChild(termbtn);
  bodyEL.appendChild(termdiv);
}

function startMain() {
  //Kjører main function om knappen blir trykket
  mainClickCounter += 1;
  if (mainClickCounter > 1) {
    console.log("YOU HAVE CLICKED THE BUTTON TOO MANY TIMES !§!!!!!!! ;(");
    return;
  } else {
    console.log("BOTTEN STARTER NESTE RUNDE!!!!!!! :)");
    console.log(mainClickCounter);
  }
  //var goNextStep = 1;
  //var currentBet = 1; SETTER EVT VARIBALENE HER UTIFRA BRUKERINPUT
  //var betMulti = 1;

  main();
}
elements();
