import { boardHelper } from  './helpers/boardHelper.js';

function renderGame() {
  document.body.appendChild(boardHelper.getBoardFor('clientBoard'));
  document.body.appendChild(boardHelper.getBoardFor('enemyBoard'));
}

window.onload = function() {
  renderGame();
};

// https://en.wikipedia.org/wiki/Battleship_(game)#/media/File:Battleships_Paper_Game.svg nice description
// AircraftCarrier  5
// Battleship  4
// Submarine 3
// Destroyer  3
// PatrolBoat  2
