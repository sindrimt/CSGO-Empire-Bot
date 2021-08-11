/*// create new link tag
var link = document.createElement('link');

// set properties of link tag
link.href = 'style.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// Loaded successfully
link.onload = function() {
	console.log('success');
};

// Loading failed
link.onerror = function() {
	console.log('error');
};

// append link element to html
document.body.appendChild(link);*/

var bodyEL = document.querySelector("body");
var mainClickCounter = 0;

function main() {
  var goNextStep = 1;
  var currentBet = 1;
  var betMulti = 1;
  //var timerValue = document.getElementsByClassName("text-2xl font-bold font-numeric")[0].innerText;
  //var ctCoin = "inline-block w-24 h-24 rounded-full ml-1 coin-ct";

  //var lastCoinName = document.getElementsByClassName("previous-rolls-item")[19].children[0].className;

  //* AKK NÅ FUNKER DET NESTEN. MANGLER CT KNAPP TIL Å FUNGERE.
  //* FUNGERER HELLER IKKE AKKURATT NÅ Å AUTO BETTE 0.01 PER RUNDE,- BLIR RESETTA
  //! PROBLEMET E NOK AT JEG TRYKKER PÅ CT KNAPPEN FØR DET ER NOE PENGER Å BETTE

  setInterval(function () {
    if (goNextStep == 1) {
      if (newRoundStart()) {
        console.log("NEWROUND");
        goNextStep = 2;
      }
    } else if (goNextStep == 2) {
      sjekkIfCT();
    } else if (goNextStep == 3) {
      placeBet();

      console.log("PLACEBET");
    } else if (
      document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
        .innerText > 11
    ) {
      goNextStep = 4;
    } else if (goNextStep == 4) {
      if (endOfRound()) {
        console.log("ENDOFROUND");
        document.getElementsByClassName("bet-btn")[0].click(); //Make Bet
        goNextStep = 1;
      }
    }
  }, 1000);

  function sjekkIfCT() {
    //IF WIN
    if (
      document.getElementsByClassName("previous-rolls-item")[19].children[0]
        .className == "inline-block w-24 h-24 rounded-full ml-1 coin-ct"
    ) {
      console.log("Ez cash");
      document.getElementsByClassName("bet-input__control")[1].click(); //BET001

      //betMulti = 1;
      currentBet = 1;
      goNextStep = 0;
    }
    //IF LOSE
    else {
      //betMulti += 1;
      currentBet *= 2;
      console.log(betMulti);
      goNextStep = 3;
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
      document.getElementsByClassName("bet-input__control")[1].click();
    }
    goNextStep = 4;

    if (
      currentBet >
      document.getElementsByClassName("whitespace-no-wrap font-numeric")[1]
        .innerText
    ) {
      console.log("Not enough money to bet");
      return;
    }
  }

  // Below is the code for the visible elements when activation the bot
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
