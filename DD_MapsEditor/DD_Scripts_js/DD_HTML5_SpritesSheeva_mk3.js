"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -21.08.2021-12.11.2019 -

  /*
   НАЗНАЧЕНИЕ

   Назначение объекта загрузить заданные ряды картинок при запуске программы.
   И вывести картинку заданного типа и номера в заданном месте.
   Есть несколько рядов картинок которые содержат анимационные последовательности
   такие как удар, бег и т.д. Для вывода мы указываем нужный нам ряд и номер картинки
   в этом ряду, а также координаты вывода на экран. координаты отсчитываются слева сверху.

   Вывод картинок идет в HTML5 Canvas
   в режиме 2d контекста
   т.е. рисуем на полотне настроенном на двухмерные картинки
   Game_R.canvas = document.getElementById('game-canvas');
   Game_R.context = Game_R.canvas.getContext('2d');

    spritesSheeva_mk3
    мы используем ряды картинок. так называемые анимационные ряды.
    например есть ряд картинок в котором запечатлен бег бойца. Этому
    соответствует тип  running и номера от 0 до 12.
    Таким образом параметры функции
    type - тип ряда картинок стойка, бег, удар рукой и т.д.
    index - номер картинки в ряде
    left - координата картинки по горизонтали. отсчитывается слева
    top - координата картинки по вертикали. отсчитывается сверху

   iniAllSprite()
   загружаем все необходимые картинки. это файлы
   с расширением .png

    drawSprite(type,index,middle, bottom)
    рисуем спрайт заданного типа и номера, в заданном месте
    например drawSprite(punchingUp,3,100, 150)
    тут выводится третий спрайт из ряда анимации удара рукой
    в точке с координатами слева 100 а сверху 150 пикселей

    drawSpriteMirror(type,index,middle, bottom)
    рисуем зеркальный спрайт заданного типа и номера, в заданном месте

    name - имя объекта. сейчас это spritesSheeva_mk3
    fightingStance[7] - ряд картинок для анимации стойки бойца
    walking[10] - ряд картинок для анимации ходьбы бойца
    running[13] - ряд картинок для анимации бега бойца
    punchingUp[7] - ряд картинок для анимации удара верхней рукой бойца
    punchingMidle[8] - ряд картинок для анимации нижней рукой бойца
    kickingFront[9] - ряд картинок для анимации передней ногой бойца
    kickingBack[9] - ряд картинок для анимации задней ногой бойца
    blockingHigh[4] - ряд картинок для анимации верхнего блока бойца
    blockingLow[4] - ряд картинок для анимации нижнего блока бойца
    beingHit[4] - ряд картинок для анимации пропущенного удара бойца

   ИСПОЛЬЗУЕТ МОДУЛИ
        DD_HTML5_Canvas.js - этот модуль содержит корневой объект и необходим для работы

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

  */


//==============================================================================


window.Sprites = {};
  Sprites.isOk = " ";//

  Sprites.NAME = "SpritesFighter";//

  Sprites.FIGHTING_STANCE  = 0;
  Sprites.WALKING          = 1;
  Sprites.RUNNING          = 2;
  Sprites.PUNCHING_UP      = 3;
  Sprites.PUNCHING_MIDLE   = 4;
  Sprites.KICKING_FRONT    = 5;
  Sprites.KICKING_BACK     = 6;
  Sprites.BLOCKING_HIGH    = 7;
  Sprites.BLOCKING_LOW     = 8;
  Sprites.BEING_HIT        = 9;


  // NAME_IMG_TXT
  Sprites.TXT_SPRITES_FIGHTER_SET = ["fightingStance", "walking",
    "running", "punchingUp","punchingMidle", "kickingFront", "kickingBack",
    "blockingHigh", "blockingLow", "beingHit"
  ];

  // объявляем двухмерный массив spritesSheeva_mk3_img [type = 10][index = от 4 до 13]
  // мы используем ряды картинок. так называемые анимационные ряды.
  // например есть ряд картинок в котором запечатлен бег бойца. Этому
  // соответствует тип(type)  running и номера(index) от 0 до 12.
  Sprites.spritesSheeva_mk3_img = new Array(10);
  Sprites.spritesSheeva_mk3_img[Sprites.FIGHTING_STANCE] = new Array(7);
  Sprites.spritesSheeva_mk3_img[Sprites.WALKING] = new Array(10);
  Sprites.spritesSheeva_mk3_img[Sprites.RUNNING] = new Array(13);
  Sprites.spritesSheeva_mk3_img[Sprites.PUNCHING_UP] = new Array(7);
  Sprites.spritesSheeva_mk3_img[Sprites.PUNCHING_MIDLE] = new Array(8);
  Sprites.spritesSheeva_mk3_img[Sprites.KICKING_FRONT] = new Array(9);
  Sprites.spritesSheeva_mk3_img[Sprites.KICKING_BACK] = new Array(9);
  Sprites.spritesSheeva_mk3_img[Sprites.BLOCKING_HIGH] = new Array(4);
  Sprites.spritesSheeva_mk3_img[Sprites.BLOCKING_LOW] = new Array(4);
  Sprites.spritesSheeva_mk3_img[Sprites.BEING_HIT] = new Array(4);

  Sprites.spritesSheeva_mk3_path = new Array(10);
  Sprites.spritesSheeva_mk3_path[Sprites.FIGHTING_STANCE] = new Array(7);
  Sprites.spritesSheeva_mk3_path[Sprites.WALKING] = new Array(10);
  Sprites.spritesSheeva_mk3_path[Sprites.RUNNING] = new Array(13);
  Sprites.spritesSheeva_mk3_path[Sprites.PUNCHING_UP] = new Array(7);
  Sprites.spritesSheeva_mk3_path[Sprites.PUNCHING_MIDLE] = new Array(8);
  Sprites.spritesSheeva_mk3_path[Sprites.KICKING_FRONT] = new Array(9);
  Sprites.spritesSheeva_mk3_path[Sprites.KICKING_BACK] = new Array(9);
  Sprites.spritesSheeva_mk3_path[Sprites.BLOCKING_HIGH] = new Array(4);
  Sprites.spritesSheeva_mk3_path[Sprites.BLOCKING_LOW] = new Array(4);
  Sprites.spritesSheeva_mk3_path[Sprites.BEING_HIT] = new Array(4);



  // get Height Sprite
  //============================================================================
  Sprites.getHeightSprite = function(_type, _index) {

      let height = Sprites.spritesSheeva_mk3_img[_type][_index].height;
      return height;
  };
  //============================================================================

  // get Width Sprite
  //============================================================================
  Sprites.getWidthSprite = function(_type, _index) {

      let width = Sprites.spritesSheeva_mk3_img[_type][_index].width;
      return width;
  };
  //============================================================================

  // get Left Sprite
  //============================================================================
  Sprites.getLeftSprite = function(_type, _index, _middle) {

      let width = Sprites.spritesSheeva_mk3_img[_type][_index].width;
      let left = _middle - width/2;
      return left;
  };
  //============================================================================


  // draw image
  //============================================================================
  Sprites.drawSprite = function(_type, _index, _middle, _bottom,) {

    //HTML5_Canvas.context.clearRect(0, 0, HTML5_Canvas.Id.width, HTML5_Canvas.Id.height);
    //console.log(" HTML5_Canvas.Id.width = " + HTML5_Canvas.Id.width + " HTML5_Canvas.Id.height = " +HTML5_Canvas.Id.height);

         let height =Sprites.spritesSheeva_mk3_img[_type][_index].height;
         let width = Sprites.spritesSheeva_mk3_img[_type][_index].width;

         //console.log(" width = " + width + " height = " + height);

         let top = _bottom - height;
         let left = _middle - width/2;
         
         HTML5_Canvas.Image.drawImageG(Sprites.spritesSheeva_mk3_img[_type][_index], left, top);
         //HTML5_Canvas.Image.drawImageG(Sprites.spritesSheeva_mk3_img[_type][_index], 100, 100, 100, 100);


         HTML5_Canvas.Primitive.drawRect(left, top, width,height,1, 'blue', 0);
         HTML5_Canvas.Primitive.drawRect(_middle, top, 2,height,1, 'red', 0);

         HTML5_Canvas.Text.drawText ("i " + "frame = " + _index, left+5, _bottom-40, 'italic 20px sans-serif', 'black', 1);
         HTML5_Canvas.Text.drawText ("i " + Sprites.TXT_SPRITES_FIGHTER_SET[_type], left+5, _bottom-20, 'italic 20px sans-serif', 'black', 1);

        // _GameText_R.drawText ("i " + "middle = " + _middle, left+5, _bottom-140, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "width = " + width, left+5, _bottom-120, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "left = " + left, left+5, _bottom-100, 'italic 20px sans-serif', 'white', 1);
  };
  //============================================================================


  // draw image mirror
  //============================================================================
  Sprites.drawSpriteMirror = function(_type, _index, _middle, _bottom,) {

         let height = Sprites.spritesSheeva_mk3_img[_type][_index].height;
         let width = Sprites.spritesSheeva_mk3_img[_type][_index].width;
         let top = _bottom - height;
         let left = _middle - width/2;
         let right = left + width;

         HTML5_Canvas.context.scale(-1, 1);
         HTML5_Canvas.Image.drawImageG(Sprites.spritesSheeva_mk3_img[_type][_index], -right, top);
         HTML5_Canvas.Primitive.drawRect(-right, top, width, height, 1, 'blue', 0);
         HTML5_Canvas.context.scale(-1, 1);

         HTML5_Canvas.Primitive.drawRect(_middle, top, 2,height,1, 'red', 0);

         HTML5_Canvas.Text.drawText ("im " + "frame = " + _index, _middle + 5, _bottom-40, 'italic 20px sans-serif', 'white', 1);
         HTML5_Canvas.Text.drawText ("im " + Sprites.TXT_SPRITES_FIGHTER_SET[_type], _middle+5, _bottom -20, 'italic 20px sans-serif', 'white', 1);

        // _GameText_R.drawText ("i " + "middle = " + _middle, left+5, _bottom-140, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "width = " + width, left+5, _bottom-120, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "left = " + left, left+5, _bottom-100, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "right = " + right, left+5, _bottom-80, 'italic 20px sans-serif', 'white', 1);
  };
  //============================================================================


 // ini Image
  //============================================================================
  Sprites.iniSprite = function(_type,_path){

    let length = Sprites.spritesSheeva_mk3_img[_type].length

    //console.log(" _type = " + _type + " _path = " + _path);
    //console.log(" length = " + length);

        for(let i = 1; i < length; i++ ){
           Sprites.spritesSheeva_mk3_img[_type][i] = new Image();
           Sprites.spritesSheeva_mk3_img[_type][i].src = _path + i + ".png";
           Sprites.spritesSheeva_mk3_path[_type][i] = _path + i + ".png";
         };
  };
  //============================================================================

  //инициализируем массивы с картинками
  //============================================================================
  Sprites.loadAllSprite = function() {
      Sprites.iniSprite(Sprites.FIGHTING_STANCE,"image/Sheeva_mk3_image/1_FightingStance/fs");
      Sprites.iniSprite(Sprites.WALKING,"image/Sheeva_mk3_image/2_Walking/w");
      Sprites.iniSprite(Sprites.RUNNING,"image/Sheeva_mk3_image/3_Running/r");
      Sprites.iniSprite(Sprites.PUNCHING_UP,"image/Sheeva_mk3_image/4_Punching/pt1_");
      Sprites.iniSprite(Sprites.PUNCHING_MIDLE,"image/Sheeva_mk3_image/4_Punching/pm_");
      Sprites.iniSprite(Sprites.KICKING_FRONT,"image/Sheeva_mk3_image/5_Kicking/k1_");
      Sprites.iniSprite(Sprites.KICKING_BACK,"image/Sheeva_mk3_image/5_Kicking/k2_");
      Sprites.iniSprite(Sprites.BLOCKING_HIGH,"image/Sheeva_mk3_image/7_Blocking/bt_");
      Sprites.iniSprite(Sprites.BLOCKING_LOW,"image/Sheeva_mk3_image/7_Blocking/bd_");
      Sprites.iniSprite(Sprites.BEING_HIT,"image/Sheeva_mk3_image/9_BeingHit/1_h0");
  };
  //============================================================================


//============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('script DD_HTML5_SpritesSheeva_mk3.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

Sprites.isOk = "OK";//

//==============================================================================
