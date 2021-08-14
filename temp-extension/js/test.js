// ctrl + option + n for å kjøre
// Dette er et shit forsøk på en algo som deler CurrentBet inn i tideler av currentBet,
// Slik at det blir færre knapper å trykke på :P

var int = 0.66;
i = 1000000;
while (i != 0) {
  if (~~(int / 0.1) >= 1) {
    result = ~~(int / 0.1);
    console.log("Times 0.1: " + result);
    rest = Math.ceil((int - result * 0.1) * 10000) / 10000;
    console.log("The rest: " + rest);
    i = rest;
  }

  if (~~(rest / 0.01) >= 1) {
    result2 = ~~(rest / 0.01);
    console.log("Times the rest of 0.01: " + result2);
    rest2 = Math.ceil((rest - result2 * 0.01) * 100000) / 100000;
    //console.log("The rest: " + rest2);
    i = rest2;
  }
}
