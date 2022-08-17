"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -06.08.2022-14.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   
   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

window.SaveInServer = {};
SaveInServer.isOk = " ";//
SaveInServer.NAME = "SaveInServer";//
SaveInServer.OKresponse = "";
// 

 //=============================================================================
 SaveInServer.saveInServer = function() {

  //console.log( "DD_SaveInServer.js: SaveInServer.SaveInServer ");
  let saveGrounds  = "";
  let saveItems    = "";
  let saveMonsters = "";
  let saveMapString = "";

  Map.saveMapArrayTile();

  saveGrounds  = Map.stringMap.saveGrounds;
  saveItems    = Map.stringMap.saveItems;
  saveMonsters = Map.stringMap.saveMonsters;

  // заполним FormData данными из формы
  let formData = new FormData();

  let nameUserMap = document.getElementById('nameUserMap');
  let nameUserMapValue = "nameUserMapDefault";
  if(nameUserMap.value != "") nameUserMapValue = nameUserMap.value;

  saveMapString = saveGrounds + '^' + saveItems + '^' + saveMonsters + '*' + nameUserMapValue;

  // добавим ещё одно поле
  formData.append("saveMapStringInServer", saveMapString);
  formData.append("nameUserMapValue", nameUserMapValue);

  // отправим данные
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://alphagameset.xyz/3_DD_DarkDungeon/3_DD_PHP_Server/DD_SaveMap.php");
  xhr.send(formData);

  // 
  xhr.onload = function() {
    if (xhr.status == 200) {
      console.log(xhr.response);
      SaveInServer.OKresponse = xhr.response;
      document.getElementById("st_map_save_in_server").value = SaveInServer.OKresponse;
      MapsEditor.stopClick = false;
    } else {
      console.log("Ошибка " + this.status);
    }//if (xhr.status == 200) {
  };
  
};//SaveInServer.saveInServer = function() {
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_SaveInServer.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 SaveInServer.isOk = "OK";//
 //=============================================================================