"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-12.08.2022-
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

    //GROUNDS
    this.G_char = "g" ;//character

    //ITEMS
    this.I_char = "i" ;//character

    //MONSTERS
    this.M_char = "m" ;//character

  }//constructor(width) {

};


window.Map = {};
  Map.isOk = " ";//

  Map.NAME = "Map";//

  Map.tile = {};// объект описывающий один общий тайл карты с общими для всех тайлов свойствами

  Map.tile.SIZE = 50;// px это размер тайла
  Map.tile.width = Map.tile.SIZE;// px предполагаем, что он квадратный
  Map.tile.height = Map.tile.SIZE;// px
 
  Map.widthMax_px = 1200;// это размеры тайловой карты
  Map.heightMax_px = 500;

  // количество тайлов вычисляем по размеру тайловой карты и тайла
  Map.widthMaxTilesCount = Map.widthMax_px/Map.tile.width;
  Map.heightMaxTilesCount = Map.heightMax_px/Map.tile.height;
  
  //console.log("DD_Map.js: Map.widthMaxTilesCount = " + Map.widthMaxTilesCount);
  //console.log("DD_Map.js: Map.heightMaxTilesCount = " + Map.heightMaxTilesCount);

  Map.MapArrayTile_2d = new Array(Map.widthMaxTilesCount);// двухмерный массив тайлов

  //console.log("DD_Map.js: OK1");

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  for ( Map.i = 0; Map.i < Map.widthMaxTilesCount; Map.i++) {
    Map.MapArrayTile_2d[Map.i] = new Array(Map.heightMaxTilesCount);
    for (Map.j = 0; Map.j < Map.heightMaxTilesCount; Map.j++) {
      Map.MapArrayTile_2d[Map.i][Map.j] = new Tile_for_Map_C();
      Map.MapArrayTile_2d[Map.i][Map.j].G_char ="a";//
      Map.MapArrayTile_2d[Map.i][Map.j].I_char ="c";//-
      Map.MapArrayTile_2d[Map.i][Map.j].M_char ="a";//-
    }
  }

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_Map.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 Map.isOk = "OK";//
 //=============================================================================