"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   
  */


  //alert("module DD_Map.js start");
  //console.log("module DD_Map.js start");
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

  //Map.MapArrayTile_2d[1][2].G_char ='G';


  /*
	 */
  //============================================================================
  Map.drawMap = function(_left, _top, log = false) {

    let tipeTiles = 1;
    let G_char_L = " ";
    let I_char_L = " ";
    let M_char_L = " ";

    //HTML5_Canvas.context.clearRect(_left, _top, HTML5_Canvas.Id.width, HTML5_Canvas.Id.height);
    HTML5_Canvas.context.clearRect(_left, _top, Map.widthMax_px, Map.heightMax_px);
    
    //Map.imageK = SpritesMap.tilesLoadSpritesMap.GROUNDS][1];
    //Map.heightTest = SpritesMap.tilesLoadSpritesMap.GROUNDS][1].height;
    //console.log("Map.heightTest = " + Map.heightTest);

    
    for (let j = 0; j < Map.heightMaxTilesCount; j++) {
      for ( let i = 0; i < Map.widthMaxTilesCount; i++) { 
        
        //GROUNDS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(Map.MapArrayTile_2d) который мы рисуем
        G_char_L = Map.MapArrayTile_2d[i][j].G_char;// находим символ нужного тайла
        tipeTiles = SpritesMap.GroundsMapChars.get(G_char_L);// по символу находим номер нужного тайла
        
        if(log == true)  console.log('m ' + i + ' ' + j + ' G_char_L = ' + G_char_L);

        //console.log("G_char_L = " + G_char_L);
        //console.log("tipeTiles = " + tipeTiles);


        Map.imageK = SpritesMap.tilesLoad[SpritesMap.GROUNDS][tipeTiles].tile_Image;// находим картинку тайла которую хотим нарисовать

        if(MapsEditor.checkbox_drawGrounds_checked == true){
          // рисуем тайл на экране в заданном месте и заданного размера
          HTML5_Canvas.Image.drawImageG(Map.imageK, i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height);
        }
         // рисуем символ соответствующий тайлу
         HTML5_Canvas.context.strokeText (Map.MapArrayTile_2d[i][j].G_char, i * Map.tile.width + _left, j * Map.tile.height + _top + 10);//

        //
        HTML5_Canvas.Primitive.drawRect(i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height, 1, 'blue', 0);

        
        //--------------------------------------------------------------------------------------

       //ITEMS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(Map.MapArrayTile_2d) который мы рисуем
        I_char_L = Map.MapArrayTile_2d[i][j].I_char;// находим символ нужного тайла
        if(log == true)  console.log('m ' + i + ' ' + j + ' I_char_L = ' + I_char_L);       
        
        if(I_char_L != "-"){
          tipeTiles = SpritesMap.ItemsMapChars.get(I_char_L);// по символу находим номер нужного тайла

          Map.imageK = SpritesMap.tilesLoad[SpritesMap.ITEMS][tipeTiles].tile_Image;// находим картинку тайла которую хотим нарисовать
          
          if(MapsEditor.checkbox_drawItems_checked == true){
            // рисуем тайл на экране в заданном месте и заданного размера
            HTML5_Canvas.Image.drawImageG(Map.imageK, i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height);
          }
        }
        //--------------------------------------------------------------------------------------
       
       //MONSTERS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(Map.MapArrayTile_2d) который мы рисуем
        M_char_L = Map.MapArrayTile_2d[i][j].M_char;// находим символ нужного тайла
        if(log == true)  console.log('m ' + i + ' ' + j + ' M_char_L = ' + M_char_L);              
        if(M_char_L != "-"){       
          tipeTiles = SpritesMap.MonstersMapChars.get(M_char_L);// по символу находим номер нужного тайла

          Map.imageK = SpritesMap.tilesLoad[SpritesMap.MONSTERS][tipeTiles].tile_Image;// находим картинку тайла которую хотим нарисовать

          if(MapsEditor.checkbox_drawMonsters_checked == true){
            // рисуем тайл на экране в заданном месте и заданного размера
            HTML5_Canvas.Image.drawImageG(Map.imageK, i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height);
          }
        }
        //-------------------------------------------------------------------------------------- 
        


      }
    }
    HTML5_Canvas.Primitive.drawRect(_left, _top, Map.widthMax_px,Map.heightMax_px, 1, 'blue', 0);
    //HTML5_Canvas.context.clearRect(_left, _top, Map.widthMax_px, Map.heightMax_px);

  };
  //============================================================================

  /*
	 */
  //============================================================================
  Map.drawSelectTiles = function(_left) {

    Map.drawSelectTilesG_X0 = _left;                // задаем горизонтальное расстояние для тайлов слоя граунд
    Map.drawSelectTilesG_Y0 = Map.heightMax_px + 10;// задаем вертикальное расстояние для тайлов слоя граунд
    Map.drawSelectTilesG_Y_Max = Map.drawSelectTilesG_Y0 + Map.tile.height;// задаем вертикальное расстояние для тайлов слоя граунд

    HTML5_Canvas.context.clearRect(Map.drawSelectTilesG_X0 ,Map.drawSelectTilesG_Y0,(SpritesMap.GROUNDS_MAX_COUNT-1) * Map.tile.width, Map.tile.height);
    HTML5_Canvas.Primitive.drawRect(Map.drawSelectTilesG_X0 ,Map.drawSelectTilesG_Y0,(SpritesMap.GROUNDS_MAX_COUNT-1) * Map.tile.width, Map.tile.height, 1, 'green', 0);
    

    //console.log("DD_Map.js: Map.drawSelectTilesG_X0 = " + Map.drawSelectTilesG_X0);
    //console.log("DD_Map.js: Map.drawSelectTilesG_Y0 =" + Map.drawSelectTilesG_Y0);

    let j_1 = 0;

/////////////////////////////////////////////////////////////////
    
    // отображаем файлы уровня земля
    for (let j = 1; j < SpritesMap.GROUNDS_MAX_COUNT; j++) {
      
      // выбираем очередной тайл для изображения
      Map.imageK = SpritesMap.tilesLoad[SpritesMap.GROUNDS][j].tile_Image;

      j_1 = j-1;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      HTML5_Canvas.Image.drawImageG(Map.imageK, j_1 * Map.tile.width + Map.drawSelectTilesG_X0, Map.drawSelectTilesG_Y0, Map.tile.width, Map.tile.height);

      //
      //HTML5_Canvas.context.strokeText (SpritesMap.tilesLoad[SpritesMap.GROUNDS][j].tile_char, j_1 * Map.tile.width + Map.drawSelectTilesG_X0, Map.drawSelectTilesG_Y0 +10);//

      //
      //HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + Map.drawSelectTilesG_X0, Map.drawSelectTilesG_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////

    Map.drawSelectTilesI_X0 = _left;                // задаем горизонтальное расстояние для тайлов слоя предметы
    Map.drawSelectTilesI_Y0 = Map.drawSelectTilesG_Y0 + Map.tile.height + 10;// задаем вертикальное расстояние для тайлов слоя предметы
    Map.drawSelectTilesI_Y_Max = Map.drawSelectTilesI_Y0 + Map.tile.height;// задаем вертикальное расстояние для тайлов слоя предметы

    //console.log("Map.drawSelectTilesI_Y0 =" + Map.drawSelectTilesI_Y0);

    // отображаем файлы уровня предметы
    for (let j = 1; j < SpritesMap.ITEMS_MAX_COUNT; j++) {

      // выбираем очередной тайл для изображения
      Map.imageK = SpritesMap.tilesLoad[SpritesMap.ITEMS][j].tile_Image;

      j_1 = j-1;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      HTML5_Canvas.Image.drawImageG(Map.imageK, j_1 * Map.tile.width + Map.drawSelectTilesI_X0, Map.drawSelectTilesI_Y0, Map.tile.width, Map.tile.height);


      //HTML5_Canvas.context.strokeText (SpritesMap.tilesLoad[SpritesMap.ITEMS][j].tile_char, j_1 * Map.tile.width + Map.drawSelectTilesI_X0, Map.drawSelectTilesI_Y0 +10);//
      //
      HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + Map.drawSelectTilesI_X0, Map.drawSelectTilesI_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////
    Map.drawSelectTilesM_X0 = _left;                // задаем горизонтальное расстояние для тайлов слоя монстры
    Map.drawSelectTilesM_Y0 = Map.drawSelectTilesI_Y0 + Map.tile.height + 10;// задаем вертикальное расстояние для тайлов слоя монстры
    Map.drawSelectTilesM_Y_Max = Map.drawSelectTilesM_Y0 + Map.tile.height;
    
    //console.log("Map.drawSelectTilesM_Y0 =" + Map.drawSelectTilesM_Y0);

    for (let j = 1; j < SpritesMap.MONSTERS_MAX_COUNT; j++) {
      
      Map.imageK = SpritesMap.tilesLoad[SpritesMap.MONSTERS][j].tile_Image;

      j_1 = j-1;

      HTML5_Canvas.Image.drawImageG(Map.imageK, j_1 * Map.tile.width + Map.drawSelectTilesM_X0, Map.drawSelectTilesM_Y0, Map.tile.width, Map.tile.height);


      //HTML5_Canvas.context.strokeText (SpritesMap.tilesLoad[SpritesMap.MONSTERS][j].tile_char, j_1 * Map.tile.width + Map.drawSelectTilesM_X0, Map.drawSelectTilesM_Y0 +10);//
      HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + Map.drawSelectTilesM_X0, Map.drawSelectTilesM_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
      //
      HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + Map.drawSelectTilesM_X0, Map.drawSelectTilesM_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
    }
/////////////////////////////////////////////////////////////////

  };
  //============================================================================

  //let json = JSON.stringify(Map.MapArrayTile_2d);
  //console.log(json);
  //


 // стартовая инициализация
 //=============================================================================
 Map.ini = function() {


 };
 //=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('module DD_Map.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 Map.isOk = "OK";//
 //=============================================================================
//alert("module DD_Map.js done");
//console.log("module DD_Map.js done");