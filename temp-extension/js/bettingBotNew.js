//Button oversikt

/* Countdown */ //* document.getElementsByClassName("text-2xl font-bold font-numeric")[0].innerText
/* CT-betButton */ //* document.getElementsByClassName("bet-btn")[0]
/* Returnerer true hvis forrige resultat var CT, ellers false */ //*  document.getElementsByClassName("previous-rolls-item")[19].children[0].className == "inline-block w-24 h-24 rounded-full ml-1 coin-ct"
/* Navnet til CT-Coin */ //* document.getElementsByClassName("previous-rolls-item")[19].children[0].className
/* Bet 0.01 (Bytt index for høyere value) */ //* document.getElementsByClassName("bet-input__control")[1]
// HEI DETTE SKAL VISES I COMMITEN

var bodyEL = document.querySelector("body");

var termdiv = document.createElement("div");
var termbtn = document.createElement("button");
termbtn.innerHTML = "JEG ER EN KANPP";

termdiv.style.width = 470 + "px";
termdiv.style.height = 300 + "px";
termdiv.style.backgroundColor = "lightgrey";

termdiv.style.position = "fixed";
termdiv.style.top = 50 + "%";
termdiv.style.left = 50 + "%";
termdiv.style.zIndex = 1000;

termdiv.addEventListener("click", termDiv);

function termDiv() {
  console.log(document.getElementsByClassName("bet-input__control")[1]);
}

termdiv.appendChild(termbtn);
bodyEL.appendChild(termdiv);
