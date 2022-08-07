"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -06.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

//console.log("module DD_SaveLoadInServer.js start");

import { HTML5_Canvas } from './DD_HTML5_Canvas_m_040822.js';
import { Map }          from './DD_Map_m_040822.js';

export let SaveLoadServer = {};
SaveLoadServer.isOk = " ";//

SaveLoadServer.NAME = "SaveLoadServer";//

SaveLoadServer.OKresponse = "";


// 
 //=============================================================================
 SaveLoadServer.saveInServer = function() {

  //console.log( "DD_SaveLoadInServer.js: SaveLoadServer.SaveInServer ");
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

    // заполним FormData данными из формы
    let formData = new FormData();

    let nameUserMap = document.getElementById('nameUserMap');
    let nameUserMapValue = "nameUserMapDefault";
    if(nameUserMap.value != "") nameUserMapValue = nameUserMap.value;

  // добавим ещё одно поле
  formData.append("saveGroundsInServer",  saveGrounds);
  formData.append("saveItemsInServer",    saveItems);
  formData.append("saveMonstersInServer", saveMonsters);
  formData.append("nameUserMapValue", nameUserMapValue);


  // отправим данные
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://alphagameset.xyz/3_DD_DarkDungeon/3_DD_PHP_Server/DD_SaveMap.php");
  xhr.send(formData);

  //xhr.onload = () => alert(xhr.response);
  let myTextArea = document.getElementById('myTextarea');
    
 /*   
  xhr.onload = () => {
      console.log(xhr.response);
      SaveLoad.OKresponse = xhr.response;
      myTextArea.innerHTML = SaveLoad.OKresponse;
  }
*/


 // 
 xhr.onload = function() {
  if (xhr.status == 200) {
    console.log(xhr.response);
    SaveLoadServer.OKresponse = xhr.response;
    document.getElementById("st_map_save_in_server").value = SaveLoadServer.OKresponse;
  } else {
    console.log("Ошибка " + this.status);
  }
};


  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================



// стартовая инициализация
 //=============================================================================
 SaveLoadServer.ini = function() {


};
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('module DD_SaveLoadInServer.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 SaveLoadServer.isOk = "OK";//
 //=============================================================================
//alert("module DD_SaveLoadInServer.js done");
//console.log("module DD_SaveLoadInServer.js done");