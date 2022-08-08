"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -02.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   Корневой модуль игры


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

//console.log("module DD_MapsEditor.js start");

import { TestModule } from './TestModule.js';
import { UserInputMouse }          from './DD_UserInputMouse_m_040822.js';
import { SaveLoadBrowser }                from './DD_SaveLoadInBrowser_m_040822.js';
import { SaveLoadServer }          from './DD_SaveLoadInServer_m_060822.js';
import { Resourse }                from './DD_Resourse_m_050822.js';
import { UserInputKey }            from './DD_UserInputKey_m_040822.js';
import { Map }                     from './DD_Map_m_040822.js';
import { SpritesMap }              from './DD_HTML5_SpritesMaps_m_040822.js';
import { HTML5_Canvas }            from './DD_HTML5_Canvas_m_040822.js';

window.SaveLoadBrowser_w = SaveLoadBrowser;
window.SaveLoadServer_w = SaveLoadServer;

console.log("module DD_MapsEditor.js start: currentDate" + TestModule.currentDate);
TestModule.setf = "Ok"
// 
window.MapsEditor = {};
MapsEditor.NAME = "DD_MapsEditor";//

 isOkF();
//=============================================================================
MapsEditor.ini = function(){
  //console.log('MapsEditor.ini');
  SpritesMap.loadAllSprite();
  SpritesMap.ini_tiles_char();

  //R.UserInputKey.ini();

};
//=============================================================================

//=============================================================================
MapsEditor.start = function(){
  //alert("!");
  //console.log('MapsEditor.start');


};
//============================================================================= 


//=============================================================================
 //
 MapsEditor.test = function(){

  console.log('MapsEditor.test');
  //var dataURL = HTML5_Canvas.Id.toDataURL("image/png");
  //console.log('DD_Client.js: dataURL =' + dataURL);
  
  };
  //=============================================================================
  

MapsEditor.ini();
MapsEditor.start();

//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
 window.onload = function() {

    SaveLoadBrowser.ini_loadFromBrowser();
    Map.drawMap(0,0);
    Map.drawSelectTiles(0);
    //Map.draw(100,50);
    //console.log('DD_MapsEditor.js: window.onload');
    console.log('DD_MapsEditor.js: TestModule.setf = ' + TestModule.setf);
};
//=============================================================================

// IS IT OK?
//=============================================================================
//MapsEditor.isOkF = function(){
function isOkF(){
  //DD_HTML5_Canvas.js
  if(HTML5_Canvas.isOk != "OK") console.log("DD_MapsEditor.js:module DD_HTML5_Canvas.js NOT OK!");//
  //if(HTML5_Canvas.isOk == "OK") console.log("DD_MapsEditor.js:module DD_HTML5_Canvas.js OK!");//
  //if(HTML5_Canvas.isOk != "OK")       alert("DD_MapsEditor.js:module DD_HTML5_Canvas.js NOT OK!");//

  //DD_HTML5_SpritesMaps.js
  if(SpritesMap.isOk != "OK") console.log("DD_MapsEditor.js:module DD_HTML5_SpritesMaps.js NOT OK!");//
  //if(SpritesMap.isOk == "OK") console.log("DD_MapsEditor.js:module DD_HTML5_SpritesMaps.js OK!");//
  //if(SpritesMap.isOk != "OK")       alert("DD_MapsEditor.js:module DD_HTML5_SpritesMaps.js NOT OK!");//

  //DD_Map.js
  if(Map.isOk != "OK") console.log("DD_MapsEditor.js:module DD_Map.js NOT OK!");//
  //if(Map.isOk == "OK") console.log("DD_MapsEditor.js:module DD_Map.js OK!");//
  //if(Map.isOk != "OK")       alert("DD_MapsEditor.js:module DD_Map.js NOT OK!");//

  //DD_UserInputKey.js
  if(UserInputKey.isOk != "OK") console.log("DD_MapsEditor.js:module DD_UserInputKey.js NOT OK!");//
  //if(UserInputKey.isOk == "OK") console.log("DD_MapsEditor.js:module DD_UserInputKey.js OK!");//
  //if(UserInputKey.isOk != "OK")       alert("DD_MapsEditor.js:module DD_UserInputKey.js NOT OK!");//

  //DD_UserInputMouse.js
  if(UserInputMouse.isOk != "OK") console.log("DD_MapsEditor.js:module DD_UserInputMouse.js NOT OK!");//
  //if(UserInputMouse.isOk == "OK") console.log("DD_MapsEditor.js:module DD_UserInputMouse.js OK!");//
  //if(UserInputMouse.isOk != "OK")       alert("DD_MapsEditor.js:module DD_UserInputMouse.js NOT OK!");//
};
//=============================================================================

//MapsEditor.isOkF();

//============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('module DD_MapsEditor.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

//==============================================================================
//alert("module DD_MapsEditor.js done");
//console.log("module DD_MapsEditor.js done");