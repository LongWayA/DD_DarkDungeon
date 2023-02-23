"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -12.02.2023-19.02.2023-
//


  /*
   НАЗНАЧЕНИЕ
        Задаем все пути используемые в скриптах.

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
   
  */

window.Pathes = {};
  Pathes.isOk = " ";//
  Pathes.NAME = "Pathes";//

  // Внешние ссылки
  Pathes.HTML5_Canvas_TestLoadedScripts_OUT;

  Pathes.SpritesMap_2D_Path_to_images;//

  //=============================================================================
  Pathes.ini = function(){

    Pathes.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;

    let HOME_F   = false;
    let SERVER_F = true;

    let server = HOME_F;
    //let server = SERVER_F;

    // DDME_HTML5_SpritesMap_2D.js  
      Pathes.SpritesMap_2D_Path_to_images ="DDME_images" ;//
      
///////////////////////////////////////////
      if ( window.itIsONLINE == HOME_F){
          //DDME_SaveInServer.js 
          Pathes.SaveInServer_Path_to_DD_SaveMap_php = 
          "http://localhost/2_DD_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_SaveMap.php";//

          //DDME_LoadFromServer.js 
          Pathes.LoadFromServer_Path_to_DD_LoadMap_php =      
          "http://localhost/2_DD_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_LoadMap.php";

          Pathes.LoadFromServer_Path_to_DD_ListMap_php =      
          "http://localhost/2_DD_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_ListMap.php";

          Pathes.VisitCounter_Path_to_CountRequestsGet_php = 
          'http://localhost/0_0_SQL_base/CountRequestsGet.php/?name=requests_dd';// home


      }//if (server == HOME_F){

///////////////////////////////////////////
      if ( window.itIsONLINE == SERVER_F){
          //DDME_SaveInServer.js 
          Pathes.SaveInServer_Path_to_DD_SaveMap_php =
          "https://alphagameset.xyz/2_DD_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_SaveMap.php";//

          //DDME_LoadFromServer.js 
          Pathes.LoadFromServer_Path_to_DD_LoadMap_php =
          "https://alphagameset.xyz/2_DD_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_LoadMap.php";

          Pathes.LoadFromServer_Path_to_DD_ListMap_php =
          "https://alphagameset.xyz/2_DD_DarkDungeon/1_DD_MapsEditor/DDME_Server/DDME_ListMap.php";

          Pathes.VisitCounter_Path_to_CountRequestsGet_php = 
          'https://alphagameset.xyz/0_0_SQL_base/CountRequestsGet.php/?name=requests_dd'; // server
  
      }//if (server == SERVER_F){
        
  }
  //=============================================================================

  Pathes.ini();

  Pathes.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_Pathes.js+'); 

  Pathes.isOk = "OK";//