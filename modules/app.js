"use strict";

// import {namePlayers, start, end} from "./game.js";
// import {nikeTaReum} from "./score.js";

// start();
// console.log(namePlayers);
// console.log(nikeTaReum());
// end();

/*
Dans un fichier loop.js, vous allez créer une fonction qui prend un nombre
Et qui affiche de 1 à ce nombre dans la console

Demander dans app.js un nombre à l'utilisateur, et en profiter
pour exécuter dans app.js la fonction récupérée depuis loop.js
*/

import {showFrom1toNumber} from "./loop.js";

const nbUser = Number(prompt("Entrez un nombre"));
console.log(nbUser);

showFrom1toNumber(nbUser);