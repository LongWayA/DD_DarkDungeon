"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -02.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   Корневой модуль игры


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

//console.log("module DD_MapsEditor.js start");


// 
window.MapsEditor = {};
MapsEditor.NAME = "DD_MapsEditor";//

if(window.itIsDebugging == true){
  isOkF();
}
 
//=============================================================================
MapsEditor.ini = function(){
  //console.log('MapsEditor.ini');
  SpritesMap.loadAllSprite();
  SpritesMap.ini_tiles_char();

  MapsEditor.checkbox_drawGrounds_checked  = true;
  MapsEditor.checkbox_drawItems_checked    = true;
  MapsEditor.checkbox_drawMonsters_checked = true;
  //R.UserInputKey.ini();

};
//=============================================================================

//=============================================================================
MapsEditor.start = function(){
  //alert("!");
  //console.log('MapsEditor.start');


};
//============================================================================= 


//=============================================================================
 //
 MapsEditor.test = function(){

  console.log('MapsEditor.test');
  //var dataURL = HTML5_Canvas.Id.toDataURL("image/png");
  //console.log('DD_Client.js: dataURL =' + dataURL);
  
  };
  //=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxGrounds = function(){
    //console.log('DD_MapsEditor.js:drawMap_by_checkboxGrounds');
    MapsEditor.checkbox_drawGrounds_checked = MapsEditor.checkbox_drawGrounds.checked;
    //console.log('DD_MapsEditor.js:MapsEditor.checkbox_drawGrounds_checked =' + MapsEditor.checkbox_drawGrounds_checked);
    Map.drawMap(0,0);
  };
//=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxItems = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxItems');
  MapsEditor.checkbox_drawItems_checked = MapsEditor.checkbox_drawItems.checked;
  Map.drawMap(0,0);
};
//=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxMonsters = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxMonsters');
  MapsEditor.checkbox_drawMonsters_checked = MapsEditor.checkbox_drawMonsters.checked;
  Map.drawMap(0,0);
};
//=============================================================================

  MapsEditor.checkbox_drawGrounds = document.getElementById("checkbox_drawGrounds");
  MapsEditor.checkbox_drawGrounds.addEventListener("click", MapsEditor.drawMap_by_checkboxGrounds, false);//click  input
  MapsEditor.checkbox_drawItems = document.getElementById("checkbox_drawItems");
  MapsEditor.checkbox_drawItems.addEventListener("click", MapsEditor.drawMap_by_checkboxItems, false);//click  input
  MapsEditor.checkbox_drawMonsters = document.getElementById("checkbox_drawMonsters");
  MapsEditor.checkbox_drawMonsters.addEventListener("click", MapsEditor.drawMap_by_checkboxMonsters, false);//click  input



  
//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
 window.onload = function() {
    
    SaveLoadBrowser.ini_loadFromBrowser();
    Map.drawMap(0,0);
    Map.drawSelectTiles(0);
    //Map.draw(100,50);
    //console.log('DD_MapsEditor.js: window.onload');
};
//=============================================================================

// IS IT OK?
//=============================================================================
//MapsEditor.isOkF = function(){
function isOkF(){

  //DD_HTML5_Canvas.js
  if(HTML5_Canvas.isOk != "OK") console.log("DD_MapsEditor.js:module DD_HTML5_Canvas.js NOT OK!");//
  //if(HTML5_Canvas.isOk == "OK") console.log("DD_MapsEditor.js:module DD_HTML5_Canvas.js OK!");//
  //if(HTML5_Canvas.isOk != "OK")       alert("DD_MapsEditor.js:module DD_HTML5_Canvas.js NOT OK!");//

  //DD_HTML5_SpritesMaps.js
  if(SpritesMap.isOk != "OK") console.log("DD_MapsEditor.js:module DD_HTML5_SpritesMaps.js NOT OK!");//
  //if(SpritesMap.isOk == "OK") console.log("DD_MapsEditor.js:module DD_HTML5_SpritesMaps.js OK!");//
  //if(SpritesMap.isOk != "OK")       alert("DD_MapsEditor.js:module DD_HTML5_SpritesMaps.js NOT OK!");//

  //DD_Map.js
  if(Map.isOk != "OK") console.log("DD_MapsEditor.js:module DD_Map.js NOT OK!");//
  //if(Map.isOk == "OK") console.log("DD_MapsEditor.js:module DD_Map.js OK!");//
  //if(Map.isOk != "OK")       alert("DD_MapsEditor.js:module DD_Map.js NOT OK!");//

  //DD_Resourse_m.js
  if(Resourse.isOk != "OK") console.log("DD_MapsEditor.js:module DD_Resourse_m.js NOT OK!");//
  //if(Resourse.isOk == "OK") console.log("DD_MapsEditor.js:module DD_Resourse_m.js OK!");//
  //if(Resourse.isOk != "OK")       alert("DD_MapsEditor.js:module DD_Resourse_m.js NOT OK!");//

  //DD_SaveLoadInBrowser_m.js
  if(SaveLoadBrowser.isOk != "OK") console.log("DD_MapsEditor.js:module DD_SaveLoadInBrowser_m.js NOT OK!");//
  //if(SaveLoadBrowser.isOk == "OK") console.log("DD_MapsEditor.js:module DD_SaveLoadInBrowser_m.js OK!");//
  //if(SaveLoadBrowser.isOk != "OK")       alert("DD_MapsEditor.js:module DD_SaveLoadInBrowser_m.js NOT OK!");//

  //DD_SaveLoadInServer_m.js
  if(SaveLoadServer.isOk != "OK") console.log("DD_MapsEditor.js:module DD_SaveLoadInServer_m.js NOT OK!");//
  //if(SaveLoadServer.isOk == "OK") console.log("DD_MapsEditor.js:module DD_SaveLoadInServer_m.js OK!");//
  //if(SaveLoadServer.isOk != "OK")       alert("DD_MapsEditor.js:module DD_SaveLoadInServer_m.js NOT OK!");//

  //DD_UserInputKey.js
  if(UserInputKey.isOk != "OK") console.log("DD_MapsEditor.js:module DD_UserInputKey.js NOT OK!");//
  //if(UserInputKey.isOk == "OK") console.log("DD_MapsEditor.js:module DD_UserInputKey.js OK!");//
  //if(UserInputKey.isOk != "OK")       alert("DD_MapsEditor.js:module DD_UserInputKey.js NOT OK!");//

  //DD_UserInputMouse.js
  if(UserInputMouse.isOk != "OK") console.log("DD_MapsEditor.js:module DD_UserInputMouse.js NOT OK!");//
  //if(UserInputMouse.isOk == "OK") console.log("DD_MapsEditor.js:module DD_UserInputMouse.js OK!");//
  //if(UserInputMouse.isOk != "OK")       alert("DD_MapsEditor.js:module DD_UserInputMouse.js NOT OK!");//
};
//=============================================================================


MapsEditor.ini();
MapsEditor.start();

//============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('module DD_MapsEditor.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

//==============================================================================
//alert("module DD_MapsEditor.js done");
//console.log("module DD_MapsEditor.js done");