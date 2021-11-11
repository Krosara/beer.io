import Phaser from 'phaser';
import GameScene from './GameScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
    },
  },
  scene: [GameScene],
};

export default config;
