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

  LoadFromScripts.ini_ResetMapString_();

  let saveGrounds  = LoadFromScripts.resetGrounds;
  let saveItems    = LoadFromScripts.resetItems;
  let saveMonsters = LoadFromScripts.resetMonsters;

  Map.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);
  EditorFrameDraw.drowFrame();
};
//=============================================================================

// 
 //=============================================================================
 LoadFromScripts.ini_loadFromBrowser = function() {

  // console.log( "DD_SaveLoadInBrowser.js: SaveLoadBrowser.LoadInBrowser ");
 
    LoadFromScripts.ini_DefoltMapString();

   let saveGrounds  = LoadFromScripts.savedGrounds;
   let saveItems    = LoadFromScripts.savedItems;
   let saveMonsters = LoadFromScripts.savedMonsters;
 
   Map.loadMapArrayTile(saveGrounds, saveItems, saveMonsters);
   EditorFrameDraw.drowFrame();

 };
 //=============================================================================
 
//=============================================================================
LoadFromScripts.ini_DefoltMapString = function(){

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

}
//=============================================================================


//=============================================================================
LoadFromScripts.ini_ResetMapString = function(){

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
}
//=============================================================================


//=============================================================================
LoadFromScripts.ini_ResetMapString_ = function(){

//************************************************
LoadFromScripts.resetGrounds  = 
`------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------`;
//************************************************

//************************************************
LoadFromScripts.resetItems    = 
`------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------`;
//************************************************

//************************************************
LoadFromScripts.resetMonsters = 
`------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------
------------------------`;
//************************************************
  }
  //=============================================================================
  
  

 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_LoadFromScripts.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 LoadFromScripts.isOk = "OK";//
 //=============================================================================