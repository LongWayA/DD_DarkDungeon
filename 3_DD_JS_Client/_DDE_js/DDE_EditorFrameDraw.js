"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-15.08.22-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   
  */

window.EditorFrameDraw = {};
  EditorFrameDraw.isOk = " ";//
  EditorFrameDraw.NAME = "EditorFrameDraw";//

  //=============================================================================
  EditorFrameDraw.ini_EditorFrameDraw = function(){

  }
  //=============================================================================

 //=============================================================================
 // 
  EditorFrameDraw.drowFrame = function() {
    
    MapFrameDraw.drawMap(EditorFrames.MapFrame.X0,EditorFrames.MapFrame.Y0);
    TilesFrameDraw.drawSelectTiles(0);

    EditorFrames.drowEditorFrame();
    EditorFrames.drowMapFrame();
    EditorFrames.drowTilesPanelFrame();
    EditorFrames.drowPrintFrameFrame();

    //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrame');
  };
//=============================================================================

  EditorFrameDraw.ini_EditorFrameDraw();

  HTML5_Canvas.TestLoadedScripts.testLoading ('DDE_EditorFrameDraw.js'); 

  EditorFrameDraw.isOk = "OK";//