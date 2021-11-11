import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image('player', 'assets/man.png');
    this.load.image('beer', 'assets/beer.png');
    //add animation for player in spritesheet
  }

  create() {
    this.add.image(400, 300, 'beer');
    this.add.image(300, 200, 'man');
  }
}
