import Phaser from 'phaser'

import { gameConfig } from "@/utils/config";
import { parseColor } from "@/utils/parser";

let circle
let game

// circleParameters
const x = gameConfig.width / 2
const y = gameConfig.height / 2
const radius = 0.9 * Math.min(x, y)
const circleParameters = [x, y, radius, parseColor('#0000ff')]

const actions = {
  initializeGame(_, parent) {
    const scene = {
      create() {
        circle = this.add.circle(...circleParameters)
      }
    }
    game = new Phaser.Game({
      ...gameConfig,
      parent,
      scene
    })
  },
  setColor(_, { value }) {
    circle.setFillStyle(parseColor(value))
  },
  destroyGame() {
    game.destroy()
  }
}

const phaserInStore = {
  namespaced: true,
  actions
}

export default phaserInStore
