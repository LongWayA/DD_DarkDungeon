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
LoadFromServer.ini = function(){

    LoadFromServer.LoadingMapsString = new Array(10000); // массив имен карт.
    LoadFromServer.LoadingMapsInt    = new Array(10000); // массив ид чисел карт. по ним сортируем карты
}
//=============================================================================

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
        for ( let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
            for ( let i = 0; i < Map_2D.widthMaxTilesCount; i++) {
 
                //Map_2D.MapArrayTile_2d[i][j].G_char = mapOneString[pozChar];
                //console.log('g_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
                saveGrounds = saveGrounds + mapOneString[pozChar];
                pozChar = pozChar + 1;
            }//for ( let i = Map_2D.widthMaxTilesCount - 1; i >= 0; i--) {
 
            //console.log('**g_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
            saveGrounds = saveGrounds + mapOneString[pozChar];
            pozChar = pozChar + 1;
        }//for ( let j = Map_2D.heightMaxTilesCount - 1; j >= 0; j--) {        

//////////////////////////////////////////////////////////// 
  
        // console.log('g->i_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
        pozChar = pozChar + 1;
  
        // console.log(' >Items '  + '\n');
        // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for ( let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
            for ( let i = 0; i < Map_2D.widthMaxTilesCount; i++) {
                //Map_2D.MapArrayTile_2d[i][j].I_char = mapOneString[pozChar];
                //console.log('i_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
                saveItems = saveItems + mapOneString[pozChar];
                pozChar = pozChar + 1;
            }//for ( let i = Map_2D.widthMaxTilesCount - 1; i >= 0; i--) {
                     
            //console.log('**i_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
            saveItems = saveItems + mapOneString[pozChar];
            pozChar = pozChar + 1;
        }//for ( let j = Map_2D.heightMaxTilesCount - 1; j >= 0; j--) {

////////////////////////////////////////////////////////////
  
        // console.log('i->m_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
        pozChar = pozChar + 1;
   
        //  console.log(' >Monsters '  + '\n');
        // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
        for ( let j = 0; j < Map_2D.heightMaxTilesCount; j++) {
            for ( let i = 0; i < Map_2D.widthMaxTilesCount; i++) {
 
                //Map_2D.MapArrayTile_2d[i][j].M_char = mapOneString[pozChar];
                // console.log('m_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
                saveMonsters = saveMonsters + mapOneString[pozChar];
                // console.log(' saveMonsters = ' + saveMonsters + '\n');
                pozChar = pozChar + 1;
              
            }//for ( let i = Map_2D.widthMaxTilesCount - 1; i >= 0; i--) {
          
            // console.log('**m_mapOneString[' + pozChar + ']= ' + mapOneString[pozChar] + '\n');
            saveMonsters = saveMonsters + mapOneString[pozChar];
            pozChar = pozChar + 1;
          
        }//for ( let j = Map_2D.heightMaxTilesCount - 1; j >= 0; j--) {
  
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
    
        Map_2D.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);

        EditorFrameDraw.drowFrame();       
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


//=============================================================================
LoadFromServer.sortingLoadingMaps = function(listLoadingMapsNotSorting_) {
   // aaa_166049861010872800.map!

    let pozCharMax = listLoadingMapsNotSorting_.length;
    let listLoadingMapsSorting_Buff = '';
    let k = 0;
    let numStart = 0;
    for ( let i = 0; i < pozCharMax; i++) {
      
     // console.log('DD_MapsEditor.js:listLoadingMapsNotSorting_ [' + i + ']= ' + listLoadingMapsNotSorting_[i] + '\n');

      if((listLoadingMapsNotSorting_[i] == "!") &&
         (listLoadingMapsNotSorting_[i-1] == "p")&&
         (listLoadingMapsNotSorting_[i-2] == "a")&&
         (listLoadingMapsNotSorting_[i-3] == "m")
      ){
        let numString = '';
        for ( let j = (i - 22); j < (i - 4); j++) {

            numString = numString + listLoadingMapsNotSorting_[j];
        }//for j

        //console.log('DD_MapsEditor.js: numString = ' + numString +' \n');

        LoadFromServer.LoadingMapsString[k] = listLoadingMapsNotSorting_.slice(numStart, i) + '\n';
        LoadFromServer.LoadingMapsInt[k]    = Number(numString);

      //  console.log('DD_MapsEditor.js: LoadFromServer.LoadingMapsString[' + k + '] = ' + LoadFromServer.LoadingMapsString[k] +' \n');
      //  console.log('DD_MapsEditor.js: LoadFromServer.LoadingMapsInt[' + k + '] = ' + LoadFromServer.LoadingMapsInt[k] +' \n');
        k = k + 1;

       // listLoadingMapsNotSorting_Buff = listLoadingMapsNotSorting_Buff + '\n';
        numStart = i + 1;
       // console.log('DD_MapsEditor.js: YES' + '\n');
      } else {
       // listLoadingMapsNotSorting_Buff = listLoadingMapsNotSorting_Buff + listLoadingMapsNotSorting_[i];
      }// if
    }// for ( let i = 0; i < pozCharMax; i++) {

    let LoadingMapsInt_Buf;
    let LoadingMapsString_Buf;

        for ( let i2 = 0; i2 < k; i2++) {
            for ( let i3 = i2 + 1; i3 < k; i3++) {

                if(LoadFromServer.LoadingMapsInt[i2] < LoadFromServer.LoadingMapsInt[i3]){

                    LoadingMapsString_Buf = LoadFromServer.LoadingMapsString[i2];
                    LoadingMapsInt_Buf    = LoadFromServer.LoadingMapsInt[i2];

                    LoadFromServer.LoadingMapsString[i2] = LoadFromServer.LoadingMapsString[i3];
                    LoadFromServer.LoadingMapsInt[i2]    = LoadFromServer.LoadingMapsInt[i3];

                    LoadFromServer.LoadingMapsString[i3] = LoadingMapsString_Buf;
                    LoadFromServer.LoadingMapsInt[i3]    = LoadingMapsInt_Buf;
                }// if
            } // for i3
        } // for i2

        for ( let i4 = 0; i4 < k; i4++) {

            //console.log('DD_MapsEditor.js: LoadFromServer.LoadingMapsString[' + i4 + '] = ' + LoadFromServer.LoadingMapsString[i4] +' \n');
           // console.log('DD_MapsEditor.js: LoadFromServer.LoadingMapsInt[' + i4 + '] = ' + LoadFromServer.LoadingMapsInt[i4] +' \n');
           listLoadingMapsSorting_Buff = listLoadingMapsSorting_Buff + LoadFromServer.LoadingMapsString[i4]; // +' \n'

        }//for i4

    return listLoadingMapsSorting_Buff;
  
};//sortingLoadingMaps
//=============================================================================


// 
 //=============================================================================
 LoadFromServer.loadListMapsFromServer = function() {
    try {
            // заполним FormData данными из формы
            //let formData = new FormData();
            //formData.append("nameUserMapValue", nameUserMapValue);

            // отправим данные
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://alphagameset.xyz/3_DD_DarkDungeon/3_DD_PHP_Server/DD_ListMap.php");
            //xhr.send(formData);
            xhr.send();

            // 
            xhr.onload = function() {
                if (xhr.status == 200) {
                // console.log(xhr.response);
                    if(xhr.response != "") {
                        MapsEditor.storyLoadingMapsJ.value = LoadFromServer.sortingLoadingMaps(xhr.response);
                    }
                } else {
                    console.log("Ошибка " + this.status);
                }// if (xhr.status == 200)
            };//xhr.onload

        } catch(err) {
            console.log('DD_LoadFromServer.js: err = ' + err);
        }//try {

};//LoadFromServer.loadListMapsFromServer = function() {
//=============================================================================

    LoadFromServer.ini();

    HTML5_Canvas.TestLoadedScripts.testLoading ('DDE_LoadFromServer.js'); 

    LoadFromServer.isOk = "OK";//
