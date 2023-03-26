"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -31.07.2022-18.03.2023-26.03.2023
//
/*
 НАЗНАЧЕНИЕ
 Корневой модуль игры
 Тут общая функция игры вызываемая на каждом тике цикла.
 Базовый цикл игры основанный на
 методе setTimeout(func, delay)
 Методы setInterval(func, delay) и setTimeout(func, delay) позволяют запускать
 func регулярно/один раз через delay миллисекунд.

 ИСПОЛЬЗУЕТ МОДУЛИ

 
*/
import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
import { Timer } from './DDG_Timer.js';
import { Frames } from './DDG_Frames.js';
// Внешние ссылки
var Out = {
    // HTML5_Canvas
    HTML5_Canvas: HTML5_Canvas,
    HTML5_Canvas_GREEN: HTML5_Canvas.GREEN,
    HTML5_Canvas_ITALIC_30PT_ARIAL: HTML5_Canvas.ITALIC_30PT_ARIAL,
    //function(_nameScript : string)
    HTML5_Canvas_TestLoadedScripts_testLoading: HTML5_Canvas.TestLoadedScripts.testLoading,
    // function(_id : string,_left : number, _top : number, _width : number, _height : number,
    //  _lineWidth : number, _color : string, _fillYes : number)
    HTML5_Canvas_Primitive_drawRect: HTML5_Canvas.Primitive.drawRect,
    // function (_left : number, _top : number, _width : number, _height : number)
    HTML5_Canvas_Primitive_clearRect: HTML5_Canvas.Primitive.clearRect,
    HTML5_Canvas_printStartText: HTML5_Canvas.printStartText,
    // function (_text : string, _left : number, _top : number,
    // _font : string, _color : string, _fillYes : number)
    HTML5_Canvas_Text_drawText: HTML5_Canvas.Text.drawText,
    // Timer
    Timer: Timer,
    // function(n : number)
    Timer_ini: Timer.ini_OUT,
    Timer_getTimeThreadSleepGameMs: Timer.getTimeThreadSleepGameMs,
    Timer_updateTimeBeforeTick: Timer.updateTimeBeforeTick,
    Timer_updateTimeAfterTick: Timer.updateTimeAfterTick,
    // Frames
    Frames: {},
    Frames_drowEditorFrame: Frames.drowEditorFrame,
    Frames_drowMapFrame: Frames.drowMapFrame,
    Frames_drowTilesPanelFrame: Frames.drowTilesPanelFrame,
    Frames_drowPrintFrameFrame: Frames.drowPrintFrameFrame,
    //=============================================================================
    ini: function () {
    },
    //=============================================================================
};
//Out.ini();
//
var Game = {
    NAME: "DarkDungeon_Client",
    timerId: 0,
    sprite: 1,
    loadEnd: 0,
    //=============================================================================
    ini: function () {
        //console.log('Game.ini');
        Out.Timer_ini(5); //8
    },
    //=============================================================================
    //=============================================================================
    //
    loop: function () {
        Game.timerId = setTimeout(function tick() {
            // console.log("Game.Timer_getTimeThreadSleepGameMs_OUT() = " + Game.Timer_getTimeThreadSleepGameMs_OUT());
            Out.Timer_updateTimeBeforeTick(); //
            if (Game.loadEnd == 1)
                Game.tick();
            Out.Timer_updateTimeAfterTick();
            if (Game.sprite < 5) {
                Game.timerId = setTimeout(tick, Out.Timer_getTimeThreadSleepGameMs());
            }
        }, Out.Timer_getTimeThreadSleepGameMs());
        // console.log("Game.Timer_getTimeThreadSleepGameMs_OUT() = " + Game.Timer_getTimeThreadSleepGameMs_OUT());
    },
    //=============================================================================
    //=============================================================================
    drawNuberTick: function () {
        // console.log('Game.drawNuberTick');
        let left = 10;
        let top = 5;
        let width = 500;
        let height = 35;
        let left0 = 9;
        let top0 = 49;
        let width0 = 352;
        let height0 = 92;
        if (Game.sprite == 1)
            Out.HTML5_Canvas_Primitive_clearRect(left0, top0, width0, height0);
        Out.HTML5_Canvas_Primitive_clearRect(left, top, width, height);
        Out.HTML5_Canvas_Primitive_drawRect("drawNuberTick", left, top, width, height, HTML5_Canvas.LINE_WIDTH_1, Out.HTML5_Canvas_GREEN, 0);
        Out.HTML5_Canvas_Text_drawText("Game.tick = " + Game.sprite, left, top, Out.HTML5_Canvas_ITALIC_30PT_ARIAL, Out.HTML5_Canvas_GREEN, 1);
        Game.sprite = Game.sprite + 1;
        if (Game.sprite > 1000000)
            Game.sprite = 1;
    },
    //=============================================================================
    //=============================================================================
    // 
    drowFrames: function () {
        // Game.MapFrameDraw_OUT.drawMap(EditorFrameDraw.EditorFrames_OUT.MapFrame.x0,EditorFrameDraw.EditorFrames_OUT.MapFrame.y0);
        // TilesFrameDraw.drawSelectTiles(0);
        Out.Frames_drowEditorFrame();
        Out.Frames_drowMapFrame();
        Out.Frames_drowTilesPanelFrame();
        Out.Frames_drowPrintFrameFrame();
        //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrame');
    },
    //=============================================================================
    //=============================================================================
    start: function () {
        //alert("!");
        //console.log('Game.start');
        Out.HTML5_Canvas_printStartText();
    },
    //============================================================================= 
    //=============================================================================
    tick: function () {
        //console.log('Game.tick');
        Game.drawNuberTick();
        Game.drowFrames();
    },
    //=============================================================================
}; //Game
//=============================================================================
// загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
window.onload = function () {
    Game.loadEnd = 1;
};
//=============================================================================
Game.ini();
Game.start();
Game.loop();
//============================================================================
Out.HTML5_Canvas_TestLoadedScripts_testLoading('DDG_Game.js');
