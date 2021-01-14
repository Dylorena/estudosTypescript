"use strict";
var telou = {
    title: 'The last of Us',
    description: "The best game in the word",
    genere: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similar games to " + title);
    }
};
// Quando um método é necessário colocar um tratamento para a possibilidade de ser undefined
// então caso a função seja opcional:
if (telou.getSimilars)
    telou.getSimilars(telou.title);
var leftBehind = {
    title: 'The last of Us - BEHIND',
    description: "The best game in the word - BEHIND",
    genere: 'Action - BEHIND',
    platform: ['PS3- BEHIND', 'PS4- BEHIND'],
    originalGame: telou,
    newContent: ['Teste 1', ' Teste 2'],
};
console.log(leftBehind);
//-----------------------------Exemplo de classes baseada em interface
// é usado a palavra implements
//Para usar duas interfaces na classe: class createGame implements IGame, IOutraInterface {}
var createGame = /** @class */ (function () {
    function createGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genere = g;
    }
    return createGame;
}());
