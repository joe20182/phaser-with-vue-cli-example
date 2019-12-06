import Phaser from "phaser";
import { gameConfig } from "@/utils/config";
import { parseColor } from "@/utils/parser";

const radius = 0.1 * Math.min(gameConfig.width / 2, gameConfig.height / 2);
const bounds = new Phaser.Geom.Rectangle(0, 0, gameConfig.width - 2 * radius, gameConfig.height - 2 * radius);

const circles = {
  state: {
    circles: []
  },
  mutations: {
    ADD_CIRCLE: (state, circleData) => {
      state.circles.push(circleData);
    }
  },
  actions: {
    addCircle({ commit }) {
      const { x, y } = Phaser.Geom.Rectangle.Random(bounds);
      const color = parseColor("#aa00ff");
      commit("ADD_CIRCLE", { x, y, radius, color });
    }
  },
  namespaced: true
};

export default circles;
