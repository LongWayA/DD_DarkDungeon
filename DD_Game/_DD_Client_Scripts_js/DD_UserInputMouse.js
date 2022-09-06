"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.08.2022-
//
   /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

  */


 /*
 
 */

//==============================================================================

window.UserInputMouse = {};
 UserInputMouse.isOk = " ";//

 UserInputMouse.selectedLayer = " ";
 UserInputMouse.clikMapGetChar = " ";

 UserInputMouse.NAME = "UserInputMouse";//

//=============================================================================
UserInputMouse.ini_UserInputMouse = function(){

     //-----------------------------------------------------------------------------     
     // Add the event listeners for mousedown, mousemove, and mouseup
     HTML5_Canvas.Id.addEventListener('mousedown', (event) => {
          //console.log("DD_UserInputMouse.js: mousedown");

          let xxx = 350;
          let yyy = 710;
          HTML5_Canvas.context.clearRect(xxx, yyy-20, 300, 30);
          HTML5_Canvas.context.strokeText ("mousedown: X=" + event.offsetX, xxx, yyy);
          HTML5_Canvas.context.strokeText ("Y=" + event.offsetY, xxx + 200, yyy);

          UserInputMouse.clik(event.offsetX, event.offsetY);

     });
     //----------------------------------------------------------------------------- 

     //----------------------------------------------------------------------------- 
     HTML5_Canvas.Id.addEventListener('mousemove', (event) => {
          //console.log("DD_UserInputMouse.js: mousemove");
          let xxx = 10;
          let yyy = 710;
          HTML5_Canvas.context.clearRect(xxx, yyy-20, 300, 30);
          HTML5_Canvas.context.strokeText ("mousemove: X=" + event.offsetX, xxx, yyy);
          HTML5_Canvas.context.strokeText ("Y=" + event.offsetY, xxx + 200, yyy);
          //HTML5_Canvas.Primitive.drawRect(xxx, yyy, 100, 10, 1, 'blue', 0);
     });
     //----------------------------------------------------------------------------- 

     //----------------------------------------------------------------------------- 
     window.addEventListener('mouseup', (event) => {
          //console.log("_DD_UserInputMouse.js: mouseup");
          let xxx = 700;
          let yyy = 710;
          HTML5_Canvas.context.clearRect(xxx, yyy-20, 300, 30);
          HTML5_Canvas.context.strokeText ("mouseup: X=" + event.offsetX, xxx, yyy);
          HTML5_Canvas.context.strokeText ("Y=" + event.offsetY, xxx + 200, yyy);
     });
     //----------------------------------------------------------------------------- 

}
//=============================================================================

//
//==============================================================================
UserInputMouse.clik = function(_mouse_X, _mouse_Y) {

     // MapFrame
     let mapFrame_X0    = EditorFrames.MapFrame.X0;
     let mapFrame_Y0    = EditorFrames.MapFrame.Y0;
     let mapFrame_Y_Max = EditorFrames.MapFrame.Y_Max;


     // tilesPanelFrame
     let tilesPanelFrame_Ground_X0     = EditorFrames.TilesPanelFrame.X0;
     let tilesPanelFrame_Ground_Y0     = EditorFrames.TilesPanelFrame.Y0 + 10;
     let tilesPanelFrame_Ground_Y_Max  = tilesPanelFrame_Ground_Y0 + Map.tile.height;

     let tilesPanelFrame_Item_X0       = EditorFrames.TilesPanelFrame.X0;
     let tilesPanelFrame_Item_Y0       = tilesPanelFrame_Ground_Y_Max + 10;
     let tilesPanelFrame_Item_Y_Max    = tilesPanelFrame_Item_Y0 + Map.tile.height;
     
     let tilesPanelFrame_Monster_X0    = EditorFrames.TilesPanelFrame.X0;    
     let tilesPanelFrame_Monster_Y0    = tilesPanelFrame_Item_Y_Max + 10;
     let tilesPanelFrame_Monster_Y_Max = tilesPanelFrame_Monster_Y0 + Map.tile.height;

     //console.log("DD_UserInputMouse.js: UserInputMouse.clik");
     //console.log("DD_UserInputMouse.js: Y = " + _mouse_Y);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesG_Y0 = " + Map.drawSelectTilesG_Y0);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesG_Y_Max = " + Map.drawSelectTilesG_Y_Max);

     //console.log("DD_UserInputMouse.js: Y = " + _mouse_Y);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesM_Y0 = " + Map.drawSelectTilesM_Y0);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesM_Y_Max = " + Map.drawSelectTilesM_Y_Max);

     // надо доработать по нулевым координатам тайловой карты
     if ( ( _mouse_Y > mapFrame_Y0) && (_mouse_Y < mapFrame_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне тайловой карты Y = " + _mouse_Y);
          UserInputMouse.clikMapSetTile(_mouse_X, _mouse_Y, mapFrame_X0, mapFrame_Y0);

     } else if ( ( _mouse_Y > tilesPanelFrame_Ground_Y0) && (_mouse_Y < tilesPanelFrame_Ground_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня земля Y = " + _mouse_Y);
          UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, tilesPanelFrame_Ground_X0, tilesPanelFrame_Ground_Y0, "GROUND"); 

     } else if ( ( _mouse_Y > tilesPanelFrame_Item_Y0) && (_mouse_Y < tilesPanelFrame_Item_Y_Max ) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня предметы Y = " + _mouse_Y);
          UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, tilesPanelFrame_Item_X0, tilesPanelFrame_Item_Y0, "ITEM"); 

     } else if ( ( _mouse_Y >tilesPanelFrame_Monster_Y0) && (_mouse_Y< tilesPanelFrame_Monster_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня монстры Y = " + _mouse_Y);
          UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, tilesPanelFrame_Monster_X0, tilesPanelFrame_Monster_Y0, "MONSTER"); 

     }

};
//==============================================================================

//
//==============================================================================
UserInputMouse.clikMapSetTile = function(_mouse_X, _mouse_Y, _X0, _Y0) {

     //console.log("DD_UserInputMouse.js: TILE_MAP ");
     //console.log("__DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);

     if( UserInputMouse.selectedLayer == "GROUND" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil( (_mouse_X - _X0) / Map.tile.width);// округление до наибольшего целого
               let y = Math.ceil( (_mouse_Y - _Y0) / Map.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               Map.MapArrayTile_2d[x-1][y-1].G_char = UserInputMouse.clikMapGetChar;
               if( Map.MapArrayTile_2d[x-1][y-1].G_char != SpritesMap.GROUND_FLOOR ) {
                    Map.MapArrayTile_2d[x-1][y-1].I_char = SpritesMap.ITEMS_NOTHING;
                    Map.MapArrayTile_2d[x-1][y-1].M_char = SpritesMap.MONSTERS_NOTHING
               }

               EditorFrameDraw.drowFrame();

          }
     } else if( UserInputMouse.selectedLayer == "ITEM" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil( (_mouse_X - _X0) / Map.tile.width);// округление до наибольшего целого
               let y = Math.ceil( (_mouse_Y - _Y0) / Map.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               //---------------------------------------------------------------------------
               if( Map.MapArrayTile_2d[x-1][y-1].G_char == SpritesMap.GROUND_FLOOR ) {

                    if(Map.MapArrayTile_2d[x-1][y-1].M_char == SpritesMap.MONSTERS_NOTHING){

                         Map.MapArrayTile_2d[x-1][y-1].I_char = UserInputMouse.clikMapGetChar;
                         EditorFrameDraw.drowFrame();
                    } else {
                              Map.MapArrayTile_2d[x-1][y-1].I_char = SpritesMap.ITEMS_NOTHING;
                              let x2 = _mouse_X + 10;
                              let y2 = _mouse_Y;
                              EditorFrameDraw.drowFrame();
                              HTML5_Canvas.context.clearRect(x2, y2-20, 210, 25);
                              HTML5_Canvas.context.strokeText ("ЗАНЯТО МОНСТРОМ", x2, y2);
                    }//if(Map.MapArrayTile_2d[x-1][y-1].M_char == SpritesMap.MONSTERS_NOTHING){
          


               } else {
                    Map.MapArrayTile_2d[x-1][y-1].I_char = SpritesMap.ITEMS_NOTHING;
                    let x2 = _mouse_X + 10;
                    let y2 = _mouse_Y;
                    EditorFrameDraw.drowFrame();
                    HTML5_Canvas.context.clearRect(x2, y2-20, 360, 25);
                    HTML5_Canvas.context.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", x2, y2);
  
               }//if( Map.MapArrayTile_2d[x-1][y-1].G_char == SpritesMap.GROUND_FLOOR ) {
               //---------------------------------------------------------------------------
          }
     } else if( UserInputMouse.selectedLayer == "MONSTER" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil( (_mouse_X - _X0) / Map.tile.width);// округление до наибольшего целого
               let y = Math.ceil( (_mouse_Y - _Y0) / Map.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               Map.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.clikMapGetChar;
               EditorFrameDraw.drowFrame();

                             //---------------------------------------------------------------------------
                             if( Map.MapArrayTile_2d[x-1][y-1].G_char == SpritesMap.GROUND_FLOOR ) {

                              if(Map.MapArrayTile_2d[x-1][y-1].I_char == SpritesMap.ITEMS_NOTHING){
          
                                   Map.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.clikMapGetChar;
                                   EditorFrameDraw.drowFrame();
                              } else {
                                        Map.MapArrayTile_2d[x-1][y-1].M_char = SpritesMap.MONSTERS_NOTHING;
                                        let x2 = _mouse_X + 10;
                                        let y2 = _mouse_Y;
                                        EditorFrameDraw.drowFrame();
                                        HTML5_Canvas.context.clearRect(x2, y2-20, 220, 25);
                                        HTML5_Canvas.context.strokeText ("ЗАНЯТО ПРЕДМЕТОМ", x2, y2);
                              }//if(Map.MapArrayTile_2d[x-1][y-1].M_char == SpritesMap.MONSTERS_NOTHING){
                    
                         } else {
                              Map.MapArrayTile_2d[x-1][y-1].M_char = SpritesMap.MONSTERS_NOTHING;
                              let x2 = _mouse_X + 10;
                              let y2 = _mouse_Y;
                              EditorFrameDraw.drowFrame();
                              HTML5_Canvas.context.clearRect(x2, y2-20, 360, 25);
                              HTML5_Canvas.context.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", x2, y2);
            
                         }//if( Map.MapArrayTile_2d[x-1][y-1].G_char == SpritesMap.GROUND_FLOOR ) {
                         //---------------------------------------------------------------------------

          }
     }


}
//==============================================================================

// щелкаем по области с тайлами выбора и выбираем тайл
//==============================================================================
UserInputMouse.clikMapGetTile = function(_mouse_X, _mouse_Y,  _X0, _Y0, _layer) {

     //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetTile ");

    // Map.drawMap(0,0);
    // Map.drawSelectTiles(0);
     let maxCount = 0;
     let typeLayer ="";
     let trueLayer = false; 

     let clikMapGet_X = Math.ceil( (_mouse_X -_X0) / Map.tile.width);// округление до наибольшего целого

     if (_layer == "GROUND"){
          //console.log("DD_UserInputMouse.js: _layer == GROUND ");
          maxCount = SpritesMap.GROUNDS_MAX_COUNT;
          typeLayer = SpritesMap.GROUNDS;
          trueLayer = true;

     } else if(_layer == "ITEM"){

          //console.log("DD_UserInputMouse.js: ITEM ");
          maxCount = SpritesMap.ITEMS_MAX_COUNT ;
          typeLayer = SpritesMap.ITEMS;
          trueLayer = true;

     } else if(_layer == "MONSTER"){

          //console.log("DD_UserInputMouse.js: MONSTER ");
          maxCount = SpritesMap.MONSTERS_MAX_COUNT ;
          typeLayer = SpritesMap.MONSTERS;
          trueLayer = true;
     } 

     if (trueLayer == true ){

         // console.log("DD_UserInputMouse.js:maxCount = " + maxCount);
         // console.log("DD_UserInputMouse.js:X0_dro = " + X0_dro);
         // console.log("DD_UserInputMouse.js:Y0_dro = " + Y0_dro);        
         // console.log("DD_UserInputMouse.js:typeLayer = " + typeLayer); 
         // console.log("DD_UserInputMouse.js:trueLayer = " + trueLayer); 
         // console.log("DD_UserInputMouse.js:clikMapGet_X = " + clikMapGet_X); 
         // console.log("DD_UserInputMouse.js:Map.tile.width = " + Map.tile.width);

          if (clikMapGet_X < maxCount + 1) {
                    
               EditorFrameDraw.drowFrame();
               UserInputMouse.selectedLayer = _layer;
               //
               let j = clikMapGet_X - 1;

               HTML5_Canvas.Primitive.drawRect(j * Map.tile.width + _X0, _Y0, Map.tile.width, Map.tile.height, 2, 'red', 0);

               UserInputMouse.clikMapGetChar = SpritesMap.tilesLoad[typeLayer][j].tile_char;
               //console.log("DD_UserInputMouse.js:clikMapGet_X = " + clikMapGet_X);
               //console.log("DD_UserInputMouse.js:j = " + j );
               //console.log("DD_UserInputMouse.js:j * Map.tile.width +X0_dro = " + j * (Map.tile.width + X0_dro));


               //console.log("DD_UserInputMouse.js: GROUND x = " + _mouse_X);
               //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);
          }
     }
}
//==============================================================================

UserInputMouse.ini_UserInputMouse();


//==============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('script DD_UserInputMouse.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

UserInputMouse.isOk = "OK";//

//==============================================================================