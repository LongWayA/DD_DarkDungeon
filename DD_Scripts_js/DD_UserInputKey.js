"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -08.08.2021-02.08.2022-
//
   /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

  */


 /*
  События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют
  получить её скан-код в свойстве keyCode.
  Скан-код клавиши одинаков в любой раскладке и в любом регистре. Например,
  клавиша z может означать символ "z", "Z" или "я", "Я" в русской раскладке,
  но её скан-код будет всегда одинаков: 90.
  Цитата с сайта https://learn.javascript.ru/keyboard-events
 */

  //alert("module DD_UserInputKey.js start");
  //console.log("module DD_UserInputKey.js start");
//==============================================================================


window.UserInputKey = {};
 UserInputKey.isOk = " ";//

 UserInputKey.NAME = "UserInput";//

 UserInputKey.KEY_STATE_FIGTING  = 77;// M переключение режима битвы

 // команды бойцам
 UserInputKey.LEFT_F_KEY_LEFT  = 65;//движение влево     A
 UserInputKey.LEFT_F_KEY_RIGHT = 68;//движение вправо    D
 UserInputKey.LEFT_F_KEY_UP    = 87;//движение вверх     W
 UserInputKey.LEFT_F_KEY_DOWN  = 83;//движение вниз      S
 UserInputKey.LEFT_F_KEY_RUN   = 74;//бег                 J

 // передняя и задняя конечность это относительно боковой стойки
 UserInputKey.LEFT_F_KEY_FRONTPUNCH = 85;// удар передней рукой    U
 UserInputKey.LEFT_F_KEY_BACKPUNCH  = 73;// удар задней рукой      I
 UserInputKey.LEFT_F_KEY_FRONTKICK  = 79;// удар передней ногой    O
 UserInputKey.LEFT_F_KEY_BACKKICK   = 80;// удар задней ногой      P
 UserInputKey.LEFT_F_KEY_BLOCK      = 32;// блок                  SPACE
 UserInputKey.LEFT_F_KEY_TELEPORT   = 75;// перемещение           K
                                        // в другой конец арены,
                                        // применяется против зажима у края

 UserInputKey.eventG = 0; // заносится скан код нажатой клавиши
 UserInputKey.eventG_Old = 0; //
 UserInputKey.eventG_OneDown = 0; //
 UserInputKey.event_key = 0; //
  //alert("!");
 //UserInputKey.i = 0;
 //UserInputKey.i2 = 0;


// во время нажатия клавиши вызывается эта функция
// на нажатие реагируем один раз. один раз записываем какую кнопку нажали
//==============================================================================
UserInputKey.keyDownU = function(_event) {

     if (UserInputKey.eventG_OneDown == 0 ){
        //заносим скан код клавиши
        UserInputKey.eventG_Old =UserInputKey.eventG;
        UserInputKey.eventG = _event.keyCode;
        UserInputKey.eventG_OneDown = 1; //
        UserInputKey.event_key = 1; //
      };
};
//==============================================================================

// во время отпускания клавиши вызывается эта функция
//==============================================================================
UserInputKey.keyUpU = function(_event) {

    if (UserInputKey.eventG_OneDown == 1 ){
        UserInputKey.eventG_Old = UserInputKey.eventG;
        UserInputKey.eventG = 0;
        UserInputKey.eventG_OneDown = 0; //
        UserInputKey.event_key = 1; //
    };
};
//==============================================================================

 //добавляем слушателей
//==============================================================================
UserInputKey.ini = function() {
     // ~ 29 per sekond
     window.addEventListener("keydown", UserInputKey.keyDownU);
     window.addEventListener("keyup", UserInputKey.keyUpU);

     UserInputKey.eventG = 0; // заносится скан код нажатой клавиши
     UserInputKey.eventG_Old = 0; //
     UserInputKey.eventG_OneDown = 0; //
     UserInputKey.event_key = 0; //
     //console.log("V");
};
//==============================================================================

// заполняем модуль saveCommandToFighter
//=============================================================================
UserInputKey.eventUserLeft = function(_CommandToFighter_R) {

  switch(this.eventG){

      case UserInputKey.LEFT_F_KEY_LEFT:  // клавиша влево
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.LEFT;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'walking left';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_RIGHT:   // клавиша вправо
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.RIGHT;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'walking right';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_UP:   // клавиша вверх
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.UP;
           _CommandToFighter_R.saveCommandToFighter_commandText = '-up-';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_DOWN:   // клавиша вниз
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.DOWN;
           _CommandToFighter_R.saveCommandToFighter_commandText = '-down-';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_RUN:  // клавиша бег
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.RUN;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'run';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_FRONTPUNCH:   // клавиша пердняя рука
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.FRONTPUNCH;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'punch Up';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_BACKPUNCH:   // клавиша задняя рука
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.BACKPUNCH;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'punch Midle';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_FRONTKICK:   // клавиша передняя нога
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.FRONTKICK;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'kick Front';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_BACKKICK:   // клавиша задняя нога
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.BACKKICK;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'kick Back';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_BLOCK:   // клавиша блок
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.BLOCK;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'block';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

      case UserInputKey.LEFT_F_KEY_TELEPORT:   // клавиша телепорт
      _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.TELEPORT;
      _CommandToFighter_R.saveCommandToFighter_commandText = 'teleport';
      _CommandToFighter_R.saveCommandToFighter_update = 1;

      break;

  };

};
//==============================================================================


//==============================================================================
UserInputKey.tickSt = function(_ArenaFjs_R) {

    if (UserInputKey.event_key == 1 ){
        if (UserInputKey.eventG  == UserInputKey.KEY_STATE_FIGTING ){
             UserInputKey.event_key = 0; //
             ArenaFjs_R.stateFigting = ArenaFjs_R.stateFigting + 1;
             if (ArenaFjs_R.stateFigting > 2) ArenaFjs_R.stateFigting = 0;
        };
    };
};
//==============================================================================

//==============================================================================
UserInputKey.tick = function(_CommandToFighter_R) {

    //UserInputKey.eventG = 0;
    if (UserInputKey.event_key == 1 ){

       UserInputKey.event_key = 0; //

       if (UserInputKey.eventG != 0 ){

           // заполняем левого игрока
           UserInputKey.eventUserLeft(_CommandToFighter_R);
           //console.log('1 command = ' + _CommandToFighter_R.saveCommandToFighter_command + ' commandText = ' + _CommandToFighter_R.saveCommandToFighter_commandText);
           //console.log('1 update = ' + _CommandToFighter_R.saveCommandToFighter_update);
       }else{
           _CommandToFighter_R.saveCommandToFighter_command = CommandToFighter_R.STANCE;
           _CommandToFighter_R.saveCommandToFighter_commandText = 'fighting Stance';
           _CommandToFighter_R.saveCommandToFighter_update = 1;

           //console.log('2 command = ' + _CommandToFighter_R.saveCommandToFighter_command + ' commandText = ' + _CommandToFighter_R.saveCommandToFighter_commandText);
           //console.log('2 update = ' + _CommandToFighter_R.saveCommandToFighter_update);

       }
    }

 };
//==============================================================================


//==============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('module DD_UserInputKey.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

UserInputKey.isOk = "OK";//

//==============================================================================
//alert("module DD_UserInputKey.js done");
//console.log("module DD_UserInputKey.js done");
