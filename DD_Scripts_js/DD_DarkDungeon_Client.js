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

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

//console.log("module DD_DarkDungeon_Client_m.js start");

// 
window.DD = {};
DD.NAME = "DD_DarkDungeon_Client_m";//
DD.sprite = 1;
DD.loadEnd = 0;

//=============================================================================
DD.ini = function(){
  console.log('DD.ini');
  Timer.ini(8);//8
  Sprites.loadAllSprite();

  //R.UserInput.ini();

};
//=============================================================================

//=============================================================================
DD.start = function(){
  //alert("!");
  console.log('DD.start');


};
//============================================================================= 

//=============================================================================
DD.tick = function() {

  //console.log('DD.tick');

  //console.log('HTML5_Canvas.Id.width = ' + HTML5_Canvas.Id.width);
  //console.log('Sprite = ' + DD.sprite);
  HTML5_Canvas.context.clearRect(0, 0, HTML5_Canvas.Id.width, HTML5_Canvas.Id.height);
  Sprites.drawSprite(Sprites.RUNNING, DD.sprite, 200, 200);

  for ( Map.i = 0; Map.i < Map.widthMaxTilesCount; Map.i++) {
    for (Map.j = 0; Map.j < Map.heightMaxTilesCount; Map.j++) {
      //HTML5_Canvas.context.strokeText (Map.MapArrayTile_2d[Map.i][Map.j].G_char, Map.i * Map.tile.width + 10, Map.j * Map.tile.height + 200);//
      //Sprites.drawSprite(Sprites.RUNNING, 1, Map.i * Map.tile.width + 10, Map.j * Map.tile.height + 200);

      DD.imageK = Sprites.spritesSheeva_mk3_img[Sprites.RUNNING][DD.sprite];
      HTML5_Canvas.Image.drawImageG(DD.imageK, Map.i * Map.tile.width + 10, Map.j * Map.tile.height + 200, Map.tile.width, Map.tile.height);
    }
  }

  DD.sprite = DD.sprite + 1;
  if (DD.sprite > 12) DD.sprite = 1;

/*
      if( (DD.image_load_end == 1) && (DD.startGame == 0) ){
         DD.frameG = DD.frameG + 1;
         if (DD.frameG > 1000) DD.frameG = 0;

         HTML5_Canvas.context.clearRect(30, 40, 900, 700);
         HTML5_Canvas.context.strokeText ('Game in pause(Игра на паузе)', 50, 60);
         HTML5_Canvas.context.strokeText ('Click on the Game pause button(Нажмите кнопку пауза для начала или возобновления игры)', 50, 80);
         HTML5_Canvas.context.strokeText ('frame(кадр) = ' + DD.frameG, 50, 100);
      };

      if( (DD.image_load_end == 1) && (DD.startGame == 1) ){
          // alert("!-")
          HTML5_Canvas.context.clearRect(30, 40, 900, 700);
          HTML5_Canvas.Sprites.drawSprite(8, 3, 200, 200);
      };

  */
};
//=============================================================================

//=============================================================================
 //
 DD.test = function(){

  console.log('DD.test');
  //var dataURL = HTML5_Canvas.Id.toDataURL("image/png");
  //console.log('DD_Client.js: dataURL =' + dataURL);
  
  };
  //=============================================================================
  
//=============================================================================
 // загрузка всего документа(вместе с картинками, звуком и т.д.) закончена
 window.onload = function() {
  DD.loadEnd = 1;
  //console.log('ArenaFjs_R: window.onload');
};
//=============================================================================


//loop>------------------------------------------------------------------------
DD.ini();
DD.start();

Timer.timerId = setTimeout( function tick(){

      Timer.updateTimeBeforeTick();//

      if( DD.loadEnd == 1 ) DD.tick();

      Timer.updateTimeAfterTick();

      Timer.timerId = setTimeout( tick,Timer.timeThreadSleepGameMs);

}, Timer.timeThreadSleepGameMs);

//loop<------------------------------------------------------------------------

//============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('module DD_Client.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

//==============================================================================
//alert("module DD_Client.js done");
//console.log("module DD_Client.js done");