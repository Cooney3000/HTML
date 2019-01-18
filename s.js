const spieler = {
  'Norbrt': {rank: 1,  mp: 0, diff: 0, results: []},
  'ConnyR': {rank: 2,  mp: 0, diff: 0, results: []},
  'MarkuS': {rank: 3,  mp: 0, diff: 0, results: []},
  'MarkuT': {rank: 4,  mp: 0, diff: 0, results: []},
  'Marcus': {rank: 5,  mp: 0, diff: 0, results: []},
  'BenniL': {rank: 6,  mp: 0, diff: 0, results: []},
  'Stefan': {rank: 7,  mp: 0, diff: 0, results: []},
  'Tschou': {rank: 8,  mp: 0, diff: 0, results: []},
  'Schmid': {rank: 9,  mp: 0, diff: 0, results: []},
  'RalfKu': {rank: 10, mp: 0, diff: 0, results: []},
  'AndiHe': {rank: 11, mp: 0, diff: 0, results: []},
  'Thomas': {rank: 12, mp: 0, diff: 0, results: []},
};

for (var sp in spieler) { 
  for (var ge in spieler) {  
    spieler[sp].results.push({gegner: ge, matches: 0, won: 0, loss: 0});
  }
}

// Runde 1

// Für die Gegnersuche brauchen wir ein Array statt ein Objekt
const spielerArr = [];
for (let sp in spieler) {
  spielerArr.push({name: sp, results: spieler[sp].results});
}


const runde1 = [];
let i = 0;
sp = 0;
findeNaechstenGegner(sp);

console.log(spieler);

//--------------------------------------------------------------------
function findeNaechstenGegner(sp) {
  if (spielerArr[sp].name === spielerArr[sp].results[i].gegner) {
    i++;
  }
  if (i >= spielerArr.length || sp >= spielerArr.length) {
    return false;
  }
  if (spielerArr[sp].results[i].matches === 0) {
    runde1.push({spieler: spielerArr[sp].name, gegner: spielerArr[sp].results[i].gegner});
    spielerArr[sp].results[i].matches++;
    spielerArr[i].results[sp].matches++;
    spieler[spielerArr[sp].name].results[i].matches++;
    spieler[spielerArr[sp].results[i].gegner].results[sp].matches++;
    sp++;
    i = 0;
    findeNaechstenGegner(sp);
  } else {
    i++;
    findeNaechstenGegner(sp);
  }
}
