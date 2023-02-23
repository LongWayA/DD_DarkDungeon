"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -06.08.2022-14.08.2022-19.02.2023-
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

window.SaveInServer = {};
SaveInServer.isOk = " ";//
SaveInServer.NAME = "SaveInServer";//

// Внешние ссылки
SaveInServer.HTML5_Canvas_TestLoadedScripts_OUT;
SaveInServer.Map_2D_OUT;
SaveInServer.Pathes_OUT;
SaveInServer.MapsEditor_OUT;// скрипт расположен позже этого, поэтому связка при вызове функции сохранения(saveInServer)


SaveInServer.OKresponse;

//=============================================================================
SaveInServer.ini = function(){

  SaveInServer.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
  SaveInServer.Map_2D_OUT = Map_2D;
  SaveInServer.Pathes_OUT = Pathes;
  

  SaveInServer.OKresponse = "";
}
//=============================================================================

// 

 //=============================================================================
 SaveInServer.saveInServer = function() {

  SaveInServer.MapsEditor_OUT = MapsEditor;

  //console.log( "DD_SaveInServer.js: SaveInServer.SaveInServer ");
  let saveGrounds  = "";
  let saveItems    = "";
  let saveMonsters = "";
  let saveMapString = "";

  SaveInServer.Map_2D_OUT.saveMapArrayTile();

  saveGrounds  = SaveInServer.Map_2D_OUT.stringMap.saveGrounds;
  saveItems    = SaveInServer.Map_2D_OUT.stringMap.saveItems;
  saveMonsters = SaveInServer.Map_2D_OUT.stringMap.saveMonsters;

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
  xhr.open("POST", SaveInServer.Pathes_OUT.SaveInServer_Path_to_DD_SaveMap_php);
  xhr.send(formData);

  // 
  xhr.onload = function() {
    if (xhr.status == 200) {
      console.log(xhr.response);
      SaveInServer.OKresponse = xhr.response;
      document.getElementById("st_map_save_in_server").value = SaveInServer.OKresponse;
      SaveInServer.MapsEditor_OUT.stopClick = false;
    } else {
      console.log("Ошибка " + this.status);
    }//if (xhr.status == 200) {
  };
  
};//SaveInServer.saveInServer = function() {
//=============================================================================

  SaveInServer.ini();

  SaveInServer.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_SaveInServer.js+'); 
 
  SaveInServer.isOk = "OK";//
