"use strict";

import {Player} from "./player.js";

/*

Créer une classe Guerrière (Warrior) qui hérite de Player
Créer une méthode kick() qui affiche "Ouille!" dans la console
*/

export class Warrior extends Player {
    kick() {
        console.log("Ouille!");
    }
}

