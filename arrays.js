// Befuellung

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
    
    // Gibt es die Begegnung in dieser Runde bereits?
    //let neueBegegnung = runde.map(e => (e.spieler === spName && e.gegner === geName) || (e.spieler === geName && e.gegner === spName)).length == 0
    
    if ( /*neueBegegnung && */  (spieler[sp].results[ge].matches == 0)) {
      let spName = spieler[sp].name;
      let geName = spieler[sp].results[ge].gegner;
      
      runde.push({spieler: spName, gegner: geName});
      // Eintrag bei Spieler und Gegner
      addMatch(spName, geName);
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



