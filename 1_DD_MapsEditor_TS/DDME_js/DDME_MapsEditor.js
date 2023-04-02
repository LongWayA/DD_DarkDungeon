"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.08m.2022-21.02m.2023-1.04m.2023-
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
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { SaveInBrowser } from './DDME_SaveInBrowser.js';
import { LoadFromBrowser } from './DDME_LoadFromBrowser.js';
import { SaveInServer } from './DDME_SaveInServer.js';
import { LoadFromServer } from './DDME_LoadFromServer.js';
import { LoadFromScripts } from './DDME_LoadFromScripts.js';
import { MapFrameDraw } from './DDME_MapFrameDraw.js';
import { EditorFrameDraw } from './DDME_EditorFrameDraw.js';
import { VisitCounter } from './DDME_VisitCounter.js';
//import { Pathes } from './DDME_Pathes.js';
//import { SpritesMap_2D } from './DDME_HTML5_SpritesMap_2D.js';
//import { Map_2D } from './DDME_Map_2D.js';
//
//import { MapsEditor } from './DDME_MapsEditor.js'; 
// Внешние ссылки
var Out = {
    HTML5_Canvas_TestLoadedScripts: HTML5_Canvas.TestLoadedScripts,
    SaveInBrowser: SaveInBrowser,
    LoadFromBrowser: LoadFromBrowser,
    SaveInServer: SaveInServer,
    LoadFromServer: LoadFromServer,
    LoadFromScripts: LoadFromScripts,
    MapFrameDraw: MapFrameDraw,
    EditorFrameDraw: EditorFrameDraw,
    VisitCounter: VisitCounter,
    //Pathes : Pathes,
    //=============================================================================
    ini: function () {
        //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    },
    //=============================================================================
};
Out.ini();
// 
var MapsEditor = {
    isOk: " ",
    NAME: "MapsEditor",
    stopClick: false,
    //=============================================================================
    // инициализируем скрипт
    ini: function () {
        //console.log('MapsEditor.ini');
        // отключаем элементы работающие с сервером чтобы не мешали локальной отладке.
        //  if(! window.itIsONLINE) { 
        // document.getElementById("buttonSaveMapServ").disabled        = true;
        // document.getElementById("buttonLoadMapServ").disabled        = true;
        // document.getElementById("st_map_save_in_server").disabled    = true;
        // document.getElementById("nameUserMap").disabled              = true;
        // document.getElementById("nameMapLoadingFromServer").disabled = true;
        // document.getElementById("storyLoadingMaps").disabled         = true;
        // } 
    },
    //=============================================================================
    //=============================================================================
    // когда кликаем на текстовое поле то загружаем с сервера список карт, локально сортируем его и выводим в текстовом поле
    storyLoadingMapsJ_click: function () {
        if (MapsEditor.stopClick == false) {
            //console.log("MapsEditor.storyLoadingMapsJ_click ");
            Out.LoadFromServer.loadListMapsFromServer(storyLoadingMapsJ);
            MapsEditor.stopClick = true;
        }
    },
    //=============================================================================
    //=============================================================================
    // флажок отрисовки слоя карты относящийся к грунту
    drawMap_by_checkboxGrounds: function () {
        //console.log('DD_MapsEditor.js:drawMap_by_checkboxGrounds');
        Out.MapFrameDraw.checkbox_drawGrounds_checked = checkbox_drawGrounds.checked;
        //console.log('DD_MapsEditor.js:MapsEditor.MapFrameDraw_OUT.checkbox_drawGrounds_checked =' + MapsEditor.MapFrameDraw_OUT.checkbox_drawGrounds_checked);
        Out.EditorFrameDraw.drowFrame();
    },
    //=============================================================================
    //=============================================================================
    // флажок отрисовки слоя карты относящийся к предметам на карте
    drawMap_by_checkboxItems: function () {
        //console.log('DD_MapsEditor.js:drawMap_by_checkboxItems');
        Out.MapFrameDraw.checkbox_drawItems_checked = checkbox_drawItems.checked;
        Out.EditorFrameDraw.drowFrame();
    },
    //=============================================================================
    //=============================================================================
    // флажок отрисовки слоя карты относящийся к монстрам на карте
    drawMap_by_checkboxMonsters: function () {
        //console.log('DD_MapsEditor.js:drawMap_by_checkboxMonsters');
        Out.MapFrameDraw.checkbox_drawMonsters_checked = checkbox_drawMonsters.checked;
        Out.EditorFrameDraw.drowFrame();
    },
    //=============================================================================
    //=============================================================================
}; // MapsEditor
MapsEditor.ini();
//=============================================================================
// загрузка всего документа(вместе с картинками, звуком и т.д.) закончена. отрисовываем карту
window.onload = function () {
    //console.log('DD_MapsEditor.js: window.onload');
    Out.LoadFromScripts.ini_loadFromBrowser();
    Out.EditorFrameDraw.drowFrame();
    Out.VisitCounter.start();
    //Test.testFetch();
    // Test.o();
};
// buttons---------------------------------------------------------------------------
// кнопка сохранения карты в браузере.
let buttonSaveMapBr = document.getElementById("buttonSaveMapBr"); //
buttonSaveMapBr.onclick = function () {
    //console.log('DD_MapsEditor.js: buttonSaveMapBr click');
    Out.SaveInBrowser.saveInBrowser();
};
// кнопка извлечения карты из браузера
let buttonLoadMapBr = document.getElementById("buttonLoadMapBr"); //
buttonLoadMapBr.onclick = function () {
    //console.log('DD_MapsEditor.js: buttonLoadMapBr click');
    Out.LoadFromBrowser.loadFromBrowser();
};
// кнопка загрузки из скрипта пустой карты
let buttonResetMap = document.getElementById("buttonResetMap"); //
buttonResetMap.onclick = function () {
    //console.log('DD_MapsEditor.js: buttonResetMap click');
    Out.LoadFromScripts.resetMapInBrowser();
};
// кнопка сохранения карты на сервере
let buttonSaveMapServ = document.getElementById("buttonSaveMapServ"); //
buttonSaveMapServ.onclick = function () {
    //console.log('DD_MapsEditor.js: buttonSaveMapServ click');
    //console.log('DD_MapsEditor.js: buttonSaveMapServ stopClick =' + MapsEditor.stopClick);
    MapsEditor.stopClick = Out.SaveInServer.saveInServer();
    //console.log('DD_MapsEditor.js: buttonSaveMapServ stopClick =' + MapsEditor.stopClick);
};
// кнопка загрузки карты с сервера
let buttonLoadMapServ = document.getElementById("buttonLoadMapServ"); //
buttonLoadMapServ.onclick = function () {
    //console.log('DD_MapsEditor.js: buttonLoadMapServ click');
    Out.LoadFromServer.loadFromServer();
};
// buttons------------------------------------------------------------------------
// получаем доступ к текстовому полю storyLoadingMaps и добавляем к нему слушателя на клик мышки
let storyLoadingMapsJ = document.getElementById("storyLoadingMaps"); //
storyLoadingMapsJ.addEventListener("click", MapsEditor.storyLoadingMapsJ_click, false); //click  input
// получаем доступ к флажкам и добавляем к ним слушателя на клик мышки
let checkbox_drawGrounds = document.getElementById("checkbox_drawGrounds");
checkbox_drawGrounds.addEventListener("click", MapsEditor.drawMap_by_checkboxGrounds, false); //click  input
let checkbox_drawItems = document.getElementById("checkbox_drawItems"); //
checkbox_drawItems.addEventListener("click", MapsEditor.drawMap_by_checkboxItems, false); //click  input
let checkbox_drawMonsters = document.getElementById("checkbox_drawMonsters"); //
checkbox_drawMonsters.addEventListener("click", MapsEditor.drawMap_by_checkboxMonsters, false); //click  input
// получаем доступ к полю nameMapLoadingFromServer
let nameMapLoadingFromServerJ = document.getElementById("nameMapLoadingFromServer"); //
// когда вставляем в поле окна nameMapLoadingFromServer название карты то автоматически грузим ее
nameMapLoadingFromServerJ.onpaste = function (event) {
    //console.log("DD_MapsEditor.js: MapsEditor.nameMapLoadingFromServerJ *****");
    Out.LoadFromServer.loadFromServer();
    // отлаживал сортировку списка карт
    //MapsEditor.storyLoadingMapsJ.value = LoadFromServer.sortingLoadingMaps(LoadFromScripts.listLoadingMapsNotSorting);
}; // onpaste
Out.HTML5_Canvas_TestLoadedScripts.testLoading('DDME_MapsEditor.js');
MapsEditor.isOk = "OK"; //
export { MapsEditor };
