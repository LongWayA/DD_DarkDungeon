"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.08.2022-19.02.2023-2.04m.2023-
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
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { EditorFrames } from './DDME_EditorFrames.js';
import { SpritesMap_2D } from './DDME_HTML5_SpritesMap_2D.js';
import { Map_2D } from './DDME_Map_2D.js';
import { EditorFrameDraw } from './DDME_EditorFrameDraw.js';
// Внешние ссылки
var Out = {
    HTML5_Canvas: HTML5_Canvas,
    HTML5_Canvas_TestLoadedScripts: HTML5_Canvas.TestLoadedScripts,
    EditorFrames: EditorFrames,
    SpritesMap_2D: SpritesMap_2D,
    Map_2D: Map_2D,
    EditorFrameDraw: EditorFrameDraw,
    //=============================================================================
    ini: function () {
        //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
    },
    //=============================================================================
};
var UserInputMouse = {
    isOk: " ",
    NAME: "UserInputMouse",
    selectedLayer: "",
    clikMapGetChar: "",
    //=============================================================================
    ini: function () {
        //----------------------------------------------------------------------------- 
        Out.HTML5_Canvas.Id_OUT.addEventListener('mousemove', (event) => {
            //console.log("DD_UserInputMouse.js: mousemove");
            let X0 = Out.EditorFrames.PrintFrame.x0 + 10;
            let Y0 = Out.EditorFrames.PrintFrame.y0 + 10;
            Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 300, 30, 1, 'green', 0);
            Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 300, 30);
            Out.HTML5_Canvas.context_OUT.strokeText("mousemove: X =" + event.offsetX + " Y = " + event.offsetY, X0 + 10, Y0 + 20);
        });
        //----------------------------------------------------------------------------- 
        //-----------------------------------------------------------------------------     
        // Add the event listeners for mousedown, mousemove, and mouseup
        Out.HTML5_Canvas.Id_OUT.addEventListener('mousedown', (event) => {
            //console.log("DD_UserInputMouse.js: mousedown");
            let X0 = Out.EditorFrames.PrintFrame.x0 + 320;
            let Y0 = Out.EditorFrames.PrintFrame.y0 + 10;
            //console.log("DD_UserInputMouse.js: mousedown : X0  =" + X0 + " Y0= " + Y0);
            Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 300, 30, 1, 'green', 0);
            Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 300, 30);
            Out.HTML5_Canvas.context_OUT.strokeText("mousedown: X =" + event.offsetX + " Y = " + event.offsetY, X0 + 10, Y0 + 20);
            UserInputMouse.clik(event.offsetX, event.offsetY);
        });
        //----------------------------------------------------------------------------- 
        //----------------------------------------------------------------------------- 
        window.addEventListener('mouseup', (event) => {
            //console.log("_DD_UserInputMouse.js: mouseup");
            let X0 = Out.EditorFrames.PrintFrame.x0 + 630;
            let Y0 = Out.EditorFrames.PrintFrame.y0 + 10;
            Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 300, 30, 1, 'green', 0);
            Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 300, 30);
            Out.HTML5_Canvas.context_OUT.strokeText("mouseup: X = " + event.offsetX + " Y = " + event.offsetY, X0 + 10, Y0 + 20);
        });
        //----------------------------------------------------------------------------- 
    },
    //=============================================================================
    //
    //==============================================================================
    clik: function (_mouse_X, _mouse_Y) {
        // MapFrame
        let mapFrame_X0 = Out.EditorFrames.MapFrame.x0;
        let mapFrame_Y0 = Out.EditorFrames.MapFrame.y0;
        let mapFrame_Y_Max = Out.EditorFrames.MapFrame.Y_Max;
        // надо доработать по нулевым координатам тайловой карты
        if ((_mouse_Y > mapFrame_Y0) && (_mouse_Y < mapFrame_Y_Max)) {
            //console.log("DD_UserInputMouse.js: По вертикали мы в зоне тайловой карты Y = " + _mouse_Y);
            UserInputMouse.clikMapSetTile(_mouse_X, _mouse_Y, mapFrame_X0, mapFrame_Y0);
        }
        else if ((_mouse_Y > Out.EditorFrames.TilesPanelFrame.Ground_Y0) && (_mouse_Y < Out.EditorFrames.TilesPanelFrame.Ground_Y_Max)) {
            //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня земля Y = " + _mouse_Y);
            UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, Out.EditorFrames.TilesPanelFrame.Ground_X0, Out.EditorFrames.TilesPanelFrame.Ground_Y0, "GROUND");
        }
        else if ((_mouse_Y > Out.EditorFrames.TilesPanelFrame.Item_Y0) && (_mouse_Y < Out.EditorFrames.TilesPanelFrame.Item_Y_Max)) {
            //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня предметы Y = " + _mouse_Y);
            UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, Out.EditorFrames.TilesPanelFrame.Item_X0, Out.EditorFrames.TilesPanelFrame.Item_Y0, "ITEM");
        }
        else if ((_mouse_Y > Out.EditorFrames.TilesPanelFrame.Monster_Y0) && (_mouse_Y < Out.EditorFrames.TilesPanelFrame.Monster_Y_Max)) {
            //console.log("DD_UserInputMouse.js: По вертикали мы в зоне выбора тайлов уровня монстры Y = " + _mouse_Y);
            UserInputMouse.clikMapGetTile(_mouse_X, _mouse_Y, Out.EditorFrames.TilesPanelFrame.Monster_X0, Out.EditorFrames.TilesPanelFrame.Monster_Y0, "MONSTER");
        }
    },
    //==============================================================================
    //
    //==============================================================================
    clikMapSetTile: function (_mouse_X, _mouse_Y, _X0, _Y0) {
        //console.log("DD_UserInputMouse.js: TILE_MAP ");
        //console.log("__DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);
        let X0 = Out.SpritesMap_2D.GROUNDS_MAX_COUNT * Out.Map_2D.tile.width + Out.EditorFrames.TilesPanelFrame.Ground_X0 + 20;
        let Y0 = Out.EditorFrames.TilesPanelFrame.Ground_Y0;
        if (UserInputMouse.selectedLayer == "GROUND") {
            if (UserInputMouse.clikMapGetChar != " ") {
                let x = Math.ceil((_mouse_X - _X0) / Out.Map_2D.tile.width); // округление до наибольшего целого
                let y = Math.ceil((_mouse_Y - _Y0) / Out.Map_2D.tile.height); // округление до наибольшего целого
                //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
                //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
                //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);
                Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].G_char = UserInputMouse.clikMapGetChar;
                if (Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].G_char != Out.SpritesMap_2D.GROUND_FLOOR) {
                    Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].I_char = Out.SpritesMap_2D.ITEMS_NOTHING;
                    Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].M_char = Out.SpritesMap_2D.MONSTERS_NOTHING;
                }
                Out.EditorFrameDraw.drowFrame();
                Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
            }
        }
        else if (UserInputMouse.selectedLayer == "ITEM") {
            if (UserInputMouse.clikMapGetChar != " ") {
                let x = Math.ceil((_mouse_X - _X0) / Out.Map_2D.tile.width); // округление до наибольшего целого
                let y = Math.ceil((_mouse_Y - _Y0) / Out.Map_2D.tile.height); // округление до наибольшего целого
                //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
                //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
                //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);
                //---------------------------------------------------------------------------
                if (Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].G_char == Out.SpritesMap_2D.GROUND_FLOOR) {
                    if (Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].M_char == Out.SpritesMap_2D.MONSTERS_NOTHING) {
                        Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].I_char = UserInputMouse.clikMapGetChar;
                        Out.EditorFrameDraw.drowFrame();
                        Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                        Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
                    }
                    else {
                        Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].I_char = Out.SpritesMap_2D.ITEMS_NOTHING;
                        let x2 = _mouse_X + 10;
                        let y2 = _mouse_Y;
                        Out.EditorFrameDraw.drowFrame();
                        //Out.HTML5_Canvas.context.clearRect(x2, y2-20, 210, 25);
                        //Out.HTML5_Canvas.context.strokeText ("ЗАНЯТО МОНСТРОМ", x2, y2);
                        Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                        Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
                        Out.HTML5_Canvas.context_OUT.strokeText("ЗАНЯТО МОНСТРОМ", X0 + 10, Y0 + 20);
                    } //if(Out.Map_2D.MapArrayTile_2d[x-1][y-1].M_char == Out.SpritesMap_2D.MONSTERS_NOTHING){
                }
                else {
                    Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].I_char = Out.SpritesMap_2D.ITEMS_NOTHING;
                    let x2 = _mouse_X + 10;
                    let y2 = _mouse_Y;
                    Out.EditorFrameDraw.drowFrame();
                    //Out.HTML5_Canvas.context.clearRect(x2, y2-20, 360, 25);
                    //Out.HTML5_Canvas.context.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", x2, y2);
                    Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                    Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
                    Out.HTML5_Canvas.context_OUT.strokeText("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", X0 + 10, Y0 + 20);
                } //if( Out.Map_2D.MapArrayTile_2d[x-1][y-1].G_char == Out.SpritesMap_2D.GROUND_FLOOR ) {
                //---------------------------------------------------------------------------
            }
        }
        else if (UserInputMouse.selectedLayer == "MONSTER") {
            if (UserInputMouse.clikMapGetChar != " ") {
                let x = Math.ceil((_mouse_X - _X0) / Out.Map_2D.tile.width); // округление до наибольшего целого
                let y = Math.ceil((_mouse_Y - _Y0) / Out.Map_2D.tile.height); // округление до наибольшего целого
                //console.log("DD_UserInputMouse.js:clikMapSetTile  x = " + x);
                //console.log("DD_UserInputMouse.js:clikMapSetTile  y = " + y);
                //console.log("DD_UserInputMouse.js:clikMapSetTile  UserInputMouse.clikMapGetChar = " + UserInputMouse.clikMapGetChar);
                //Out.Map_2D.MapArrayTile_2d[x-1][y-1].M_char = UserInputMouse.clikMapGetChar;
                //Out.EditorFrameDraw.drowFrame();
                //---------------------------------------------------------------------------
                if (Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].G_char == Out.SpritesMap_2D.GROUND_FLOOR) {
                    if (Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].I_char == Out.SpritesMap_2D.ITEMS_NOTHING) {
                        Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].M_char = UserInputMouse.clikMapGetChar;
                        Out.EditorFrameDraw.drowFrame();
                        Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                        Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
                    }
                    else {
                        Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].M_char = Out.SpritesMap_2D.MONSTERS_NOTHING;
                        let x2 = _mouse_X + 10;
                        let y2 = _mouse_Y;
                        Out.EditorFrameDraw.drowFrame();
                        //Out.HTML5_Canvas.context.clearRect(x2, y2-20, 220, 25);
                        //Out.HTML5_Canvas.context.strokeText ("ЗАНЯТО ПРЕДМЕТОМ", x2, y2);
                        Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                        Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
                        Out.HTML5_Canvas.context_OUT.strokeText("ЗАНЯТО ПРЕДМЕТОМ", X0 + 10, Y0 + 20);
                    } //if(Out.Map_2D.MapArrayTile_2d[x-1][y-1].M_char == Out.SpritesMap_2D.MONSTERS_NOTHING){
                }
                else {
                    Out.Map_2D.MapArrayTile_2d[x - 1][y - 1].M_char = Out.SpritesMap_2D.MONSTERS_NOTHING;
                    let x2 = _mouse_X + 10;
                    let y2 = _mouse_Y;
                    Out.EditorFrameDraw.drowFrame();
                    // Out.HTML5_Canvas.context.clearRect(x2, y2-20, 360, 25);
                    // Out.HTML5_Canvas.context.strokeText ("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", x2, y2);
                    Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                    Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
                    Out.HTML5_Canvas.context_OUT.strokeText("НЕТ СВОБОДНОГО ПРОСТРАНСТВА", X0 + 10, Y0 + 20);
                } //if( Out.Map_2D.MapArrayTile_2d[x-1][y-1].G_char == Out.SpritesMap_2D.GROUND_FLOOR ) {
                //---------------------------------------------------------------------------
            }
        }
    },
    //==============================================================================
    // щелкаем по области с тайлами выбора и выбираем тайл
    //==============================================================================
    clikMapGetTile: function (_mouse_X, _mouse_Y, _X0, _Y0, _layer) {
        //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetTile ");
        // Out.Map_2D.drawMap(0,0);
        // Out.Map_2D.drawSelectTiles(0);
        let maxCount = 0;
        let typeLayer = 0;
        let trueLayer = false;
        let clikMapGet_X = Math.ceil((_mouse_X - _X0) / Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH); // округление до наибольшего целого
        if (_layer == "GROUND") {
            //console.log("DD_UserInputMouse.js: _layer == GROUND ");
            maxCount = Out.SpritesMap_2D.GROUNDS_MAX_COUNT;
            typeLayer = Out.SpritesMap_2D.GROUNDS;
            trueLayer = true;
        }
        else if (_layer == "ITEM") {
            //console.log("DD_UserInputMouse.js: ITEM ");
            maxCount = Out.SpritesMap_2D.ITEMS_MAX_COUNT;
            typeLayer = Out.SpritesMap_2D.ITEMS;
            trueLayer = true;
        }
        else if (_layer == "MONSTER") {
            //console.log("DD_UserInputMouse.js: MONSTER ");
            maxCount = Out.SpritesMap_2D.MONSTERS_MAX_COUNT;
            typeLayer = Out.SpritesMap_2D.MONSTERS;
            trueLayer = true;
        }
        if (trueLayer == true) {
            // console.log("DD_UserInputMouse.js:maxCount = " + maxCount);
            // console.log("DD_UserInputMouse.js:X0_dro = " + X0_dro);
            // console.log("DD_UserInputMouse.js:Y0_dro = " + Y0_dro);        
            // console.log("DD_UserInputMouse.js:typeLayer = " + typeLayer); 
            // console.log("DD_UserInputMouse.js:trueLayer = " + trueLayer); 
            // console.log("DD_UserInputMouse.js:clikMapGet_X = " + clikMapGet_X); 
            // console.log("DD_UserInputMouse.js: Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH = " +  Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH);
            if (clikMapGet_X < maxCount + 1) {
                Out.EditorFrameDraw.drowFrame();
                UserInputMouse.selectedLayer = _layer;
                //
                let j = clikMapGet_X - 1;
                Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", j * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + _X0, _Y0, Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH, Out.EditorFrames.TilesPanelFrame.tile_SIZE_HEIGHT, 2, 'red', 0);
                UserInputMouse.clikMapGetChar = Out.SpritesMap_2D.tilesLoad[typeLayer][j].tile_char;
                let X0 = Out.SpritesMap_2D.GROUNDS_MAX_COUNT * Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + Out.EditorFrames.TilesPanelFrame.Ground_X0 + 20;
                let Y0 = Out.EditorFrames.TilesPanelFrame.Ground_Y0;
                Out.HTML5_Canvas.Primitive.drawRect("DDME_UserInputMouseEditor.js", X0, Y0, 500, 30, 1, 'green', 0);
                Out.HTML5_Canvas.context_OUT.clearRect(X0, Y0, 500, 30);
                Out.HTML5_Canvas.context_OUT.strokeText(" " + Out.SpritesMap_2D.tilesLoad[typeLayer][j].tile_String, X0 + 10, Y0 + 20);
                //console.log("DD_UserInputMouse.js:clikMapGet_X = " + clikMapGet_X);
                //console.log("DD_UserInputMouse.js:j = " + j );
                //console.log("DD_UserInputMouse.js:j *  Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH +X0_dro = " + j * ( Out.EditorFrames.TilesPanelFrame.tile_SIZE_WIDTH + X0_dro));
                //console.log("DD_UserInputMouse.js: GROUND x = " + _mouse_X);
                //console.log("DD_UserInputMouse.js: UserInputMouse.clikMapGetGROUND_Tipe = " + UserInputMouse.clikMapGetGROUND_Tipe);
            }
        }
    },
    //==============================================================================
}; //UserInputMouse
UserInputMouse.ini();
Out.HTML5_Canvas_TestLoadedScripts.testLoading('DDME_UserInputMouseEditor.js');
UserInputMouse.isOk = "OK"; //
export { UserInputMouse };
