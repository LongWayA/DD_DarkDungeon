"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -02.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   Корневой модуль игры


   ИСПОЛЬЗУЕТ МОДУЛИ
    LoadFromServer, SaveInServer, LoadFromBrowser, SaveInBrowser,  LoadFromScripts,
    MapFrameDraw, EditorFrameDraw

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   -
  */

// 
window.MapsEditor = {};
  MapsEditor.NAME = "MapsEditor";//
  MapsEditor.stopClick = false;// нужен чтобы список карт выводился в текстовое поле только раз

//=============================================================================
  // инициализируем скрипт
  MapsEditor.ini = function(){
  //console.log('MapsEditor.ini');
  
    // получаем доступ к текстовому полю storyLoadingMaps и добавляем к нему слушателя на клик мышки
    MapsEditor.storyLoadingMapsJ = document.getElementById("storyLoadingMaps");
    MapsEditor.storyLoadingMapsJ.addEventListener("click", MapsEditor.storyLoadingMapsJ_click, false);//click  input

    // получаем доступ к флажкам и добавляем к ним слушателя на клик мышки
    MapsEditor.checkbox_drawGrounds = document.getElementById("checkbox_drawGrounds");
    MapsEditor.checkbox_drawGrounds.addEventListener("click", MapsEditor.drawMap_by_checkboxGrounds, false);//click  input
    MapsEditor.checkbox_drawItems = document.getElementById("checkbox_drawItems");
    MapsEditor.checkbox_drawItems.addEventListener("click", MapsEditor.drawMap_by_checkboxItems, false);//click  input
    MapsEditor.checkbox_drawMonsters = document.getElementById("checkbox_drawMonsters");
    MapsEditor.checkbox_drawMonsters.addEventListener("click", MapsEditor.drawMap_by_checkboxMonsters, false);//click  input

    // грузим все тайлы карты
    SpritesMap_2D.loadAllSprite();
  };
  //=============================================================================

  // получаем доступ к полю nameMapLoadingFromServer
  MapsEditor.nameMapLoadingFromServerJ = document.getElementById("nameMapLoadingFromServer");

  //=============================================================================
  // когда вставляем в поле окна nameMapLoadingFromServer название карты то автоматически грузим ее
  MapsEditor.nameMapLoadingFromServerJ.onpaste = function(event) {
    //console.log("DD_MapsEditor.js: MapsEditor.nameMapLoadingFromServerJ *****");
    MapsEditor.loadFromServerE();

    // отлаживал сортировку списка карт
    //MapsEditor.storyLoadingMapsJ.value = LoadFromServer.sortingLoadingMaps(LoadFromScripts.listLoadingMapsNotSorting);

  }// onpaste
  //=============================================================================

 
 //=============================================================================
 // когда кликаем на текстовое поле то загружаем с сервера список карт, локально сортируем его и выводим в текстовом поле
 MapsEditor.storyLoadingMapsJ_click = function() {
  if(MapsEditor.stopClick == false){ 
      //console.log("MapsEditor.storyLoadingMapsJ_click ");
      LoadFromServer.loadListMapsFromServer();
      MapsEditor.stopClick = true;
  }
  
};//MapsEditor.modifyText = function() {
//=============================================================================

//=============================================================================
// кнопка сохранения карты в браузере.
MapsEditor.saveInBrowserE = function(){
  SaveInBrowser.saveInBrowser();
};
//=============================================================================

//=============================================================================
// кнопка извлечения карты из браузера
MapsEditor.loadFromBrowserE = function(){
  LoadFromBrowser.loadFromBrowser();
};
//=============================================================================

//=============================================================================
// кнопка сохранения карты на сервере
MapsEditor.saveInServerE = function(){
  SaveInServer.saveInServer();
};
//=============================================================================

//=============================================================================
// кнопка загрузки карты с сервера
MapsEditor.loadFromServerE = function(){
  LoadFromServer.loadFromServer();
};
//=============================================================================

//=============================================================================
// кнопка загрузки из скрипта пустой карты
MapsEditor.resetMapInBrowserE = function(){
  LoadFromScripts.resetMapInBrowser();
};
//=============================================================================

//=============================================================================
 // флажок отрисовки слоя карты относящийся к грунту
 MapsEditor.drawMap_by_checkboxGrounds = function(){
    //console.log('DD_MapsEditor.js:drawMap_by_checkboxGrounds');
    MapFrameDraw.checkbox_drawGrounds_checked = MapsEditor.checkbox_drawGrounds.checked;
    //console.log('DD_MapsEditor.js:MapFrameDraw.checkbox_drawGrounds_checked =' + MapFrameDraw.checkbox_drawGrounds_checked);
    EditorFrameDraw.drowFrame();
  };
//=============================================================================

//=============================================================================
 // флажок отрисовки слоя карты относящийся к предметам на карте
 MapsEditor.drawMap_by_checkboxItems = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxItems');
  MapFrameDraw.checkbox_drawItems_checked = MapsEditor.checkbox_drawItems.checked;
  EditorFrameDraw.drowFrame();
};
//=============================================================================

//=============================================================================
 // флажок отрисовки слоя карты относящийся к монстрам на карте
 MapsEditor.drawMap_by_checkboxMonsters = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxMonsters');
  MapFrameDraw.checkbox_drawMonsters_checked = MapsEditor.checkbox_drawMonsters.checked;
  EditorFrameDraw.drowFrame();
};
//=============================================================================

//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена. отрисовываем карту
 window.onload = function() {
    
    LoadFromScripts.ini_loadFromBrowser();
    EditorFrameDraw.drowFrame();
    //console.log('DD_MapsEditor.js: window.onload');
    //Test.testFetch();
    
   // Test.o();
};
//=============================================================================

MapsEditor.ini();

HTML5_Canvas.TestLoadedScripts.testLoading ('DDE_MapsEditor.js'); 
