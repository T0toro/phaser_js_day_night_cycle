'use strict';

import * as Phaser from 'phaser';

class Preload extends Phaser.State {
  preload() {
    this.game.load.image('mountains-back', '/assets/img/mountains-back.png');
    this.game.load.image('mountains-mid1', '/assets/img/mountains-mid1.png');
    this.game.load.image('mountains-mid2', '/assets/img/mountains-mid2.png');
    this.game.load.image('sun', '/assets/img/sun.png');
    this.game.load.image('moon', '/assets/img/moon.png');
  }

  create() {
    this.game.state.start("Main");
  }

}

export default Preload;
