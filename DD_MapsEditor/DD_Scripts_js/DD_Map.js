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


window.Map = {};
  Map.isOk = " ";//

  Map.NAME = "Map";//

  Map.tile = {};// объект описывающий один общий тайл карты с общими для всех тайлов свойствами

  Map.stringMap = {};// карта в виде трех строк
  

  Map.tile.SIZE = 50;// px это размер тайла
  
//=============================================================================
  Map.ini_Map = function(){
      Map.tile.width = Map.tile.SIZE;// px предполагаем, что он квадратный
      Map.tile.height = Map.tile.SIZE;// px
    
      Map.stringMap.saveGrounds  = "";
      Map.stringMap.saveItems    = "";
      Map.stringMap.saveMonsters = "";

      Map.widthMax_px = 1200;// это размеры тайловой карты
      Map.heightMax_px = 500;

      // количество тайлов вычисляем по размеру тайловой карты и тайла
      Map.widthMaxTilesCount = Map.widthMax_px/Map.tile.width;
      Map.heightMaxTilesCount = Map.heightMax_px/Map.tile.height;
      
      //console.log("DD_Map.js: Map.widthMaxTilesCount = " + Map.widthMaxTilesCount);
      //console.log("DD_Map.js: Map.heightMaxTilesCount = " + Map.heightMaxTilesCount);

      Map.MapArrayTile_2d = new Array(Map.widthMaxTilesCount);// двухмерный массив тайлов

      //console.log("DD_Map.js: OK1");

      Map.iniMapArrayTile();
  }
//=============================================================================

//=============================================================================
 //
 Map.iniMapArrayTile = function(){

   // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
   for ( let i = 0; i < Map.widthMaxTilesCount; i++) {

    Map.MapArrayTile_2d[i] = new Array(Map.heightMaxTilesCount);

    for (let j = 0; j < Map.heightMaxTilesCount; j++) {
      Map.MapArrayTile_2d[i][j] = new Tile_for_Map_C();
      Map.MapArrayTile_2d[i][j].G_char ="a";//
      Map.MapArrayTile_2d[i][j].I_char ="b";//-
      Map.MapArrayTile_2d[i][j].M_char ="c";//-
    }
  }
};
//=============================================================================

//=============================================================================
Map.loadMapArrayTile = function(saveGrounds_, saveItems_, saveMonsters_) {

  //console.log( "DD_LoadFromBrowser.js: LoadFromBrowser.LoadInBrowser ");
  //console.log(saveGrounds_);
  //console.log(saveItems_); 
  //console.log(saveMonsters_);

  let pozChar = 0;

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
    for ( let i = 0; i < Map.widthMaxTilesCount; i++) {     
      Map.MapArrayTile_2d[i][j].G_char = saveGrounds_[pozChar];
      Map.MapArrayTile_2d[i][j].I_char = saveItems_[pozChar];
      Map.MapArrayTile_2d[i][j].M_char = saveMonsters_[pozChar];
      pozChar = pozChar + 1;
    }
    pozChar = pozChar + 1;
  }

  
};
//=============================================================================

//=============================================================================
Map.saveMapArrayTile = function() {

  //console.log( "DD_SaveInBrowser.js: SaveInBrowser.SaveInBrowser ");
  let saveGrounds  = "";
  let saveItems    = "";
  let saveMonsters = "";

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
    for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
      saveGrounds = saveGrounds + Map.MapArrayTile_2d[i][j].G_char;
      saveItems = saveItems + Map.MapArrayTile_2d[i][j].I_char;
      saveMonsters = saveMonsters + Map.MapArrayTile_2d[i][j].M_char;
    }
    saveGrounds  = saveGrounds  + '!';//\n Default
    saveItems    = saveItems    + '!';//\n
    saveMonsters = saveMonsters + '!';//\n
  }

  Map.stringMap.saveGrounds  = saveGrounds;
  Map.stringMap.saveItems    = saveItems;
  Map.stringMap.saveMonsters = saveMonsters;
};
//=============================================================================

Map.ini_Map();


 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_Map.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 Map.isOk = "OK";//
 //=============================================================================