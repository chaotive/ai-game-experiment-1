import { IRefPhaserGame } from "../../PhaserGame.tsx";
import {MainMenu} from "../scenes/MainMenu.ts";
import {Dispatch, SetStateAction} from "react";
import * as sprite from "../../game/controllers/sprite.ts";
import {IWindowScene} from "../types";
import * as Phaser from 'phaser';

export const MoveSprite = (phaserRef: IRefPhaserGame | null, setSpritePosition: Dispatch<SetStateAction<any>>) => {
    if ( !phaserRef ) { return; }

    const scene = phaserRef.scene as MainMenu;
    if (scene && scene.scene.key === 'MainMenu')
    {
        // Get the update logo position
        scene.moveLogo(({ x, y }) => {
            setSpritePosition({ x, y });
        });
    }
}

const textures = ["star", "golden_chicken", "rubber_duck", "narwhal", "exploding_cat", "pizza_slice", "unicorn", "banana_peel", "taco"];

export const AddSprite = (phaserRef: IRefPhaserGame | null) => {
    const texture = textures[Phaser.Math.Between(0, textures.length - 1)];
    
    sprite.AddSprite(phaserRef, texture);
};

export const ChangeScene = (phaserRef: IRefPhaserGame | null) => {
    if ( !phaserRef ) { return; }
    
    const scene = phaserRef.scene as IWindowScene;
    if ( !scene ) { return; }
    
    scene.changeScene();
}
