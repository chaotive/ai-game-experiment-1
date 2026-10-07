import * as Phaser from 'phaser';
import { IRefPhaserGame } from "../../PhaserGame.tsx";

export const AddSprite = (phaserRef: IRefPhaserGame | null, texture: string) => {
    if ( !phaserRef ) { return; }

    const scene = phaserRef.scene;
    if (scene) {
        // Add more stars
        const x = Phaser.Math.Between(64, scene.scale.width - 64);
        const y = Phaser.Math.Between(64, scene.scale.height - 64);

        //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
        const textureSprite = scene.add.sprite(x, y, texture);

        //  ... which you can then act upon. Here we create a Phaser Tween to fade the star sprite in and out.
        //  You could, of course, do this from within the Phaser Scene code, but this is just an example
        //  showing that Phaser objects and systems can be acted upon from outside of Phaser itself.
        scene.add.tween({
            targets: textureSprite,
            duration: 500 + Math.random() * 1000,
            alpha: 0,
            yoyo: true,
            repeat: -1
        });
    }
}