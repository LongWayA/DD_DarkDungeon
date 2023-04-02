"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -15.08.2022-19.02.2023-1.04m.2023-
//


  /*
   НАЗНАЧЕНИЕ
   Определяем рамки областей вывода на экран

   ИСПОЛЬЗУЕТ МОДУЛИ
   DDME_HTML5_Canvas.js
  */

   import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';

// Внешние ссылки
var Out = {

  HTML5_Canvas : HTML5_Canvas,
  HTML5_Canvas_TestLoadedScripts : HTML5_Canvas.TestLoadedScripts,
  

  //=============================================================================
  ini : function() : void{

    //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    
  },
  //=============================================================================

};

Out.ini();

var EditorFrames = {

  isOk : " ",//
  NAME : "EditorFrames",//

  // рамки
  // Общая рамка экрана вывода графики
  EditorFrame : {
    x0 : 0,// нулевая координата по горизонтали общего окна. т.е. самая левая точка.
    y0 : 0,// нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
    width : 0,// ширина окна берется из канвы сайта
    height : 0,// высота окна берется из канвы сайта
    X_Max : 0,// максимальная координата по горизонтали.
    Y_Max : 0,// максимальная координата по вертикали. Вправо вниз
  },//EditorFrame

  // Область вывода карты
  MapFrame : {
    tile_SIZE_WIDTH : 50,// px это размер тайла карты по горизонтали
    tile_SIZE_HEIGHT : 50,// px это размер тайла карты по вертикали
    HEIGHT_PX : 500,
    x0 : 0,
    y0 : 0,
    width : 0,
    height : 0,
    X_Max : 0,
    Y_Max : 0,
  },//MapFrame

  // Область вывода выбора элементов карты   
  TilesPanelFrame : {
    tile_SIZE_WIDTH : 50,// px это размер тайла панели выбора по горизонтали
    tile_SIZE_HEIGHT : 50,// px это размер тайла панели выбора по вертикали
    HEIGHT_PX : 190,
    x0 : 0,
    y0 : 0,
    width : 0,
    height : 0,
    X_Max : 0,
    Y_Max : 0,
    //---------------------------
    Ground_X0 : 0,// задаем горизонтальное расстояние для тайлов слоя граунд
    Ground_Y0 : 0,// задаем вертикальное расстояние для тайлов слоя граунд
    Ground_Y_Max : 0,// задаем вертикальное расстояние для тайлов слоя граунд

    Item_X0 : 0,
    Item_Y0 : 0,
    Item_Y_Max : 0,
   
    Monster_X0 : 0,    
    Monster_Y0 : 0,
    Monster_Y_Max : 0,

  },//TilesPanelFrame 

  // Область печати сообщений редактора
  PrintFrame : {
    height_px : 0,
    x0 : 0,
    y0 : 0,
    width : 0,
    height : 0,
    X_Max : 0,
    Y_Max : 0,
  },//PrintFrame

  //=============================================================================
  ini : function(){

    //------------------------------------------------------------------------
    // Общая рамка экрана вывода графики>>>>>>>>>>>>>>>>>>>>>>
    EditorFrames.EditorFrame.x0     = 0;// нулевая координата по горизонтали общего окна. т.е. самая левая точка.
    EditorFrames.EditorFrame.y0     = 0;// нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
    EditorFrames.EditorFrame.width  = Out.HTML5_Canvas.width_OUT;// ширина окна берется из канвы сайта
    EditorFrames.EditorFrame.height = Out.HTML5_Canvas.height_OUT;// высота окна берется из канвы сайта
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
  },
  //=============================================================================

  //=============================================================================
  // EditorFrame
  drowEditorFrame : function() {
    Out.HTML5_Canvas.Primitive.drawRect("DDME_EditorFrames.js",EditorFrames.EditorFrame.x0, EditorFrames.EditorFrame.y0, 
    EditorFrames.EditorFrame.width,EditorFrames.EditorFrame.height, 2, 'blue', 0);
  },
  //=============================================================================
 //=============================================================================
  // MapFrame
  drowMapFrame : function() {
    Out.HTML5_Canvas.Primitive.drawRect("DDME_EditorFrames.js",EditorFrames.MapFrame.x0, EditorFrames.MapFrame.y0, 
    EditorFrames.MapFrame.width,EditorFrames.MapFrame.height, 2, 'blue', 0);
  },
  //=============================================================================  

  //=============================================================================
  // TilesPanelFrame
  drowTilesPanelFrame : function() {
    Out.HTML5_Canvas.Primitive.drawRect("DDME_EditorFrames.js",EditorFrames.TilesPanelFrame.x0, EditorFrames.TilesPanelFrame.y0, 
    EditorFrames.TilesPanelFrame.width,EditorFrames.TilesPanelFrame.height, 2, 'blue', 0);
  },
  //=============================================================================  

  //=============================================================================
  // PrintFrame
  drowPrintFrameFrame : function() {
    Out.HTML5_Canvas.Primitive.drawRect("DDME_EditorFrames.js",EditorFrames.PrintFrame.x0, EditorFrames.PrintFrame.y0, 
    EditorFrames.PrintFrame.width,EditorFrames.PrintFrame.height, 2, 'blue', 0);
  },
  //=============================================================================  

};//EditorFrames

  EditorFrames.ini();

  Out.HTML5_Canvas_TestLoadedScripts.testLoading ('DDME_EditorFrames.js'); 

  EditorFrames.isOk = "OK";//

  export { EditorFrames };