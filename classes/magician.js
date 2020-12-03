"use strict";

import {Player} from "./player.js";

/*
Créer une classe Magician qui hérite de Player
Créer une méthode spell() qui affiche "Foudre!" dans la console

Bonus: 
Créer une propriété mana pour le magicien.
Chaque sort utilise 10 points de mana.
Si il n'y a plus assez de mana, spell() affiche "Pas assez de mana!"

*/

export class Magician extends Player {
    constructor(nbLifes, pseudo, mana) {
        super(nbLifes, pseudo);

        this.mana = mana;
    }

    spell() {
        if(this.mana >= 10) {
            console.log("Foudre");
            this.mana-=10;
        }
        else {
            console.log("A PU MANAAAA");
        }
    }
}
