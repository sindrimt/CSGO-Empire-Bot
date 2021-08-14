// Hei på deg
/* Dette er fortsatt en litt ghetto måte å kjøre main scriptet i consollen på,
   Men inntil jeg har funnet en måte å kjøre funksjoner fra eksterne js-filer, får det duge :P */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method == "changePage") {
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
      //Husk å oppdatere clickStartTacker til 0 etter runde

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
      // hello
      // Below is the code for the visible elements when activation the botasdasd
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
  }
});
