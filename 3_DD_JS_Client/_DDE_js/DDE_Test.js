//"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -13.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
  
   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   -
  */

// 
window.Test = {};
Test.NAME = "TestMapsEditor";//

//=============================================================================
//
  Test.o = function (){
      console.log("DDE_Test.js: Test.o");
  
};
//=============================================================================
//Test.o();
//=============================================================================
//
/*   Test.testFetch = async function (){
  try {
       // console.log("DDE_Test.js:testFetch OK!");
        
        let url = 'http://alphagameset.xyz/0_0_SQL_base/CountRequestsGet.php/?name=requests_dd';

        let response = await fetch(url);

        if (response.ok) { // если HTTP-статус в диапазоне 200-299
          // получаем тело ответа (см. про этот метод ниже)
          let text = await response.text();
          console.log("DDE_Test.js:text = " + text);
        } else {
          console.log("Ошибка HTTP: " + response.status);
        }
  } catch(err) {
        console.log('DDE_Test.js: err = ' + err);
  }//try {
  }; */
  //=============================================================================


// IS IT OK?
//=============================================================================
//
  Test.testAll = function (){

      //DDE_HTML5_Canvas.js
      if(HTML5_Canvas.isOk != "OK") console.log("DDE_Test.js:script DDE_HTML5_Canvas.js NOT OK!");//
      //if(HTML5_Canvas.isOk == "OK") console.log("DDE_Test.js:script DDE_HTML5_Canvas.js OK!");//
      //if(HTML5_Canvas.isOk != "OK")       alert("DDE_Test.js:script DDE_HTML5_Canvas.js NOT OK!");//

      //DDE_HTML5_SpritesMaps.js
      if(SpritesMap_2D.isOk != "OK") console.log("DDE_Test.js:script DDE_HTML5_SpritesMaps.js NOT OK!");//
      //if(SpritesMap_2D.isOk == "OK") console.log("DDE_Test.js:script DDE_HTML5_SpritesMaps.js OK!");//
      //if(SpritesMap_2D.isOk != "OK")       alert("DDE_Test.js:script DDE_HTML5_SpritesMaps.js NOT OK!");//

      //DDE_EditorFrames.js
      if(EditorFrames.isOk != "OK") console.log("DDE_Test.js:script DDE_EditorFrames.js NOT OK!");//
      //if(EditorFrames.isOk == "OK") console.log("DDE_Test.js:script DDE_EditorFrames.js OK!");//
      //if(EditorFrames.isOk != "OK")       alert("DDE_Test.js:script DDE_EditorFrames.js NOT OK!");//

      //DDE_Map_2D.js
      if(Map_2D.isOk != "OK") console.log("DDE_Test.js:script DDE_Map_2D.js NOT OK!");//
      //if(Map_2D.isOk == "OK") console.log("DDE_Test.js:script DDE_Map_2D.js OK!");//
      //if(Map_2D.isOk != "OK")       alert("DDE_Test.js:script DDE_Map_2D.js NOT OK!");//

      //DDE_MapFrameDraw.js
      if(MapFrameDraw.isOk != "OK") console.log("DDE_Test.js:script DDE_MapFrameDraw.js NOT OK!");//
      //if(MapFrameDraw.isOk == "OK") console.log("DDE_Test.js:script DDE_MapFrameDraw.js OK!");//
      //if(MapFrameDraw.isOk != "OK")       alert("DDE_Test.js:script DDE_MapFrameDraw.js NOT OK!");//

      //DDE_TilesFrameDraw.js
      if(TilesFrameDraw.isOk != "OK") console.log("DDE_Test.js:script DDE_TilesFrameDraw.js NOT OK!");//
      //if(TilesFrameDraw.isOk == "OK") console.log("DDE_Test.js:script DDE_TilesFrameDraw.js OK!");//
      //if(TilesFrameDraw.isOk != "OK")       alert("DDE_Test.js:script DDE_TilesFrameDraw.js NOT OK!");//

      //DDE_SaveInBrowser.js
      if(SaveInBrowser.isOk != "OK") console.log("DDE_Test.js:script DDE_SaveInBrowser.js NOT OK!");//
      //if(SaveInBrowser.isOk == "OK") console.log("DDE_Test.js:script DDE_SaveInBrowser.js OK!");//
      //if(SaveInBrowser.isOk != "OK")       alert("DDE_Test.js:script DDE_SaveInBrowser.js NOT OK!");//

      //DDE_LoadFromBrowser.js
      if(LoadFromBrowser.isOk != "OK") console.log("DDE_Test.js:script DDE_LoadFromBrowser.js NOT OK!");//
      //if(LoadFromBrowser.isOk == "OK") console.log("DDE_Test.js:script DDE_LoadFromBrowser.js OK!");//
      //if(LoadFromBrowser.isOk != "OK")       alert("DDE_Test.js:script DDE_LoadFromBrowser.js NOT OK!");//

      //DDE_LoadFromScripts.js
      if(LoadFromScripts.isOk != "OK") console.log("DDE_Test.js:script DDE_LoadFromScripts.js NOT OK!");//
      //if(LoadFromScripts.isOk == "OK") console.log("DDE_Test.js:script DDE_LoadFromScripts.js OK!");//
      //if(LoadFromScripts.isOk != "OK")       alert("DDE_Test.js:script DDE_LoadFromScripts.js NOT OK!");//

      //DDE_SaveInServer.js
      if(SaveInServer.isOk != "OK") console.log("DDE_Test.js:script DDE_SaveInServer.js NOT OK!");//
      //if(SaveInServer.isOk == "OK") console.log("DDE_Test.js:script DDE_SaveInServer.js OK!");//
      //if(SaveInServer.isOk != "OK")       alert("DDE_Test.js:script DDE_SaveInServer.js NOT OK!");//

      //DDE_LoadFromServer.js
      if(LoadFromServer.isOk != "OK") console.log("DDE_Test.js:script DDE_LoadFromServer.js NOT OK!");//
      //if(LoadFromServer.isOk == "OK") console.log("DDE_Test.js:script DDE_LoadFromServer.js OK!");//
      //if(LoadFromServer.isOk != "OK")       alert("DDE_Test.js:script DDE_LoadFromServer.js NOT OK!");//
      
      //DDE_EditorFrameDraw.js
      if(EditorFrameDraw.isOk != "OK") console.log("DDE_Test.js:script DDE_EditorFrameDraw.js NOT OK!");//
      //if(EditorFrameDraw.isOk == "OK") console.log("DDE_Test.js:script DDE_EditorFrameDraw.js OK!");//
      //if(EditorFrameDraw.isOk != "OK")       alert("DDE_Test.js:script DDE_EditorFrameDraw.js NOT OK!");//

      //DDE_UserInputMouse.js
      if(UserInputMouse.isOk != "OK") console.log("DDE_Test.js:script DDE_UserInputMouse.js NOT OK!");//
      //if(UserInputMouse.isOk == "OK") console.log("DDE_Test.js:script DDE_UserInputMouse.js OK!");//
      //if(UserInputMouse.isOk != "OK")       alert("DDE_Test.js:script DDE_UserInputMouse.js NOT OK!");//
};
//=============================================================================


if(window.itIsDebugging == true){
  Test.testAll();
}

  HTML5_Canvas.TestLoadedScripts.testLoading ('DDE_Test.js'); 
