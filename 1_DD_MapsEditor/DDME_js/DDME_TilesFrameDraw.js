"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-19.02.2023-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     DDME_HTML5_SpritesMap_2D.js
     DDME_EditorFrames.js
  */


//==============================================================================



window.TilesFrameDraw = {};
  TilesFrameDraw.isOk = " ";//
  TilesFrameDraw.NAME = "TilesFrameDraw";//

   // Внешние ссылки
   TilesFrameDraw.HTML5_Canvas_OUT;
   TilesFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT;
   TilesFrameDraw.SpritesMap_2D_OUT;
   TilesFrameDraw.EditorFrames_OUT;

//=============================================================================
TilesFrameDraw.ini = function(){

  TilesFrameDraw.HTML5_Canvas_OUT = HTML5_Canvas;
  TilesFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
  TilesFrameDraw.SpritesMap_2D_OUT = SpritesMap_2D;
  TilesFrameDraw.EditorFrames_OUT = EditorFrames;
}
//=============================================================================


  /*
	 */
  //============================================================================
  TilesFrameDraw.drawSelectTiles = function(_left) {

    let imageK ="";
   
    TilesFrameDraw.HTML5_Canvas_OUT.context_OUT.clearRect( TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Ground_X0 ,
      TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Ground_Y0,(TilesFrameDraw.SpritesMap_2D_OUT.GROUNDS_MAX_COUNT-1) * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT);

    TilesFrameDraw.HTML5_Canvas_OUT.Primitive.drawRect( TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Ground_X0 ,
      TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Ground_Y0,(TilesFrameDraw.SpritesMap_2D_OUT.GROUNDS_MAX_COUNT-1) * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'green', 0);
    

    //console.log("DD_Map_2D.js: TilesFrameDraw.drawSelectTilesG_X0 = " + TilesFrameDraw.drawSelectTilesG_X0);
    //console.log("DD_Map_2D.js: TilesFrameDraw.drawSelectTilesG_Y0 =" + TilesFrameDraw.drawSelectTilesG_Y0);

    let j_1 = 0;

/////////////////////////////////////////////////////////////////
    
    // отображаем файлы уровня земля
    for (let j = 0; j < TilesFrameDraw.SpritesMap_2D_OUT.GROUNDS_MAX_COUNT; j++) {
      
      // выбираем очередной тайл для изображения
      imageK = TilesFrameDraw.SpritesMap_2D_OUT.tilesLoad[TilesFrameDraw.SpritesMap_2D_OUT.GROUNDS][j].tile_Image_OUT;

      j_1 = j;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      TilesFrameDraw.HTML5_Canvas_OUT.Image.drawImage(imageK, j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Ground_X0, 
        TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Ground_Y0, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT);

      //
      //TilesFrameDraw.HTML5_Canvas_OUT.context.strokeText (TilesFrameDraw.SpritesMap_2D_OUT.tilesLoad[TilesFrameDraw.SpritesMap_2D_OUT.GROUNDS][j].tile_char, j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesG_X0, Map_2D.drawSelectTilesG_Y0 +10);//

      //
      //TilesFrameDraw.HTML5_Canvas_OUT.Primitive.drawRect(j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesG_X0, Map_2D.drawSelectTilesG_Y0, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////
     
    //console.log("Map_2D.drawSelectTilesI_Y0 =" + Map_2D.drawSelectTilesI_Y0);

    // отображаем файлы уровня предметы
    for (let j = 0; j < TilesFrameDraw.SpritesMap_2D_OUT.ITEMS_MAX_COUNT; j++) {

      // выбираем очередной тайл для изображения
      imageK = TilesFrameDraw.SpritesMap_2D_OUT.tilesLoad[TilesFrameDraw.SpritesMap_2D_OUT.ITEMS][j].tile_Image_OUT;

      j_1 = j;// что бы первая координата была 0 а не с добавкой размера тайла. Записал через черточку для заметности

      //
      TilesFrameDraw.HTML5_Canvas_OUT.Image.drawImage(imageK, j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Item_X0, 
        TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Item_Y0, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT);


      //TilesFrameDraw.HTML5_Canvas_OUT.context.strokeText (TilesFrameDraw.SpritesMap_2D_OUT.tilesLoad[TilesFrameDraw.SpritesMap_2D_OUT.ITEMS][j].tile_char, j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesI_X0, Map_2D.drawSelectTilesI_Y0 +10);//
      //
      TilesFrameDraw.HTML5_Canvas_OUT.Primitive.drawRect(j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Item_X0, 
        TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Item_Y0, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
    }

/////////////////////////////////////////////////////////////////
   
    //console.log("Map_2D.drawSelectTilesM_Y0 =" + Map_2D.drawSelectTilesM_Y0);

    for (let j = 0; j < TilesFrameDraw.SpritesMap_2D_OUT.MONSTERS_MAX_COUNT; j++) {
      
      imageK = TilesFrameDraw.SpritesMap_2D_OUT.tilesLoad[TilesFrameDraw.SpritesMap_2D_OUT.MONSTERS][j].tile_Image_OUT;

      j_1 = j;

      TilesFrameDraw.HTML5_Canvas_OUT.Image.drawImage(imageK, j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Monster_X0, 
        TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Monster_Y0, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT);


      //TilesFrameDraw.HTML5_Canvas_OUT.context.strokeText (TilesFrameDraw.SpritesMap_2D_OUT.tilesLoad[TilesFrameDraw.SpritesMap_2D_OUT.MONSTERS][j].tile_char, j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + Map_2D.drawSelectTilesM_X0, Map_2D.drawSelectTilesM_Y0 +10);//
      TilesFrameDraw.HTML5_Canvas_OUT.Primitive.drawRect(j_1 * TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Monster_X0, 
        TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.Monster_Y0, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, TilesFrameDraw.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT, 1, 'blue', 0);
      
    }
/////////////////////////////////////////////////////////////////

  };
  //============================================================================

  TilesFrameDraw.ini();

  TilesFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_TilesFrameDraw.js+'); 

  TilesFrameDraw.isOk = "OK";//