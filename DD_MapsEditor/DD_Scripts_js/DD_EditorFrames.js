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
                    
    EditorFrames.EditorFrame.X0     = 0;
    EditorFrames.EditorFrame.Y0     = 0;
    EditorFrames.EditorFrame.width  = HTML5_Canvas.Id.width;
    EditorFrames.EditorFrame.height = HTML5_Canvas.Id.height;
    EditorFrames.EditorFrame.X_Max  = EditorFrames.EditorFrame.X0 + EditorFrames.EditorFrame.width;
    EditorFrames.EditorFrame.Y_Max  = EditorFrames.EditorFrame.Y0 + EditorFrames.EditorFrame.height;
    
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
    EditorFrames.MapFrame.X0     = EditorFrames.EditorFrame.X0;
    EditorFrames.MapFrame.Y0     = EditorFrames.EditorFrame.Y0;
    EditorFrames.MapFrame.width  = 1200;
    if(EditorFrames.MapFrame.width > EditorFrames.EditorFrame.width) {// не может быть больше чем EditorFrames.EditorFrame.width
      EditorFrames.MapFrame.width = EditorFrames.EditorFrame.width;
    }
    EditorFrames.MapFrame.height = 500;
    if(EditorFrames.MapFrame.height > EditorFrames.EditorFrame.height){// не может быть больше чем EditorFrames.EditorFrame.height
      EditorFrames.MapFrame.height = EditorFrames.EditorFrame.height;
    }
    EditorFrames.MapFrame.X_Max  = EditorFrames.EditorFrame.X0 + EditorFrames.MapFrame.width;
    EditorFrames.MapFrame.Y_Max  = EditorFrames.EditorFrame.Y0 + EditorFrames.MapFrame.height;

    // Область вывода карты<<<<<<<<<<<<<<<<<<<<<<
    //------------------------------------------------------------------------

  }
  //=============================================================================

  //=============================================================================
  // EditorFrame
  EditorFrames.drowEditorFrame = function() {
    HTML5_Canvas.Primitive.drawRect(EditorFrames.EditorFrame.X0, EditorFrames.EditorFrame.Y0, 
    EditorFrames.EditorFrame.width,EditorFrames.EditorFrame.height, 2, 'green', 0);
  };
  //=============================================================================
 //=============================================================================
  // MapFrame
  EditorFrames.drowMapFrame = function() {
    HTML5_Canvas.Primitive.drawRect(EditorFrames.MapFrame.X0, EditorFrames.MapFrame.Y0, 
    EditorFrames.MapFrame.width,EditorFrames.MapFrame.height, 2, 'black', 0);
  };
  //=============================================================================    


  EditorFrames.ini_EditorFrames();

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_EditorFrames.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 EditorFrames.isOk = "OK";//
 //=============================================================================