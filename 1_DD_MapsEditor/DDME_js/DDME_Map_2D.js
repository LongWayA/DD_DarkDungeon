"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-14.08.2022-19.02.2023-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
      DDME_HTML5_Canvas.js
      DDME_EditorFrames.js
  */


//==============================================================================

class Tile_for_Map_C {
  constructor() {
    this.G_char = "g" ;//GROUNDS character
    this.I_char = "i" ;//ITEMS character
    this.M_char = "m" ;//MONSTERS character
  }//constructor(width) {
};


window.Map_2D = {};
  Map_2D.isOk = " ";//
  Map_2D.NAME = "Map_2D";//

  // Внешние ссылки
  Map_2D.HTML5_Canvas_TestLoadedScripts_OUT;
  Map_2D.EditorFrames_MapFrame_OUT;

  // это размеры тайловой карты
  Map_2D.widthMax_px;
  Map_2D.heightMax_px;

  // количество тайлов вычисляем по размеру тайловой карты и тайла
  Map_2D.widthMaxTilesCount;
  Map_2D.heightMaxTilesCount;

  Map_2D.MapArrayTile_2d;// двухмерный массив тайлов class Tile_for_Map_C
  //пример обращения Map_2D.MapArrayTile_2d[i][j]

  // объект описывающий один общий тайл карты с общими для всех тайлов свойствами
  Map_2D.tile = {};
     Map_2D.tile.width;// px это размер тайла по горизонтали
     Map_2D.tile.height;// px это размер тайла по вертикали

  // карта в виде трех строк
  Map_2D.stringMap = {};
    Map_2D.stringMap.saveGrounds;
    Map_2D.stringMap.saveItems;
    Map_2D.stringMap.saveMonsters;

  
  
//=============================================================================
  Map_2D.ini = function(){
    
      Map_2D.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
      Map_2D.EditorFrames_MapFrame_OUT = EditorFrames.MapFrame;

      Map_2D.tile.width  = Map_2D.EditorFrames_MapFrame_OUT.tile_SIZE_WIDTH;// px это размер тайла по горизонтали
      Map_2D.tile.height = Map_2D.EditorFrames_MapFrame_OUT.tile_SIZE_HEIGHT;// px это размер тайла по вертикали
      //console.log("DDME_Map_2D.js: Map_2D.tile.width = " + Map_2D.tile.width);
      //console.log("DDME_Map_2D.js: Map_2D.tile.height = " + Map_2D.tile.height);

      Map_2D.stringMap.saveGrounds  = "";
      Map_2D.stringMap.saveItems    = "";
      Map_2D.stringMap.saveMonsters = "";

      Map_2D.widthMax_px = Map_2D.EditorFrames_MapFrame_OUT.width;// это размеры тайловой карты
      Map_2D.heightMax_px = Map_2D.EditorFrames_MapFrame_OUT.height;

      // количество тайлов вычисляем по размеру тайловой карты и тайла
      Map_2D.widthMaxTilesCount = Map_2D.widthMax_px/Map_2D.tile.width;
      Map_2D.heightMaxTilesCount = Map_2D.heightMax_px/Map_2D.tile.height;

      Map_2D.widthMaxTilesCount  = Math.ceil(Map_2D.widthMaxTilesCount);
      Map_2D.heightMaxTilesCount = Math.ceil(Map_2D.heightMaxTilesCount);

      //console.log("DDME_Map_2D.js: Map_2D.widthMaxTilesCount = " + Map_2D.widthMaxTilesCount);
      //console.log("DDME_Map_2D.js: Map_2D.heightMaxTilesCount = " + Map_2D.heightMaxTilesCount);

      Map_2D.MapArrayTile_2d = new Array(Map_2D.widthMaxTilesCount);// двухмерный массив тайлов

      //console.log("DDME_Map_2D.js: OK1");

      Map_2D.iniMapArrayTile();
  }
//=============================================================================

//=============================================================================
 //
 Map_2D.iniMapArrayTile = function(){

/*
class Tile_for_Map_C
    G_char - GROUNDS  символы
    I_char - ITEMS    символы
    M_char - MONSTERS символы
*/

   // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
   for ( let i = 0; i < Map_2D.widthMaxTilesCount; i++) {

    Map_2D.MapArrayTile_2d[i] = new Array(Map_2D.heightMaxTilesCount);

    for (let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
      Map_2D.MapArrayTile_2d[i][j] = new Tile_for_Map_C();
      Map_2D.MapArrayTile_2d[i][j].G_char ="c";//
      Map_2D.MapArrayTile_2d[i][j].I_char ="-";//-
      Map_2D.MapArrayTile_2d[i][j].M_char ="-";//-
    }
  }
};
//=============================================================================

//=============================================================================
// грузим карту из текстового представления
Map_2D.loadMapArrayTile = function(_saveGrounds, _saveItems, _saveMonsters) {

  //console.log( "DDME_Map_2D.js: Map_2D.loadMapArrayTile ");
  //console.log(DDME_Map_2D.js:_saveGrounds);
  //console.log(DDME_Map_2D.js:_saveItems); 
  //console.log(DDME_Map_2D.js:_saveMonsters);

  let pozChar = 0;

  // заполняем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
    for ( let i = 0; i < Map_2D.widthMaxTilesCount; i++) {     
      Map_2D.MapArrayTile_2d[i][j].G_char = _saveGrounds[pozChar];
      Map_2D.MapArrayTile_2d[i][j].I_char = _saveItems[pozChar];
      Map_2D.MapArrayTile_2d[i][j].M_char = _saveMonsters[pozChar];
      pozChar = pozChar + 1;
    }
    pozChar = pozChar + 1;
  }

  
};
//=============================================================================

//=============================================================================
// грузим карту в текстовое представление
Map_2D.saveMapArrayTile = function() {

  //console.log( "DD_SaveInBrowser.js: SaveInBrowser.SaveInBrowser ");
  let saveGrounds  = "";
  let saveItems    = "";
  let saveMonsters = "";

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
    for ( let i = 0; i < Map_2D.widthMaxTilesCount; i++) {
      saveGrounds = saveGrounds + Map_2D.MapArrayTile_2d[i][j].G_char;
      saveItems = saveItems + Map_2D.MapArrayTile_2d[i][j].I_char;
      saveMonsters = saveMonsters + Map_2D.MapArrayTile_2d[i][j].M_char;
    }
    saveGrounds  = saveGrounds  + '!';//\n Default
    saveItems    = saveItems    + '!';//\n
    saveMonsters = saveMonsters + '!';//\n
  }

  Map_2D.stringMap.saveGrounds  = saveGrounds;
  Map_2D.stringMap.saveItems    = saveItems;
  Map_2D.stringMap.saveMonsters = saveMonsters;
};
//=============================================================================

  Map_2D.ini();

  Map_2D.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_Map_2D.js+'); 

  Map_2D.isOk = "OK";//