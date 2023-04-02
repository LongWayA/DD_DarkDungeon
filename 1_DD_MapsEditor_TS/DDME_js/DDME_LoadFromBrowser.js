"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -04.08.2022-12.08.2022-19.02.2023-1.04m.2023-
//
/*
 НАЗНАЧЕНИЕ
 Считываем карту из хранилища браузера

 ИСПОЛЬЗУЕТ МОДУЛИ
   DDME_HTML5_Canvas.js
   DDME_Map_2D.js
   DDME_EditorFrameDraw.js
*/
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { Map_2D } from './DDME_Map_2D.js';
import { EditorFrameDraw } from './DDME_EditorFrameDraw.js';
// Внешние ссылки
var Out = {
    HTML5_Canvas_TestLoadedScripts: HTML5_Canvas.TestLoadedScripts,
    Map_2D: Map_2D,
    EditorFrameDraw: EditorFrameDraw,
    //=============================================================================
    ini: function () {
        //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    },
    //=============================================================================
};
Out.ini();
var LoadFromBrowser = {
    isOk: " ",
    NAME: "LoadFromBrowser",
    //=============================================================================
    ini: function () {
    },
    //=============================================================================  
    // 
    //=============================================================================
    loadFromBrowser: function () {
        //console.log( "DD_LoadFromBrowser.js: LoadFromBrowser.LoadInBrowser ");
        let saveGrounds = localStorage.GROUND;
        let saveItems = localStorage.ITEMS;
        let saveMonsters = localStorage.MONSTERS;
        Out.Map_2D.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);
        Out.EditorFrameDraw.drowFrame();
        // удалить ключ
        // delete localStorage.test;
    },
    //=============================================================================
}; //LoadFromBrowser
LoadFromBrowser.ini();
Out.HTML5_Canvas_TestLoadedScripts.testLoading('DDME_LoadFromBrowser.js');
LoadFromBrowser.isOk = "OK"; //
export { LoadFromBrowser };
