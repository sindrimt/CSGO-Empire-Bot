// ctrl + option + n for å kjøre
// Dette er et shit forsøk på en algo som deler CurrentBet inn i tideler av currentBet,
// Slik at det blir færre knapper å trykke på :P

//TODO Implementer denne med placeBet()
// Deler opp tallet inn i komponenter i en array (tallene tilsvarer da tiendedelsplassen dems (gang med tiendedelsplassen))
var myNumber = 0.66;
function numberToArray(number) {
  let array = number.toString().split(""); // Gjør om til streng

  var intedArray = array.map((x) => parseInt(x)); // Mapper til listen til int

  var filteredArray = intedArray.filter(function (value) {
    // Filtrer ut NaN fra listen
    return !Number.isNaN(value);
  });
  return filteredArray;
}
var returnLog = numberToArray(myNumber); // Initsialiserer funksjonen

var increment = 1;
// Valuen som ganges for hver iterasjon av forLøkka
// Denne skal da klikke på knappen utifra resultat
for (let index of returnLog) {
  console.log(
    "Clicked " + parseFloat(increment).toPrecision(1) + " : " + index + " Times"
  );
  increment *= 0.1;
}

function sumtoNum(n) {
  return (n ** 2 + n) / 2;
}

console.log(sumtoNum(1));
console.log(sumtoNum(2));
console.log(sumtoNum(3));
console.log(sumtoNum(4));
console.log(sumtoNum(5));

/* var int = 0.66;
var faktor = 0.1;
i = 1000000;
while (i != 0) {
  if (~~(int / faktor) >= 1) {
    result = ~~(int / faktor);
    console.log("Times 0.1: " + result);
    rest = Math.ceil((int - result * 0.1) * 10000) / 10000;
    console.log("The rest: " + rest);
    int = rest;
    faktor *= 0.1;
    i = 0;
  } */

/*  if (~~(int / 0.01) >= 1) {
    result2 = ~~(int / 0.01);
    console.log("Times the rest of 0.01: " + result2);
    rest2 = Math.ceil((int - result2 * 0.01) * 100000) / 100000;
    //console.log("The rest: " + rest2);
    i = rest2;
  } */

//use the function
