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

// 
window.MapsEditor = {};
MapsEditor.NAME = "DD_MapsEditor";//
MapsEditor.stopClick = false;//

if(window.itIsDebugging == true){
  isOkF();
}
 
// 
 //=============================================================================
 MapsEditor.storyLoadingMapsJ_click = function() {
  if(MapsEditor.stopClick == false){ 
      //console.log("MapsEditor.storyLoadingMapsJ_click ");
      LoadFromServer.loadListMapsFromServer();
      MapsEditor.stopClick = true;
  }
  
};//MapsEditor.modifyText = function() {
//=============================================================================

MapsEditor.storyLoadingMapsJ = document.getElementById("storyLoadingMaps");
MapsEditor.storyLoadingMapsJ.addEventListener("click", MapsEditor.storyLoadingMapsJ_click, false);//click  input


//=============================================================================
MapsEditor.saveInBrowserE = function(){
  SaveInBrowser.saveInBrowser();
};
//=============================================================================

//=============================================================================
MapsEditor.loadFromBrowserE = function(){
  LoadFromBrowser.loadFromBrowser();
};
//=============================================================================

//=============================================================================
MapsEditor.resetMapInBrowserE = function(){
  LoadFromScripts.resetMapInBrowser();
};
//=============================================================================

//=============================================================================
MapsEditor.saveInServerE = function(){
  SaveInServer.saveInServer();
};
//=============================================================================


//=============================================================================
MapsEditor.loadFromServerE = function(){
  LoadFromServer.loadFromServer();
};
//=============================================================================


//=============================================================================
MapsEditor.ini = function(){
  //console.log('MapsEditor.ini');
  SpritesMap.loadAllSprite();
  SpritesMap.ini_tiles_char();

  
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
    EditorFrameDraw.checkbox_drawGrounds_checked = MapsEditor.checkbox_drawGrounds.checked;
    //console.log('DD_MapsEditor.js:MapsEditor.checkbox_drawGrounds_checked =' + MapsEditor.checkbox_drawGrounds_checked);
    EditorFrameDraw.drowFrameMap();
  };
//=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxItems = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxItems');
  EditorFrameDraw.checkbox_drawItems_checked = MapsEditor.checkbox_drawItems.checked;
  EditorFrameDraw.drowFrameMap();
};
//=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxMonsters = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxMonsters');
  EditorFrameDraw.checkbox_drawMonsters_checked = MapsEditor.checkbox_drawMonsters.checked;
  EditorFrameDraw.drowFrameMap();
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
    
    LoadFromScripts.ini_loadFromBrowser();
    EditorFrameDraw.drowFrame();
    //console.log('DD_MapsEditor.js: window.onload');
};
//=============================================================================

// IS IT OK?
//=============================================================================
//MapsEditor.isOkF = function(){
function isOkF(){

  //DD_HTML5_Canvas.js
  if(HTML5_Canvas.isOk != "OK") console.log("DD_MapsEditor.js:script DD_HTML5_Canvas.js NOT OK!");//
  //if(HTML5_Canvas.isOk == "OK") console.log("DD_MapsEditor.js:script DD_HTML5_Canvas.js OK!");//
  //if(HTML5_Canvas.isOk != "OK")       alert("DD_MapsEditor.js:script DD_HTML5_Canvas.js NOT OK!");//

  //DD_HTML5_SpritesMaps.js
  if(SpritesMap.isOk != "OK") console.log("DD_MapsEditor.js:script DD_HTML5_SpritesMaps.js NOT OK!");//
  //if(SpritesMap.isOk == "OK") console.log("DD_MapsEditor.js:script DD_HTML5_SpritesMaps.js OK!");//
  //if(SpritesMap.isOk != "OK")       alert("DD_MapsEditor.js:script DD_HTML5_SpritesMaps.js NOT OK!");//

  //DD_Map.js
  if(Map.isOk != "OK") console.log("DD_MapsEditor.js:script DD_Map.js NOT OK!");//
  //if(Map.isOk == "OK") console.log("DD_MapsEditor.js:script DD_Map.js OK!");//
  //if(Map.isOk != "OK")       alert("DD_MapsEditor.js:script DD_Map.js NOT OK!");//

  //DD_MapFrameDraw.js
  if(MapFrameDraw.isOk != "OK") console.log("DD_MapsEditor.js:script DD_MapFrameDraw.js NOT OK!");//
  //if(MapFrameDraw.isOk == "OK") console.log("DD_MapsEditor.js:script DD_MapFrameDraw.js OK!");//
  //if(MapFrameDraw.isOk != "OK")       alert("DD_MapsEditor.js:script DD_MapFrameDraw.js NOT OK!");//

  //DD_TilesFrameDraw.js
  if(TilesFrameDraw.isOk != "OK") console.log("DD_MapsEditor.js:script DD_TilesFrameDraw.js NOT OK!");//
  //if(TilesFrameDraw.isOk == "OK") console.log("DD_MapsEditor.js:script DD_TilesFrameDraw.js OK!");//
  //if(TilesFrameDraw.isOk != "OK")       alert("DD_MapsEditor.js:script DD_TilesFrameDraw.js NOT OK!");//

  //DD_SaveInBrowser.js
  if(SaveInBrowser.isOk != "OK") console.log("DD_MapsEditor.js:script DD_SaveInBrowser.js NOT OK!");//
  //if(SaveInBrowser.isOk == "OK") console.log("DD_MapsEditor.js:script DD_SaveInBrowser.js OK!");//
  //if(SaveInBrowser.isOk != "OK")       alert("DD_MapsEditor.js:script DD_SaveInBrowser.js NOT OK!");//

  //DD_LoadFromBrowser.js
  if(LoadFromBrowser.isOk != "OK") console.log("DD_MapsEditor.js:script DD_LoadFromBrowser.js NOT OK!");//
  //if(LoadFromBrowser.isOk == "OK") console.log("DD_MapsEditor.js:script DD_LoadFromBrowser.js OK!");//
  //if(LoadFromBrowser.isOk != "OK")       alert("DD_MapsEditor.js:script DD_LoadFromBrowser.js NOT OK!");//

  //DD_LoadFromScripts.js
  if(LoadFromScripts.isOk != "OK") console.log("DD_MapsEditor.js:script DD_LoadFromScripts.js NOT OK!");//
  //if(LoadFromScripts.isOk == "OK") console.log("DD_MapsEditor.js:script DD_LoadFromScripts.js OK!");//
  //if(LoadFromScripts.isOk != "OK")       alert("DD_MapsEditor.js:script DD_LoadFromScripts.js NOT OK!");//

  //DD_SaveInServer.js
  if(SaveInServer.isOk != "OK") console.log("DD_MapsEditor.js:script DD_SaveInServer.js NOT OK!");//
  //if(SaveInServer.isOk == "OK") console.log("DD_MapsEditor.js:script DD_SaveInServer.js OK!");//
  //if(SaveInServer.isOk != "OK")       alert("DD_MapsEditor.js:script DD_SaveInServer.js NOT OK!");//

  //DD_LoadFromServer.js
  if(LoadFromServer.isOk != "OK") console.log("DD_MapsEditor.js:script DD_LoadFromServer.js NOT OK!");//
  //if(LoadFromServer.isOk == "OK") console.log("DD_MapsEditor.js:script DD_LoadFromServer.js OK!");//
  //if(LoadFromServer.isOk != "OK")       alert("DD_MapsEditor.js:script DD_LoadFromServer.js NOT OK!");//
  
 //DD_EditorFrameDraw.js
 if(EditorFrameDraw.isOk != "OK") console.log("DD_MapsEditor.js:script DD_EditorFrameDraw.js NOT OK!");//
 //if(EditorFrameDraw.isOk == "OK") console.log("DD_MapsEditor.js:script DD_EditorFrameDraw.js OK!");//
 //if(EditorFrameDraw.isOk != "OK")       alert("DD_MapsEditor.js:script DD_EditorFrameDraw.js NOT OK!");//

  //DD_UserInputKey.js
  if(UserInputKey.isOk != "OK") console.log("DD_MapsEditor.js:script DD_UserInputKey.js NOT OK!");//
  //if(UserInputKey.isOk == "OK") console.log("DD_MapsEditor.js:script DD_UserInputKey.js OK!");//
  //if(UserInputKey.isOk != "OK")       alert("DD_MapsEditor.js:script DD_UserInputKey.js NOT OK!");//

  //DD_UserInputMouse.js
  if(UserInputMouse.isOk != "OK") console.log("DD_MapsEditor.js:script DD_UserInputMouse.js NOT OK!");//
  //if(UserInputMouse.isOk == "OK") console.log("DD_MapsEditor.js:script DD_UserInputMouse.js OK!");//
  //if(UserInputMouse.isOk != "OK")       alert("DD_MapsEditor.js:script DD_UserInputMouse.js NOT OK!");//
};
//=============================================================================


MapsEditor.ini();
MapsEditor.start();

//============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('script DD_MapsEditor.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

//==============================================================================
