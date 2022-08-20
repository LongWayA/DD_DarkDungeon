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

  //--------------------------------------
  // 
  //
  MapsEditor.nameMapLoadingFromServerJ = document.getElementById("nameMapLoadingFromServer");
  MapsEditor.nameMapLoadingFromServerJ.onpaste = function(event) {
    //console.log("DD_MapsEditor.js: MapsEditor.nameMapLoadingFromServerJ *****");
  }
//--------------------------------------
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

  //----------------------------
  MapsEditor.storyLoadingMapsJ = document.getElementById("storyLoadingMaps");
  MapsEditor.storyLoadingMapsJ.addEventListener("click", MapsEditor.storyLoadingMapsJ_click, false);//click  input
  //----------------------------
  MapsEditor.checkbox_drawGrounds = document.getElementById("checkbox_drawGrounds");
  MapsEditor.checkbox_drawGrounds.addEventListener("click", MapsEditor.drawMap_by_checkboxGrounds, false);//click  input
  MapsEditor.checkbox_drawItems = document.getElementById("checkbox_drawItems");
  MapsEditor.checkbox_drawItems.addEventListener("click", MapsEditor.drawMap_by_checkboxItems, false);//click  input
  MapsEditor.checkbox_drawMonsters = document.getElementById("checkbox_drawMonsters");
  MapsEditor.checkbox_drawMonsters.addEventListener("click", MapsEditor.drawMap_by_checkboxMonsters, false);//click  input

  SpritesMap.loadAllSprite();
};
//=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxGrounds = function(){
    //console.log('DD_MapsEditor.js:drawMap_by_checkboxGrounds');
    MapFrameDraw.checkbox_drawGrounds_checked = MapsEditor.checkbox_drawGrounds.checked;
    //console.log('DD_MapsEditor.js:MapFrameDraw.checkbox_drawGrounds_checked =' + MapFrameDraw.checkbox_drawGrounds_checked);
    EditorFrameDraw.drowFrame();
  };
//=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxItems = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxItems');
  MapFrameDraw.checkbox_drawItems_checked = MapsEditor.checkbox_drawItems.checked;
  EditorFrameDraw.drowFrame();
};
//=============================================================================

//=============================================================================
 //
 MapsEditor.drawMap_by_checkboxMonsters = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxMonsters');
  MapFrameDraw.checkbox_drawMonsters_checked = MapsEditor.checkbox_drawMonsters.checked;
  EditorFrameDraw.drowFrame();
};
//=============================================================================

//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
 window.onload = function() {
    
    LoadFromScripts.ini_loadFromBrowser();
    EditorFrameDraw.drowFrame();
    //console.log('DD_MapsEditor.js: window.onload');
};
//=============================================================================

MapsEditor.ini();

//============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('script DD_MapsEditor.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

//==============================================================================
