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

  Map_2D.saveMapArrayTile();

  saveGrounds  = Map_2D.stringMap.saveGrounds;
  saveItems    = Map_2D.stringMap.saveItems;
  saveMonsters = Map_2D.stringMap.saveMonsters;

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
  xhr.open("POST", "http://alphagameset.xyz/3_DD_DarkDungeon/2_DD_PHP_Server/DD_SaveMap.php");
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

  HTML5_Canvas.TestLoadedScripts.testLoading ('DDE_SaveInServer.js'); 
 
  SaveInServer.isOk = "OK";//
