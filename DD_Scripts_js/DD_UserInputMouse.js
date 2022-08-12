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


//==============================================================================     
// Add the event listeners for mousedown, mousemove, and mouseup
HTML5_Canvas.Id.addEventListener('mousedown', (event) => {
     //console.log("DD_UserInputMouse.js: mousedown");

     let xxx = 350;
     let yyy = 710
     HTML5_Canvas.context.clearRect(xxx, yyy-20, 300, 30);
     HTML5_Canvas.context.strokeText ("mousedown: X=" + event.offsetX, xxx, yyy);
     HTML5_Canvas.context.strokeText ("Y=" + event.offsetY, xxx + 200, yyy);

     UserInputMouse.clik(event.offsetX, event.offsetY);

});
//==============================================================================

//==============================================================================
HTML5_Canvas.Id.addEventListener('mousemove', (event) => {
     //console.log("DD_UserInputMouse.js: mousemove");
     let xxx = 10;
     let yyy = 710
     HTML5_Canvas.context.clearRect(xxx, yyy-20, 300, 30);
     HTML5_Canvas.context.strokeText ("mousemove: X=" + event.offsetX, xxx, yyy);
     HTML5_Canvas.context.strokeText ("Y=" + event.offsetY, xxx + 200, yyy);
     //HTML5_Canvas.Primitive.drawRect(xxx, yyy, 100, 10, 1, 'blue', 0);
});
//==============================================================================

//==============================================================================
window.addEventListener('mouseup', (event) => {
     //console.log("_DD_UserInputMouse.js: mouseup");
     let xxx = 700;
     let yyy = 710
     HTML5_Canvas.context.clearRect(xxx, yyy-20, 300, 30);
     HTML5_Canvas.context.strokeText ("mouseup: X=" + event.offsetX, xxx, yyy);
     HTML5_Canvas.context.strokeText ("Y=" + event.offsetY, xxx + 200, yyy);
});
//==============================================================================

//
//==============================================================================
UserInputMouse.clik = function(_X, _Y) {

     //console.log("DD_UserInputMouse.js: UserInputMouse.clik");
     //console.log("DD_UserInputMouse.js: Y = " + _Y);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesG_Y0 = " + Map.drawSelectTilesG_Y0);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesG_Y_Max = " + Map.drawSelectTilesG_Y_Max);

     //console.log("DD_UserInputMouse.js: Y = " + _Y);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesM_Y0 = " + Map.drawSelectTilesM_Y0);
     //console.log("DD_UserInputMouse.js: Map.drawSelectTilesM_Y_Max = " + Map.drawSelectTilesM_Y_Max);

     // надо доработать по нулевым координатам тайловой карты
     if ( ( _Y > 0) && (_Y< Map.heightMax_px) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне тайловой карты Y = " + _Y);
          UserInputMouse.clikMapSetTile(_X, _Y);

     } else if ( ( _Y > TilesFrameDraw.drawSelectTilesG_Y0) && (_Y < TilesFrameDraw.drawSelectTilesG_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня земля Y = " + _Y);
          UserInputMouse.clikMapGetTile(_X, _Y, "GROUND"); 

     } else if ( ( _Y > TilesFrameDraw.drawSelectTilesI_Y0) && (_Y< TilesFrameDraw.drawSelectTilesI_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня предметы Y = " + _Y);
          UserInputMouse.clikMapGetTile(_X, _Y, "ITEM"); 

     } else if ( ( _Y >TilesFrameDraw.drawSelectTilesM_Y0) && (_Y< TilesFrameDraw.drawSelectTilesM_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня монстры Y = " + _Y);
          UserInputMouse.clikMapGetTile(_X, _Y, "MONSTER"); 

     }

};
//==============================================================================

//
//==============================================================================
UserInputMouse.clikMapSetTile = function(_X, _Y) {

     //console.log("DD_UserInputMouse.js: TILE_MAP ");
     //console.log("__DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);

     if( UserInputMouse.selectedLayer == "GROUND" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil(_X / Map.tile.width);// округление до наибольшего целого
               let y = Math.ceil(_Y / Map.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               Map.MapArrayTile_2d[x-1][y-1].G_char = UserInputMouse.clikMapGetChar;
               EditorFrameDraw.drowFrameMap();;

          }
     } else if( UserInputMouse.selectedLayer == "ITEM" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil(_X / Map.tile.width);// округление до наибольшего целого
               let y = Math.ceil(_Y / Map.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               Map.MapArrayTile_2d[x-1][y-1].I_char = UserInputMouse.clikMapGetChar;
               EditorFrameDraw.drowFrameMap();;

          }
     } else if( UserInputMouse.selectedLayer == "MONSTER" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil(_X / Map.tile.width);// округление до наибольшего целого
               let y = Math.ceil(_Y / Map.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               Map.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.clikMapGetChar;
               EditorFrameDraw.drowFrameMap();;

          }
     }


}
//==============================================================================

// щелкаем по области с тайлами выбора и выбираем тайл
//==============================================================================
UserInputMouse.clikMapGetTile = function(_X, _Y, _layer) {

     //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetTile ");

    // Map.drawMap(0,0);
    // Map.drawSelectTiles(0);
     let maxCount = 0;
     let X0_dro = 1; 
     let Y0_dro = 1;
     let typeLayer ="";
     let trueLayer = false;
     X0_dro =  TilesFrameDraw.drawSelectTilesG_X0; 

     let clikMapGet_X = Math.ceil( (_X+X0_dro) / Map.tile.width);// округление до наибольшего целого

     if (_layer == "GROUND"){
          //console.log("DD_UserInputMouse.js: _layer == GROUND ");
          maxCount = SpritesMap.GROUNDS_MAX_COUNT;
          Y0_dro = TilesFrameDraw.drawSelectTilesG_Y0;
          typeLayer = SpritesMap.GROUNDS;
          trueLayer = true;

     } else if(_layer == "ITEM"){

          //console.log("DD_UserInputMouse.js: ITEM ");
          maxCount = SpritesMap.ITEMS_MAX_COUNT ;
          Y0_dro = TilesFrameDraw.drawSelectTilesI_Y0;
          typeLayer = SpritesMap.ITEMS;
          trueLayer = true;

     } else if(_layer == "MONSTER"){

          //console.log("DD_UserInputMouse.js: MONSTER ");
          maxCount = SpritesMap.MONSTERS_MAX_COUNT ;
          Y0_dro = TilesFrameDraw.drawSelectTilesM_Y0;
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

          if (clikMapGet_X < maxCount) {
                    
               EditorFrameDraw.drowFrameTilesP();
               UserInputMouse.selectedLayer = _layer;
               //
               let j = clikMapGet_X - 1;

               HTML5_Canvas.Primitive.drawRect(j * Map.tile.width +X0_dro, Y0_dro, Map.tile.width, Map.tile.height, 2, 'red', 0);

               UserInputMouse.clikMapGetChar = SpritesMap.tilesLoad[typeLayer][clikMapGet_X].tile_char;

               //console.log("DD_UserInputMouse.js:j = " + j );
               //console.log("DD_UserInputMouse.js:j * Map.tile.width +X0_dro = " + j * (Map.tile.width + X0_dro));


               //console.log("DD_UserInputMouse.js: GROUND x = " + _X);
               //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);
          }
     }
}
//==============================================================================

//==============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('script DD_UserInputMouse.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

UserInputMouse.isOk = "OK";//

//==============================================================================