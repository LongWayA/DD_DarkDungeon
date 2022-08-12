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


//==============================================================================



window.TilesFrameDraw = {};
  TilesFrameDraw.isOk = " ";//

  TilesFrameDraw.NAME = "TilesInPanelDraw";//

  /*
	 */
  //============================================================================
  TilesFrameDraw.drawSelectTiles = function(_left) {

    let imageK ="";

    TilesFrameDraw.drawSelectTilesG_X0 = _left;                // задаем горизонтальное расстояние для тайлов слоя граунд
    TilesFrameDraw.drawSelectTilesG_Y0 = Map.heightMax_px + 10;// задаем вертикальное расстояние для тайлов слоя граунд
    TilesFrameDraw.drawSelectTilesG_Y_Max = TilesFrameDraw.drawSelectTilesG_Y0 + Map.tile.height;// задаем вертикальное расстояние для тайлов слоя граунд

    HTML5_Canvas.context.clearRect(TilesFrameDraw.drawSelectTilesG_X0 ,TilesFrameDraw.drawSelectTilesG_Y0,(SpritesMap.GROUNDS_MAX_COUNT-1) * Map.tile.width, Map.tile.height);
    HTML5_Canvas.Primitive.drawRect(TilesFrameDraw.drawSelectTilesG_X0 ,TilesFrameDraw.drawSelectTilesG_Y0,(SpritesMap.GROUNDS_MAX_COUNT-1) * Map.tile.width, Map.tile.height, 1, 'green', 0);
    

    //console.log("DD_Map.js: TilesFrameDraw.drawSelectTilesG_X0 = " + TilesFrameDraw.drawSelectTilesG_X0);
    //console.log("DD_Map.js: TilesFrameDraw.drawSelectTilesG_Y0 =" + TilesFrameDraw.drawSelectTilesG_Y0);

    let j_1 = 0;

/////////////////////////////////////////////////////////////////
    
    // отображаем файлы уровня земля
    for (let j = 1; j < SpritesMap.GROUNDS_MAX_COUNT; j++) {
      
      // выбираем очередной тайл для изображения
      imageK = SpritesMap.tilesLoad[SpritesMap.GROUNDS][j].tile_Image;

      j_1 = j-1;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      HTML5_Canvas.Image.drawImageG(imageK, j_1 * Map.tile.width + TilesFrameDraw.drawSelectTilesG_X0, TilesFrameDraw.drawSelectTilesG_Y0, Map.tile.width, Map.tile.height);

      //
      //HTML5_Canvas.context.strokeText (SpritesMap.tilesLoad[SpritesMap.GROUNDS][j].tile_char, j_1 * Map.tile.width + Map.drawSelectTilesG_X0, Map.drawSelectTilesG_Y0 +10);//

      //
      //HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + Map.drawSelectTilesG_X0, Map.drawSelectTilesG_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////

    TilesFrameDraw.drawSelectTilesI_X0 = _left;                // задаем горизонтальное расстояние для тайлов слоя предметы
    TilesFrameDraw.drawSelectTilesI_Y0 = TilesFrameDraw.drawSelectTilesG_Y0 + Map.tile.height + 10;// задаем вертикальное расстояние для тайлов слоя предметы
    TilesFrameDraw.drawSelectTilesI_Y_Max = TilesFrameDraw.drawSelectTilesI_Y0 + Map.tile.height;// задаем вертикальное расстояние для тайлов слоя предметы

    //console.log("Map.drawSelectTilesI_Y0 =" + Map.drawSelectTilesI_Y0);

    // отображаем файлы уровня предметы
    for (let j = 1; j < SpritesMap.ITEMS_MAX_COUNT; j++) {

      // выбираем очередной тайл для изображения
      imageK = SpritesMap.tilesLoad[SpritesMap.ITEMS][j].tile_Image;

      j_1 = j-1;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      HTML5_Canvas.Image.drawImageG(imageK, j_1 * Map.tile.width + TilesFrameDraw.drawSelectTilesI_X0, TilesFrameDraw.drawSelectTilesI_Y0, Map.tile.width, Map.tile.height);


      //HTML5_Canvas.context.strokeText (SpritesMap.tilesLoad[SpritesMap.ITEMS][j].tile_char, j_1 * Map.tile.width + Map.drawSelectTilesI_X0, Map.drawSelectTilesI_Y0 +10);//
      //
      HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + TilesFrameDraw.drawSelectTilesI_X0, TilesFrameDraw.drawSelectTilesI_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////
    TilesFrameDraw.drawSelectTilesM_X0 = _left;                // задаем горизонтальное расстояние для тайлов слоя монстры
    TilesFrameDraw.drawSelectTilesM_Y0 = TilesFrameDraw.drawSelectTilesI_Y0 + Map.tile.height + 10;// задаем вертикальное расстояние для тайлов слоя монстры
    TilesFrameDraw.drawSelectTilesM_Y_Max = TilesFrameDraw.drawSelectTilesM_Y0 + Map.tile.height;
    
    //console.log("Map.drawSelectTilesM_Y0 =" + Map.drawSelectTilesM_Y0);

    for (let j = 1; j < SpritesMap.MONSTERS_MAX_COUNT; j++) {
      
      imageK = SpritesMap.tilesLoad[SpritesMap.MONSTERS][j].tile_Image;

      j_1 = j-1;

      HTML5_Canvas.Image.drawImageG(imageK, j_1 * Map.tile.width + TilesFrameDraw.drawSelectTilesM_X0, TilesFrameDraw.drawSelectTilesM_Y0, Map.tile.width, Map.tile.height);


      //HTML5_Canvas.context.strokeText (SpritesMap.tilesLoad[SpritesMap.MONSTERS][j].tile_char, j_1 * Map.tile.width + Map.drawSelectTilesM_X0, Map.drawSelectTilesM_Y0 +10);//
      HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + TilesFrameDraw.drawSelectTilesM_X0, TilesFrameDraw.drawSelectTilesM_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
      //
      HTML5_Canvas.Primitive.drawRect(j_1 * Map.tile.width + TilesFrameDraw.drawSelectTilesM_X0, TilesFrameDraw.drawSelectTilesM_Y0, Map.tile.width, Map.tile.height, 1, 'blue', 0);
    }
/////////////////////////////////////////////////////////////////

  };
  //============================================================================


 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_TilesFrameDraw.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 TilesFrameDraw.isOk = "OK";//
 //=============================================================================