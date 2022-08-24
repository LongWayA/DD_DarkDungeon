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

  Map_2D.saveMapArrayTile();

  localStorage.GROUND   = Map_2D.stringMap.saveGrounds;
  localStorage.ITEMS    = Map_2D.stringMap.saveItems;
  localStorage.MONSTERS = Map_2D.stringMap.saveMonsters;

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

  HTML5_Canvas.TestLoadedScripts.testLoading ('DD_SaveInBrowser.js'); 

  SaveInBrowser.isOk = "OK";//