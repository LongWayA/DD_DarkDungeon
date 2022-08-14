"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -06.08.2022-14.08.2022-
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
        
    let saveGrounds  = "";
    let saveItems    = "";
    let saveMonsters = "";
    let saveMapName = "";

    if( (mapOneString !== "") && (mapOneString.length > 500) ) {//787

        let pozCharMax = mapOneString.length;
        let pozChar = 0;
        // console.log(' pozCharMax = ' + pozCharMax);
        // console.log(' mapOneString = ' + mapOneString);
        
        //  console.log(' >Grounds '  + '\n');        
        // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
            for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
 
                //Map.MapArrayTile_2d[i][j].G_char = mapOneString[pozChar];
                //console.log('g_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
                saveGrounds = saveGrounds + mapOneString[pozChar];
                pozChar = pozChar + 1;
            }//for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
 
            //console.log('**g_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
            saveGrounds = saveGrounds + mapOneString[pozChar];
            pozChar = pozChar + 1;
        }//for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {        

//////////////////////////////////////////////////////////// 
  
        // console.log('g->i_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
        pozChar = pozChar + 1;
  
        // console.log(' >Items '  + '\n');
        // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
            for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
                //Map.MapArrayTile_2d[i][j].I_char = mapOneString[pozChar];
                //console.log('i_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
                saveItems = saveItems + mapOneString[pozChar];
                pozChar = pozChar + 1;
            }//for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
                     
            //console.log('**i_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
            saveItems = saveItems + mapOneString[pozChar];
            pozChar = pozChar + 1;
        }//for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {

////////////////////////////////////////////////////////////
  
        // console.log('i->m_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
        pozChar = pozChar + 1;
   
        //  console.log(' >Monsters '  + '\n');
        // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
            for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
 
                //Map.MapArrayTile_2d[i][j].M_char = mapOneString[pozChar];
                // console.log('m_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
                saveMonsters = saveMonsters + mapOneString[pozChar];
                // console.log(' saveMonsters = ' + saveMonsters + '\n');
                pozChar = pozChar + 1;
              
            }//for ( let i = Map.widthMaxTilesCount - 1; i >= 0; i--) {
          
            // console.log('**m_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
            saveMonsters = saveMonsters + mapOneString[pozChar];
            pozChar = pozChar + 1;
          
        }//for ( let j = Map.heightMaxTilesCount - 1; j >= 0; j--) {
  
/////////////////////////////////////////////////////////////////////////

        //console.log('m->NAME mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
        pozChar = pozChar + 1;
    
        for ( let k =  pozChar; k < pozCharMax; k++) {
            //console.log('n_mapOneString[' + k + ']= ' + mapOneString[k] + '\n');
            saveMapName = saveMapName + mapOneString[k];
        }

        //console.log(' saveMonsters = ' + saveMonsters + '\n');
        //console.log(' saveItems = ' + saveItems + '\n');
        //console.log(' saveGrounds = ' + saveGrounds + '\n');
        //console.log(' saveMapName = ' + saveMapName + '\n');
    
        Map.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);

        EditorFrameDraw.drowFrameMap();        
        //MapFrameDraw.drawMap(0,0,true);    
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
    let nameUserMapValue = "TEST_1_166045432241485100.map";
    
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
