"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -31.07.2022-
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

// 
window.Game = {};
Game.NAME = "DarkDungeon_Client";//

  // Внешние ссылки
  Game.HTML5_Canvas_OUT;
  Game.HTML5_Canvas_TestLoadedScripts_OUT;
  Game.Timer_OUT;

  Game.sprite;
  Game.loadEnd;

//=============================================================================
Game.ini = function(){

  console.log('Game.ini');

  Game.HTML5_Canvas_OUT = HTML5_Canvas;
  Game.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
  Game.Timer_OUT = Timer;

  Game.sprite = 1;
  Game.loadEnd = 0;
  Game.Timer_OUT.ini_OUT(8);//8

};
//=============================================================================

//=============================================================================
Game.start = function(){
  //alert("!");
  console.log('Game.start');


};
//============================================================================= 

//=============================================================================
Game.drawNuberTick = function() {

  // console.log('Game.tick');
  let left = 10;
  let top = 5;
  let width = 500;
  let height = 35;
 
  Game.HTML5_Canvas_OUT.Primitive.clearRect(left, top, width, height);
  Game.HTML5_Canvas_OUT.Primitive.drawRect(left, top, width, height, HTML5_Canvas.LINE_WIDTH_1, Game.HTML5_Canvas_OUT.GREEN, 0);
 
  Game.HTML5_Canvas_OUT.Text.drawText("Game.tick = " + Game.sprite, left, top, Game.HTML5_Canvas_OUT.ITALIC_30PT_ARIAL,
     Game.HTML5_Canvas_OUT.GREEN, 1);
 
  Game.sprite = Game.sprite + 1;
  if (Game.sprite > 1000000 ) Game.sprite = 1;
 };
 //=============================================================================

//=============================================================================
Game.tick = function() {

  Game.drawNuberTick();
  
};
//=============================================================================

//=============================================================================
 //
 Game.test = function(){

  console.log('Game.test');
  
  };
  //=============================================================================
  
//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
 window.onload = function() {
  Game.loadEnd = 1;
};
//=============================================================================

//=============================================================================
 //
 Game.loop = function(){

    Game.Timer_OUT.timerId = setTimeout( function tick(){

      Game.Timer_OUT.updateTimeBeforeTick();//

      if( Game.loadEnd == 1 ) Game.tick();

      Game.Timer_OUT.updateTimeAfterTick();

      Game.Timer_OUT.timerId = setTimeout( tick,Game.Timer_OUT.timeThreadSleepGameMs);

}, Game.Timer_OUT.timeThreadSleepGameMs);
  
  };
  //=============================================================================


Game.ini();
Game.start();
Game.loop();

//============================================================================
Game.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDG_Game.js');

//==============================================================================