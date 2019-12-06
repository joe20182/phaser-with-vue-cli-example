import Phaser from "phaser";
import { gameConfig } from "./config";

export const createGame = (parent, store) => {
  const scene = {
    create() {
      const renderCircle = ({ x, y, radius, color }, index) => {
        if (index < this.children.getChildren().length) {
          const circle = this.children.getChildren()[index];
          this.tweens.add({
            targets: circle,
            duration: 300,
            x,
            y
          });
          return;
        }

        const circle = this.add.circle(x, y, radius, color);
        circle.setOrigin(0, 0);
      };

      store.state["circles"].circles.forEach(renderCircle);

      const unwatch = store.watch(
        state => state["circles"].circles,
        circles => {
          circles.forEach(renderCircle);
        },
        { deep: true }
      );

      this.sys.events.on("destroy", () => unwatch());
    }
  };

  return new Phaser.Game({
    ...gameConfig,
    parent,
    scene
  });
};
