"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-12.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */


window.SaveInBrowser = {};
SaveInBrowser.isOk = " ";//

SaveInBrowser.NAME = "SaveInBrowser";//

SaveInBrowser.OKresponse = "";

// 
 //=============================================================================
 SaveInBrowser.saveInBrowser = function() {

  Map.saveMapArrayTile();

  localStorage.GROUND   = Map.stringMap.saveGrounds;
  localStorage.ITEMS    = Map.stringMap.saveItems;
  localStorage.MONSTERS = Map.stringMap.saveMonsters;

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_SaveInBrowser.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 SaveInBrowser.isOk = "OK";//
 //=============================================================================