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


window.SaveLoadServer = {};
SaveLoadServer.isOk = " ";//
SaveLoadServer.NAME = "SaveLoadServer";//
SaveLoadServer.OKresponse = "";
SaveLoadServer.stopClick = false;//
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
  //let myTextArea = document.getElementById('myTextarea');
    
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
    SaveLoadServer.stopClick = false;
  } else {
    console.log("Ошибка " + this.status);
  }
};
  // удалить ключ
  // delete localStorage.test;

};//SaveLoadServer.saveInServer = function() {
//=============================================================================

//=============================================================================
//
SaveLoadServer.mapStrigToDraw = function(mapOneString) {
        
  if(mapOneString !== ""){

      let pozChar = mapOneString.length;

      // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
      for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {
          pozChar = pozChar - 2; 
          for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
              pozChar = pozChar - 1;
              Map.MapArrayTile_2d[i][j].M_char = mapOneString[pozChar];
          }//for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
      }//for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {

  //////////////////////////////////////////////////////////// 
  pozChar = pozChar - 1;
  
      // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
      for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {
          pozChar = pozChar - 2; 
          for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
              pozChar = pozChar - 1;
              Map.MapArrayTile_2d[i][j].I_char = mapOneString[pozChar];
          }//for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
      }//for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {

  ////////////////////////////////////////////////////////////    
  pozChar = pozChar - 1;
  
      // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
      for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {
          pozChar = pozChar - 2; 
          for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
              pozChar = pozChar - 1;
 
              //  if( j > Map.heightMaxTilesCount - 3) {
              //console.log(' i = ' + i + ' j = ' + j);
              // console.log(i + ' ' + j + ' mapOneString[' + pozChar +'] = ' + mapOneString[pozChar]);
              //}//if( j > Map.heightMaxTilesCount - 3) {

              Map.MapArrayTile_2d[i][j].G_char = mapOneString[pozChar];
  
          }//for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
      }//for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {

        Map.drawMap(0,0,false);        
        
  }//if(mapOneString !== ""){
}//SaveLoadServer.mapStrigToDraw = function(mapOneString) {
//=============================================================================

// 
 //=============================================================================
 SaveLoadServer.loadFromServer = function() {

// console.log( "DD_SaveLoadInServer.js: SaveLoadServer.loadFromServer ");
//SaveLoadServer.storyLoadingMapsJ.focus();



    // заполним FormData данными из формы
    let formData = new FormData();
    let nameUserMap = document.getElementById('nameMapLoadingFromServer');
    let nameUserMapValue = "testItems_165996122574092100.map";
    
    if(nameUserMap.value != "") {
      nameUserMapValue = nameUserMap.value;
    } else {
      //let questionAboutListOfMapFiles = prompt('Display a list of recorded maps?(Вывести список записанных карт?)', "NO");
      //let questionAboutListOfMapFiles = confirm('Display a list of recorded maps?(Вывести список записанных карт?');
      //console.log( "DD_SaveLoadInServer.js: questionAboutListOfMapFiles = " + questionAboutListOfMapFiles);
      //if(questionAboutListOfMapFiles != null){ };
    }
    
    formData.append("nameUserMapValue", nameUserMapValue);

    // отправим данные
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://alphagameset.xyz/3_DD_DarkDungeon/3_DD_PHP_Server/DD_LoadMap.php");
    xhr.send(formData);

  //xhr.onload = () => alert(xhr.response);
  //let myTextArea = document.getElementById('myTextarea');
    
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
            //console.log(xhr.response);
            if(xhr.response != "") {
                SaveLoadServer.mapStrigToDraw(xhr.response);
            }
        } else {
            console.log("Ошибка " + this.status);
        }
    };
};//SaveLoadServer.loadFromServer = function() {
//=============================================================================


// 
 //=============================================================================
 SaveLoadServer.loadListMapsFromServer = function() {


    // заполним FormData данными из формы
    let formData = new FormData();
    //formData.append("nameUserMapValue", nameUserMapValue);

    // отправим данные
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://alphagameset.xyz/3_DD_DarkDungeon/3_DD_PHP_Server/DD_ListMap.php");
    xhr.send(formData);

    // 
    xhr.onload = function() {
        if (xhr.status == 200) {
           // console.log(xhr.response);
            if(xhr.response != "") {
                SaveLoadServer.storyLoadingMapsJ.value = xhr.response;
            }
        } else {
            console.log("Ошибка " + this.status);
        }
    };




  
};//SaveLoadServer.loadListMapsFromServer = function() {
//=============================================================================


// 
 //=============================================================================
 SaveLoadServer.storyLoadingMapsJ_click = function() {
    if(SaveLoadServer.stopClick == false){ 
        //console.log("SaveLoadServer.storyLoadingMapsJ_click ");
        SaveLoadServer.loadListMapsFromServer();
        SaveLoadServer.stopClick = true;
    }
    
};//SaveLoadServer.modifyText = function() {
//=============================================================================

SaveLoadServer.storyLoadingMapsJ = document.getElementById("storyLoadingMaps");
SaveLoadServer.storyLoadingMapsJ.addEventListener("click", SaveLoadServer.storyLoadingMapsJ_click, false);//click  input


// стартовая инициализация
 //=============================================================================
 SaveLoadServer.ini = function() {
  SaveLoadServer.storyLoadingMapsJ.focus();

};//SaveLoadServer.ini = function() {
//=============================================================================

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('module DD_SaveLoadInServer.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 SaveLoadServer.isOk = "OK";//
 //=============================================================================
//alert("module DD_SaveLoadInServer.js done");
//console.log("module DD_SaveLoadInServer.js done");