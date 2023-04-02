"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-15.08.22-19.02.2023-1.04m.2023-
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

       import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
       import { MapFrameDraw } from './DDME_MapFrameDraw.js';
       import { TilesFrameDraw } from './DDME_TilesFrameDraw.js';
       import { EditorFrames } from './DDME_EditorFrames.js';       

// Внешние ссылки
var Out = {

  HTML5_Canvas_TestLoadedScripts : HTML5_Canvas.TestLoadedScripts,
  MapFrameDraw : MapFrameDraw,
  TilesFrameDraw : TilesFrameDraw,
  EditorFrames : EditorFrames,
  //=============================================================================
  ini : function() : void{

    //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    
  },
  //=============================================================================

};

Out.ini();



var EditorFrameDraw = {

  isOk : " ",//
  NAME : "EditorFrameDraw",//
  

  //=============================================================================
  ini : function(){

  },
  //=============================================================================

 //=============================================================================
 // 
  drowFrame : function() {
    
    Out.MapFrameDraw.drawMap(Out.EditorFrames.MapFrame.x0,Out.EditorFrames.MapFrame.y0);
    TilesFrameDraw.drawSelectTiles(0);

    Out.EditorFrames.drowEditorFrame();
    Out.EditorFrames.drowMapFrame();
    Out.EditorFrames.drowTilesPanelFrame();
    Out.EditorFrames.drowPrintFrameFrame();

    //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrame');
  },
//=============================================================================

};//EditorFrameDraw

  EditorFrameDraw.ini();

  Out.HTML5_Canvas_TestLoadedScripts.testLoading ('DDME_EditorFrameDraw.js'); 

  EditorFrameDraw.isOk = "OK";//

  export { EditorFrameDraw };