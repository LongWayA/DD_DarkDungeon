"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -21.08.2021-31.07.2022-
//

  /*
   НАЗНАЧЕНИЕ
    Печатаем текст.

   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

  */


/*

-----------------

Самое простое, как мы можем стилизовать текст, это задать ему цвет. Цвет
задается при помощи
fillStyle – для задания цвета заливки и strokeStyle – для задания цвета обводки.
Так же как и в CSS3 можно накладывать тени и на текст в канвасе. Это
делается при помощи:
shadowColor – задание цвета тени, shadowOffsetX и
shadowOffsetY – задание отступа и shadowBlur – задание размытия тени.

    ctx.shadowColor = "#F00";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.strokeText("Shadow text", 20, 100);

Из статьи "Выводим текст на HTML5 Canvas" https://habr.com/post/140235/

----------------

var text = context.measureText("Hello"); "22px Verdana"
'15px Verdana' '25px Arial' '20px Comic Sans MS'

----------------

grad = g.createLinearGradient(50, 0, 400, 0);

grad.addColorStop(0, 'red');
grad.addColorStop(0.5, 'green');
grad.addColorStop(1, 'blue');

g.fillStyle = grad;
g.shadowOffsetX = 2;
g.shadowOffsetY = 2;
g.shadowBlur = 3;
g.shadowColor = 'black';

g.font = '30px arial';
g.fillText('Привет, прекрасный мир!', 50, 50);

Из статьи "Отрисовка текста на canvas’e" https://true-coder.ru/javascript/
otrisovka-teksta-na-canvas.html

-----------------------
A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green)
and BB (blue)
hexadecimal integers specify the components of the color. All values must be
 between 00 and FF.

For example, the #0000ff value is rendered as blue,
because the blue component is set to its highest value (ff) and the others
are set to 00.

Define different HEX colors:
#p1 {background-color: #ff0000;}    //red
#p2 {background-color: #00ff00;}   // green
#p3 {background-color: #0000ff;}   // blue

Define different RGB colors:
#p1 {background-color: rgb(255, 0, 0);}   // red
#p2 {background-color: rgb(0, 255, 0);}   // green
#p3 {background-color: rgb(0, 0, 255);}   // blue

Define different RGB colors with opacity:
#p1 {background-color: rgba(255, 0, 0, 0.3);}   // red with opacity
#p2 {background-color: rgba(0, 255, 0, 0.3);}   // green with opacity
#p3 {background-color: rgba(0, 0, 255, 0.3);}   // blue with opacity

Из статьи "CSS Legal Color Values" https://www.w3schools.com/cssref
/css_colors_legal.asp

-----------------------
Цвета можно посмотреть по ссылкам:
https://www.w3schools.com/colors/colors_names.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
-----------------------

fillStyle = color
    Устанавливает стиль для фона фигур.
strokeStyle = color
    Устанавливает стиль контура фигуры.

 Из статьи "Применение стилей и цветов"   https://developer.mozilla.org/ru/
 docs/Web/API/Canvas_API/Tutorial
---------------------

    //document.writeln("js >> End_test_js_1.js+++++++++");

*/

//==============================================================================

// самый корневой класс Р-роуте-корень
  window.HTML5_Canvas = {};
  HTML5_Canvas.isOk = " ";//
  
  HTML5_Canvas.NAME = "HTML5_Canvas";//

//------------------------------------------------------------------------------------------------------------------

  // работаем с конвой HTML5
  HTML5_Canvas.load = 0;//

  // "2d" создаем объекта CanvasRenderingContext2D,
  //  представляющий двумерный контекст.
  HTML5_Canvas.Id = document.getElementById('game-canvas');
  HTML5_Canvas.context = HTML5_Canvas.Id.getContext('2d');

  // определяем текст для тестового выода информации на экран, а также
  // когда надо напечатать до того как мы инициализровали текстовый объект
  HTML5_Canvas.context.fillStyle = '#0000ff';
  HTML5_Canvas.context.strokeStyle = '#0000ff';
  HTML5_Canvas.context.font = 'italic 30pt Arial';
  HTML5_Canvas.context.lineWidth = 1;

  // пишем текст до загрузки изображений. потом он закрывается картинкой
  HTML5_Canvas.context.strokeText ('Привет мой друг! Начнем помаленьку.', 10, 80);//была надпись LOADING RESOURCES
  HTML5_Canvas.context.strokeText ('Hello my friend! I will start small :)', 10, 130);//была надпись LOADING RESOURCES

  // шрифт для тестовой печати на экране
  HTML5_Canvas.context.font = 'italic 15pt Arial';

  //HTML5_Canvas.context.fillText ('LOAD REC', 10, 10);
  //HTML5_Canvas.context.fillRect( 100, 100, 100, 100);
  //HTML5_Canvas.context.strokeRect( 10, 10, 100, 100);

//============================================================================
HTML5_Canvas.setColor = function(color) {

  var style;

  switch(color){

          case 'white':
              style = '#ffffff';
           break;

          case 'black':
              style = '#000000';
           break;

           case 'red':
              style = '#ff0000';
           break;

           case 'green':
              style = '#008000';
           break;

           case 'blue':
              style = '#0000ff';
           break;
 };

 HTML5_Canvas.context.fillStyle = style;
 HTML5_Canvas.context.strokeStyle = style;

};
//============================================================================


//------------------------------------------------------------------------------------------------------------------

HTML5_Canvas.Text = {};
HTML5_Canvas.Text.NAME = "HTML5_Canvas.Text";//


  //============================================================================
  HTML5_Canvas.Text.setFont = function(font) {

       HTML5_Canvas.context.textBaseline = 'top';

       switch(font){

                 case 'italic 20px sans-serif':
                    HTML5_Canvas.context.font = font;
                 break;

                 case 'italic 30pt Arial':
                   HTML5_Canvas.context.font = font;
                 break;

                 case 'bold 30px sans-serif':
                   HTML5_Canvas.context.font = font;
                 break;
       };
  };
  //============================================================================

  //============================================================================
  HTML5_Canvas.Text.drawText = function(text, left, top, font, color, fillYes) {

        let style_r = HTML5_Canvas.context.fillStyle;
        let font_r = HTML5_Canvas.context.font;

        HTML5_Canvas.context.font = font_r;

         HTML5_Canvas.setColor(color);
         HTML5_Canvas.Text.setFont(font);

         if(fillYes == 1) {
             HTML5_Canvas.context.fillText(text, left, top);
         } else {
             HTML5_Canvas.context.strokeText (text, left, top);
         };

         // restore
         HTML5_Canvas.context.fillStyle = style_r;
         HTML5_Canvas.context.strokeStyle = style_r;

         HTML5_Canvas.context.font = font_r;



  };
  //============================================================================



//------------------------------------------------------------------------------------------------------------------

// geometric primitive (or prim)
HTML5_Canvas.Primitive = {};
HTML5_Canvas.Primitive.NAME = "HTML5_Canvas.PrimitiveHTML5_Canvas.Primitive";//

 //============================================================================
 HTML5_Canvas.Primitive.drawRect = function(left, top, width, height, lineWidth, color,
  fillYes) {

    let style_r = HTML5_Canvas.context.fillStyle;
      let lineWidth_r = HTML5_Canvas.context.lineWidth;

       HTML5_Canvas.setColor(color);
       HTML5_Canvas.context.lineWidth = lineWidth;

       if(fillYes == 1) {
           HTML5_Canvas.context.fillRect( left, top, width, height);
       } else {
           HTML5_Canvas.context.strokeRect( left, top, width, height);
       };

      // restore
      HTML5_Canvas.context.fillStyle = style_r;
      HTML5_Canvas.context.strokeStyle = style_r;
   
       HTML5_Canvas.context.lineWidth = lineWidth_r;

};
//============================================================================

//------------------------------------------------------------------------------------------------------------------

// Image 
HTML5_Canvas.Image = {};
HTML5_Canvas.Image.NAME = "HTML5_Canvas.Image";//

//============================================================================
HTML5_Canvas.Image.drawImageG = function(_image, _left, _top, _width = 0, _height = 0) {

    if ((_width == 0) || (_height == 0)){     
          HTML5_Canvas.context.drawImage(_image, _left, _top);
          //console.log('drawImage(_image, _left, _top);');
    }else{
          HTML5_Canvas.context.drawImage(_image, _left, _top, _width, _height);
          //console.log('drawImage(_image, _left, _top, _width, _height);');
    }
};
      //============================================================================




 // сообщаем что модуль был прочитан до конца
  //============================================================================
  HTML5_Canvas.xT = 900;//
  HTML5_Canvas.yT = 50;//
  HTML5_Canvas.dyT = 20;//
  //============================================================================
  HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
  HTML5_Canvas.context.strokeText ('script DD_HTML5_Canvas.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

  HTML5_Canvas.isOk = "OK";//

//==============================================================================