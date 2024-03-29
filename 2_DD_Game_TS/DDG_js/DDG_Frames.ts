"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -15.08.2022-19.02.2023-18.03.2023-26.03.2023
//


  /*
   НАЗНАЧЕНИЕ
   Определяем рамки областей вывода на экран

   ИСПОЛЬЗУЕТ МОДУЛИ
   DDME_HTML5_Canvas.js
  */

   import {HTML5_Canvas} from './DDG_HTML5_Canvas.js';

// Внешние ссылки
var Out = {
  // HTML5_Canvas
  HTML5_Canvas : HTML5_Canvas,
  HTML5_Canvas_width : HTML5_Canvas.width_OUT,
  HTML5_Canvas_height : HTML5_Canvas.height_OUT,
  //
  // function(_nameScript : string)
  HTML5_Canvas_TestLoadedScripts_testLoading : HTML5_Canvas.TestLoadedScripts.testLoading,
  //function(_id : string, _left : number, _top : number, _width : number, _height : number,
  //_lineWidth : number, _color : string, _fillYes : number)
  HTML5_Canvas_Primitive_drawRect: HTML5_Canvas.Primitive.drawRect,

  //=============================================================================
  ini : function() : void{
  },
  //=============================================================================
};

//Out.ini();

var Frames = {
  isOk : "",//
  NAME : "Frames",//

  // рамки
  // Общая рамка экрана вывода графики
  EditorFrame : {
    x0 : 0,//Frames.EditorFrame.x0;// нулевая координата по горизонтали общего окна. т.е. самая левая точка.
    y0 : 0,// нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
    width : 0,// ширина окна берется из канвы сайта
    height : 0,// высота окна берется из канвы сайта
    X_Max : 0,// максимальная координата по горизонтали.
    Y_Max : 0,// максимальная координата по вертикали. Вправо вниз
  },//EditorFrame
  // Область вывода карты
  MapFrame : {
    tile_SIZE_WIDTH  : 50,// px это размер тайла карты по горизонтали
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
    tile_SIZE_WIDTH  : 50,// px это размер тайла панели выбора по горизонтали
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
    Frames.EditorFrame.x0     = 0;// нулевая координата по горизонтали общего окна. т.е. самая левая точка.
    Frames.EditorFrame.y0     = 0;// нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
    Frames.EditorFrame.width  = Out.HTML5_Canvas_width;// ширина окна берется из канвы сайта
    Frames.EditorFrame.height = Out.HTML5_Canvas_height;// высота окна берется из канвы сайта
    Frames.EditorFrame.X_Max  = Frames.EditorFrame.x0 + Frames.EditorFrame.width;// максимальная координата по горизонтали.
    Frames.EditorFrame.Y_Max  = Frames.EditorFrame.y0 + Frames.EditorFrame.height;// максимальная координата по вертикали. Вправо вниз
   
    // console.log('DDME_Frames.js: Frames.EditorFrame.x0 = ' + Frames.EditorFrame.x0);
    // console.log('DDME_Frames.js: Frames.EditorFrame.x0 = ' + Frames.EditorFrame.x0);
    // console.log('DDME_Frames.js: Frames.EditorFrame.width = ' + Frames.EditorFrame.width);
    // console.log('DDME_Frames.js: Frames.EditorFrame.height = ' + Frames.EditorFrame.height);
    // console.log('DDME_Frames.js: Frames.EditorFrame.X_Max = ' + Frames.EditorFrame.X_Max);
    // console.log('DDME_Frames.js: Frames.EditorFrame.Y_Max = ' + Frames.EditorFrame.Y_Max);
    
    // Общая рамка экрана вывода графики<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область вывода карты>>>>>>>>>>>>>>>>>>>>>>
    Frames.MapFrame.x0     = Frames.EditorFrame.x0;
    Frames.MapFrame.y0     = Frames.EditorFrame.y0;
    //Frames.MapFrame.x0     = 100;
    //Frames.MapFrame.y0     = 50;

    Frames.MapFrame.width  = Frames.EditorFrame.width;
    Frames.MapFrame.height = Frames.MapFrame.HEIGHT_PX;
    if(Frames.MapFrame.height > Frames.EditorFrame.height){// не может быть больше чем Frames.EditorFrame.height
      Frames.MapFrame.height = Frames.EditorFrame.height;
    }
    Frames.MapFrame.X_Max  = Frames.MapFrame.x0 + Frames.MapFrame.width;
    Frames.MapFrame.Y_Max  = Frames.MapFrame.y0 + Frames.MapFrame.height;

    // console.log('DDME_Frames.js: Frames.MapFrame.tile_SIZE_WIDTH = ' + Frames.MapFrame.tile_SIZE_WIDTH);
    // console.log('DDME_Frames.js: Frames.MapFrame.tile_SIZE_HEIGHT = ' + Frames.MapFrame.tile_SIZE_HEIGHT);
    // console.log('DDME_Frames.js: Frames.MapFrame.x0 = ' + Frames.MapFrame.x0);
    // console.log('DDME_Frames.js: Frames.MapFrame.x0 = ' + Frames.MapFrame.x0);
    // console.log('DDME_Frames.js: Frames.MapFrame.width = ' + Frames.MapFrame.width);
    // console.log('DDME_Frames.js: Frames.MapFrame.height = ' + Frames.MapFrame.height);
    // console.log('DDME_Frames.js: Frames.MapFrame.X_Max = ' + Frames.MapFrame.X_Max);
    // console.log('DDME_Frames.js: Frames.MapFrame.Y_Max = ' + Frames.MapFrame.Y_Max);

    // Область вывода карты<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область вывода выбора элементов карты>>>>>>>>>>>>>>>>>>>>>>
    Frames.TilesPanelFrame.x0     = Frames.MapFrame.x0;
    Frames.TilesPanelFrame.y0     = Frames.MapFrame.Y_Max;
    Frames.TilesPanelFrame.width  = Frames.EditorFrame.width;
    Frames.TilesPanelFrame.height = Frames.TilesPanelFrame.HEIGHT_PX;
    if(Frames.TilesPanelFrame.height > Frames.EditorFrame.height){// не может быть больше чем Frames.EditorFrame.height
      Frames.TilesPanelFrame.height = Frames.EditorFrame.height;
    }
    Frames.TilesPanelFrame.X_Max  = Frames.TilesPanelFrame.x0 + Frames.TilesPanelFrame.width;
    Frames.TilesPanelFrame.Y_Max  = Frames.TilesPanelFrame.y0 + Frames.TilesPanelFrame.height;
    //---------------------------

    Frames.TilesPanelFrame.Ground_X0     = Frames.TilesPanelFrame.x0;// задаем горизонтальное расстояние для тайлов слоя граунд
    Frames.TilesPanelFrame.Ground_Y0     = Frames.TilesPanelFrame.y0 + 10;// задаем вертикальное расстояние для тайлов слоя граунд
    Frames.TilesPanelFrame.Ground_Y_Max  = Frames.TilesPanelFrame.Ground_Y0 + Frames.TilesPanelFrame.tile_SIZE_HEIGHT;// задаем вертикальное расстояние для тайлов слоя граунд

    Frames.TilesPanelFrame.Item_X0       = Frames.TilesPanelFrame.x0;
    Frames.TilesPanelFrame.Item_Y0       = Frames.TilesPanelFrame.Ground_Y_Max + 10;
    Frames.TilesPanelFrame.Item_Y_Max    = Frames.TilesPanelFrame.Item_Y0 + Frames.TilesPanelFrame.tile_SIZE_HEIGHT;
     
    Frames.TilesPanelFrame.Monster_X0    = Frames.TilesPanelFrame.x0;    
    Frames.TilesPanelFrame.Monster_Y0    = Frames.TilesPanelFrame.Item_Y_Max + 10;
    Frames.TilesPanelFrame.Monster_Y_Max = Frames.TilesPanelFrame.Monster_Y0 + Frames.TilesPanelFrame.tile_SIZE_HEIGHT;
    // Область вывода выбора элементов карты<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------
    // Область печати сообщений редактора>>>>>>>>>>>>>>>>>>>>>>
    Frames.PrintFrame.height_px = Frames.EditorFrame.Y_Max -Frames.TilesPanelFrame.Y_Max;
    Frames.PrintFrame.x0     = Frames.TilesPanelFrame.x0;
    Frames.PrintFrame.y0     = Frames.TilesPanelFrame.Y_Max;
    Frames.PrintFrame.width  = Frames.EditorFrame.width;
    Frames.PrintFrame.height = Frames.PrintFrame.height_px;
    Frames.PrintFrame.X_Max  = Frames.PrintFrame.x0 + Frames.PrintFrame.width;
    Frames.PrintFrame.Y_Max  = Frames.PrintFrame.y0 + Frames.PrintFrame.height;
    // Область печати сообщений редактора<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------
  },
  //=============================================================================

  //=============================================================================
  // EditorFrame
  drowEditorFrame : function() {
    Out.HTML5_Canvas_Primitive_drawRect("drowEditorFrame", Frames.EditorFrame.x0, Frames.EditorFrame.y0, 
    Frames.EditorFrame.width,Frames.EditorFrame.height, 2, 'blue', 0);
  },
  //=============================================================================
 //=============================================================================
  // MapFrame
  drowMapFrame : function() {
    Out.HTML5_Canvas_Primitive_drawRect("drowMapFrame", Frames.MapFrame.x0, Frames.MapFrame.y0, 
    Frames.MapFrame.width,Frames.MapFrame.height, 2, 'blue', 0);
  },
  //=============================================================================  

  //=============================================================================
  // TilesPanelFrame
  drowTilesPanelFrame : function() {
    Out.HTML5_Canvas_Primitive_drawRect("drowTilesPanelFrame", Frames.TilesPanelFrame.x0, Frames.TilesPanelFrame.y0, 
    Frames.TilesPanelFrame.width,Frames.TilesPanelFrame.height, 2, 'blue', 0);
  },
  //=============================================================================  

  //=============================================================================
  // PrintFrame
  drowPrintFrameFrame : function() {
    Out.HTML5_Canvas_Primitive_drawRect("drowPrintFrameFrame", Frames.PrintFrame.x0, Frames.PrintFrame.y0, 
    Frames.PrintFrame.width,Frames.PrintFrame.height, 2, 'blue', 0);
  },
  //=============================================================================  
};//Frames

  Frames.ini();

  Out.HTML5_Canvas_TestLoadedScripts_testLoading ('DDG_Frames.js'); 

  Frames.isOk = "OK";//

  export {Frames};