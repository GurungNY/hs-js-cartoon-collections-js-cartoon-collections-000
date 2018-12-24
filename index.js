function dwarfRollCall(dwarves) {
  var numList = ""

  for (let i = 0, l = dwarves.length; i < l; i++) {
    numList += (`${i + 1}. ` + dwarves[i] + " ")
  };

  return numList;
}

function summonCaptainPlanet(planeteerCalls){
  var cap = []

  for (let i=0; i < planeteerCalls.length; i++) {
    cap.push(planeteerCalls[i].toUpperCase() + "!")
  }

  return cap
}

function longPlaneteerCalls(words) {
  var calls = []

  for (var i=0; i < words.length; i++) {
    if (words.length > 4) {
    return true
  }
  else
  return false
}
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];

  for (let i = 0; i < foods.length; i++ ) {
    for (let l = 0; l < cheese.length; l++){
    if (cheese[l] === foods[i]) {
      return cheese[l];
  }
 }
 }
 return "no cheese!"
}


  // var cheeses = ["cheddar", "gouda", "camembert"]
  //
  // for (var i=0; i < foods.length; i++) {
  //   for (var ched = 0; ched < cheeses.length; ched++) {
  //     if (cheeses[ched] === foods[i]) {
  //       return foods[i];
  //     }
  //     else
  //     return "no cheese!"
  //   }
  // }
// }
