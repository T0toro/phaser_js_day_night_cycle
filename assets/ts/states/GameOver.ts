'use strict';

import * as Phaser from 'phaser';

class GameOver extends Phaser.State {
  create() {}

  restartGame() {
    this.game.state.start("Main");
  }

}

export default GameOver;