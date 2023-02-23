"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -15.08.2022-19.02.2023-
//


  /*
   НАЗНАЧЕНИЕ
   Определяем рамки областей вывода на экран

   ИСПОЛЬЗУЕТ МОДУЛИ
   DDME_HTML5_Canvas.js
  */




window.EditorFrames = {};
  EditorFrames.isOk = " ";//
  EditorFrames.NAME = "EditorFrames";//

  // Внешние ссылки
  EditorFrames.HTML5_Canvas_OUT;
  EditorFrames.HTML5_Canvas_TestLoadedScripts_OUT;

  // рамки
  // Общая рамка экрана вывода графики
  EditorFrames.EditorFrame     = {};
    EditorFrames.EditorFrame.x0;// нулевая координата по горизонтали общего окна. т.е. самая левая точка.
    EditorFrames.EditorFrame.y0;// нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
    EditorFrames.EditorFrame.width;// ширина окна берется из канвы сайта
    EditorFrames.EditorFrame.height;// высота окна берется из канвы сайта
    EditorFrames.EditorFrame.X_Max;// максимальная координата по горизонтали.
    EditorFrames.EditorFrame.Y_Max;// максимальная координата по вертикали. Вправо вниз
  
  // Область вывода карты
  EditorFrames.MapFrame        = {};
    EditorFrames.MapFrame.tile_SIZE_WIDTH  = 50;// px это размер тайла карты по горизонтали
    EditorFrames.MapFrame.tile_SIZE_HEIGHT = 50;// px это размер тайла карты по вертикали
    EditorFrames.MapFrame.HEIGHT_PX = 500;
    EditorFrames.MapFrame.x0;
    EditorFrames.MapFrame.y0;
    EditorFrames.MapFrame.width;
    EditorFrames.MapFrame.height;
    EditorFrames.MapFrame.X_Max;
    EditorFrames.MapFrame.Y_Max;

  // Область вывода выбора элементов карты   
  EditorFrames.TilesPanelFrame = {};
    EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH  = 50;// px это размер тайла панели выбора по горизонтали
    EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT = 50;// px это размер тайла панели выбора по вертикали
    EditorFrames.TilesPanelFrame.HEIGHT_PX = 190;
    EditorFrames.TilesPanelFrame.x0;
    EditorFrames.TilesPanelFrame.y0;
    EditorFrames.TilesPanelFrame.width;
    EditorFrames.TilesPanelFrame.height;
    EditorFrames.TilesPanelFrame.X_Max;
    EditorFrames.TilesPanelFrame.Y_Max;
    //---------------------------
    EditorFrames.TilesPanelFrame.Ground_X0;// задаем горизонтальное расстояние для тайлов слоя граунд
    EditorFrames.TilesPanelFrame.Ground_Y0;// задаем вертикальное расстояние для тайлов слоя граунд
    EditorFrames.TilesPanelFrame.Ground_Y_Max;// задаем вертикальное расстояние для тайлов слоя граунд

    EditorFrames.TilesPanelFrame.Item_X0;
    EditorFrames.TilesPanelFrame.Item_Y0;
    EditorFrames.TilesPanelFrame.Item_Y_Max;
   
    EditorFrames.TilesPanelFrame.Monster_X0;    
    EditorFrames.TilesPanelFrame.Monster_Y0;
    EditorFrames.TilesPanelFrame.Monster_Y_Max;

  // Область печати сообщений редактора
  EditorFrames.PrintFrame      = {};
    EditorFrames.PrintFrame.height_px;
    EditorFrames.PrintFrame.x0;
    EditorFrames.PrintFrame.y0;
    EditorFrames.PrintFrame.width;
    EditorFrames.PrintFrame.height;
    EditorFrames.PrintFrame.X_Max;
    EditorFrames.PrintFrame.Y_Max;

  //=============================================================================
  EditorFrames.ini = function(){

    EditorFrames.HTML5_Canvas_OUT = HTML5_Canvas;
    EditorFrames.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;

    //------------------------------------------------------------------------
    // Общая рамка экрана вывода графики>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.EditorFrame.x0     = 0;// нулевая координата по горизонтали общего окна. т.е. самая левая точка.
    EditorFrames.EditorFrame.y0     = 0;// нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
    EditorFrames.EditorFrame.width  = EditorFrames.HTML5_Canvas_OUT.Id_OUT.width;// ширина окна берется из канвы сайта
    EditorFrames.EditorFrame.height = EditorFrames.HTML5_Canvas_OUT.Id_OUT.height;// высота окна берется из канвы сайта
    EditorFrames.EditorFrame.X_Max  = EditorFrames.EditorFrame.x0 + EditorFrames.EditorFrame.width;// максимальная координата по горизонтали.
    EditorFrames.EditorFrame.Y_Max  = EditorFrames.EditorFrame.y0 + EditorFrames.EditorFrame.height;// максимальная координата по вертикали. Вправо вниз
   
    // console.log('DDME_EditorFrames.js: EditorFrames.EditorFrame.x0 = ' + EditorFrames.EditorFrame.x0);
    // console.log('DDME_EditorFrames.js: EditorFrames.EditorFrame.x0 = ' + EditorFrames.EditorFrame.x0);
    // console.log('DDME_EditorFrames.js: EditorFrames.EditorFrame.width = ' + EditorFrames.EditorFrame.width);
    // console.log('DDME_EditorFrames.js: EditorFrames.EditorFrame.height = ' + EditorFrames.EditorFrame.height);
    // console.log('DDME_EditorFrames.js: EditorFrames.EditorFrame.X_Max = ' + EditorFrames.EditorFrame.X_Max);
    // console.log('DDME_EditorFrames.js: EditorFrames.EditorFrame.Y_Max = ' + EditorFrames.EditorFrame.Y_Max);
    
    // Общая рамка экрана вывода графики<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область вывода карты>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.MapFrame.x0     = EditorFrames.EditorFrame.x0;
    EditorFrames.MapFrame.y0     = EditorFrames.EditorFrame.y0;
    //EditorFrames.MapFrame.x0     = 100;
    //EditorFrames.MapFrame.y0     = 50;

    EditorFrames.MapFrame.width  = EditorFrames.EditorFrame.width;
    EditorFrames.MapFrame.height = EditorFrames.MapFrame.HEIGHT_PX;
    if(EditorFrames.MapFrame.height > EditorFrames.EditorFrame.height){// не может быть больше чем EditorFrames.EditorFrame.height
      EditorFrames.MapFrame.height = EditorFrames.EditorFrame.height;
    }
    EditorFrames.MapFrame.X_Max  = EditorFrames.MapFrame.x0 + EditorFrames.MapFrame.width;
    EditorFrames.MapFrame.Y_Max  = EditorFrames.MapFrame.y0 + EditorFrames.MapFrame.height;

    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.tile_SIZE_WIDTH = ' + EditorFrames.MapFrame.tile_SIZE_WIDTH);
    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.tile_SIZE_HEIGHT = ' + EditorFrames.MapFrame.tile_SIZE_HEIGHT);
    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.x0 = ' + EditorFrames.MapFrame.x0);
    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.x0 = ' + EditorFrames.MapFrame.x0);
    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.width = ' + EditorFrames.MapFrame.width);
    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.height = ' + EditorFrames.MapFrame.height);
    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.X_Max = ' + EditorFrames.MapFrame.X_Max);
    // console.log('DDME_EditorFrames.js: EditorFrames.MapFrame.Y_Max = ' + EditorFrames.MapFrame.Y_Max);

    // Область вывода карты<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область вывода выбора элементов карты>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.TilesPanelFrame.x0     = EditorFrames.MapFrame.x0;
    EditorFrames.TilesPanelFrame.y0     = EditorFrames.MapFrame.Y_Max;
    EditorFrames.TilesPanelFrame.width  = EditorFrames.EditorFrame.width;
    EditorFrames.TilesPanelFrame.height = EditorFrames.TilesPanelFrame.HEIGHT_PX;
    if(EditorFrames.TilesPanelFrame.height > EditorFrames.EditorFrame.height){// не может быть больше чем EditorFrames.EditorFrame.height
      EditorFrames.TilesPanelFrame.height = EditorFrames.EditorFrame.height;
    }
    EditorFrames.TilesPanelFrame.X_Max  = EditorFrames.TilesPanelFrame.x0 + EditorFrames.TilesPanelFrame.width;
    EditorFrames.TilesPanelFrame.Y_Max  = EditorFrames.TilesPanelFrame.y0 + EditorFrames.TilesPanelFrame.height;
    //---------------------------

    EditorFrames.TilesPanelFrame.Ground_X0     = EditorFrames.TilesPanelFrame.x0;// задаем горизонтальное расстояние для тайлов слоя граунд
    EditorFrames.TilesPanelFrame.Ground_Y0     = EditorFrames.TilesPanelFrame.y0 + 10;// задаем вертикальное расстояние для тайлов слоя граунд
    EditorFrames.TilesPanelFrame.Ground_Y_Max  = EditorFrames.TilesPanelFrame.Ground_Y0 + EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT;// задаем вертикальное расстояние для тайлов слоя граунд

    EditorFrames.TilesPanelFrame.Item_X0       = EditorFrames.TilesPanelFrame.x0;
    EditorFrames.TilesPanelFrame.Item_Y0       = EditorFrames.TilesPanelFrame.Ground_Y_Max + 10;
    EditorFrames.TilesPanelFrame.Item_Y_Max    = EditorFrames.TilesPanelFrame.Item_Y0 + EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT;
     
    EditorFrames.TilesPanelFrame.Monster_X0    = EditorFrames.TilesPanelFrame.x0;    
    EditorFrames.TilesPanelFrame.Monster_Y0    = EditorFrames.TilesPanelFrame.Item_Y_Max + 10;
    EditorFrames.TilesPanelFrame.Monster_Y_Max = EditorFrames.TilesPanelFrame.Monster_Y0 + EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT;
    // Область вывода выбора элементов карты<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область печати сообщений редактора>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.PrintFrame.height_px = EditorFrames.EditorFrame.Y_Max -EditorFrames.TilesPanelFrame.Y_Max;
    EditorFrames.PrintFrame.x0     = EditorFrames.TilesPanelFrame.x0;
    EditorFrames.PrintFrame.y0     = EditorFrames.TilesPanelFrame.Y_Max;
    EditorFrames.PrintFrame.width  = EditorFrames.EditorFrame.width;
    EditorFrames.PrintFrame.height = EditorFrames.PrintFrame.height_px;
    EditorFrames.PrintFrame.X_Max  = EditorFrames.PrintFrame.x0 + EditorFrames.PrintFrame.width;
    EditorFrames.PrintFrame.Y_Max  = EditorFrames.PrintFrame.y0 + EditorFrames.PrintFrame.height;
    // Область печати сообщений редактора<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------
  }
  //=============================================================================

  //=============================================================================
  // EditorFrame
  EditorFrames.drowEditorFrame = function() {
    EditorFrames.HTML5_Canvas_OUT.Primitive.drawRect(EditorFrames.EditorFrame.x0, EditorFrames.EditorFrame.y0, 
    EditorFrames.EditorFrame.width,EditorFrames.EditorFrame.height, 2, 'blue', 0);
  };
  //=============================================================================
 //=============================================================================
  // MapFrame
  EditorFrames.drowMapFrame = function() {
    EditorFrames.HTML5_Canvas_OUT.Primitive.drawRect(EditorFrames.MapFrame.x0, EditorFrames.MapFrame.y0, 
    EditorFrames.MapFrame.width,EditorFrames.MapFrame.height, 2, 'blue', 0);
  };
  //=============================================================================  

  //=============================================================================
  // TilesPanelFrame
  EditorFrames.drowTilesPanelFrame = function() {
    EditorFrames.HTML5_Canvas_OUT.Primitive.drawRect(EditorFrames.TilesPanelFrame.x0, EditorFrames.TilesPanelFrame.y0, 
    EditorFrames.TilesPanelFrame.width,EditorFrames.TilesPanelFrame.height, 2, 'blue', 0);
  };
  //=============================================================================  

  //=============================================================================
  // PrintFrame
  EditorFrames.drowPrintFrameFrame = function() {
    EditorFrames.HTML5_Canvas_OUT.Primitive.drawRect(EditorFrames.PrintFrame.x0, EditorFrames.PrintFrame.y0, 
    EditorFrames.PrintFrame.width,EditorFrames.PrintFrame.height, 2, 'blue', 0);
  };
  //=============================================================================  

  EditorFrames.ini();

  EditorFrames.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_EditorFrames.js+'); 

  EditorFrames.isOk = "OK";//