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

  TilesFrameDraw.NAME = "TilesFrameDraw";//

  /*
	 */
  //============================================================================
  TilesFrameDraw.drawSelectTiles = function(_left) {

    let imageK ="";
   
    HTML5_Canvas.context.clearRect( EditorFrames.TilesPanelFrame.Ground_X0 ,
      EditorFrames.TilesPanelFrame.Ground_Y0,(SpritesMap_2D.GROUNDS_MAX_COUNT-1) * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);

    HTML5_Canvas.Primitive.drawRect( EditorFrames.TilesPanelFrame.Ground_X0 ,
      EditorFrames.TilesPanelFrame.Ground_Y0,(SpritesMap_2D.GROUNDS_MAX_COUNT-1) * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'green', 0);
    

    //console.log("DD_Map_2D.js: TilesFrameDraw.drawSelectTilesG_X0 = " + TilesFrameDraw.drawSelectTilesG_X0);
    //console.log("DD_Map_2D.js: TilesFrameDraw.drawSelectTilesG_Y0 =" + TilesFrameDraw.drawSelectTilesG_Y0);

    let j_1 = 0;

/////////////////////////////////////////////////////////////////
    
    // отображаем файлы уровня земля
    for (let j = 0; j < SpritesMap_2D.GROUNDS_MAX_COUNT; j++) {
      
      // выбираем очередной тайл для изображения
      imageK = SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][j].tile_Image;

      j_1 = j;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      HTML5_Canvas.Image.drawImage(imageK, j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + EditorFrames.TilesPanelFrame.Ground_X0, 
        EditorFrames.TilesPanelFrame.Ground_Y0, EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);

      //
      //HTML5_Canvas.context.strokeText (SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][j].tile_char, j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesG_X0, Map_2D.drawSelectTilesG_Y0 +10);//

      //
      //HTML5_Canvas.Primitive.drawRect(j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesG_X0, Map_2D.drawSelectTilesG_Y0, EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////
     
    //console.log("Map_2D.drawSelectTilesI_Y0 =" + Map_2D.drawSelectTilesI_Y0);

    // отображаем файлы уровня предметы
    for (let j = 0; j < SpritesMap_2D.ITEMS_MAX_COUNT; j++) {

      // выбираем очередной тайл для изображения
      imageK = SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][j].tile_Image;

      j_1 = j;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      HTML5_Canvas.Image.drawImage(imageK, j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + EditorFrames.TilesPanelFrame.Item_X0, 
        EditorFrames.TilesPanelFrame.Item_Y0, EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);


      //HTML5_Canvas.context.strokeText (SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][j].tile_char, j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesI_X0, Map_2D.drawSelectTilesI_Y0 +10);//
      //
      HTML5_Canvas.Primitive.drawRect(j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + EditorFrames.TilesPanelFrame.Item_X0, 
        EditorFrames.TilesPanelFrame.Item_Y0, EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////
   
    //console.log("Map_2D.drawSelectTilesM_Y0 =" + Map_2D.drawSelectTilesM_Y0);

    for (let j = 0; j < SpritesMap_2D.MONSTERS_MAX_COUNT; j++) {
      
      imageK = SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][j].tile_Image;

      j_1 = j;

      HTML5_Canvas.Image.drawImage(imageK, j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + EditorFrames.TilesPanelFrame.Monster_X0, 
        EditorFrames.TilesPanelFrame.Monster_Y0, EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT);


      //HTML5_Canvas.context.strokeText (SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][j].tile_char, j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesM_X0, Map_2D.drawSelectTilesM_Y0 +10);//
      HTML5_Canvas.Primitive.drawRect(j_1 * EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + EditorFrames.TilesPanelFrame.Monster_X0, 
        EditorFrames.TilesPanelFrame.Monster_Y0, EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
      
    }
/////////////////////////////////////////////////////////////////

  };
  //============================================================================


  HTML5_Canvas.TestLoadedScripts.testLoading ('DDE_TilesFrameDraw.js'); 

  TilesFrameDraw.isOk = "OK";//