"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-15.08.22-19.02.2023-
//


  /*
   НАЗНАЧЕНИЕ
     Рисуем все окна в браузер

   ИСПОЛЬЗУЕТ МОДУЛИ
       DDME_HTML5_Canvas.js
       DDME_MapFrameDraw.js
       DDME_TilesFrameDraw.js
       DDME_EditorFrames.js
  */

window.EditorFrameDraw = {};
  EditorFrameDraw.isOk = " ";//
  EditorFrameDraw.NAME = "EditorFrameDraw";//

  // Внешние ссылки
  EditorFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT;
  EditorFrameDraw.MapFrameDraw_OUT;
  EditorFrameDraw.TilesFrameDraw_OUT;
  EditorFrameDraw.EditorFrames_OUT;

  //=============================================================================
  EditorFrameDraw.ini = function(){

    EditorFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
    EditorFrameDraw.MapFrameDraw_OUT = MapFrameDraw;
    EditorFrameDraw.TilesFrameDraw_OUT = TilesFrameDraw;
    EditorFrameDraw.EditorFrames_OUT = EditorFrames;
  }
  //=============================================================================

 //=============================================================================
 // 
  EditorFrameDraw.drowFrame = function() {
    
    EditorFrameDraw.MapFrameDraw_OUT.drawMap(EditorFrameDraw.EditorFrames_OUT.MapFrame.x0,EditorFrameDraw.EditorFrames_OUT.MapFrame.y0);
    TilesFrameDraw.drawSelectTiles(0);

    EditorFrameDraw.EditorFrames_OUT.drowEditorFrame();
    EditorFrameDraw.EditorFrames_OUT.drowMapFrame();
    EditorFrameDraw.EditorFrames_OUT.drowTilesPanelFrame();
    EditorFrameDraw.EditorFrames_OUT.drowPrintFrameFrame();

    //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrame');
  };
//=============================================================================

  EditorFrameDraw.ini();

  EditorFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_EditorFrameDraw.js +'); 

  EditorFrameDraw.isOk = "OK";//