"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-14.08.2022-19.02.2023-1.04m.2023-
//
/*
 НАЗНАЧЕНИЕ

 ИСПОЛЬЗУЕТ МОДУЛИ
    DDME_HTML5_Canvas.js
    DDME_EditorFrames.js
*/
//==============================================================================
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { EditorFrames } from './DDME_EditorFrames.js';
class Tile_for_Map_C {
    constructor() {
        this.G_char = "g"; //GROUNDS character
        this.I_char = "i"; //ITEMS character
        this.M_char = "m"; //MONSTERS character
    } //constructor(width) {
}
;
// Внешние ссылки
var Out = {
    HTML5_Canvas_TestLoadedScripts: HTML5_Canvas.TestLoadedScripts,
    EditorFrames_MapFrame: EditorFrames.MapFrame,
    //=============================================================================
    ini: function () {
        //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    },
    //=============================================================================
};
Out.ini();
var Map_2D = {
    isOk: " ",
    NAME: "Map_2D",
    // это размеры тайловой карты
    widthMax_px: 0,
    heightMax_px: 0,
    // количество тайлов вычисляем по размеру тайловой карты и тайла
    widthMaxTilesCount: 0,
    heightMaxTilesCount: 0,
    MapArrayTile_2d: new Array(5),
    //пример обращения Map_2D.MapArrayTile_2d[i][j]
    // объект описывающий один общий тайл карты с общими для всех тайлов свойствами
    tile: {
        width: 0,
        height: 0, // px это размер тайла по вертикали
    },
    // карта в виде трех строк
    stringMap: {
        saveGrounds: "",
        saveItems: "",
        saveMonsters: "",
    },
    //=============================================================================
    ini: function () {
        Map_2D.tile.width = Out.EditorFrames_MapFrame.tile_SIZE_WIDTH; // px это размер тайла по горизонтали
        Map_2D.tile.height = Out.EditorFrames_MapFrame.tile_SIZE_HEIGHT; // px это размер тайла по вертикали
        // это размеры тайловой карты
        Map_2D.widthMax_px = Out.EditorFrames_MapFrame.width; // это размеры тайловой карты
        Map_2D.heightMax_px = Out.EditorFrames_MapFrame.height;
        let widthMaxTilesCount_temp = Map_2D.widthMax_px / Map_2D.tile.width;
        let heightMaxTilesCount_temp = Map_2D.heightMax_px / Map_2D.tile.height;
        // количество тайлов вычисляем по размеру тайловой карты и тайла
        Map_2D.widthMaxTilesCount = Math.ceil(widthMaxTilesCount_temp);
        Map_2D.heightMaxTilesCount = Math.ceil(heightMaxTilesCount_temp);
        Map_2D.MapArrayTile_2d = new Array(Map_2D.widthMaxTilesCount), // двухмерный массив тайлов class Tile_for_Map_C
            Map_2D.iniMapArrayTile();
    },
    //=============================================================================
    //=============================================================================
    //
    iniMapArrayTile: function () {
        /*
        class Tile_for_Map_C
            G_char - GROUNDS  символы
            I_char - ITEMS    символы
            M_char - MONSTERS символы
        */
        // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for (let i = 0; i < Map_2D.widthMaxTilesCount; i++) {
            Map_2D.MapArrayTile_2d[i] = new Array(Map_2D.heightMaxTilesCount);
            for (let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
                Map_2D.MapArrayTile_2d[i][j] = new Tile_for_Map_C();
                Map_2D.MapArrayTile_2d[i][j].G_char = "c"; //
                Map_2D.MapArrayTile_2d[i][j].I_char = "-"; //-
                Map_2D.MapArrayTile_2d[i][j].M_char = "-"; //-
            }
        }
    },
    //=============================================================================
    //=============================================================================
    // грузим карту из текстового представления
    loadMapArrayTile: function (_saveGrounds, _saveItems, _saveMonsters) {
        //console.log( "DDME_Map_2D.js: Map_2D.loadMapArrayTile ");
        //console.log(DDME_Map_2D.js:_saveGrounds);
        //console.log(DDME_Map_2D.js:_saveItems); 
        //console.log(DDME_Map_2D.js:_saveMonsters);
        let pozChar = 0;
        // заполняем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for (let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
            for (let i = 0; i < Map_2D.widthMaxTilesCount; i++) {
                Map_2D.MapArrayTile_2d[i][j].G_char = _saveGrounds[pozChar];
                Map_2D.MapArrayTile_2d[i][j].I_char = _saveItems[pozChar];
                Map_2D.MapArrayTile_2d[i][j].M_char = _saveMonsters[pozChar];
                pozChar = pozChar + 1;
            }
            pozChar = pozChar + 1;
        }
    },
    //=============================================================================
    //=============================================================================
    // грузим карту в текстовое представление
    saveMapArrayTile: function () {
        //console.log( "DD_SaveInBrowser.js: SaveInBrowser.SaveInBrowser ");
        let saveGrounds = "";
        let saveItems = "";
        let saveMonsters = "";
        // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for (let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
            for (let i = 0; i < Map_2D.widthMaxTilesCount; i++) {
                saveGrounds = saveGrounds + Map_2D.MapArrayTile_2d[i][j].G_char;
                saveItems = saveItems + Map_2D.MapArrayTile_2d[i][j].I_char;
                saveMonsters = saveMonsters + Map_2D.MapArrayTile_2d[i][j].M_char;
            }
            saveGrounds = saveGrounds + '!'; //\n Default
            saveItems = saveItems + '!'; //\n
            saveMonsters = saveMonsters + '!'; //\n
        }
        Map_2D.stringMap.saveGrounds = saveGrounds;
        Map_2D.stringMap.saveItems = saveItems;
        Map_2D.stringMap.saveMonsters = saveMonsters;
    },
    //=============================================================================
}; //Map_2D
Map_2D.ini();
Out.HTML5_Canvas_TestLoadedScripts.testLoading('DDME_Map_2D.js');
Map_2D.isOk = "OK"; //
export { Map_2D };
