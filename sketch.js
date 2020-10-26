var canvas, backgroundImage;

var gamestate = 0;
var playerCount;

var database;

var form, player, game;

function setup() {
  createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
}