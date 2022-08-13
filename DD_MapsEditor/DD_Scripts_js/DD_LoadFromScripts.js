"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -04.08.2022-12.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */


window.LoadFromScripts = {};
LoadFromScripts.isOk = " ";//

LoadFromScripts.NAME = "LoadFromScripts";//

LoadFromScripts.OKresponse = "";

//=============================================================================
LoadFromScripts.resetMapInBrowser = function() {

  //console.log( "DD_LoadFromScripts.js: LoadFromScripts.resetMapInBrowser ");

  let saveGrounds  = LoadFromScripts.resetGrounds;
  let saveItems    = LoadFromScripts.resetItems;
  let saveMonsters = LoadFromScripts.resetMonsters;

  let pozChar = 0;

  // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
  
  for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
    
    for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
      
      Map.MapArrayTile_2d[i][j].G_char = saveGrounds[pozChar];
      Map.MapArrayTile_2d[i][j].I_char = saveItems[pozChar];
      Map.MapArrayTile_2d[i][j].M_char = saveMonsters[pozChar];
      pozChar = pozChar + 1;
    }
    pozChar = pozChar + 1;
  }
  EditorFrameDraw.drowFrameMap();;

  //console.log(saveGrounds);
  //console.log(saveItems); 
  //console.log(saveMonsters);
  

  // удалить ключ
  // delete localStorage.test;

};
//=============================================================================

// 
 //=============================================================================
 LoadFromScripts.ini_loadFromBrowser = function() {

  // console.log( "DD_SaveLoadInBrowser.js: SaveLoadBrowser.LoadInBrowser ");
 
   let saveGrounds  = LoadFromScripts.savedGrounds;
   let saveItems    = LoadFromScripts.savedItems;
   let saveMonsters = LoadFromScripts.savedMonsters;
 
   let pozChar = 0;
 
   // создаем двухмерный массив объектов тайл. в них три слоя для земли, предметов, монстров
   
   for ( let j = 0; j < Map.heightMaxTilesCount; j++) {
     
     for ( let i = 0; i < Map.widthMaxTilesCount; i++) {
       
       Map.MapArrayTile_2d[i][j].G_char = saveGrounds[pozChar];
       Map.MapArrayTile_2d[i][j].I_char = saveItems[pozChar];
       Map.MapArrayTile_2d[i][j].M_char = saveMonsters[pozChar];
       pozChar = pozChar + 1;
     }
     pozChar = pozChar + 1;
   }
   EditorFrameDraw.drowFrameMap();
 
   //console.log(saveGrounds);
   //console.log(saveItems); 
   //console.log(saveMonsters);
   
 
   // удалить ключ
   // delete localStorage.test;
 
 };
 //=============================================================================
 


//************************************************
LoadFromScripts.savedGrounds  = 
`gggggggggggggggggggggggg
gbbbbbbbbbbbbbbbbbbbbbbg
gbddddddddddddddddddddbg
gbdeeefeeefeeefeeefeedbg
gbdeaefeaefeaefeaefeadbg
gbdeeefeeefeeefeeefeedbg
gbdffffffffffffffffffdbg
gbddddddddddddddddddddbg
gbbbbbbbbbbbbbbbbbbbbbbg
gggggggggggggggggggggggg`;
//************************************************

//************************************************
LoadFromScripts.savedItems    = 
`rrrrrrrrrrrrrrrrrrrrrrrr
raaaaaaaaaaaaaaaaaaaaaar
rabbbbbbbbbbbbbbbbbbbbar
rabccccccccccccccccccbar
rabccccccccccccccccccbar
rabccccccccccccccccccbar
rabccccccccccccccccccbar
rabbbbbbbbbbbbbbbbbbbbar
raaaaaaaaaaaaaaaaaaaaaar
rrrrrrrrrrrrrrrrrrrrrrrr`;
//************************************************

//************************************************
LoadFromScripts.savedMonsters = 
`bbbbbbbbbbbbbbbbbbbbbbbb
bnnnnnnnnnnnnnnnnnnnnnnb
bnffffffffffffffffffffnb
bnfjjjkjjjkjjjkjjjkjjfnb
bnfjajkjmjkjejkjgjkjlfnb
bnfjjjkjjjkjjjkjjjkjjfnb
bnfkkkkkkkkkkkkkkkkkkfnb
bnffffffffffffffffffffnb
bnnnnnnnnnnnnnnnnnnnnnnb
bbbbbbbbbbbbbbbbbbbbbbbb`;
//************************************************


//************************************************
LoadFromScripts.resetGrounds  = 
`aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaa`;
//************************************************

//************************************************
LoadFromScripts.resetItems    = 
`cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc
cccccccccccccccccccccccc`;
//************************************************

//************************************************
LoadFromScripts.resetMonsters = 
`mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm
mmmmmmmmmmmmmmmmmmmmmmmm`;
//************************************************




 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_LoadFromScripts.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 LoadFromScripts.isOk = "OK";//
 //=============================================================================