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

  var minimize = document.createElement("button");
  var maximize = document.createElement("button");

  var setCurrentBet = document.createElement("input");
  setCurrentBet.setAttribute("placeholder", "Start Bet");
  setCurrentBet.setAttribute("type", "number");
  setCurrentBet.setAttribute("min", 0.01);
  setCurrentBet.setAttribute("max", 1);
  setCurrentBet.setAttribute("step", 0.01);

  var setMaxLoss = document.createElement("input");
  setMaxLoss.setAttribute("placeholder", "Max Loss");
  setMaxLoss.setAttribute("type", "number");
  setMaxLoss.setAttribute("min", 1);
  setMaxLoss.setAttribute("max", 10);
  setMaxLoss.setAttribute("step", 1);

  termdiv.id = "mydiv";
  termbtn.id = "termbtn";

  minimize.innerHTML = "Min";
  maximize.innerHTML = "Max";

  termbtn.innerHTML = "Start Bot";
  // termbtn.style.right = 0 + "px";

  termbtn.addEventListener("click", startMain);

  divHeader.id = "mydivheader";
  divHeader.textContent = "Drag me!";
  minimize.id = "minimize";
  maximize.id = "maximize";
  setCurrentBet.id = "setCurrentBet";
  setMaxLoss.id = "setMaxLoss";

  /*   termdiv.style.backgroundColor = "lightgrey";
   */
  /*  divHeader.style.width = 200 + "px";
  divHeader.style.height = 80 + "px"; */
  //divHeader.style.backgroundColor = "red";

  termdiv.style.position = "absolute";
  termdiv.style.top = 1 + "%";
  termdiv.style.left = 40 + "%";
  termdiv.style.zIndex = 1000;
  minimize.addEventListener("click", minimizeDiv);
  maximize.addEventListener("click", maximizeDiv);

  // ADDPENDS
  bodyEL.appendChild(termdiv);

  termdiv.appendChild(divHeader);
  termdiv.appendChild(termbtn);
  termdiv.appendChild(setCurrentBet);
  termdiv.appendChild(setMaxLoss);

  divHeader.appendChild(minimize);
  divHeader.appendChild(maximize);

  // Basically copy fra w3 schools men heey
  dragElement(termdiv);

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
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
  //TODO Denne HER TROR JEG IKKE FAKTISK SENDER VAR VALUES TIL MAIN - SÅ SJEKK DET !!!!
  //Kjører main function om knappen blir trykket
  currentBet = document.getElementById("setCurrentBet").value;

  //Bruh ekkel validation men fuck it d funke
  if (
    mainClickCounter >= 1 ||
    currentBet > 1 ||
    document.getElementById("setMaxLoss").value == "" ||
    document.getElementById("setCurrentBet").value == "" ||
    document.getElementById("setMaxLoss").value < 0 ||
    document.getElementById("setCurrentBet").value < 0
  ) {
    console.log(
      "YOU HAVE CLICKED THE BUTTON TOO MANY TIMES or theCurrentBet is too big :P"
    );
    return;
  } else {
    console.log(
      "Starting currentBet: " + document.getElementById("setCurrentBet").value
    );
    console.log(
      "Starting maxLoss: " + document.getElementById("setMaxLoss").value
    );

    console.log("BOTTEN STARTER NESTE RUNDE!!!!!!! :)");
    mainClickCounter++;
    console.log("ClickCounter: " + mainClickCounter);
    //main();
  }
  //var processCounter = 1;
  //var currentBet = 1; SETTER EVT VARIBALENE HER UTIFRA BRUKERINPUT
  //var betMulti = 1;
}

function minimizeDiv() {
  var div = document.getElementById("mydiv");
  var header = document.getElementById("mydivheader");
  /*  div.classList.toggle("m-fadeOut"); */
  div.style.visibility = "hidden";
  header.style.visibility = "visible";
  header.style.border = "solid 1px gray";
  /* header.style.visibility = "visible";
  header.style.opacity = 1; */
}
function maximizeDiv() {
  var div = document.getElementById("mydiv");
  var header = document.getElementById("mydivheader");
  div.style.visibility = "visible";
  header.style.visibility = "visible";
  header.style.border = "none";
}
elements();
