"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -15.08.2022-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   
  */




window.EditorFrames = {};
  EditorFrames.isOk = " ";//
  EditorFrames.NAME = "EditorFrames";//

  EditorFrames.EditorFrame     = {};// Общая рамка экрана вывода графики
  EditorFrames.MapFrame        = {};// Область вывода карты
  EditorFrames.TilesPanelFrame = {};// Область вывода выбора элементов карты
  EditorFrames.PrintFrame      = {};// Область печати сообщений редактора

  //=============================================================================
  EditorFrames.ini_EditorFrames = function(){

    //------------------------------------------------------------------------
    // Общая рамка экрана вывода графики>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.EditorFrame.X0     = 0;// нулевая координата по горизонтали общего окна. т.е. самая левая точка.
    EditorFrames.EditorFrame.Y0     = 0;// нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
    EditorFrames.EditorFrame.width  = HTML5_Canvas.Id.width;// ширина окна берется из канвы сайта
    EditorFrames.EditorFrame.height = HTML5_Canvas.Id.height;// высота окна берется из канвы сайта
    EditorFrames.EditorFrame.X_Max  = EditorFrames.EditorFrame.X0 + EditorFrames.EditorFrame.width;// максимальная координата по горизонтали.
    EditorFrames.EditorFrame.Y_Max  = EditorFrames.EditorFrame.Y0 + EditorFrames.EditorFrame.height;// максимальная координата по вертикали. Вправо вниз
    /*
    console.log('DD_EditorFrames.js: EditorFrames.EditorFrame.X0 = ' + EditorFrames.EditorFrame.X0);
    console.log('DD_EditorFrames.js: EditorFrames.EditorFrame.X0 = ' + EditorFrames.EditorFrame.X0);
    console.log('DD_EditorFrames.js: EditorFrames.EditorFrame.width = ' + EditorFrames.EditorFrame.width);
    console.log('DD_EditorFrames.js: EditorFrames.EditorFrame.height = ' + EditorFrames.EditorFrame.height);
    console.log('DD_EditorFrames.js: EditorFrames.EditorFrame.X_Max = ' + EditorFrames.EditorFrame.X_Max);
    console.log('DD_EditorFrames.js: EditorFrames.EditorFrame.Y_Max = ' + EditorFrames.EditorFrame.Y_Max);
    */
    // Общая рамка экрана вывода графики<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область вывода карты>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.MapFrameTile_SIZE_WIDTH  = 50;// px это размер тайла по горизонтали
    EditorFrames.MapFrameTile_SIZE_HEIGHT = 50;// px это размер тайла по вертикали
    EditorFrames.MapFrame.HEIGHT_PX = 500;
    EditorFrames.MapFrame.X0     = EditorFrames.EditorFrame.X0;
    EditorFrames.MapFrame.Y0     = EditorFrames.EditorFrame.Y0;
    //EditorFrames.MapFrame.X0     = 100;
    //EditorFrames.MapFrame.Y0     = 50;

    EditorFrames.MapFrame.width  = EditorFrames.EditorFrame.width;
    EditorFrames.MapFrame.height = EditorFrames.MapFrame.HEIGHT_PX;
    if(EditorFrames.MapFrame.height > EditorFrames.EditorFrame.height){// не может быть больше чем EditorFrames.EditorFrame.height
      EditorFrames.MapFrame.height = EditorFrames.EditorFrame.height;
    }
    EditorFrames.MapFrame.X_Max  = EditorFrames.MapFrame.X0 + EditorFrames.MapFrame.width;
    EditorFrames.MapFrame.Y_Max  = EditorFrames.MapFrame.Y0 + EditorFrames.MapFrame.height;
    // Область вывода карты<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область вывода выбора элементов карты>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.TilesPanelFrame.HEIGHT_PX = 190;
    EditorFrames.TilesPanelFrame.X0     = EditorFrames.MapFrame.X0;
    EditorFrames.TilesPanelFrame.Y0     = EditorFrames.MapFrame.Y_Max;
    EditorFrames.TilesPanelFrame.width  = EditorFrames.EditorFrame.width;
    EditorFrames.TilesPanelFrame.height = EditorFrames.TilesPanelFrame.HEIGHT_PX;
    if(EditorFrames.TilesPanelFrame.height > EditorFrames.EditorFrame.height){// не может быть больше чем EditorFrames.EditorFrame.height
      EditorFrames.TilesPanelFrame.height = EditorFrames.EditorFrame.height;
    }
    EditorFrames.TilesPanelFrame.X_Max  = EditorFrames.TilesPanelFrame.X0 + EditorFrames.TilesPanelFrame.width;
    EditorFrames.TilesPanelFrame.Y_Max  = EditorFrames.TilesPanelFrame.Y0 + EditorFrames.TilesPanelFrame.height;
    //---------------------------

    EditorFrames.tilesPanelFrame_Ground_X0     = EditorFrames.TilesPanelFrame.X0;// задаем горизонтальное расстояние для тайлов слоя граунд
    EditorFrames.tilesPanelFrame_Ground_Y0     = EditorFrames.TilesPanelFrame.Y0 + 10;// задаем вертикальное расстояние для тайлов слоя граунд
    EditorFrames.tilesPanelFrame_Ground_Y_Max  = EditorFrames.tilesPanelFrame_Ground_Y0 + EditorFrames.MapFrameTile_SIZE_HEIGHT;// задаем вертикальное расстояние для тайлов слоя граунд

    EditorFrames.tilesPanelFrame_Item_X0       = EditorFrames.TilesPanelFrame.X0;
    EditorFrames.tilesPanelFrame_Item_Y0       = EditorFrames.tilesPanelFrame_Ground_Y_Max + 10;
    EditorFrames.tilesPanelFrame_Item_Y_Max    = EditorFrames.tilesPanelFrame_Item_Y0 + EditorFrames.MapFrameTile_SIZE_HEIGHT;
     
    EditorFrames.tilesPanelFrame_Monster_X0    = EditorFrames.TilesPanelFrame.X0;    
    EditorFrames.tilesPanelFrame_Monster_Y0    = EditorFrames.tilesPanelFrame_Item_Y_Max + 10;
    EditorFrames.tilesPanelFrame_Monster_Y_Max = EditorFrames.tilesPanelFrame_Monster_Y0 + EditorFrames.MapFrameTile_SIZE_HEIGHT;
    // Область вывода выбора элементов карты<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область печати сообщений редактора>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.PrintFrame.HEIGHT_PX = EditorFrames.EditorFrame.Y_Max -EditorFrames.TilesPanelFrame.Y_Max;
    EditorFrames.PrintFrame.X0     = EditorFrames.TilesPanelFrame.X0;
    EditorFrames.PrintFrame.Y0     = EditorFrames.TilesPanelFrame.Y_Max;
    EditorFrames.PrintFrame.width  = EditorFrames.EditorFrame.width;
    EditorFrames.PrintFrame.height = EditorFrames.PrintFrame.HEIGHT_PX;
    EditorFrames.PrintFrame.X_Max  = EditorFrames.PrintFrame.X0 + EditorFrames.PrintFrame.width;
    EditorFrames.PrintFrame.Y_Max  = EditorFrames.PrintFrame.Y0 + EditorFrames.PrintFrame.height;
    // Область печати сообщений редактора<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------


  }
  //=============================================================================

  //=============================================================================
  // EditorFrame
  EditorFrames.drowEditorFrame = function() {
    HTML5_Canvas.Primitive.drawRect(EditorFrames.EditorFrame.X0, EditorFrames.EditorFrame.Y0, 
    EditorFrames.EditorFrame.width,EditorFrames.EditorFrame.height, 2, 'blue', 0);
  };
  //=============================================================================
 //=============================================================================
  // MapFrame
  EditorFrames.drowMapFrame = function() {
    HTML5_Canvas.Primitive.drawRect(EditorFrames.MapFrame.X0, EditorFrames.MapFrame.Y0, 
    EditorFrames.MapFrame.width,EditorFrames.MapFrame.height, 2, 'blue', 0);
  };
  //=============================================================================  

  //=============================================================================
  // TilesPanelFrame
  EditorFrames.drowTilesPanelFrame = function() {
    HTML5_Canvas.Primitive.drawRect(EditorFrames.TilesPanelFrame.X0, EditorFrames.TilesPanelFrame.Y0, 
    EditorFrames.TilesPanelFrame.width,EditorFrames.TilesPanelFrame.height, 2, 'blue', 0);
  };
  //=============================================================================  

  //=============================================================================
  // PrintFrame
  EditorFrames.drowPrintFrameFrame = function() {
    HTML5_Canvas.Primitive.drawRect(EditorFrames.PrintFrame.X0, EditorFrames.PrintFrame.Y0, 
    EditorFrames.PrintFrame.width,EditorFrames.PrintFrame.height, 2, 'blue', 0);
  };
  //=============================================================================  

  EditorFrames.ini_EditorFrames();

  //=============================================================================
  HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
  HTML5_Canvas.context.strokeText ('script DD_EditorFrames.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

  EditorFrames.isOk = "OK";//
  //=============================================================================