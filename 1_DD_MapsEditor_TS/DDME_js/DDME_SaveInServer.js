"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -06.08.2022-14.08.2022-19.02.2023-2.04m.2023-
//
/*
 НАЗНАЧЕНИЕ
 Сохраняет карту на сервер

 ИСПОЛЬЗУЕТ МОДУЛИ
   DDME_HTML5_Canvas.js
   DDME_Map_2D.js
   DDME_Pathes.js
   DDME_MapsEditor.js
*/
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { Map_2D } from './DDME_Map_2D.js';
import { Pathes } from './DDME_Pathes.js';
// Внешние ссылки
var Out = {
    HTML5_Canvas_TestLoadedScripts: HTML5_Canvas.TestLoadedScripts,
    Map_2D: Map_2D,
    Pathes: Pathes,
    //=============================================================================
    ini: function () {
        //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    },
    //=============================================================================
};
var SaveInServer = {
    isOk: " ",
    NAME: "SaveInServer",
    OKresponse: "",
    stopClick: true,
    //=============================================================================
    ini: function () {
    },
    //=============================================================================
    // 
    //=============================================================================
    saveInServer: function () {
        //console.log('DDME_SaveInServer.js: saveInServer function ');
        SaveInServer.stopClick = false;
        //let stopClick = false;
        //console.log( "DD_SaveInServer.js: SaveInServer.SaveInServer ");
        let saveGrounds = "";
        let saveItems = "";
        let saveMonsters = "";
        let saveMapString = "";
        Out.Map_2D.saveMapArrayTile();
        saveGrounds = Out.Map_2D.stringMap.saveGrounds;
        saveItems = Out.Map_2D.stringMap.saveItems;
        saveMonsters = Out.Map_2D.stringMap.saveMonsters;
        // заполним FormData данными из формы
        let formData = new FormData();
        let nameUserMap = document.getElementById('nameUserMap');
        let nameUserMapValue = "nameUserMapDefault";
        if (nameUserMap.value != "")
            nameUserMapValue = nameUserMap.value;
        saveMapString = saveGrounds + '^' + saveItems + '^' + saveMonsters + '*' + nameUserMapValue;
        // добавим ещё одно поле
        formData.append("saveMapStringInServer", saveMapString);
        formData.append("nameUserMapValue", nameUserMapValue);
        // отправим данные
        let xhr = new XMLHttpRequest();
        xhr.open("POST", Out.Pathes.SaveInServer_Path_to_DD_SaveMap_php);
        xhr.send(formData);
        // 
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log(xhr.response);
                SaveInServer.OKresponse = xhr.response;
                let st_map_save_in_server = document.getElementById('st_map_save_in_server');
                st_map_save_in_server.value = SaveInServer.OKresponse;
            }
            else {
                console.log("Ошибка " + this.status);
            } //if (xhr.status == 200) {
        };
        return SaveInServer.stopClick;
    }, //SaveInServer.saveInServer = function() {
    //=============================================================================
}; //SaveInServer
SaveInServer.ini();
Out.HTML5_Canvas_TestLoadedScripts.testLoading('DDME_SaveInServer.js');
SaveInServer.isOk = "OK"; //
export { SaveInServer };
