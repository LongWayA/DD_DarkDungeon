"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-19.02.2023-2.04m.2023-
//
/*
 НАЗНАЧЕНИЕ

 ИСПОЛЬЗУЕТ МОДУЛИ
   DDME_HTML5_Canvas.js
   DDME_HTML5_SpritesMap_2D.js
   DDME_Map_2D.js
 
*/
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { Map_2D } from './DDME_Map_2D.js';
import { SpritesMap_2D } from './DDME_HTML5_SpritesMap_2D.js';
// Внешние ссылки
var Out = {
    HTML5_Canvas: HTML5_Canvas,
    HTML5_Canvas_TestLoadedScripts: HTML5_Canvas.TestLoadedScripts,
    Map_2D: Map_2D,
    SpritesMap_2D: SpritesMap_2D,
    //=============================================================================
    ini: function () {
        //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    },
    //=============================================================================
};
Out.ini();
var MapFrameDraw = {
    isOk: " ",
    NAME: "MapFrameDraw",
    checkbox_drawGrounds_checked: true,
    checkbox_drawItems_checked: true,
    checkbox_drawMonsters_checked: true,
    //=============================================================================
    ini: function () {
    },
    //=============================================================================
    //============================================================================
    drawMap: function (_x0, _y0, _log = false) {
        let tipeTiles = 1; // сюда перезаписываем номер нужного тайла и потом отрисовывается тайл. и так для всех слоев
        let G_char_L = " "; // сюда перезаписываем символ нужного тайла для земли
        let I_char_L = " "; // сюда перезаписываем символ нужного тайла для предметов
        let M_char_L = " "; // сюда перезаписываем символ нужного тайла для монстров
        let imageK = " "; // сюда перезаписываем картинку тайла которую хотим нарисовать
        //MapFrameDraw.HTML5_Canvas_OUT.context.clearRect(_x0, _y0, MapFrameDraw.HTML5_Canvas_OUT.Id.width, MapFrameDraw.HTML5_Canvas_OUT.Id.height);
        Out.HTML5_Canvas.context_OUT.clearRect(_x0, _y0, Out.Map_2D.widthMax_px, Out.Map_2D.heightMax_px);
        for (let j = 0; j < Out.Map_2D.heightMaxTilesCount; j++) {
            for (let i = 0; i < Out.Map_2D.widthMaxTilesCount; i++) {
                //GROUNDS--------------------------------------------------------------------------------------
                // смотрим тип тайла записанный в массиве тайлов(MapFrameDraw.Map_2D_OUT.MapArrayTile_2d) который мы рисуем
                G_char_L = Out.Map_2D.MapArrayTile_2d[i][j].G_char; // находим символ нужного тайла
                tipeTiles = Out.SpritesMap_2D.GroundsMapChars.get(G_char_L); // по символу находим номер нужного тайла
                if (_log == true)
                    console.log('m ' + i + ' ' + j + ' G_char_L = ' + G_char_L);
                imageK = Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.GROUNDS][tipeTiles].tile_Image_OUT; // находим картинку тайла которую хотим нарисовать
                if (MapFrameDraw.checkbox_drawGrounds_checked == true) {
                    // рисуем тайл на экране в заданном месте и заданного размера, MapFrameDraw.HTML5_Canvas_OUT.Image.DRAW_MIRROR
                    Out.HTML5_Canvas.Image.drawImage(imageK, i * Out.Map_2D.tile.width + _x0, j * Out.Map_2D.tile.height + _y0, Out.Map_2D.tile.width, Out.Map_2D.tile.height);
                }
                // рисуем символ соответствующий тайлу
                //MapFrameDraw.HTML5_Canvas_OUT.context.strokeText (MapFrameDraw.Map_2D_OUT.MapArrayTile_2d[i][j].G_char, i * MapFrameDraw.Map_2D_OUT.tile.width + _x0, j * MapFrameDraw.Map_2D_OUT.tile.height + _y0 + 10);//
                //
                Out.HTML5_Canvas.Primitive.drawRect("DDME_MapFrameDraw.js", i * Out.Map_2D.tile.width + _x0, j * Out.Map_2D.tile.height + _y0, Out.Map_2D.tile.width, Out.Map_2D.tile.height, 1, 'blue', 0);
                //--------------------------------------------------------------------------------------
                //ITEMS--------------------------------------------------------------------------------------
                // смотрим тип тайла записанный в массиве тайлов(MapFrameDraw.Map_2D_OUT.MapArrayTile_2d) который мы рисуем
                I_char_L = Out.Map_2D.MapArrayTile_2d[i][j].I_char; // находим символ нужного тайла
                if (_log == true)
                    console.log('m ' + i + ' ' + j + ' I_char_L = ' + I_char_L);
                if (I_char_L != "-") {
                    tipeTiles = Out.SpritesMap_2D.ItemsMapChars.get(I_char_L); // по символу находим номер нужного тайла
                    imageK = Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.ITEMS][tipeTiles].tile_Image_OUT; // находим картинку тайла которую хотим нарисовать
                    if (MapFrameDraw.checkbox_drawItems_checked == true) {
                        // рисуем тайл на экране в заданном месте и заданного размера , MapFrameDraw.HTML5_Canvas_OUT.Image.DRAW_MIRROR
                        Out.HTML5_Canvas.Image.drawImage(imageK, i * Out.Map_2D.tile.width + _x0, j * Out.Map_2D.tile.height + _y0, Out.Map_2D.tile.width, Out.Map_2D.tile.height);
                    }
                }
                //--------------------------------------------------------------------------------------
                //MONSTERS--------------------------------------------------------------------------------------
                // смотрим тип тайла записанный в массиве тайлов(MapFrameDraw.Map_2D_OUT.MapArrayTile_2d) который мы рисуем
                M_char_L = Out.Map_2D.MapArrayTile_2d[i][j].M_char; // находим символ нужного тайла
                if (_log == true)
                    console.log('m ' + i + ' ' + j + ' M_char_L = ' + M_char_L);
                if (M_char_L != "-") {
                    tipeTiles = Out.SpritesMap_2D.MonstersMapChars.get(M_char_L); // по символу находим номер нужного тайла
                    imageK = Out.SpritesMap_2D.tilesLoad[Out.SpritesMap_2D.MONSTERS][tipeTiles].tile_Image_OUT; // находим картинку тайла которую хотим нарисовать
                    if (MapFrameDraw.checkbox_drawMonsters_checked == true) {
                        // рисуем тайл на экране в заданном месте и заданного размера , MapFrameDraw.HTML5_Canvas_OUT.Image.DRAW_MIRROR
                        Out.HTML5_Canvas.Image.drawImage(imageK, i * Out.Map_2D.tile.width + _x0, j * Out.Map_2D.tile.height + _y0, Out.Map_2D.tile.width, Out.Map_2D.tile.height);
                    }
                }
                //-------------------------------------------------------------------------------------- 
            }
        }
        //MapFrameDraw.HTML5_Canvas_OUT.Primitive.drawRect(_x0, _y0, MapFrameDraw.Map_2D_OUT.widthMax_px,MapFrameDraw.Map_2D_OUT.heightMax_px, 1, 'blue', 0);
        //MapFrameDraw.HTML5_Canvas_OUT.context.clearRect(_x0, _y0, MapFrameDraw.Map_2D_OUT.widthMax_px, MapFrameDraw.Map_2D_OUT.heightMax_px);
    },
    //============================================================================
}; //MapFrameDraw
//
MapFrameDraw.ini();
Out.HTML5_Canvas_TestLoadedScripts.testLoading('DDME_MapFrameDraw.js');
MapFrameDraw.isOk = "OK"; //
export { MapFrameDraw };
