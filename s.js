// Befuellung

// const spieler = { 
//   'Norbrt': {rank: 1,  mp: 0, diff: 0, results: []},
//   'ConnyR': {rank: 2,  mp: 0, diff: 0, results: []},
//   'MarkuS': {rank: 3,  mp: 0, diff: 0, results: []},
//   'MarkuT': {rank: 4,  mp: 0, diff: 0, results: []},
//   'Marcus': {rank: 5,  mp: 0, diff: 0, results: []},
//   'BenniL': {rank: 6,  mp: 0, diff: 0, results: []},
//   'Stefan': {rank: 7,  mp: 0, diff: 0, results: []},
//   'Tschou': {rank: 8,  mp: 0, diff: 0, results: []},
//   'Schmid': {rank: 9,  mp: 0, diff: 0, results: []},
//   'RalfKu': {rank: 10, mp: 0, diff: 0, results: []},
//   'AndiHe': {rank: 11, mp: 0, diff: 0, results: []},
//   'Thomas': {rank: 12, mp: 0, diff: 0, results: []},
// };
// for (var sp in spieler) { 
//   for (var ge in spieler) {  
//     spieler[sp].results.push({gegner: ge, matches: 0, won: 0, loss: 0});
//   }
// }

// In dieser Variante ist die Reihenfolge auch der Rank
const spieler = [ 
  {name: 'Norbrt', mp: 0, diff: 0, results: []},
  {name: 'ConnyR', mp: 0, diff: 0, results: []},
  {name: 'MarkuS', mp: 0, diff: 0, results: []},
  {name: 'MarkuT', mp: 0, diff: 0, results: []},
  {name: 'Marcus', mp: 0, diff: 0, results: []},
  {name: 'BenniL', mp: 0, diff: 0, results: []},
  {name: 'Stefan', mp: 0, diff: 0, results: []},
  {name: 'Tschou', mp: 0, diff: 0, results: []},
  {name: 'Schmid', mp: 0, diff: 0, results: []},
  {name: 'RalfKu', mp: 0, diff: 0, results: []},
  {name: 'AndiHe', mp: 0, diff: 0, results: []},
  {name: 'Thomas', mp: 0, diff: 0, results: []},
];
for (var sp in spieler) { 
  for (var ge in spieler) {  
    if (spieler[sp].name != spieler[ge].name) {
      spieler[sp].results.push({gegner: spieler[ge].name, matches: 0, won: 0, loss: 0});
    }
  }
}

//
// Runde 1
const runde = [];

for (let sp in spieler) {
  
  let geFound = false;
  for (let ge in spieler[sp].results) {
    
    if (spieler[sp].results[ge].matches == 0) {
      runde.push({spieler: spieler[sp].name, gegner: spieler[sp].results[ge].gegner});
      // Eintrag bei Spieler und Gegner
      addMatch(spieler[sp].name, spieler[sp].results[ge].gegner);
      geFound = true;
      break;
    }
  
  }

}

function addMatch(name1, name2) {
  // Beim Spieler eintragen
  let sp = spieler.map(e => e.name).indexOf(name1);
  let begegnung = spieler[sp].results.map(e => e.gegner).indexOf(name2);
  spieler[sp].results[begegnung].matches++;
  // Beim Gegner eintragen
  sp = spieler.map(e => e.name).indexOf(name2);
  begegnung = spieler[sp].results.map(e => e.gegner).indexOf(name1);
  spieler[sp].results[begegnung].matches++;
} 



