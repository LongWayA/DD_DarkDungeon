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

  //console.log( "DD_SaveInBrowser.js: SaveInBrowser.SaveInBrowser ");
  let saveGrounds  = "";
  let saveItems    = "";
  let saveMonsters = "";

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
    for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
      saveGrounds = saveGrounds + Map.MapArrayTile_2d[i][j].G_char;
      saveItems = saveItems + Map.MapArrayTile_2d[i][j].I_char;
      saveMonsters = saveMonsters + Map.MapArrayTile_2d[i][j].M_char;
    }
    saveGrounds  = saveGrounds  + "\n";
    saveItems    = saveItems    + "\n";
    saveMonsters = saveMonsters + "\n";
  }

  //console.log(saveGrounds);
  //console.log(saveItems); 
  //console.log(saveMonsters);
  localStorage.GROUND = saveGrounds;
  localStorage.ITEMS = saveItems;
  localStorage.MONSTERS = saveMonsters;

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_SaveInBrowser.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 SaveInBrowser.isOk = "OK";//
 //=============================================================================