"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

//console.log("module DD_SaveLoadInBrowser start");

window.SaveLoadBrowser = {};
SaveLoadBrowser.isOk = " ";//

SaveLoadBrowser.NAME = "SaveLoadBrowser";//

SaveLoadBrowser.OKresponse = "";

// 
 //=============================================================================
 SaveLoadBrowser.saveInBrowser = function() {

  //console.log( "DD_SaveLoadInBrowser.js: SaveLoadBrowser.SaveInBrowser ");
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

// 
 //=============================================================================
 SaveLoadBrowser.loadFromBrowser = function() {

  //console.log( "DD_SaveLoadInBrowser.js: SaveLoadBrowser.LoadInBrowser ");

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


// 
 //=============================================================================
 SaveLoadBrowser.ini_loadFromBrowser = function() {

 // console.log( "DD_SaveLoadInBrowser.js: SaveLoadBrowser.LoadInBrowser ");

  let saveGrounds  = Resourse.savedGrounds;
  let saveItems    = Resourse.savedItems;
  let saveMonsters = Resourse.savedMonsters;

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
SaveLoadBrowser.resetMapInBrowser = function() {

  //console.log( "DD_SaveLoadInBrowser.js: SaveLoadBrowser.LoadInBrowser ");

  let saveGrounds  = Resourse.resetGrounds;
  let saveItems    = Resourse.resetItems;
  let saveMonsters = Resourse.resetMonsters;

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

// стартовая инициализация
 //=============================================================================
 SaveLoadBrowser.ini = function() {


};
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('module DD_SaveLoadInBrowser.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 SaveLoadBrowser.isOk = "OK";//
 //=============================================================================
//alert("module DD_SaveLoadInBrowser.js done");
//console.log("module DD_SaveLoadInBrowser.js done");