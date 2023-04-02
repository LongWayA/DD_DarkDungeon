"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-19.02.2023-2.04m.2023-
//
/*
 НАЗНАЧЕНИЕ

 ИСПОЛЬЗУЕТ МОДУЛИ
   DDME_HTML5_Canvas.js
   DDME_HTML5_SpritesMap_2D.js
   DDME_EditorFrames.js
*/
//==============================================================================
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { SpritesMap_2D } from './DDME_HTML5_SpritesMap_2D.js';
import { EditorFrames } from './DDME_EditorFrames.js';
// Внешние ссылки
var Out = {
    HTML5_Canvas: HTML5_Canvas,
    HTML5_Canvas_TestLoadedScripts: HTML5_Canvas.TestLoadedScripts,
    SpritesMap_2D: SpritesMap_2D,
    EditorFrames: EditorFrames,
    //=============================================================================
    ini: function () {
        //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    },
    //=============================================================================
};
var TilesFrameDraw = {
    isOk: "",
    NAME: "TilesFrameDraw",
    //=============================================================================
    ini: function () {
    },
    //=============================================================================
    /*
       */
    //============================================================================
    drawSelectTiles: function (_lef) {
        let imageK = "";
        Out.HTML5_Canvas.context_OUT.clearRect(Out.EditorFrames.TilesPanelFrame.Ground_X0, Out.EditorFrames.TilesPanelFrame.Ground_Y0, (Out.SpritesMap_2D.GROUNDS_MAX_COUNT - 1) * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);
        Out.HTML5_Canvas.Primitive.drawRect("DDME_TilesFrameDraw.js", Out.EditorFrames.TilesPanelFrame.Ground_X0, Out.EditorFrames.TilesPanelFrame.Ground_Y0, (Out.SpritesMap_2D.GROUNDS_MAX_COUNT - 1) * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'green', 0);
        //console.log("DD_Map_2D.js: TilesFrameDraw.drawSelectTilesG_X0 = " + TilesFrameDraw.drawSelectTilesG_X0);
        //console.log("DD_Map_2D.js: TilesFrameDraw.drawSelectTilesG_Y0 =" + TilesFrameDraw.drawSelectTilesG_Y0);
        let j_1 = 0;
        /////////////////////////////////////////////////////////////////
        // отображаем файлы уровня земля
        for (let j = 0; j < Out.SpritesMap_2D.GROUNDS_MAX_COUNT; j++) {
            // выбираем очередной тайл для изображения
            imageK = Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.GROUNDS][j].tile_Image_OUT;
            j_1 = j; // что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности
            //
            Out.HTML5_Canvas.Image.drawImage(imageK, j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Out.EditorFrames.TilesPanelFrame.Ground_X0, Out.EditorFrames.TilesPanelFrame.Ground_Y0, Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);
            //
            //Out.HTML5_Canvas.context.strokeText (Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.GROUNDS][j].tile_char, j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesG_X0, Map_2D.drawSelectTilesG_Y0 +10);//
            //
            //Out.HTML5_Canvas.Primitive.drawRect(j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesG_X0, Map_2D.drawSelectTilesG_Y0, Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
        }
        /////////////////////////////////////////////////////////////////
        //console.log("Map_2D.drawSelectTilesI_Y0 =" + Map_2D.drawSelectTilesI_Y0);
        // отображаем файлы уровня предметы
        for (let j = 0; j < Out.SpritesMap_2D.ITEMS_MAX_COUNT; j++) {
            // выбираем очередной тайл для изображения
            imageK = Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.ITEMS][j].tile_Image_OUT;
            j_1 = j; // что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности
            //
            Out.HTML5_Canvas.Image.drawImage(imageK, j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Out.EditorFrames.TilesPanelFrame.Item_X0, Out.EditorFrames.TilesPanelFrame.Item_Y0, Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);
            //Out.HTML5_Canvas.context.strokeText (Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.ITEMS][j].tile_char, j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesI_X0, Map_2D.drawSelectTilesI_Y0 +10);//
            //
            Out.HTML5_Canvas.Primitive.drawRect("DDME_TilesFrameDraw.js", j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Out.EditorFrames.TilesPanelFrame.Item_X0, Out.EditorFrames.TilesPanelFrame.Item_Y0, Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
        }
        /////////////////////////////////////////////////////////////////
        //console.log("Map_2D.drawSelectTilesM_Y0 =" + Map_2D.drawSelectTilesM_Y0);
        for (let j = 0; j < Out.SpritesMap_2D.MONSTERS_MAX_COUNT; j++) {
            imageK = Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.MONSTERS][j].tile_Image_OUT;
            j_1 = j;
            Out.HTML5_Canvas.Image.drawImage(imageK, j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Out.EditorFrames.TilesPanelFrame.Monster_X0, Out.EditorFrames.TilesPanelFrame.Monster_Y0, Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);
            //Out.HTML5_Canvas.context.strokeText (Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.MONSTERS][j].tile_char, j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesM_X0, Map_2D.drawSelectTilesM_Y0 +10);//
            Out.HTML5_Canvas.Primitive.drawRect("DDME_TilesFrameDraw.js", j_1 * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Out.EditorFrames.TilesPanelFrame.Monster_X0, Out.EditorFrames.TilesPanelFrame.Monster_Y0, Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
        }
        /////////////////////////////////////////////////////////////////
    },
    //============================================================================
}; //TilesFrameDraw
TilesFrameDraw.ini();
Out.HTML5_Canvas_TestLoadedScripts.testLoading('DDME_TilesFrameDraw.js');
TilesFrameDraw.isOk = "OK"; //
export { TilesFrameDraw };
