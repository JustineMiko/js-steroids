"use strict";

/*

Bonus numéro 2:
Chaque classe est dans son propre fichier
La création des persos et leurs actions seront faits dans le app.js

*/

import {Warrior} from "./warrior.js";
import {Magician} from "./magician.js";

/*
Créer un perso Warrior avec un pseudo rigolo et un perso Magician avec un
pseudo badass
Lancer kick et hello sur le perso Warrior
Lancer spell et hello sur le perso Magician
*/

const krom = new Warrior(8000,"Krôm");
krom.hello();
krom.kick();


const gandalf = new Magician(2,"Gandalf", 24);
gandalf.hello();
gandalf.spell();
gandalf.spell();
gandalf.spell();


