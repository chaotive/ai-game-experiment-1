import { IRefPhaserGame } from "../../PhaserGame.tsx";
import {MainMenu} from "../../game/scenes/MainMenu.ts";
import {Dispatch, SetStateAction} from "react";
import * as sprite from "../../game/controllers/sprite.ts";
import {IWindowScene} from "../types";

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

export const AddSprite = (phaserRef: IRefPhaserGame | null) => sprite.AddSprite(phaserRef, "star");

export const ChangeScene = (phaserRef: IRefPhaserGame | null) => {
    if ( !phaserRef ) { return; }
    
    const scene = phaserRef.scene as IWindowScene;
    if ( !scene ) { return; }
    
    scene.changeScene();
}
