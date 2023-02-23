"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-12.08.2022-19.02.2023-
 //

  /*
   НАЗНАЧЕНИЕ
     Записываем карту в хранилище браузера

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     DDME_Map_2D.js
 
  */


window.SaveInBrowser = {};
SaveInBrowser.isOk = " ";//

SaveInBrowser.NAME = "SaveInBrowser";//

// Внешние ссылки
SaveInBrowser.HTML5_Canvas_TestLoadedScripts_OUT;
SaveInBrowser.Map_2D_OUT;

//=============================================================================
SaveInBrowser.ini = function(){

  SaveInBrowser.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
  SaveInBrowser.Map_2D_OUT = Map_2D;

}
//=============================================================================  

// 
 //=============================================================================
 SaveInBrowser.saveInBrowser = function() {

  SaveInBrowser.Map_2D_OUT.saveMapArrayTile();

  localStorage.GROUND   = SaveInBrowser.Map_2D_OUT.stringMap.saveGrounds;
  localStorage.ITEMS    = SaveInBrowser.Map_2D_OUT.stringMap.saveItems;
  localStorage.MONSTERS = SaveInBrowser.Map_2D_OUT.stringMap.saveMonsters;

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

SaveInBrowser.ini();

  SaveInBrowser.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_SaveInBrowser.js+'); 

  SaveInBrowser.isOk = "OK";//