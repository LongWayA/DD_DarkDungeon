"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-12.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */


window.LoadFromBrowser = {};
LoadFromBrowser.isOk = " ";//

LoadFromBrowser.NAME = "LoadFromBrowser";//

LoadFromBrowser.OKresponse = "";


// 
 //=============================================================================
 LoadFromBrowser.loadFromBrowser = function() {

  //console.log( "DD_LoadFromBrowser.js: LoadFromBrowser.LoadInBrowser ");

  let saveGrounds  = localStorage.GROUND;
  let saveItems    = localStorage.ITEMS;
  let saveMonsters = localStorage.MONSTERS;

  Map.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);

  EditorFrameDraw.drowFrameMap();;

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_LoadFromBrowser.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 LoadFromBrowser.isOk = "OK";//
 //=============================================================================
