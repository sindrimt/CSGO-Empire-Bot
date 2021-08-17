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
      var processCounter = 1;
      var currentBet = 0.01;
      //TODO bruke betMulti til å gjøre opp for ghetto løsning med hvor my man skal bette (den gjør ingen ting nå)
      placeBet();

      // Denne kjøres hvert sekund, og sjekker statusen
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
          //document.getElementsByClassName("bet-input__control")[1].click(); //BET001

          //betMulti = 1;
          currentBet = 0.01;
          processCounter = 0;
        }
        //If lose
        else {
          currentBet *= 2;
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
      function numberToArray(number) {
        let array = number.toString().split(""); // Gjør om til streng
        var intedArray = array.map((x) => parseInt(x)); // Mapper til listen til int
        var filteredArray = intedArray.filter(function (value) {
          // Filtrer ut NaN fra listen
          return !Number.isNaN(value);
        });
        return filteredArray.reverse();
      }

      function placeBet() {
        // Passer på at man ikke kan bette mer enn man har
        if (
          currentBet > //TODO ENDRE TILBAKE TIL > (BARE FOR TESTING NÅ)
          document.getElementsByClassName("whitespace-no-wrap font-numeric")[1]
            .innerText
        ) {
          console.log("Not enough money to bet");
          return;
        }
        // Ellers:
        var returnLog = numberToArray(currentBet); // Initsialiserer funksjonen
        console.log(returnLog);

        var increment = 1;
        var buttonNumber = 0;

        // Valuen som ganges for hver iterasjon av forLøkka
        // Denne skal da klikke på knappen utifra resultat
        for (let index of returnLog) {
          console.log(
            "Clicked " +
              parseFloat(increment).toPrecision(1) +
              " : " +
              index +
              " Times"
          );
          for (i = 0; i < index; i++) {
            console.log("Trykket index: " + index);
            document
              .getElementsByClassName("bet-input__control")
              [buttonNumber + 1].click();
          }
          increment *= 0.1;
          buttonNumber++;
          // OK. Vet helt ærlig ikke helt hvorfor dette funker, men fack it
        }

        processCounter = 4;

        // hello
        // Below is the code for the visible elements when activation the botasdasd
      }
    }

    //TODO gjør ingen ting (endra)
    /* function initVariables() {
  processCounter = 1;
  currentBet = 1;   r
  betMulti = 1;ggg 
} */

    function elements() {
      //TODO Trenger store endringer, this is noob
      var termdiv = document.createElement("div");
      var termbtn = document.createElement("button");
      var divHeader = document.createElement("div");
      //var currentBetButton = document.createElement("button"); //TODO exempel på sette vars i boksen

      termdiv.id = "mydiv";
      termbtn.id = "termbtn";

      //currentBetButton.innerHTML = "set currentBet 0.55";

      termbtn.innerHTML = "Start Bot";
      // termbtn.style.right = 0 + "px";

      termbtn.addEventListener("click", startMain);
      //currentBetButton.addEventListener("click", increaseCurrentBet);

      divHeader.id = "mydivheader";
      divHeader.textContent = "Drag me!";

      /*   termdiv.style.backgroundColor = "lightgrey";
       */
      /*  divHeader.style.width = 200 + "px";
  divHeader.style.height = 80 + "px"; */
      //divHeader.style.backgroundColor = "red";

      termdiv.style.position = "absolute";
      termdiv.style.top = 1 + "%";
      termdiv.style.left = 40 + "%";
      termdiv.style.zIndex = 1000;

      bodyEL.appendChild(termdiv);
      termdiv.appendChild(divHeader);
      termdiv.appendChild(termbtn);

      //termdiv.appendChild(currentBetButton);

      // Basically copy fra w3 schools men heey
      dragElement(termdiv);

      function dragElement(elmnt) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
          // if present, the header is where you move the DIV from:
          document.getElementById(
            elmnt.id + "header"
          ).onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
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
        main();
      }
      //var processCounter = 1;
      //var currentBet = 1; SETTER EVT VARIBALENE HER UTIFRA BRUKERINPUT
      //var betMulti = 1;
    }

    function increaseCurrentBet() {
      currentBet = 0.55;
      console.log(currentBet);
    }
    elements();
  }
});
