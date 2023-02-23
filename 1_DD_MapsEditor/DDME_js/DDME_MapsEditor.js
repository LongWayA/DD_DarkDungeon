"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -02.08.2022-21.02.2023-
 //

  /*
   НАЗНАЧЕНИЕ
     Корневой модуль редактора карт игры

   ИСПОЛЬЗУЕТ МОДУЛИ
      DDME_HTML5_Canvas.js
      DDME_SaveInBrowser.js
      DDME_LoadFromBrowser.js
      DDME_SaveInServer.js
      DDME_LoadFromServer.js
      DDME_LoadFromScripts.js
      DDME_MapFrameDraw.js
      DDME_EditorFrameDraw.js
      DDME_VisitCounter.js
  */

// 
window.MapsEditor = {};
  MapsEditor.NAME = "MapsEditor";//
 
  // Внешние ссылки
  MapsEditor.HTML5_Canvas_TestLoadedScripts_OUT;
  MapsEditor.SaveInBrowser_OUT;
  MapsEditor.LoadFromBrowser_OUT;
  MapsEditor.SaveInServer_OUT;
  MapsEditor.LoadFromServer_OUT;
  MapsEditor.LoadFromScripts_OUT;
  MapsEditor.MapFrameDraw_OUT;
  MapsEditor.EditorFrameDraw_OUT;
  MapsEditor.VisitCounter_OUT;

  MapsEditor.stopClick;// нужен чтобы список карт выводился в текстовое поле только раз

  MapsEditor.storyLoadingMapsJ;//
  MapsEditor.checkbox_drawGrounds;//
  MapsEditor.checkbox_drawItems;//
  MapsEditor.checkbox_drawMonsters;//
  MapsEditor.nameMapLoadingFromServerJ;//




//=============================================================================
  // инициализируем скрипт
  MapsEditor.ini = function(){
    //console.log('MapsEditor.ini');

    MapsEditor.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
    MapsEditor.SaveInBrowser_OUT = SaveInBrowser;
    MapsEditor.LoadFromBrowser_OUT = LoadFromBrowser;
    MapsEditor.SaveInServer_OUT = SaveInServer;
    MapsEditor.LoadFromServer_OUT = LoadFromServer;
    MapsEditor.LoadFromScripts_OUT = LoadFromScripts;
    MapsEditor.MapFrameDraw_OUT = MapFrameDraw;
    MapsEditor.EditorFrameDraw_OUT = EditorFrameDraw;
    MapsEditor.MapsEditor_OUT = MapsEditor;
    MapsEditor.VisitCounter_OUT = VisitCounter;


    MapsEditor.stopClick = false;// нужен чтобы список карт выводился в текстовое поле только раз

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

    // получаем доступ к полю nameMapLoadingFromServer
    MapsEditor.nameMapLoadingFromServerJ = document.getElementById("nameMapLoadingFromServer");

           // отключаем элементы работающие с сервером чтобы не мешали локальной отладке.
          //  if(! window.itIsONLINE) { 
                // document.getElementById("buttonSaveMapServ").disabled        = true;
                // document.getElementById("buttonLoadMapServ").disabled        = true;
                // document.getElementById("st_map_save_in_server").disabled    = true;
                // document.getElementById("nameUserMap").disabled              = true;
                // document.getElementById("nameMapLoadingFromServer").disabled = true;
                // document.getElementById("storyLoadingMaps").disabled         = true;
           // } 

  };
  //=============================================================================

 //=============================================================================
 // когда кликаем на текстовое поле то загружаем с сервера список карт, локально сортируем его и выводим в текстовом поле
 MapsEditor.storyLoadingMapsJ_click = function() {
  if(MapsEditor.stopClick == false){ 
      //console.log("MapsEditor.storyLoadingMapsJ_click ");
      MapsEditor.LoadFromServer_OUT.loadListMapsFromServer();
      MapsEditor.stopClick = true;
  }
  
};//MapsEditor.modifyText = function() {
//=============================================================================

//=============================================================================
// кнопка сохранения карты в браузере.
MapsEditor.saveInBrowserE = function(){
  MapsEditor.SaveInBrowser_OUT.saveInBrowser();
};
//=============================================================================

//=============================================================================
// кнопка извлечения карты из браузера
MapsEditor.loadFromBrowserE = function(){
  MapsEditor.LoadFromBrowser_OUT.loadFromBrowser();
};
//=============================================================================

//=============================================================================
// кнопка сохранения карты на сервере
MapsEditor.saveInServerE = function(){
  MapsEditor.SaveInServer_OUT.saveInServer();
  MapsEditor.stopClick = false;
};
//=============================================================================

//=============================================================================
// кнопка загрузки карты с сервера
MapsEditor.loadFromServerE = function(){
  MapsEditor.LoadFromServer_OUT.loadFromServer();
};
//=============================================================================

//=============================================================================
// кнопка загрузки из скрипта пустой карты
MapsEditor.resetMapInBrowserE = function(){
  MapsEditor.LoadFromScripts_OUT.resetMapInBrowser();
};
//=============================================================================

//=============================================================================
 // флажок отрисовки слоя карты относящийся к грунту
 MapsEditor.drawMap_by_checkboxGrounds = function(){
    //console.log('DD_MapsEditor.js:drawMap_by_checkboxGrounds');
    MapsEditor.MapFrameDraw_OUT.checkbox_drawGrounds_checked = MapsEditor.checkbox_drawGrounds.checked;
    //console.log('DD_MapsEditor.js:MapsEditor.MapFrameDraw_OUT.checkbox_drawGrounds_checked =' + MapsEditor.MapFrameDraw_OUT.checkbox_drawGrounds_checked);
    MapsEditor.EditorFrameDraw_OUT.drowFrame();
  };
//=============================================================================

//=============================================================================
 // флажок отрисовки слоя карты относящийся к предметам на карте
 MapsEditor.drawMap_by_checkboxItems = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxItems');
  MapsEditor.MapFrameDraw_OUT.checkbox_drawItems_checked = MapsEditor.checkbox_drawItems.checked;
  MapsEditor.EditorFrameDraw_OUT.drowFrame();
};
//=============================================================================

//=============================================================================
 // флажок отрисовки слоя карты относящийся к монстрам на карте
 MapsEditor.drawMap_by_checkboxMonsters = function(){

  //console.log('DD_MapsEditor.js:drawMap_by_checkboxMonsters');
  MapsEditor.MapFrameDraw_OUT.checkbox_drawMonsters_checked = MapsEditor.checkbox_drawMonsters.checked;
  MapsEditor.EditorFrameDraw_OUT.drowFrame();
};
//=============================================================================

//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена. отрисовываем карту
 window.onload = function() {
    
    MapsEditor.LoadFromScripts_OUT.ini_loadFromBrowser();
    MapsEditor.EditorFrameDraw_OUT.drowFrame();
    MapsEditor.VisitCounter_OUT.start();
    //console.log('DD_MapsEditor.js: window.onload');
    //Test.testFetch();
    
   // Test.o();
};
//=============================================================================

MapsEditor.ini();

//=============================================================================
  // когда вставляем в поле окна nameMapLoadingFromServer название карты то автоматически грузим ее
  MapsEditor.nameMapLoadingFromServerJ.onpaste = function(event) {
    //console.log("DD_MapsEditor.js: MapsEditor.nameMapLoadingFromServerJ *****");
    MapsEditor.loadFromServerE();
    // отлаживал сортировку списка карт
    //MapsEditor.storyLoadingMapsJ.value = LoadFromServer.sortingLoadingMaps(LoadFromScripts.listLoadingMapsNotSorting);

  }// onpaste
  //=============================================================================

MapsEditor.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_MapsEditor.js+'); 
