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
  var processCounter = 1;
  var currentBet = 1;
  //TODO bruke betMulti til å gjøre opp for ghetto løsning med hvor my man skal bette (den gjør ingen ting nå)
  var betMulti = 1;

  setInterval(function () {
    if (processCounter == 1) {
      if (newRoundStart()) {
        console.log("NEWROUND");
        processCounter = 2;
      }
    } else if (processCounter == 2) {
      sjekkIfCT();
    } else if (processCounter == 3) {
      placeBet();

      console.log("PLACEBET");
    } else if (
      document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
        .innerText > 11
    ) {
      processCounter = 4;
    } else if (processCounter == 4) {
      if (endOfRound()) {
        console.log("ENDOFROUND");
        document.getElementsByClassName("bet-btn")[0].click(); //Make Bet
        processCounter = 1;
      }
    }
  }, 1000);

  function sjekkIfCT() {
    //If win
    if (
      document.getElementsByClassName("previous-rolls-item")[19].children[0]
        .className == "inline-block w-24 h-24 rounded-full ml-1 coin-ct"
    ) {
      console.log("Ez cash");
      document.getElementsByClassName("bet-input__control")[1].click(); //BET001

      //betMulti = 1;
      currentBet = 1;
      processCounter = 0;
    }
    //If lose
    else {
      //betMulti += 1;
      currentBet *= 2;
      console.log(betMulti);
      processCounter = 3;
    }
  }

  function newRoundStart() {
    document.getElementsByClassName("bet-input__control")[0].click();
    if (
      document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
        .innerText > 17
    ) {
      return true;
    } else {
      return false;
    }
  }

  function endOfRound() {
    if (
      document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
        .innerText < 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  function placeBet() {
    //var multi = betMulti*2;
    for (i = 0; i < currentBet; i++) {
      // Currentbet i denne betydningen er at knappen 0.01 trykkes 1 gang (currentBet ganger)
      //TODO Må endres, for dette er trash
      document.getElementsByClassName("bet-input__control")[1].click();
    }
    processCounter = 4;

    if (
      currentBet >
      document.getElementsByClassName("whitespace-no-wrap font-numeric")[1]
        .innerText
    ) {
      console.log("Not enough money to bet");
      return;
    }
  }
  // hello
  // Below is the code for the visible elements when activation the botasdasd
}

//TODO gjør ingen ting (endra)
function initVariables() {
  processCounter = 1;
  currentBet = 1;
  betMulti = 1;
}

function elements() {
  //TODO Trenger store endringer, this is noob
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
  if (
    mainClickCounter > 1 ||
    currentBet >
      document.getElementsByClassName("whitespace-no-wrap font-numeric")[1]
        .innerText
  ) {
    console.log("YOU HAVE CLICKED THE BUTTON TOO MANY TIMES !§!!!!!!! ;(");
    return;
  } else {
    console.log("BOTTEN STARTER NESTE RUNDE!!!!!!! :)");
    console.log(mainClickCounter);
  }
  //var processCounter = 1;
  //var currentBet = 1; SETTER EVT VARIBALENE HER UTIFRA BRUKERINPUT
  //var betMulti = 1;

  main();
}
elements();
