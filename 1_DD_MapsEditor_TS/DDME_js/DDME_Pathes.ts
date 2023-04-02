"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -12.02.2023-19.02.2023-2.04m.2023-
//


  /*
   НАЗНАЧЕНИЕ
        Задаем все пути используемые в скриптах.

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
   
  */
    import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';

let _itIsONLINE_ = false; //window.itIsONLINE

// Внешние ссылки
var Out = {

  HTML5_Canvas_TestLoadedScripts : HTML5_Canvas.TestLoadedScripts,

  //=============================================================================
  ini : function() : void{
    //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
  },
  //=============================================================================
};

Out.ini();

  var Pathes = {

  isOk : "",//
  NAME : "Pathes",//
  SpritesMap_2D_Path_to_images : "" ,//DDME_HTML5_SpritesMap_2D.js
  SaveInServer_Path_to_DD_SaveMap_php : "" ,
  LoadFromServer_Path_to_DD_LoadMap_php : "" ,
  LoadFromServer_Path_to_DD_ListMap_php : "" ,
  VisitCounter_Path_to_CountRequestsGet_php : "" ,
  itIsONLINE : true ,

  set_itIsONLINE : function(_itIsONLINE : boolean){
    Pathes.itIsONLINE = _itIsONLINE;
  },

  //=============================================================================
  ini : function(){

    let HOME_F   = false;
    let SERVER_F = true;

    let server = HOME_F;
    //let server = SERVER_F;

    Pathes.SpritesMap_2D_Path_to_images = "DDME_images";

      //console.log("0 window.itIsONLINE = " + window.itIsONLINE);
///////////////////////////////////////////
      if ( Pathes.itIsONLINE == HOME_F){
          //DDME_SaveInServer.js 
          Pathes.SaveInServer_Path_to_DD_SaveMap_php = 
          "http://localhost/2_DarkDungeon/1_DD_MapsEditor_TS/DDME_Server/DDME_SaveMap.php";//

          //DDME_LoadFromServer.js 
          Pathes.LoadFromServer_Path_to_DD_LoadMap_php =      
          "http://localhost/2_DarkDungeon/1_DD_MapsEditor_TS/DDME_Server/DDME_LoadMap.php";

          Pathes.LoadFromServer_Path_to_DD_ListMap_php =      
          "http://localhost/2_DarkDungeon/1_DD_MapsEditor_TS/DDME_Server/DDME_ListMap.php";

          Pathes.VisitCounter_Path_to_CountRequestsGet_php = 
          'http://localhost/0_0_SQL_base/CountRequestsGet.php?name=requests_dd';// home


      }//if (server == HOME_F){

///////////////////////////////////////////
      if ( Pathes.itIsONLINE == SERVER_F){
          //DDME_SaveInServer.js 
          Pathes.SaveInServer_Path_to_DD_SaveMap_php =
          "https://alphagameset.xyz/2_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_SaveMap.php";//

          //DDME_LoadFromServer.js 
          Pathes.LoadFromServer_Path_to_DD_LoadMap_php =
          "https://alphagameset.xyz/2_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_LoadMap.php";

          Pathes.LoadFromServer_Path_to_DD_ListMap_php =
          "https://alphagameset.xyz/2_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_ListMap.php";

          Pathes.VisitCounter_Path_to_CountRequestsGet_php = 
          'https://alphagameset.xyz/0_0_SQL_base/CountRequestsGet.php?name=requests_dd'; // server
  
      }//if (server == SERVER_F){
        
  }
  //=============================================================================

};//Pathes

  Pathes.set_itIsONLINE(_itIsONLINE_);
  Pathes.ini();

  Out.HTML5_Canvas_TestLoadedScripts.testLoading ('DDME_Pathes.js'); 

  Pathes.isOk = "OK";//

  export { Pathes };