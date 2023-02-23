"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.08.2022-19.02.2023-
//
/*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     DDME_EditorFrames.js
     DDME_HTML5_SpritesMap_2D.js
     DDME_Map_2D.js
     DDME_EditorFrameDraw.js
*/

//==============================================================================

window.UserInputMouse = {};

 UserInputMouse.isOk = " ";//
 UserInputMouse.NAME = "UserInputMouse";//

 // Внешние ссылки
 UserInputMouse.HTML5_Canvas_OUT;
 UserInputMouse.HTML5_Canvas_TestLoadedScripts_OUT;
 UserInputMouse.EditorFrames_OUT;
 UserInputMouse.SpritesMap_2D_OUT;
 UserInputMouse.Map_2D_OUT;
 UserInputMouse.EditorFrameDraw_OUT

 UserInputMouse.selectedLayer;
 UserInputMouse.clikMapGetChar;

//=============================================================================
UserInputMouse.ini = function(){

     UserInputMouse.HTML5_Canvas_OUT = HTML5_Canvas;
     UserInputMouse.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
     UserInputMouse.EditorFrames_OUT = EditorFrames;
     UserInputMouse.SpritesMap_2D_OUT = SpritesMap_2D;
     UserInputMouse.Map_2D_OUT = Map_2D;
     UserInputMouse.EditorFrameDraw_OUT = EditorFrameDraw;

     UserInputMouse.selectedLayer = " ";
     UserInputMouse.clikMapGetChar = " ";

     //----------------------------------------------------------------------------- 
     UserInputMouse.HTML5_Canvas_OUT.Id_OUT.addEventListener('mousemove', (event) => {
          //console.log("DD_UserInputMouse.js: mousemove");
          let X0  = UserInputMouse.EditorFrames_OUT.PrintFrame.x0 + 10;
          let Y0  = UserInputMouse.EditorFrames_OUT.PrintFrame.y0 + 10;

          UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 300, 30, 1, 'green', 0);
          UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 300, 30);
          UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText ("mousemove: X =" + event.offsetX + " Y = " + event.offsetY, X0 + 10, Y0 + 20);
     });
     //----------------------------------------------------------------------------- 

   //-----------------------------------------------------------------------------     
     // Add the event listeners for mousedown, mousemove, and mouseup
     UserInputMouse.HTML5_Canvas_OUT.Id_OUT.addEventListener('mousedown', (event) => {
          //console.log("DD_UserInputMouse.js: mousedown");

          let X0  = UserInputMouse.EditorFrames_OUT.PrintFrame.x0 + 320;
          let Y0  = UserInputMouse.EditorFrames_OUT.PrintFrame.y0 +10;
          //console.log("DD_UserInputMouse.js: mousedown : X0  =" + X0 + " Y0= " + Y0);

          UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 300, 30, 1, 'green', 0);
          UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 300, 30);
          UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText ("mousedown: X =" + event.offsetX + " Y = " + event.offsetY, X0 +10, Y0 + 20);

          UserInputMouse.clik(event.offsetX, event.offsetY);

     });
     //----------------------------------------------------------------------------- 


     //----------------------------------------------------------------------------- 
     window.addEventListener('mouseup', (event) => {
          //console.log("_DD_UserInputMouse.js: mouseup");
          let X0  = UserInputMouse.EditorFrames_OUT.PrintFrame.x0 + 630;
          let Y0  = UserInputMouse.EditorFrames_OUT.PrintFrame.y0 + 10;
          UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 300, 30, 1, 'green', 0);
          UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 300, 30);
          UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText ("mouseup: X = " + event.offsetX + " Y = " + event.offsetY, X0 + 10, Y0 + 20);
     });
     //----------------------------------------------------------------------------- 

}
//=============================================================================

//
//==============================================================================
UserInputMouse.clik = function(_mouse_X, _mouse_Y) {

     // MapFrame
     let mapFrame_X0    = UserInputMouse.EditorFrames_OUT.MapFrame.x0;
     let mapFrame_Y0    = UserInputMouse.EditorFrames_OUT.MapFrame.y0;
     let mapFrame_Y_Max = UserInputMouse.EditorFrames_OUT.MapFrame.Y_Max;

     // надо доработать по нулевым координатам тайловой карты
     if ( ( _mouse_Y > mapFrame_Y0) && (_mouse_Y < mapFrame_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне тайловой карты Y = " + _mouse_Y);
          UserInputMouse.clikMapSetTile(_mouse_X, _mouse_Y, mapFrame_X0, mapFrame_Y0);

     } else if ( ( _mouse_Y > UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_Y0) && (_mouse_Y < UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня земля Y = " + _mouse_Y);
          UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_X0, UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_Y0, "GROUND"); 

     } else if ( ( _mouse_Y > UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Item_Y0) && (_mouse_Y < UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Item_Y_Max ) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня предметы Y = " + _mouse_Y);
          UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Item_X0, UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Item_Y0, "ITEM"); 

     } else if ( ( _mouse_Y > UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Monster_Y0) && (_mouse_Y < UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Monster_Y_Max) ){

          //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня монстры Y = " + _mouse_Y);
          UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Monster_X0, UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Monster_Y0, "MONSTER"); 

     }

};
//==============================================================================

//
//==============================================================================
UserInputMouse.clikMapSetTile = function(_mouse_X, _mouse_Y, _X0, _Y0) {

     //console.log("DD_UserInputMouse.js: TILE_MAP ");
     //console.log("__DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);

     let X0 =  UserInputMouse.SpritesMap_2D_OUT.GROUNDS_MAX_COUNT *  UserInputMouse.Map_2D_OUT.tile.width + UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_X0 + 20;
     let Y0 = UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_Y0;


     if( UserInputMouse.selectedLayer == "GROUND" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil( (_mouse_X - _X0) / UserInputMouse.Map_2D_OUT.tile.width);// округление до наибольшего целого
               let y = Math.ceil( (_mouse_Y - _Y0) / UserInputMouse.Map_2D_OUT.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].G_char = UserInputMouse.clikMapGetChar;
               if( UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].G_char != UserInputMouse.SpritesMap_2D_OUT.GROUND_FLOOR ) {
                    UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].I_char = UserInputMouse.SpritesMap_2D_OUT.ITEMS_NOTHING;
                    UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.SpritesMap_2D_OUT.MONSTERS_NOTHING
               }

               UserInputMouse.EditorFrameDraw_OUT.drowFrame();
               UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
               UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
          }
     } else if( UserInputMouse.selectedLayer == "ITEM" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil( (_mouse_X - _X0) / UserInputMouse.Map_2D_OUT.tile.width);// округление до наибольшего целого
               let y = Math.ceil( (_mouse_Y - _Y0) / UserInputMouse.Map_2D_OUT.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               //---------------------------------------------------------------------------
               if( UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].G_char == UserInputMouse.SpritesMap_2D_OUT.GROUND_FLOOR ) {

                    if(UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char == UserInputMouse.SpritesMap_2D_OUT.MONSTERS_NOTHING){

                         UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].I_char = UserInputMouse.clikMapGetChar;
                         UserInputMouse.EditorFrameDraw_OUT.drowFrame();
                         UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
                         UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
                    } else {
                              UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].I_char = UserInputMouse.SpritesMap_2D_OUT.ITEMS_NOTHING;
                              let x2 = _mouse_X + 10;
                              let y2 = _mouse_Y;
                              UserInputMouse.EditorFrameDraw_OUT.drowFrame();
                              //UserInputMouse.HTML5_Canvas_OUT.context.clearRect(x2, y2-20, 210, 25);
                              //UserInputMouse.HTML5_Canvas_OUT.context.strokeText ("ЗАНЯТО МОНСТРОМ", x2, y2);
 
                              UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
                              UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
                              UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText ("ЗАНЯТО МОНСТРОМ", X0 + 10, Y0 + 20);
                    }//if(UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char == UserInputMouse.SpritesMap_2D_OUT.MONSTERS_NOTHING){
          


               } else {
                    UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].I_char = UserInputMouse.SpritesMap_2D_OUT.ITEMS_NOTHING;
                    let x2 = _mouse_X + 10;
                    let y2 = _mouse_Y;
                    UserInputMouse.EditorFrameDraw_OUT.drowFrame();
                    //UserInputMouse.HTML5_Canvas_OUT.context.clearRect(x2, y2-20, 360, 25);
                    //UserInputMouse.HTML5_Canvas_OUT.context.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", x2, y2);

                    UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
                    UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
                    UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", X0 + 10, Y0 + 20);
  
               }//if( UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].G_char == UserInputMouse.SpritesMap_2D_OUT.GROUND_FLOOR ) {
               //---------------------------------------------------------------------------
          }
     } else if( UserInputMouse.selectedLayer == "MONSTER" ){
          if( UserInputMouse.clikMapGetChar != " " ){

               let x = Math.ceil( (_mouse_X - _X0) / UserInputMouse.Map_2D_OUT.tile.width);// округление до наибольшего целого
               let y = Math.ceil( (_mouse_Y - _Y0) / UserInputMouse.Map_2D_OUT.tile.height);// округление до наибольшего целого

               //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
               //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);

               //UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.clikMapGetChar;
               //UserInputMouse.EditorFrameDraw_OUT.drowFrame();

                             //---------------------------------------------------------------------------
                             if( UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].G_char == UserInputMouse.SpritesMap_2D_OUT.GROUND_FLOOR ) {

                              if(UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].I_char == UserInputMouse.SpritesMap_2D_OUT.ITEMS_NOTHING){
          
                                   UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.clikMapGetChar;
                                   UserInputMouse.EditorFrameDraw_OUT.drowFrame();
                                   UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
                                   UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
                              } else {
                                        UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.SpritesMap_2D_OUT.MONSTERS_NOTHING;
                                        let x2 = _mouse_X + 10;
                                        let y2 = _mouse_Y;
                                        UserInputMouse.EditorFrameDraw_OUT.drowFrame();
                                        //UserInputMouse.HTML5_Canvas_OUT.context.clearRect(x2, y2-20, 220, 25);
                                        //UserInputMouse.HTML5_Canvas_OUT.context.strokeText ("ЗАНЯТО ПРЕДМЕТОМ", x2, y2);

                                        UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
                                        UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
                                        UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText ("ЗАНЯТО ПРЕДМЕТОМ", X0 + 10, Y0 + 20);
                              }//if(UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char == UserInputMouse.SpritesMap_2D_OUT.MONSTERS_NOTHING){
                    
                         } else {
                              UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.SpritesMap_2D_OUT.MONSTERS_NOTHING;
                              let x2 = _mouse_X + 10;
                              let y2 = _mouse_Y;
                              UserInputMouse.EditorFrameDraw_OUT.drowFrame();
                             // UserInputMouse.HTML5_Canvas_OUT.context.clearRect(x2, y2-20, 360, 25);
                             // UserInputMouse.HTML5_Canvas_OUT.context.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", x2, y2);

                              UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
                              UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
                              UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", X0 + 10, Y0 + 20);
            
                         }//if( UserInputMouse.Map_2D_OUT.MapArrayTile_2d[x-1][y-1].G_char == UserInputMouse.SpritesMap_2D_OUT.GROUND_FLOOR ) {
                         //---------------------------------------------------------------------------

          }
     }


}
//==============================================================================

// щелкаем по области с тайлами выбора и выбираем тайл
//==============================================================================
UserInputMouse.clikMapGetTile = function(_mouse_X, _mouse_Y,  _X0, _Y0, _layer) {

     //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetTile ");

    // UserInputMouse.Map_2D_OUT.drawMap(0,0);
    // UserInputMouse.Map_2D_OUT.drawSelectTiles(0);
     let maxCount = 0;
     let typeLayer ="";
     let trueLayer = false; 

     let clikMapGet_X = Math.ceil( (_mouse_X -_X0) /  UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH);// округление до наибольшего целого

     if (_layer == "GROUND"){
          //console.log("DD_UserInputMouse.js: _layer == GROUND ");
          maxCount = UserInputMouse.SpritesMap_2D_OUT.GROUNDS_MAX_COUNT;
          typeLayer = UserInputMouse.SpritesMap_2D_OUT.GROUNDS;
          trueLayer = true;

     } else if(_layer == "ITEM"){

          //console.log("DD_UserInputMouse.js: ITEM ");
          maxCount = UserInputMouse.SpritesMap_2D_OUT.ITEMS_MAX_COUNT ;
          typeLayer = UserInputMouse.SpritesMap_2D_OUT.ITEMS;
          trueLayer = true;

     } else if(_layer == "MONSTER"){

          //console.log("DD_UserInputMouse.js: MONSTER ");
          maxCount = UserInputMouse.SpritesMap_2D_OUT.MONSTERS_MAX_COUNT ;
          typeLayer = UserInputMouse.SpritesMap_2D_OUT.MONSTERS;
          trueLayer = true;
     } 

     if (trueLayer == true ){

         // console.log("DD_UserInputMouse.js:maxCount = " + maxCount);
         // console.log("DD_UserInputMouse.js:X0_dro = " + X0_dro);
         // console.log("DD_UserInputMouse.js:Y0_dro = " + Y0_dro);        
         // console.log("DD_UserInputMouse.js:typeLayer = " + typeLayer); 
         // console.log("DD_UserInputMouse.js:trueLayer = " + trueLayer); 
         // console.log("DD_UserInputMouse.js:clikMapGet_X = " + clikMapGet_X); 
         // console.log("DD_UserInputMouse.js: UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH = " +  UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH);

          if (clikMapGet_X < maxCount + 1) {
                    
               UserInputMouse.EditorFrameDraw_OUT.drowFrame();
               UserInputMouse.selectedLayer = _layer;
               //
               let j = clikMapGet_X - 1;

               UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(j * UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + _X0, _Y0, 
                    UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH, UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_HEIGHT, 2, 'red', 0);

               UserInputMouse.clikMapGetChar = UserInputMouse.SpritesMap_2D_OUT.tilesLoad[typeLayer][j].tile_char;

               let X0 =  UserInputMouse.SpritesMap_2D_OUT.GROUNDS_MAX_COUNT *  UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_X0 + 20;
               let Y0 = UserInputMouse.EditorFrames_OUT.TilesPanelFrame.Ground_Y0;

               UserInputMouse.HTML5_Canvas_OUT.Primitive.drawRect(X0, Y0, 500, 30, 1, 'green', 0);
               UserInputMouse.HTML5_Canvas_OUT.context_OUT.clearRect(X0, Y0, 500, 30);
               UserInputMouse.HTML5_Canvas_OUT.context_OUT.strokeText (" " + UserInputMouse.SpritesMap_2D_OUT.tilesLoad[typeLayer][j].tile_String, X0 + 10, Y0 + 20);


               //console.log("DD_UserInputMouse.js:clikMapGet_X = " + clikMapGet_X);
               //console.log("DD_UserInputMouse.js:j = " + j );
               //console.log("DD_UserInputMouse.js:j *  UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH +X0_dro = " + j * ( UserInputMouse.EditorFrames_OUT.TilesPanelFrame.tile_SIZE_WIDTH + X0_dro));


               //console.log("DD_UserInputMouse.js: GROUND x = " + _mouse_X);
               //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);
          }
     }
}
//==============================================================================

     UserInputMouse.ini();

     UserInputMouse.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_UserInputMouseEditor.js+');

     UserInputMouse.isOk = "OK";//