"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -13.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
  
   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

// 
window.Test = {};
Test.NAME = "Test";//


// IS IT OK?
//=============================================================================
//MapsEditor.isOkF = function(){
  Test.testAll = function (){

      //DD_HTML5_Canvas.js
      if(HTML5_Canvas.isOk != "OK") console.log("DD_Timer.js:script DD_HTML5_Canvas.js NOT OK!");//
      //if(HTML5_Canvas.isOk == "OK") console.log("DD_Timer.js:script DD_HTML5_Canvas.js OK!");//
      //if(HTML5_Canvas.isOk != "OK")       alert("DD_Timer.js:script DD_HTML5_Canvas.js NOT OK!");//

      //DD_HTML5_SpritesMaps.js
      if(SpritesMap_2D.isOk != "OK") console.log("DD_Timer.js:script DD_HTML5_SpritesMaps.js NOT OK!");//
      //if(SpritesMap_2D.isOk == "OK") console.log("DD_Timer.js:script DD_HTML5_SpritesMaps.js OK!");//
      //if(SpritesMap_2D.isOk != "OK")       alert("DD_Timer.js:script DD_HTML5_SpritesMaps.js NOT OK!");//

      //DD_EditorFrames.js
      if(EditorFrames.isOk != "OK") console.log("DD_Timer.js:script DD_EditorFrames.js NOT OK!");//
      //if(EditorFrames.isOk == "OK") console.log("DD_Timer.js:script DD_EditorFrames.js OK!");//
      //if(EditorFrames.isOk != "OK")       alert("DD_Timer.js:script DD_EditorFrames.js NOT OK!");//

      //DD_Map_2D.js
      if(Map_2D.isOk != "OK") console.log("DD_Timer.js:script DD_Map_2D.js NOT OK!");//
      //if(Map_2D.isOk == "OK") console.log("DD_Timer.js:script DD_Map_2D.js OK!");//
      //if(Map_2D.isOk != "OK")       alert("DD_Timer.js:script DD_Map_2D.js NOT OK!");//

      //DD_MapFrameDraw.js
      if(MapFrameDraw.isOk != "OK") console.log("DD_Timer.js:script DD_MapFrameDraw.js NOT OK!");//
      //if(MapFrameDraw.isOk == "OK") console.log("DD_Timer.js:script DD_MapFrameDraw.js OK!");//
      //if(MapFrameDraw.isOk != "OK")       alert("DD_Timer.js:script DD_MapFrameDraw.js NOT OK!");//

      //DD_TilesFrameDraw.js
      if(TilesFrameDraw.isOk != "OK") console.log("DD_Timer.js:script DD_TilesFrameDraw.js NOT OK!");//
      //if(TilesFrameDraw.isOk == "OK") console.log("DD_Timer.js:script DD_TilesFrameDraw.js OK!");//
      //if(TilesFrameDraw.isOk != "OK")       alert("DD_Timer.js:script DD_TilesFrameDraw.js NOT OK!");//

      //DD_SaveInBrowser.js
      if(SaveInBrowser.isOk != "OK") console.log("DD_Timer.js:script DD_SaveInBrowser.js NOT OK!");//
      //if(SaveInBrowser.isOk == "OK") console.log("DD_Timer.js:script DD_SaveInBrowser.js OK!");//
      //if(SaveInBrowser.isOk != "OK")       alert("DD_Timer.js:script DD_SaveInBrowser.js NOT OK!");//

      //DD_LoadFromBrowser.js
      if(LoadFromBrowser.isOk != "OK") console.log("DD_Timer.js:script DD_LoadFromBrowser.js NOT OK!");//
      //if(LoadFromBrowser.isOk == "OK") console.log("DD_Timer.js:script DD_LoadFromBrowser.js OK!");//
      //if(LoadFromBrowser.isOk != "OK")       alert("DD_Timer.js:script DD_LoadFromBrowser.js NOT OK!");//

      //DD_LoadFromScripts.js
      if(LoadFromScripts.isOk != "OK") console.log("DD_Timer.js:script DD_LoadFromScripts.js NOT OK!");//
      //if(LoadFromScripts.isOk == "OK") console.log("DD_Timer.js:script DD_LoadFromScripts.js OK!");//
      //if(LoadFromScripts.isOk != "OK")       alert("DD_Timer.js:script DD_LoadFromScripts.js NOT OK!");//

      //DD_SaveInServer.js
      if(SaveInServer.isOk != "OK") console.log("DD_Timer.js:script DD_SaveInServer.js NOT OK!");//
      //if(SaveInServer.isOk == "OK") console.log("DD_Timer.js:script DD_SaveInServer.js OK!");//
      //if(SaveInServer.isOk != "OK")       alert("DD_Timer.js:script DD_SaveInServer.js NOT OK!");//

      //DD_LoadFromServer.js
      if(LoadFromServer.isOk != "OK") console.log("DD_Timer.js:script DD_LoadFromServer.js NOT OK!");//
      //if(LoadFromServer.isOk == "OK") console.log("DD_Timer.js:script DD_LoadFromServer.js OK!");//
      //if(LoadFromServer.isOk != "OK")       alert("DD_Timer.js:script DD_LoadFromServer.js NOT OK!");//
      
    //DD_EditorFrameDraw.js
    if(EditorFrameDraw.isOk != "OK") console.log("DD_Timer.js:script DD_EditorFrameDraw.js NOT OK!");//
    //if(EditorFrameDraw.isOk == "OK") console.log("DD_Timer.js:script DD_EditorFrameDraw.js OK!");//
    //if(EditorFrameDraw.isOk != "OK")       alert("DD_Timer.js:script DD_EditorFrameDraw.js NOT OK!");//

      //DD_UserInputMouse.js
      if(UserInputMouse.isOk != "OK") console.log("DD_Timer.js:script DD_UserInputMouse.js NOT OK!");//
      //if(UserInputMouse.isOk == "OK") console.log("DD_Timer.js:script DD_UserInputMouse.js OK!");//
      //if(UserInputMouse.isOk != "OK")       alert("DD_Timer.js:script DD_UserInputMouse.js NOT OK!");//
};
//=============================================================================


if(window.itIsDebugging == true){
  Test.testAll();
}

  HTML5_Canvas.TestLoadedScripts.testLoading ('DD_Test.js'); 
