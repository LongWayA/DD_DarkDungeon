"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-14.08.2022-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   
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

  Map_2D.tile = {};// объект описывающий один общий тайл карты с общими для всех тайлов свойствами

  Map_2D.stringMap = {};// карта в виде трех строк
  

  
  
//=============================================================================
  Map_2D.ini_Map = function(){
    
      Map_2D.tile.width  = EditorFrames.MapFrame.tile_SIZE_WIDTH;// px это размер тайла по горизонтали
      Map_2D.tile.height = EditorFrames.MapFrame.tile_SIZE_HEIGHT;// px это размер тайла по вертикали
      //console.log("DD_Map_2D.js: Map_2D.tile.width = " + Map_2D.tile.width);
      //console.log("DD_Map_2D.js: Map_2D.tile.height = " + Map_2D.tile.height);

      Map_2D.stringMap.saveGrounds  = "";
      Map_2D.stringMap.saveItems    = "";
      Map_2D.stringMap.saveMonsters = "";

      Map_2D.widthMax_px = EditorFrames.MapFrame.width;// это размеры тайловой карты
      Map_2D.heightMax_px = EditorFrames.MapFrame.height;

      // количество тайлов вычисляем по размеру тайловой карты и тайла
      Map_2D.widthMaxTilesCount = Map_2D.widthMax_px/Map_2D.tile.width;
      Map_2D.heightMaxTilesCount = Map_2D.heightMax_px/Map_2D.tile.height;

      Map_2D.widthMaxTilesCount  = Math.ceil(Map_2D.widthMaxTilesCount);
      Map_2D.heightMaxTilesCount = Math.ceil(Map_2D.heightMaxTilesCount);

      //console.log("DD_Map_2D.js: Map_2D.widthMaxTilesCount = " + Map_2D.widthMaxTilesCount);
      //console.log("DD_Map_2D.js: Map_2D.heightMaxTilesCount = " + Map_2D.heightMaxTilesCount);

      Map_2D.MapArrayTile_2d = new Array(Map_2D.widthMaxTilesCount);// двухмерный массив тайлов

      //console.log("DD_Map_2D.js: OK1");

      Map_2D.iniMapArrayTile();
  }
//=============================================================================

//=============================================================================
 //
 Map_2D.iniMapArrayTile = function(){

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
Map_2D.loadMapArrayTile = function(saveGrounds_, saveItems_, saveMonsters_) {

  //console.log( "DD_LoadFromBrowser.js: LoadFromBrowser.LoadInBrowser ");
  //console.log(saveGrounds_);
  //console.log(saveItems_); 
  //console.log(saveMonsters_);

  let pozChar = 0;

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
    for ( let i = 0; i < Map_2D.widthMaxTilesCount; i++) {     
      Map_2D.MapArrayTile_2d[i][j].G_char = saveGrounds_[pozChar];
      Map_2D.MapArrayTile_2d[i][j].I_char = saveItems_[pozChar];
      Map_2D.MapArrayTile_2d[i][j].M_char = saveMonsters_[pozChar];
      pozChar = pozChar + 1;
    }
    pozChar = pozChar + 1;
  }

  
};
//=============================================================================

//=============================================================================
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

  Map_2D.ini_Map();

  HTML5_Canvas.TestLoadedScripts.testLoading ('DD_Map_2D.js'); 

  Map_2D.isOk = "OK";//