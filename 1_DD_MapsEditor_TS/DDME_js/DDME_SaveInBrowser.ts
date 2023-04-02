"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-12.08.2022-19.02.2023-2.04m.2023-
 //

  /*
   НАЗНАЧЕНИЕ
     Записываем карту в хранилище браузера

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     DDME_Map_2D.js
 
  */

  import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
  import { Map_2D } from './DDME_Map_2D.js';

// Внешние ссылки
var Out = {

  HTML5_Canvas_TestLoadedScripts : HTML5_Canvas.TestLoadedScripts,
  Map_2D : Map_2D,
  //=============================================================================
  ini : function() : void{
    //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
  },
  //=============================================================================
};

var SaveInBrowser = {

isOk : "",//

NAME : "SaveInBrowser",//


//=============================================================================
ini : function(){

},
//=============================================================================  

// 
 //=============================================================================
 saveInBrowser : function() {

  Out.Map_2D.saveMapArrayTile();

  localStorage.GROUND   = Out.Map_2D.stringMap.saveGrounds;
  localStorage.ITEMS    = Out.Map_2D.stringMap.saveItems;
  localStorage.MONSTERS = Out.Map_2D.stringMap.saveMonsters;

  // удалить ключ
  // delete localStorage.test;

},
//=============================================================================

};//SaveInBrowser

SaveInBrowser.ini();

Out.HTML5_Canvas_TestLoadedScripts.testLoading ('DDME_SaveInBrowser.js'); 

SaveInBrowser.isOk = "OK";//

export { SaveInBrowser };