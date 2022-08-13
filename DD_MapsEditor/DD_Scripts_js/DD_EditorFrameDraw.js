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




window.EditorFrameDraw = {};
  EditorFrameDraw.isOk = " ";//
  EditorFrameDraw.NAME = "EditorFrameDraw";//

  //=============================================================================
  EditorFrameDraw.ini_EditorFrameDraw = function(){
    EditorFrameDraw.checkbox_drawGrounds_checked  = true;
    EditorFrameDraw.checkbox_drawItems_checked    = true;
    EditorFrameDraw.checkbox_drawMonsters_checked = true;
  }
  //=============================================================================


 //=============================================================================
 // 
  EditorFrameDraw.drowFrame = function() {
    MapFrameDraw.drawMap(0,0);
    TilesFrameDraw.drawSelectTiles(0);
    //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrame');
  };
//=============================================================================

//=============================================================================
 // 
 EditorFrameDraw.drowFrameMap = function() {
  MapFrameDraw.drawMap(0,0);
  //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrameMap');
};
//=============================================================================

//=============================================================================
 // 
 EditorFrameDraw.drowFrameTilesP = function() {
  TilesFrameDraw.drawSelectTiles(0);
  //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrameTilesP');
};
//=============================================================================

EditorFrameDraw.ini_EditorFrameDraw();

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_EditorFrameDraw.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 EditorFrameDraw.isOk = "OK";//
 //=============================================================================