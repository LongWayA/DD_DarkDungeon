"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -21.08.2021-31.07.2022-18.02.2023-08.03.2023-18.03.2023
//
/*
 НАЗНАЧЕНИЕ
  Работаем с HTML5 Canvas
  Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5,
  предназначенный для создания растрового двухмерного изображения при помощи скриптов,
  обычно на языке JavaScript[1].
  Из Википедии https://ru.wikipedia.org/wiki/Canvas_(HTML)

  Подробное описание см. в конце файла
 
  ИСПОЛЬЗУЕТ МОДУЛИ
  -
*/

// "2d" создаем объекта CanvasRenderingContext2D,
//  представляющий двумерный контекст.
const idCanvas : HTMLElement = <HTMLElement>document.getElementById('game-canvas');
const contextCanvas : any = idCanvas!.getContext('2d');

//console.log("typeof idCanvas.getContext('2d') = " +typeof idCanvas.getContext('2d'));//typeof idCanvas.getContext('2d') = object

var set_fillStyle = function(_color : string){
    contextCanvas.fillStyle = _color;
};

var get_fillStyle = function() : string{
    return contextCanvas.fillStyle;
};

var set_strokeStyle = function(_color : string){
    contextCanvas.strokeStyle = _color;
};

// get_strokeStyle?

var set_font = function(_font : string){
    contextCanvas.font = _font;
};

var get_font = function() : string{
    return contextCanvas.font;
};

var set_lineWidth = function(_lineWidth : number){
    contextCanvas.lineWidth = _lineWidth;
};

var get_lineWidth = function() : number{
    return contextCanvas.lineWidth;
};

var set_textBaseline = function(_textBaseline : string){
    contextCanvas.textBaseline = _textBaseline;
};



var get_widthCanvas = function() : number{
    //console.log("contextCanvas.width = " + idCanvas.width);
    return idCanvas!.width;
};

var get_heightCanvas = function() : number{
    //console.log("contextCanvas.height = " + idCanvas.height);
    return idCanvas!.height;
};

var fillText = function(_text : string, _left : number, _top : number){
    contextCanvas.fillText(_text, _left, _top);
};

var strokeText = function(_text : string, _left : number, _top : number){
    contextCanvas.strokeText(_text, _left, _top);
};

var clearRect = function(_left : number, _top : number, _width : number, _height : number) {
    contextCanvas.clearRect(_left, _top, _width, _height);
};

var fillRect = function(_left : number, _top : number, _width : number, _height : number) {
    contextCanvas.fillRect(_left, _top, _width, _height);
};

var strokeRect = function(_id : string, _left : number, _top : number, _width : number, _height : number) {
    //console.log("strokeRect " + " _id = " + _id + " _left = " + _left + " _top = " + _top + " _width = " + _width + " _height = " + _height);
    contextCanvas.strokeRect(_left, _top, _width, _height);
};

var drawImage = function(_image : {}, _left : number, _top : number) {
    contextCanvas.drawImage(_image, _left, _top);
};

var drawImage_f = function(_image : {}, _left : number, _top : number, _width : number, _height : number) {
    contextCanvas.drawImage(_image, _left, _top, _width, _height);
};

var scale = function(){
    contextCanvas.scale(-1, 1);
};

// 
var HTML5_Canvas = {
    isOk: "",
    NAME: "HTML5_Canvas",
    ITALIC_20PX_SANS_SERIF: 'italic 20px sans-serif',
    ITALIC_15PT_ARIAL: 'italic 15pt Arial',
    ITALIC_30PT_ARIAL: 'italic 30pt Arial',
    BOLD_30PX_SANS_SERIF: 'bold 30px sans-serif',
    WHITE: 'white',
    BLACK: 'black',
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    LINE_WIDTH_1: 1,
    width_OUT : 0,
    height_OUT : 0,
    load: 0,

    test_A: function () {
       HTML5_Canvas.width_OUT = get_widthCanvas();
       HTML5_Canvas.height_OUT = get_heightCanvas();
       console.log("test_A");
    },
    //=============================================================================
    ini: function () {
        HTML5_Canvas.load = 0; //
        // определяем текст для тестового выода информации на экран, а также
        // когда надо напечатать до того как мы инициализровали текстовый объект
        set_fillStyle('#0000ff');
        set_strokeStyle('#0000ff');
        set_font(HTML5_Canvas.ITALIC_30PT_ARIAL);
        set_lineWidth(HTML5_Canvas.LINE_WIDTH_1);
        // шрифт для тестовой печати на экране
        set_font(HTML5_Canvas.ITALIC_15PT_ARIAL);
        //HTML5_Canvas.context_OUT.fillText ('LOAD REC', 10, 10);
        //HTML5_Canvas.context_OUT.fillRect( 100, 100, 100, 100);
        //HTML5_Canvas.context_OUT.strokeRect( 10, 10, 100, 100);

        HTML5_Canvas.width_OUT = get_widthCanvas();
        HTML5_Canvas.height_OUT = get_heightCanvas();
    },
    //=============================================================================
    //=============================================================================
    setColor: function (_color : string) : void{
        let style : string = '#ffffff';
        switch (_color) {
            case HTML5_Canvas.WHITE:
                style = '#ffffff';
                break;
            case HTML5_Canvas.BLACK:
                style = '#000000';
                break;
            case HTML5_Canvas.RED:
                style = '#ff0000';
                break;
            case HTML5_Canvas.GREEN:
                style = '#008000';
                break;
            case HTML5_Canvas.BLUE:
                style = '#0000ff';
                break;
        };

        set_fillStyle(style);
        set_strokeStyle(style);
    },
    //============================================================================
    //------------------------------------------------------------------------------------------------------------------
    Text: {
        NAME: "HTML5_Canvas.Text",
        //=============================================================================
        ini: function () : void{
        },
        //=============================================================================
        //============================================================================
        setFont: function (_font : string) {
            set_textBaseline('top');
            switch (_font) {
                case HTML5_Canvas.ITALIC_20PX_SANS_SERIF:
                    set_font(_font);
                    break;
                case HTML5_Canvas.ITALIC_30PT_ARIAL:
                    set_font(_font);
                    break;
                case HTML5_Canvas.BOLD_30PX_SANS_SERIF:
                    set_font(_font);
                    break;
            }
            ;
        },
        //============================================================================
        //============================================================================
        // возможно установить:
        // HTML5_Canvas.ITALIC_20PX_SANS_SERIF, HTML5_Canvas.ITALIC_30PT_ARIAL, HTML5_Canvas.BOLD_30PX_SANS_SERIF
        //HTML5_Canvas.WHITE, HTML5_Canvas.BLACK, HTML5_Canvas.RED, HTML5_Canvas.GREEN, HTML5_Canvas.BLUE
        // HTML5_Canvas.Text.drawText("text", 10, 5, HTML5_Canvas.ITALIC_30PT_ARIAL, HTML5_Canvas.GREEN, 1);
        drawText: function (_text : string, _left : number, _top : number, _font : string, _color : string, _fillYes : number) {
            let style_r = get_fillStyle();
            let font_r = get_font();

            HTML5_Canvas.setColor(_color);
            HTML5_Canvas.Text.setFont(_font);

            if (_fillYes == 1) {
                fillText(_text, _left, _top);
            }
            else {
                strokeText(_text, _left, _top);
            };
            
            // restore
            set_fillStyle(style_r);
            set_strokeStyle(style_r);
            set_font(font_r);
        }
    },
    //------------------------------------------------------------------------------------------------------------------
    // geometric primitive (or prim)
    Primitive: {
        NAME: "HTML5_Canvas.Primitive",
        //=============================================================================
        ini: function () : void{
        },
        //=============================================================================
        //============================================================================
        clearRect: function (_left : number, _top : number, _width : number, _height : number) {
            clearRect(_left, _top, _width, _height);
        },
        //============================================================================
        //============================================================================
        drawRect: function (_id : string, _left : number, _top : number, _width : number, _height : number,
           _lineWidth : number, _color : string, _fillYes : number) {

            let style_r = get_fillStyle();
            let lineWidth_r = get_lineWidth();

            set_lineWidth(_lineWidth);

            HTML5_Canvas.setColor(_color);
            
            if (_fillYes == 1) {
                fillRect(_left, _top, _width, _height);
            }
            else {
                strokeRect(_id, _left, _top, _width, _height);
            }
            ;
            // restore
            set_fillStyle(style_r);
            set_strokeStyle(style_r);
            set_lineWidth(lineWidth_r);
        }
    },
    //------------------------------------------------------------------------------------------------------------------
    // Image 
    Image: {
        NAME: "HTML5_Canvas.Image",
        DRAW_MIRROR: true,
        //=============================================================================
        ini: function () {
        },
        //=============================================================================
        //============================================================================
        drawImage: function (_image : {}, _left : number, _top : number, _width : number, _height : number, _mirror:boolean) {
            //console.log('NOT M DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
            if (_width === void 0) { _width = 0; }
            if (_height === void 0) { _height = 0; }
            if (_mirror === void 0) { _mirror = !HTML5_Canvas.Image.DRAW_MIRROR; }
            if ((_width == 0) || (_height == 0)) {
                drawImage(_image, _left, _top);
                //console.log('drawImage(_image, _left, _top);');
            }
            else {
                if (_mirror == HTML5_Canvas.Image.DRAW_MIRROR) {
                    _left = _left + _width;
                    _left = -_left;
                    scale();
                }
                drawImage_f(_image, _left, _top, _width, _height);
                //console.log('DRAW_MIRROR DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
                if (_mirror == HTML5_Canvas.Image.DRAW_MIRROR) {
                    scale();
                }
            }
        }
    },
    //------------------------------------------------------------------------------------------------------------------
    TestLoadedScripts: {
        NAME: "Test loading Scripts",
        TEST_dY: 30,
        test_x: 0,
        test_y: 0,
        test_count: 0,
        //=============================================================================
        ini: function () : void {
            HTML5_Canvas.TestLoadedScripts.test_x = 750; //
            HTML5_Canvas.TestLoadedScripts.test_y = 50; //
            HTML5_Canvas.TestLoadedScripts.test_count = 1; //
        },
        //=============================================================================
        //============================================================================
        // сообщаем что модуль был прочитан до конца
        testLoading: function (_nameScript : string) : void{
            console.log(HTML5_Canvas.TestLoadedScripts.test_count + ' Module ' + _nameScript + ' loaded');
            //HTML5_Canvas.context_OUT.strokeText (HTML5_Canvas.TestLoadedScripts.TEST_COUNT + ' Module ' + _nameScript + ' loaded', 
            //HTML5_Canvas.TestLoadedScripts.TEST_X, HTML5_Canvas.TestLoadedScripts.TEST_Y);
            HTML5_Canvas.TestLoadedScripts.test_y = HTML5_Canvas.TestLoadedScripts.test_y + HTML5_Canvas.TestLoadedScripts.TEST_dY; //
            HTML5_Canvas.TestLoadedScripts.test_count = HTML5_Canvas.TestLoadedScripts.test_count + 1; //
        }
    },
    //=============================================================================
    printStartText: function () {
        
        let left = 10;
        let top = 50;
        let width = 350;
        let height = 90;
        set_fillStyle('#0000ff');
        set_strokeStyle('#0000ff');
        set_font(HTML5_Canvas.ITALIC_30PT_ARIAL);
        set_lineWidth(HTML5_Canvas.LINE_WIDTH_1);
 
        HTML5_Canvas.Primitive.drawRect("printStartText", left, top, width, height, HTML5_Canvas.LINE_WIDTH_1, HTML5_Canvas.GREEN, 0);
        // пишем текст до загрузки изображений. потом он закрывается картинкой
        strokeText('Загрузка модулей.', 10, 80); //была надпись LOADING RESOURCES
        strokeText('Modules loading', 10, 130); //была надпись LOADING RESOURCES
        // шрифт для тестовой печати на экране
        set_font(HTML5_Canvas.ITALIC_15PT_ARIAL);
    }
}; //HTML5_Canvas
HTML5_Canvas.ini();
//HTML5_Canvas.Image.ini();
HTML5_Canvas.TestLoadedScripts.ini();
HTML5_Canvas.TestLoadedScripts.testLoading('DDG_HTML5_Canvas.js');
HTML5_Canvas.isOk = "OK"; //
export { HTML5_Canvas };

/*

ОПИСАНИЕ
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

let text = context.measureText("Hello"); "22px Verdana"
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

*/