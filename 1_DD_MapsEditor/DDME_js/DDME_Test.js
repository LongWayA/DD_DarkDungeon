//"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -13.08.2022-20.02.2023-
 //

  /*
   НАЗНАЧЕНИЕ
      Отслеживаем загрузку всех модулей.

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     и все остальные модули кроме DDME_MapsEditor.js
  */

// 
window.Test = {};
Test.NAME = "TestMapsEditor";//

// Внешние ссылки
Test.HTML5_Canvas_TestLoadedScripts_OUT;

//=============================================================================
Test.ini = function(){

  Test.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
}
//=============================================================================



//=============================================================================
//
  Test.o = function (){
      console.log("DDME_Test.js: Test.o");
  
};
//=============================================================================
//Test.o();
//=============================================================================
//
/*   Test.testFetch = async function (){
  try {
       // console.log("DDME_Test.js:testFetch OK!");
        
        let url = 'http://alphagameset.xyz/0_0_SQL_base/CountRequestsGet.php/?name=requests_dd';

        let response = await fetch(url);

        if (response.ok) { // если HTTP-статус в диапазоне 200-299
          // получаем тело ответа (см. про этот метод ниже)
          let text = await response.text();
          console.log("DDME_Test.js:text = " + text);
        } else {
          console.log("Ошибка HTTP: " + response.status);
        }
  } catch(err) {
        console.log('DDME_Test.js: err = ' + err);
  }//try {
  }; */
  //=============================================================================


// IS IT OK?
//=============================================================================
// тут все сылки внешние так что смысла их обозначать вроде нет.
  Test.testAll = function (){

      //DDME_HTML5_Canvas.js
      if(HTML5_Canvas.isOk != "OK") console.log("DDME_Test.js:script DDME_HTML5_Canvas.js NOT OK!");//
      //if(HTML5_Canvas.isOk == "OK") console.log("DDME_Test.js:script DDME_HTML5_Canvas.js OK!");//
      //if(HTML5_Canvas.isOk != "OK")       alert("DDME_Test.js:script DDME_HTML5_Canvas.js NOT OK!");//

      //DDME_Pathes.js
      if(Pathes.isOk != "OK") console.log("DDME_Test.js:script DDME_Pathes.js NOT OK!");//
      //if(Pathes.isOk == "OK") console.log("DDME_Test.js:script DDME_Pathes.js OK!");//
      //if(Pathes.isOk != "OK")       alert("DDME_Test.js:script DDME_Pathes.js NOT OK!");//

      //DDME_HTML5_SpritesMap_2D.js
      if(SpritesMap_2D.isOk != "OK") console.log("DDME_Test.js:script DDME_HTML5_SpritesMap_2D.js NOT OK!");//
      //if(SpritesMap_2D.isOk == "OK") console.log("DDME_Test.js:script DDME_HTML5_SpritesMap_2D.js OK!");//
      //if(SpritesMap_2D.isOk != "OK")       alert("DDME_Test.js:script DDME_HTML5_SpritesMap_2D.js NOT OK!");//

      //DDME_EditorFrames.js
      if(EditorFrames.isOk != "OK") console.log("DDME_Test.js:script DDME_EditorFrames.js NOT OK!");//
      //if(EditorFrames.isOk == "OK") console.log("DDME_Test.js:script DDME_EditorFrames.js OK!");//
      //if(EditorFrames.isOk != "OK")       alert("DDME_Test.js:script DDME_EditorFrames.js NOT OK!");//

      //DDME_Map_2D.js
      if(Map_2D.isOk != "OK") console.log("DDME_Test.js:script DDME_Map_2D.js NOT OK!");//
      //if(Map_2D.isOk == "OK") console.log("DDME_Test.js:script DDME_Map_2D.js OK!");//
      //if(Map_2D.isOk != "OK")       alert("DDME_Test.js:script DDME_Map_2D.js NOT OK!");//

      //DDME_MapFrameDraw.js
      if(MapFrameDraw.isOk != "OK") console.log("DDME_Test.js:script DDME_MapFrameDraw.js NOT OK!");//
      //if(MapFrameDraw.isOk == "OK") console.log("DDME_Test.js:script DDME_MapFrameDraw.js OK!");//
      //if(MapFrameDraw.isOk != "OK")       alert("DDME_Test.js:script DDME_MapFrameDraw.js NOT OK!");//

      //DDME_TilesFrameDraw.js
      if(TilesFrameDraw.isOk != "OK") console.log("DDME_Test.js:script DDME_TilesFrameDraw.js NOT OK!");//
      //if(TilesFrameDraw.isOk == "OK") console.log("DDME_Test.js:script DDME_TilesFrameDraw.js OK!");//
      //if(TilesFrameDraw.isOk != "OK")       alert("DDME_Test.js:script DDME_TilesFrameDraw.js NOT OK!");//

      //DDME_SaveInBrowser.js
      if(SaveInBrowser.isOk != "OK") console.log("DDME_Test.js:script DDME_SaveInBrowser.js NOT OK!");//
      //if(SaveInBrowser.isOk == "OK") console.log("DDME_Test.js:script DDME_SaveInBrowser.js OK!");//
      //if(SaveInBrowser.isOk != "OK")       alert("DDME_Test.js:script DDME_SaveInBrowser.js NOT OK!");//

      //DDME_LoadFromBrowser.js
      if(LoadFromBrowser.isOk != "OK") console.log("DDME_Test.js:script DDME_LoadFromBrowser.js NOT OK!");//
      //if(LoadFromBrowser.isOk == "OK") console.log("DDME_Test.js:script DDME_LoadFromBrowser.js OK!");//
      //if(LoadFromBrowser.isOk != "OK")       alert("DDME_Test.js:script DDME_LoadFromBrowser.js NOT OK!");//

      //DDME_LoadFromScripts.js
      if(LoadFromScripts.isOk != "OK") console.log("DDME_Test.js:script DDME_LoadFromScripts.js NOT OK!");//
      //if(LoadFromScripts.isOk == "OK") console.log("DDME_Test.js:script DDME_LoadFromScripts.js OK!");//
      //if(LoadFromScripts.isOk != "OK")       alert("DDME_Test.js:script DDME_LoadFromScripts.js NOT OK!");//

      //DDME_SaveInServer.js
      if(SaveInServer.isOk != "OK") console.log("DDME_Test.js:script DDME_SaveInServer.js NOT OK!");//
      //if(SaveInServer.isOk == "OK") console.log("DDME_Test.js:script DDME_SaveInServer.js OK!");//
      //if(SaveInServer.isOk != "OK")       alert("DDME_Test.js:script DDME_SaveInServer.js NOT OK!");//

      //DDME_LoadFromServer.js
      if(LoadFromServer.isOk != "OK") console.log("DDME_Test.js:script DDME_LoadFromServer.js NOT OK!");//
      //if(LoadFromServer.isOk == "OK") console.log("DDME_Test.js:script DDME_LoadFromServer.js OK!");//
      //if(LoadFromServer.isOk != "OK")       alert("DDME_Test.js:script DDME_LoadFromServer.js NOT OK!");//
      
      //DDME_EditorFrameDraw.js
      if(EditorFrameDraw.isOk != "OK") console.log("DDME_Test.js:script DDME_EditorFrameDraw.js NOT OK!");//
      //if(EditorFrameDraw.isOk == "OK") console.log("DDME_Test.js:script DDME_EditorFrameDraw.js OK!");//
      //if(EditorFrameDraw.isOk != "OK")       alert("DDME_Test.js:script DDME_EditorFrameDraw.js NOT OK!");//

      //DDME_UserInputMouse.js
      if(UserInputMouse.isOk != "OK") console.log("DDME_Test.js:script DDME_UserInputMouse.js NOT OK!");//
      //if(UserInputMouse.isOk == "OK") console.log("DDME_Test.js:script DDME_UserInputMouse.js OK!");//
      //if(UserInputMouse.isOk != "OK")       alert("DDME_Test.js:script DDME_UserInputMouse.js NOT OK!");//

      //DDME_VisitCounter.js
      if(VisitCounter.isOk != "OK") console.log("DDME_Test.js:script DDME_VisitCounter.js NOT OK!");//
      //if(VisitCounter.isOk == "OK") console.log("DDME_Test.js:script DDME_VisitCounter.js OK!");//
      //if(VisitCounter.isOk != "OK")       alert("DDME_Test.js:script DDME_VisitCounter.js NOT OK!");//

};
//=============================================================================

Test.ini();

if(window.itIsDebugging == true){
  Test.testAll();
}

Test.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_Test.js+'); 
