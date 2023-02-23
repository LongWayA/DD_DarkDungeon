"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-12.08.2022-19.02.2023-
 //

  /*
   НАЗНАЧЕНИЕ
   Считываем карту из хранилища браузера

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     DDME_Map_2D.js
     DDME_EditorFrameDraw.js
  */


window.LoadFromBrowser = {};
LoadFromBrowser.isOk = " ";//
LoadFromBrowser.NAME = "LoadFromBrowser";//

// Внешние ссылки
LoadFromBrowser.HTML5_Canvas_TestLoadedScripts_OUT;
LoadFromBrowser.Map_2D_OUT;
LoadFromBrowser.EditorFrameDraw_OUT;

//=============================================================================
LoadFromBrowser.ini = function(){

  LoadFromBrowser.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
  LoadFromBrowser.Map_2D_OUT = Map_2D;
  LoadFromBrowser.EditorFrameDraw_OUT = EditorFrameDraw;
}
//=============================================================================  
// 
 //=============================================================================
 LoadFromBrowser.loadFromBrowser = function() {

  //console.log( "DD_LoadFromBrowser.js: LoadFromBrowser.LoadInBrowser ");

  let saveGrounds  = localStorage.GROUND;
  let saveItems    = localStorage.ITEMS;
  let saveMonsters = localStorage.MONSTERS;

  LoadFromBrowser.Map_2D_OUT.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);

  LoadFromBrowser.EditorFrameDraw_OUT.drowFrame();

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

LoadFromBrowser.ini();

LoadFromBrowser.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_LoadFromBrowser.js+'); 

LoadFromBrowser.isOk = "OK";//