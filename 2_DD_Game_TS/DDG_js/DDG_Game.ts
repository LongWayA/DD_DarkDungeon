"use strict";
 // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -31.07.2022-18.03.2023
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

   import {HTML5_Canvas} from './DDG_HTML5_Canvas.js';
   import {Timer} from './DDG_Timer.js';
   import {Frames} from './DDG_Frames.js';

// 
//window.Game = {};//
var Game = {
  NAME : "DarkDungeon_Client",

  // Внешние ссылки
  HTML5_Canvas_OUT : {},
  HTML5_Canvas_TestLoadedScripts_testLoading_OUT : function(_nameScript : string){},
  HTML5_Canvas_Primitive_drawRect_OUT: function(_id : string,_left : number, _top : number, _width : number, _height : number,
    _lineWidth : number, _color : string, _fillYes : number){},
  HTML5_Canvas_Primitive_clearRect_OUT: function (_left : number, _top : number, _width : number, _height : number) {},
  HTML5_Canvas_printStartText_OUT : function (){},
  HTML5_Canvas_Text_drawText_OUT : function (_text : string, _left : number, _top : number,
     _font : string, _color : string, _fillYes : number){}, 
  HTML5_Canvas_GREEN_OUT : "",   
  HTML5_Canvas_ITALIC_30PT_ARIAL_OUT : "",

  Timer_OUT : {},
  Timer_ini_OUT : function(n : number){},
  Timer_getTimeThreadSleepGameMs_OUT : function(){return 0},
  Timer_updateTimeBeforeTick_OUT : function(){},
  Timer_updateTimeAfterTick_OUT : function(){},

  Frames_OUT : {},
  Frames_drowEditorFrame_OUT : function(){},
  Frames_drowMapFrame_OUT : function(){},
  Frames_drowTilesPanelFrame_OUT : function(){},
  Frames_drowPrintFrameFrame_OUT : function(){},

  timerId : 0,

  sprite : 0,
  loadEnd : 0,

//=============================================================================
  ini : function(){

  console.log('Game.ini');

  Game.HTML5_Canvas_OUT = HTML5_Canvas;
  Game.HTML5_Canvas_TestLoadedScripts_testLoading_OUT = HTML5_Canvas.TestLoadedScripts.testLoading;
  Game.HTML5_Canvas_Primitive_drawRect_OUT = HTML5_Canvas.Primitive.drawRect;
  Game.HTML5_Canvas_Primitive_clearRect_OUT = HTML5_Canvas.Primitive.clearRect;
  Game.HTML5_Canvas_printStartText_OUT = HTML5_Canvas.printStartText;
  Game.HTML5_Canvas_Text_drawText_OUT = HTML5_Canvas.Text.drawText;
  Game.HTML5_Canvas_GREEN_OUT = HTML5_Canvas.GREEN;
  Game.HTML5_Canvas_ITALIC_30PT_ARIAL_OUT = HTML5_Canvas.ITALIC_30PT_ARIAL;


  Game.Timer_OUT = Timer;
  Game.Timer_ini_OUT = Timer.ini_OUT;
  Game.Timer_getTimeThreadSleepGameMs_OUT = Timer.getTimeThreadSleepGameMs;
  Game.Timer_updateTimeBeforeTick_OUT = Timer.updateTimeBeforeTick;
  Game.Timer_updateTimeAfterTick_OUT = Timer.updateTimeAfterTick;

  Game.Frames_OUT = Frames;
  Game.Frames_drowEditorFrame_OUT = Frames.drowEditorFrame;
  Game.Frames_drowMapFrame_OUT = Frames.drowMapFrame;
  Game.Frames_drowTilesPanelFrame_OUT = Frames.drowTilesPanelFrame;
  Game.Frames_drowPrintFrameFrame_OUT = Frames.drowPrintFrameFrame;


  Game.sprite = 1;
  Game.loadEnd = 0;
  Game.Timer_ini_OUT(5);//8

},
//=============================================================================

//=============================================================================
 //
 loop : function(){

  Game.timerId = setTimeout( function tick(){

   // console.log("Game.Timer_getTimeThreadSleepGameMs_OUT() = " + Game.Timer_getTimeThreadSleepGameMs_OUT());
    Game.Timer_updateTimeBeforeTick_OUT();//

      if( Game.loadEnd == 1 ) Game.tick();

      Game.Timer_updateTimeAfterTick_OUT();

      if (Game.sprite < 5 ){
           Game.timerId = setTimeout( tick, Game.Timer_getTimeThreadSleepGameMs_OUT());
      }

  }, Game.Timer_getTimeThreadSleepGameMs_OUT());
 // console.log("Game.Timer_getTimeThreadSleepGameMs_OUT() = " + Game.Timer_getTimeThreadSleepGameMs_OUT());
},
//=============================================================================

//=============================================================================
drawNuberTick : function() {

  // console.log('Game.drawNuberTick');
  let left = 10;
  let top = 5;
  let width = 500;
  let height = 35;

  let left0 = 9;
  let top0 = 49;
  let width0 = 352;
  let height0 = 92;

  if(Game.sprite == 1) Game.HTML5_Canvas_Primitive_clearRect_OUT(left0, top0, width0, height0);
 
  Game.HTML5_Canvas_Primitive_clearRect_OUT(left, top, width, height);
  Game.HTML5_Canvas_Primitive_drawRect_OUT("drawNuberTick", left, top, width, height, HTML5_Canvas.LINE_WIDTH_1, Game.HTML5_Canvas_GREEN_OUT, 0);
 
  Game.HTML5_Canvas_Text_drawText_OUT("Game.tick = " + Game.sprite, left, top, Game.HTML5_Canvas_ITALIC_30PT_ARIAL_OUT,
     Game.HTML5_Canvas_GREEN_OUT, 1);
 
  Game.sprite = Game.sprite + 1;
  if (Game.sprite > 1000000 ) Game.sprite = 1;
 },
//=============================================================================

//=============================================================================
 // 
 drowFrames : function() {
    
 // Game.MapFrameDraw_OUT.drawMap(EditorFrameDraw.EditorFrames_OUT.MapFrame.x0,EditorFrameDraw.EditorFrames_OUT.MapFrame.y0);
 // TilesFrameDraw.drawSelectTiles(0);
 Game.Frames_drowEditorFrame_OUT();
 Game.Frames_drowMapFrame_OUT();
 Game.Frames_drowTilesPanelFrame_OUT();
 Game.Frames_drowPrintFrameFrame_OUT();

  //console.log('DD_EditorFrameDraw.js: EditorFrameDraw.drowFrame');
},
//=============================================================================

//=============================================================================
start : function(){
  //alert("!");
  console.log('Game.start');
  Game.HTML5_Canvas_printStartText_OUT();

},
//============================================================================= 

//=============================================================================
tick : function() {

  Game.drawNuberTick();
  Game.drowFrames();
},
//=============================================================================

};//Game

//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
 window.onload = function() {
  Game.loadEnd = 1;
};
//=============================================================================


Game.ini();
Game.start();
Game.loop();

//============================================================================
Game.HTML5_Canvas_TestLoadedScripts_testLoading_OUT ('DDG_Game.js');

//==============================================================================