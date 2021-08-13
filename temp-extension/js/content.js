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

    //
    var clickStartTracker = 0;

    var countdown = document.getElementsByClassName(
      "text-2xl font-bold font-numeric"
    )[0].innerText;

    function main() {
      console.log("main start");
      console.log(countdown);
      clickStartTracker++;
      console.log(clickStartTracker);

      //Husk å oppdatere clickStartTacker til 0 etter runde

      /* if (clickStartTracker > 1) {
    console.log("Kan ikke trykke start to ganger");
    return;
  }*/
      console.log("starter likevel");
    }

    function placeBet() {}
  }
});
