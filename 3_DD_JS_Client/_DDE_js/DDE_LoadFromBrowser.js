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

  Map_2D.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);

  EditorFrameDraw.drowFrame();

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

HTML5_Canvas.TestLoadedScripts.testLoading ('DDE_LoadFromBrowser.js'); 

 LoadFromBrowser.isOk = "OK";//