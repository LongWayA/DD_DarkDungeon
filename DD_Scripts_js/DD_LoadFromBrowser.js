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

  let pozChar = 0;

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
    
    for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
      
      Map.MapArrayTile_2d[i][j].G_char = saveGrounds[pozChar];
      Map.MapArrayTile_2d[i][j].I_char = saveItems[pozChar];
      Map.MapArrayTile_2d[i][j].M_char = saveMonsters[pozChar];
      pozChar = pozChar + 1;
    }
    pozChar = pozChar + 1;
  }
  Map.drawMap(0,0);

  //console.log(saveGrounds);
  //console.log(saveItems); 
  //console.log(saveMonsters);
  

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_LoadFromBrowser.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 LoadFromBrowser.isOk = "OK";//
 //=============================================================================
