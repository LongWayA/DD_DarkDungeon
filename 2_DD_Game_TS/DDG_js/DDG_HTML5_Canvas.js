"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -21.08.2021-31.07.2022-18.02.2023-08.03.2023-17.03.2023
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
    // Внешние ссылки
    // "2d" создаем объект CanvasRenderingContext2D,
    //  представляющий двумерный контекст.
    Id_OUT: HTMLElement,
    context_OUT: {},
    width_OUT: 0,
    height_OUT: 0,
    load: 0,
    //=============================================================================
    ini: function () {
        HTML5_Canvas.load = 0; //
        // "2d" создаем объекта CanvasRenderingContext2D,
        //  представляющий двумерный контекст.
        HTML5_Canvas.Id_OUT = document.getElementById('game-canvas');
        HTML5_Canvas.context_OUT = HTML5_Canvas.Id_OUT.getContext('2d');
        // определяем текст для тестового выода информации на экран, а также
        // когда надо напечатать до того как мы инициализровали текстовый объект
        HTML5_Canvas.context_OUT.fillStyle = '#0000ff';
        HTML5_Canvas.context_OUT.strokeStyle = '#0000ff';
        HTML5_Canvas.context_OUT.font = HTML5_Canvas.ITALIC_30PT_ARIAL;
        HTML5_Canvas.context_OUT.lineWidth = HTML5_Canvas.LINE_WIDTH_1;
        // шрифт для тестовой печати на экране
        HTML5_Canvas.context_OUT.font = HTML5_Canvas.ITALIC_15PT_ARIAL;
        //HTML5_Canvas.context_OUT.fillText ('LOAD REC', 10, 10);
        //HTML5_Canvas.context_OUT.fillRect( 100, 100, 100, 100);
        //HTML5_Canvas.context_OUT.strokeRect( 10, 10, 100, 100);
        HTML5_Canvas.width_OUT = HTML5_Canvas.Id_OUT.width;
        HTML5_Canvas.height_OUT = HTML5_Canvas.Id_OUT.height;
    },
    //=============================================================================
    //=============================================================================
    setColor: function (_color) {
        var style;
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
        }
        ;
        HTML5_Canvas.context_OUT.fillStyle = style;
        HTML5_Canvas.context_OUT.strokeStyle = style;
    },
    //============================================================================
    //------------------------------------------------------------------------------------------------------------------
    Text: {
        NAME: "HTML5_Canvas.Text",
        //=============================================================================
        ini: function () {
        },
        //=============================================================================
        //============================================================================
        setFont: function (_font) {
            HTML5_Canvas.context_OUT.textBaseline = 'top';
            switch (_font) {
                case HTML5_Canvas.ITALIC_20PX_SANS_SERIF:
                    HTML5_Canvas.context_OUT.font = _font;
                    break;
                case HTML5_Canvas.ITALIC_30PT_ARIAL:
                    HTML5_Canvas.context_OUT.font = _font;
                    break;
                case HTML5_Canvas.BOLD_30PX_SANS_SERIF:
                    HTML5_Canvas.context_OUT.font = _font;
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
        drawText: function (_text, _left, _top, _font, _color, _fillYes) {
            var style_r = HTML5_Canvas.context_OUT.fillStyle;
            var font_r = HTML5_Canvas.context_OUT.font;
            HTML5_Canvas.setColor(_color);
            HTML5_Canvas.Text.setFont(_font);
            if (_fillYes == 1) {
                HTML5_Canvas.context_OUT.fillText(_text, _left, _top);
            }
            else {
                HTML5_Canvas.context_OUT.strokeText(_text, _left, _top);
            }
            ;
            // restore
            HTML5_Canvas.context_OUT.fillStyle = style_r;
            HTML5_Canvas.context_OUT.strokeStyle = style_r;
            HTML5_Canvas.context_OUT.font = font_r;
        }
    },
    //------------------------------------------------------------------------------------------------------------------
    // geometric primitive (or prim)
    Primitive: {
        NAME: "HTML5_Canvas.Primitive",
        //=============================================================================
        ini: function () {
        },
        //=============================================================================
        //============================================================================
        clearRect: function (_left, _top, _width, _height) {
            HTML5_Canvas.context_OUT.clearRect(_left, _top, _width, _height);
        },
        //============================================================================
        //============================================================================
        drawRect: function (_left, _top, _width, _height, _lineWidth, _color, _fillYes) {
            var style_r = HTML5_Canvas.context_OUT.fillStyle;
            var lineWidth_r = HTML5_Canvas.context_OUT.lineWidth;
            HTML5_Canvas.setColor(_color);
            HTML5_Canvas.context_OUT.lineWidth = _lineWidth;
            if (_fillYes == 1) {
                HTML5_Canvas.context_OUT.fillRect(_left, _top, _width, _height);
            }
            else {
                HTML5_Canvas.context_OUT.strokeRect(_left, _top, _width, _height);
            }
            ;
            // restore
            HTML5_Canvas.context_OUT.fillStyle = style_r;
            HTML5_Canvas.context_OUT.strokeStyle = style_r;
            HTML5_Canvas.context_OUT.lineWidth = lineWidth_r;
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
        drawImage: function (_image, _left, _top, _width, _height, _mirror) {
            //console.log('NOT M DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
            if (_width === void 0) {
                _width = 0;
            }
            if (_height === void 0) {
                _height = 0;
            }
            if (_mirror === void 0) {
                _mirror = !HTML5_Canvas.Image.DRAW_MIRROR;
            }
            if ((_width == 0) || (_height == 0)) {
                HTML5_Canvas.context_OUT.drawImage(_image, _left, _top);
                //console.log('drawImage(_image, _left, _top);');
            }
            else {
                if (_mirror == HTML5_Canvas.Image.DRAW_MIRROR) {
                    _left = _left + _width;
                    _left = -_left;
                    HTML5_Canvas.context_OUT.scale(-1, 1);
                }
                HTML5_Canvas.context_OUT.drawImage(_image, _left, _top, _width, _height);
                //console.log('DRAW_MIRROR DD_HTML5_Canvas.js: _left = ' + _left + ' _top = ' +_top);
                if (_mirror == HTML5_Canvas.Image.DRAW_MIRROR) {
                    HTML5_Canvas.context_OUT.scale(-1, 1);
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
        ini: function () {
            HTML5_Canvas.TestLoadedScripts.test_x = 750; //
            HTML5_Canvas.TestLoadedScripts.test_y = 50; //
            HTML5_Canvas.TestLoadedScripts.test_count = 1; //
        },
        //=============================================================================
        //============================================================================
        // сообщаем что модуль был прочитан до конца
        testLoading: function (_nameScript) {
            console.log(HTML5_Canvas.TestLoadedScripts.test_count + ' Module ' + _nameScript + ' loaded');
            //HTML5_Canvas.context_OUT.strokeText (HTML5_Canvas.TestLoadedScripts.TEST_COUNT + ' Module ' + _nameScript + ' loaded', 
            //HTML5_Canvas.TestLoadedScripts.TEST_X, HTML5_Canvas.TestLoadedScripts.TEST_Y);
            HTML5_Canvas.TestLoadedScripts.test_y = HTML5_Canvas.TestLoadedScripts.test_y + HTML5_Canvas.TestLoadedScripts.TEST_dY; //
            HTML5_Canvas.TestLoadedScripts.test_count = HTML5_Canvas.TestLoadedScripts.test_count + 1; //
        }
    },
    //=============================================================================
    printStartText: function () {
        var left = 10;
        var top = 50;
        var width = 350;
        var height = 90;
        HTML5_Canvas.context_OUT.fillStyle = '#0000ff';
        HTML5_Canvas.context_OUT.strokeStyle = '#0000ff';
        HTML5_Canvas.context_OUT.font = HTML5_Canvas.ITALIC_30PT_ARIAL;
        HTML5_Canvas.context_OUT.lineWidth = HTML5_Canvas.LINE_WIDTH_1;
        HTML5_Canvas.Primitive.drawRect(left, top, width, height, HTML5_Canvas.LINE_WIDTH_1, HTML5_Canvas.GREEN, 0);
        // пишем текст до загрузки изображений. потом он закрывается картинкой
        HTML5_Canvas.context_OUT.strokeText('Загрузка модулей.', 10, 80); //была надпись LOADING RESOURCES
        HTML5_Canvas.context_OUT.strokeText('Modules loading', 10, 130); //была надпись LOADING RESOURCES
        // шрифт для тестовой печати на экране
        HTML5_Canvas.context_OUT.font = HTML5_Canvas.ITALIC_15PT_ARIAL;
    }
}; //HTML5_Canvas
HTML5_Canvas.ini();
//HTML5_Canvas.Image.ini();
HTML5_Canvas.TestLoadedScripts.ini();
HTML5_Canvas.TestLoadedScripts.testLoading('DDG_HTML5_Canvas.js');
HTML5_Canvas.isOk = "OK"; //
export { HTML5_Canvas };
