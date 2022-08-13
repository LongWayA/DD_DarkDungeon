"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -06.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

window.LoadFromServer = {};
LoadFromServer.isOk = " ";//
LoadFromServer.NAME = "LoadFromServer";//
LoadFromServer.OKresponse = "";



//=============================================================================
//
LoadFromServer.mapStrigToDraw = function(mapOneString) {
        
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

        EditorFrameDraw.drowFrameMap(0,0,false);        
        
  }//if(mapOneString !== ""){
}//LoadFromServer.mapStrigToDraw = function(mapOneString) {
//=============================================================================

// 
 //=============================================================================
 LoadFromServer.loadFromServer = function() {

// console.log( "DD_LoadFromServer.js: LoadFromServer.loadFromServer ");
//LoadFromServer.storyLoadingMapsJ.focus();

    // заполним FormData данными из формы
    let formData = new FormData();
    let nameUserMap = document.getElementById('nameMapLoadingFromServer');
    let nameUserMapValue = "TEST_166039968012318800.map";
    
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
                LoadFromServer.mapStrigToDraw(xhr.response);
            }
        } else {
            console.log("Ошибка " + this.status);
        }
    };
};//LoadFromServer.loadFromServer = function() {
//=============================================================================


// 
 //=============================================================================
 LoadFromServer.loadListMapsFromServer = function() {

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
                MapsEditor.storyLoadingMapsJ.value = xhr.response;
            }
        } else {
            console.log("Ошибка " + this.status);
        }
    };

};//LoadFromServer.loadListMapsFromServer = function() {
//=============================================================================


 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_LoadFromServer.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 LoadFromServer.isOk = "OK";//
 //=============================================================================
