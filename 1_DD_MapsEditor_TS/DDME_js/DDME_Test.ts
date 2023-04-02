//"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -13.08.2022-20.02.2023-2.04m.2023-
 //

  /*
   НАЗНАЧЕНИЕ
      Отслеживаем загрузку всех модулей.

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     и все остальные модули кроме DDME_MapsEditor.js
  */

     import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
     import { SaveInBrowser } from './DDME_SaveInBrowser.js';
     import { LoadFromBrowser } from './DDME_LoadFromBrowser.js';
     import { SaveInServer } from './DDME_SaveInServer.js';
     import { LoadFromServer } from './DDME_LoadFromServer.js';
     import { LoadFromScripts } from './DDME_LoadFromScripts.js';
     import { MapFrameDraw } from './DDME_MapFrameDraw.js';
     import { EditorFrameDraw } from './DDME_EditorFrameDraw.js';
     import { VisitCounter } from './DDME_VisitCounter.js';
     import { EditorFrames } from './DDME_EditorFrames.js';
     import { SpritesMap_2D } from './DDME_HTML5_SpritesMap_2D.js';
     import { Map_2D } from './DDME_Map_2D.js';
     import { Pathes } from './DDME_Pathes.js';
     import { TilesFrameDraw } from './DDME_TilesFrameDraw.js';
     import { UserInputMouse } from './DDME_UserInputMouse.js';
     import { MapsEditor } from './DDME_MapsEditor.js'; 


     let itIsDebugging  = true;


 // Внешние ссылки
var Out = {
  HTML5_Canvas : HTML5_Canvas,
  HTML5_Canvas_TestLoadedScripts : HTML5_Canvas.TestLoadedScripts,
     SaveInBrowser : SaveInBrowser,
     LoadFromBrowser : LoadFromBrowser,
     SaveInServer : SaveInServer,
     LoadFromServer : LoadFromServer,
     LoadFromScripts : LoadFromScripts,
     MapFrameDraw : MapFrameDraw,
     EditorFrameDraw : EditorFrameDraw,
     VisitCounter : VisitCounter,
     EditorFrames : EditorFrames,
     SpritesMap_2D : SpritesMap_2D,
     Map_2D : Map_2D,
     Pathes : Pathes,
     TilesFrameDraw : TilesFrameDraw,
     UserInputMouse : UserInputMouse,
     MapsEditor : MapsEditor,

  //=============================================================================
  ini : function() : void{
    //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
  },
  //=============================================================================
};    

// 
var Test = {

NAME : "TestMapsEditor",//

//=============================================================================
ini : function(){

},
//=============================================================================

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
  testAll : function (){

      //DDME_HTML5_Canvas.js
      if(Out.HTML5_Canvas.isOk != "OK") console.log("DDME_Test.js:script DDME_HTML5_Canvas.js NOT OK!");//
      //if(HTML5_Canvas.isOk == "OK") console.log("DDME_Test.js:script DDME_HTML5_Canvas.js OK!");//
      //if(HTML5_Canvas.isOk != "OK")       alert("DDME_Test.js:script DDME_HTML5_Canvas.js NOT OK!");//

      //DDME_Pathes.js
      if(Out.Pathes.isOk != "OK") console.log("DDME_Test.js:script DDME_Pathes.js NOT OK!");//
      //if(Out.Pathes.isOk == "OK") console.log("DDME_Test.js:script DDME_Pathes.js OK!");//
      //if(Out.Pathes.isOk != "OK")       alert("DDME_Test.js:script DDME_Pathes.js NOT OK!");//

      //DDME_HTML5_SpritesMap_2D.js
      if(Out.SpritesMap_2D.isOk != "OK") console.log("DDME_Test.js:script DDME_HTML5_SpritesMap_2D.js NOT OK!");//
      //if(Out.SpritesMap_2D.isOk == "OK") console.log("DDME_Test.js:script DDME_HTML5_SpritesMap_2D.js OK!");//
      //if(Out.SpritesMap_2D.isOk != "OK")       alert("DDME_Test.js:script DDME_HTML5_SpritesMap_2D.js NOT OK!");//

      //DDME_EditorFrames.js
      if(Out.EditorFrames.isOk != "OK") console.log("DDME_Test.js:script DDME_EditorFrames.js NOT OK!");//
      //if(Out.EditorFrames.isOk == "OK") console.log("DDME_Test.js:script DDME_EditorFrames.js OK!");//
      //if(Out.EditorFrames.isOk != "OK")       alert("DDME_Test.js:script DDME_EditorFrames.js NOT OK!");//

      //DDME_Map_2D.js
      if(Out.Map_2D.isOk != "OK") console.log("DDME_Test.js:script DDME_Map_2D.js NOT OK!");//
      //if(Out.Map_2D.isOk == "OK") console.log("DDME_Test.js:script DDME_Map_2D.js OK!");//
      //if(Out.Map_2D.isOk != "OK")       alert("DDME_Test.js:script DDME_Map_2D.js NOT OK!");//

      //DDME_MapFrameDraw.js
      if(Out.MapFrameDraw.isOk != "OK") console.log("DDME_Test.js:script DDME_MapFrameDraw.js NOT OK!");//
      //if(Out.MapFrameDraw.isOk == "OK") console.log("DDME_Test.js:script DDME_MapFrameDraw.js OK!");//
      //if(Out.MapFrameDraw.isOk != "OK")       alert("DDME_Test.js:script DDME_MapFrameDraw.js NOT OK!");//

      //DDME_TilesFrameDraw.js
      if(Out.TilesFrameDraw.isOk != "OK") console.log("DDME_Test.js:script DDME_TilesFrameDraw.js NOT OK!");//
      //if(Out.TilesFrameDraw.isOk == "OK") console.log("DDME_Test.js:script DDME_TilesFrameDraw.js OK!");//
      //if(Out.TilesFrameDraw.isOk != "OK")       alert("DDME_Test.js:script DDME_TilesFrameDraw.js NOT OK!");//

      //DDME_SaveInBrowser.js
      if(Out.SaveInBrowser.isOk != "OK") console.log("DDME_Test.js:script DDME_SaveInBrowser.js NOT OK!");//
      //if(Out.SaveInBrowser.isOk == "OK") console.log("DDME_Test.js:script DDME_SaveInBrowser.js OK!");//
      //if(Out.SaveInBrowser.isOk != "OK")       alert("DDME_Test.js:script DDME_SaveInBrowser.js NOT OK!");//

      //DDME_LoadFromBrowser.js
      if(Out.LoadFromBrowser.isOk != "OK") console.log("DDME_Test.js:script DDME_LoadFromBrowser.js NOT OK!");//
      //if(Out.LoadFromBrowser.isOk == "OK") console.log("DDME_Test.js:script DDME_LoadFromBrowser.js OK!");//
      //if(Out.LoadFromBrowser.isOk != "OK")       alert("DDME_Test.js:script DDME_LoadFromBrowser.js NOT OK!");//

      //DDME_LoadFromScripts.js
      if(Out.LoadFromScripts.isOk != "OK") console.log("DDME_Test.js:script DDME_LoadFromScripts.js NOT OK!");//
      //if(Out.LoadFromScripts.isOk == "OK") console.log("DDME_Test.js:script DDME_LoadFromScripts.js OK!");//
      //if(Out.LoadFromScripts.isOk != "OK")       alert("DDME_Test.js:script DDME_LoadFromScripts.js NOT OK!");//

      //DDME_SaveInServer.js
      if(Out.SaveInServer.isOk != "OK") console.log("DDME_Test.js:script DDME_SaveInServer.js NOT OK!");//
      //if(Out.SaveInServer.isOk == "OK") console.log("DDME_Test.js:script DDME_SaveInServer.js OK!");//
      //if(Out.SaveInServer.isOk != "OK")       alert("DDME_Test.js:script DDME_SaveInServer.js NOT OK!");//

      //DDME_LoadFromServer.js
      if(Out.LoadFromServer.isOk != "OK") console.log("DDME_Test.js:script DDME_LoadFromServer.js NOT OK!");//
      //if(Out.LoadFromServer.isOk == "OK") console.log("DDME_Test.js:script DDME_LoadFromServer.js OK!");//
      //if(Out.LoadFromServer.isOk != "OK")       alert("DDME_Test.js:script DDME_LoadFromServer.js NOT OK!");//
      
      //DDME_EditorFrameDraw.js
      if(Out.EditorFrameDraw.isOk != "OK") console.log("DDME_Test.js:script DDME_EditorFrameDraw.js NOT OK!");//
      //if(Out.EditorFrameDraw.isOk == "OK") console.log("DDME_Test.js:script DDME_EditorFrameDraw.js OK!");//
      //if(Out.EditorFrameDraw.isOk != "OK")       alert("DDME_Test.js:script DDME_EditorFrameDraw.js NOT OK!");//

      //DDME_UserInputMouse.js
      if(Out.UserInputMouse.isOk != "OK") console.log("DDME_Test.js:script DDME_UserInputMouse.js NOT OK!");//
      //if(Out.UserInputMouse.isOk == "OK") console.log("DDME_Test.js:script DDME_UserInputMouse.js OK!");//
      //if(Out.UserInputMouse.isOk != "OK")       alert("DDME_Test.js:script DDME_UserInputMouse.js NOT OK!");//

      //DDME_VisitCounter.js
      if(Out.VisitCounter.isOk != "OK") console.log("DDME_Test.js:script DDME_VisitCounter.js NOT OK!");//
      //if(Out.VisitCounter.isOk == "OK") console.log("DDME_Test.js:script DDME_VisitCounter.js OK!");//
      //if(Out.VisitCounter.isOk != "OK")       alert("DDME_Test.js:script DDME_VisitCounter.js NOT OK!");//

      //DDME_VisitCounter.js
      if(Out.MapsEditor.isOk != "OK") console.log("DDME_Test.js:script DDME_MapsEditor.js NOT OK!");//
      //if(Out.VisitCounter.isOk == "OK") console.log("DDME_Test.js:script DDME_VisitCounter.js OK!");//
      //if(Out.VisitCounter.isOk != "OK")       alert("DDME_Test.js:script DDME_VisitCounter.js NOT OK!");//

},
//=============================================================================

};//Test

Test.ini();

if(itIsDebugging == true){
  Test.testAll();
}

Out.HTML5_Canvas_TestLoadedScripts.testLoading ('DDME_Test.js'); 

export { Test };
