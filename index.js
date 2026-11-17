let nrLibrave = 3;
let cmimiLibrave = 12.50;

let nrFletoreve = 4;
let cmimiFletoreve = 1.80;

let kostojaLibrave = nrLibrave * cmimiLibrave;
let kosotojaFletoreve = nrFletoreve * cmimiFletoreve;

let kostojaTotale = kostojaLibrave + kosotojaFletoreve;
kostojaTotale += 2.50;

console.log("Kostoja e librave: " + kostojaLibrave);
console.log("Kostoja e fletoreve: " + kosotojaFletoreve);
console.log(kostojaTotale);

