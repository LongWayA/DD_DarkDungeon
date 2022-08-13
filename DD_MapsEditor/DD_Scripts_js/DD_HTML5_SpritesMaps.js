"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.08.2022-

  /*
   НАЗНАЧЕНИЕ

   Назначение объекта загрузить заданные ряды картинок при запуске программы.
   И вывести картинку заданного типа и номера в заданном месте.

   ИСПОЛЬЗУЕТ МОДУЛИ
        DD_HTML5_Canvas.js - этот модуль содержит корневой объект и необходим для работы

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ

  */

//==============================================================================


class Tile_for_load_Image_C {
  
  constructor() {

    //GROUNDS
    this.tile_Image ;// содержит картинку для отображения на карте
    this.tile_path = " " ;//содержит путь по которому была загружена картинка
    this.tile_char = " " ;//содержит символ соответствующий картинке на карте
    this.tile_String = " " ;//содержит название картинки
  }//constructor() {

};

window.SpritesMap = {};

  SpritesMap.isOk = " ";//

  SpritesMap.NAME = "SpritesMaps";//

  SpritesMap.REZERV           = 0;
  SpritesMap.ADVENTURES       = 1;
  SpritesMap.GROUNDS          = 2;
  SpritesMap.ITEMS            = 3;
  SpritesMap.MONSTERS         = 4;

  SpritesMap.REZERV_MAX_COUNT         = 1;
  SpritesMap.ADVENTURES_MAX_COUNT     = 25;
  SpritesMap.GROUNDS_MAX_COUNT        = 8;
  SpritesMap.ITEMS_MAX_COUNT          = 20;
  SpritesMap.MONSTERS_MAX_COUNT       = 15;


  
  // Массив содержит картинки-тайлы для отображения на карте
  SpritesMap.tilesLoad = new Array(5);
  SpritesMap.tilesLoad[SpritesMap.ADVENTURES] = new Array(SpritesMap.ADVENTURES_MAX_COUNT);
  SpritesMap.tilesLoad[SpritesMap.GROUNDS]    = new Array(SpritesMap.GROUNDS_MAX_COUNT );
  SpritesMap.tilesLoad[SpritesMap.ITEMS]      = new Array(SpritesMap.ITEMS_MAX_COUNT);
  SpritesMap.tilesLoad[SpritesMap.MONSTERS]   = new Array(SpritesMap.MONSTERS_MAX_COUNT);

  // коллекции Map (по символу выдает номер тайла в массиве)
  SpritesMap.GroundsMapChars = new Map();// для GROUNDS
  SpritesMap.ItemsMapChars = new Map();// для ITEMS
  SpritesMap.MonstersMapChars = new Map();// для MONSTERS

  // коллекции Map (по символу выдает имя тайла)
  SpritesMap.GroundsMapString = new Map();// для GROUNDS
  SpritesMap.ItemsMapString = new Map();// для ITEMS
  SpritesMap.MonstersMapString = new Map();// для MONSTERS


  // get Height Sprite
  //============================================================================
  SpritesMap.getHeightSprite = function(_type, _index) {

      let height = SpritesMap.tilesLoad[_type][_index].tile_Image.height;
      return height;
  };
  //============================================================================

  // get Width Sprite
  //============================================================================
  SpritesMap.getWidthSprite = function(_type, _index) {

      let width = SpritesMap.tilesLoad[_type][_index].tile_Image.width;
      return width;
  };
  //============================================================================

  // get Left Sprite
  //============================================================================
  SpritesMap.getLeftSprite = function(_type, _index, _middle) {

      let width = SpritesMap.tilesLoad[_type][_index].tile_Image.width;
      let left = _middle - width/2;
      return left;
  };
  //============================================================================


  // draw image
  //============================================================================
  SpritesMap.drawSprite = function(_type, _index, _middle, _bottom,) {

    //HTML5_Canvas.context.clearRect(0, 0, HTML5_Canvas.Id.width, HTML5_Canvas.Id.height);
    //console.log(" HTML5_Canvas.Id.width = " + HTML5_Canvas.Id.width + " HTML5_Canvas.Id.height = " +HTML5_Canvas.Id.height);

         let height =SpritesMap.tilesLoad[_type][_index].tile_Image.height;
         let width = SpritesMap.tilesLoad[_type][_index].tile_Image.width;

         //console.log(" width = " + width + " height = " + height);

         let top = _bottom - height;
         let left = _middle - width/2;
         
         HTML5_Canvas.Image.drawImageG(SpritesMap.tilesLoad[_type][_index].tile_Image, left, top);
         //HTML5_Canvas.Image.drawImageG(SpritesMap.spritesSheeva_mk3_img[_type][_index].tile_Image, 100, 100, 100, 100);


         HTML5_Canvas.Primitive.drawRect(left, top, width,height,1, 'blue', 0);
         HTML5_Canvas.Primitive.drawRect(_middle, top, 2,height,1, 'red', 0);

         HTML5_Canvas.Text.drawText ("i " + "frame = " + _index, left+5, _bottom-40, 'italic 20px sans-serif', 'black', 1);
         HTML5_Canvas.Text.drawText ("i " + SpritesMap.TXT_SPRITES_FIGHTER_SET[_type], left+5, _bottom-20, 'italic 20px sans-serif', 'black', 1);

        // _GameText_R.drawText ("i " + "middle = " + _middle, left+5, _bottom-140, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "width = " + width, left+5, _bottom-120, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "left = " + left, left+5, _bottom-100, 'italic 20px sans-serif', 'white', 1);
  };
  //============================================================================


  // draw image mirror
  //============================================================================
  SpritesMap.drawSpriteMirror = function(_type, _index, _middle, _bottom,) {

        let height = SpritesMap.tilesLoad[_type][_index].tile_Image.height;
        let width = SpritesMap.tilesLoad[_type][_index].tile_Image.width;
        let top = _bottom - height;
        let left = _middle - width/2;
        let right = left + width;

         HTML5_Canvas.context.scale(-1, 1);
         HTML5_Canvas.Image.drawImageG(SpritesMap.tilesLoad[_type][_index].tile_Image, -right, top);
         HTML5_Canvas.Primitive.drawRect(-right, top, width, height, 1, 'blue', 0);
         HTML5_Canvas.context.scale(-1, 1);

         HTML5_Canvas.Primitive.drawRect(_middle, top, 2,height,1, 'red', 0);

         HTML5_Canvas.Text.drawText ("im " + "frame = " + _index, _middle + 5, _bottom-40, 'italic 20px sans-serif', 'white', 1);
         HTML5_Canvas.Text.drawText ("im " + SpritesMap.TXT_SPRITES_FIGHTER_SET[_type], _middle+5, _bottom -20, 'italic 20px sans-serif', 'white', 1);

        // _GameText_R.drawText ("i " + "middle = " + _middle, left+5, _bottom-140, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "width = " + width, left+5, _bottom-120, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "left = " + left, left+5, _bottom-100, 'italic 20px sans-serif', 'white', 1);
        // _GameText_R.drawText ("i " + "right = " + right, left+5, _bottom-80, 'italic 20px sans-serif', 'white', 1);
  };
  //============================================================================


 // ini Image
  //============================================================================
  SpritesMap.iniSprite = function(_type,_path){

    let length = SpritesMap.tilesLoad[_type].length

    //console.log(" _type = " + _type + " _path = " + _path);
    //console.log(" length = " + length);

        for(let i = 1; i < length; i++ ){
          SpritesMap.tilesLoad[_type][i]= new Tile_for_load_Image_C();
          SpritesMap.tilesLoad[_type][i].tile_Image= new Image();
          SpritesMap.tilesLoad[_type][i].tile_Image.src = _path + i + ".png";
          SpritesMap.tilesLoad[_type][i].tile_path      = _path + i + ".png";
           //console.log(" OK " + _path + i + ".png");
         };
  };
  //============================================================================

  //инициализируем массивы с картинками
  //============================================================================
  SpritesMap.ini_tiles_char = function() {

///////////////////////////////////////////////////////////////////
    //GROUNDS
    // так кодируются тайлы для слоя земли
    SpritesMap.GROUND_STONE    = "a";//1
    SpritesMap.GROUND_WATER    = "b";//2
    SpritesMap.GROUND_EARTH    = "c";//3
    SpritesMap.GROUND_WOID     = "d";//4
    SpritesMap.GROUND_DOUN     = "e";//5
    SpritesMap.GROUND_UP       = "f";//6
    SpritesMap.GROUND_NUGGETS  = "g";//7

    // коллекция по кодирующим символам номера тайлов в массиве  для слоя земли
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_STONE, 1);
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_WATER, 2);
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_EARTH, 3);
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_WOID, 4);
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_DOUN , 5);
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_UP, 6);
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_NUGGETS, 7);

    //массив по номерам тайлов их кодирующий символ для слоя земли
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][1].tile_char = SpritesMap.GROUND_STONE;  //1_ground_stone    камень
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][2].tile_char = SpritesMap.GROUND_WATER;  //2_ground_water    вода
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][3].tile_char = SpritesMap.GROUND_EARTH;  //3_ground_earth    земля-песок
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][4].tile_char = SpritesMap.GROUND_WOID ;  //4_ground_woid     пустота небо
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][5].tile_char = SpritesMap.GROUND_DOUN ;  //5_ground_down     вход в подемелье
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][6].tile_char = SpritesMap.GROUND_UP;     //6_ground_up       выход из подземелья
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][7].tile_char = SpritesMap.GROUND_NUGGETS;//7_ground_nuggets  земля-золото

    // массив по номерам тайлов  имена тайлов для слоя земли
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][1].tile_String = "stone(камень)";  //1_ground_stone    камень
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][2].tile_String = "water(вода)";  //2_ground_water    вода
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][3].tile_String = "earth(земля)";  //3_ground_earth    земля-песок
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][4].tile_String = "woid(небо)" ;  //4_ground_woid     пустота небо
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][5].tile_String = "down(спус вниз)" ;  //5_ground_down     вход в подемелье
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][6].tile_String = "up(подъем наверх)";     //6_ground_up       выход из подземелья
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][7].tile_String = "nuggets(золото)";//7_ground_nuggets  земля-золото

    // коллекция по кодирующим символам  имена тайлов для слоя земли
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_STONE, "stone(камень)");
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_WATER, "water(вода)");
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_EARTH, "earth(земля)");
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_WOID, "woid(небо)");
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_DOUN , "down(спус вниз)");
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_UP, "up(подъем наверх)");
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_NUGGETS, "nuggets(золото)");


    //тестовый вывод
    /*
    let nameTilesG = SpritesMap.GROUND_WATER;
    console.log("GROUNDS");//
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.GROUND_STONE= " + nameTilesG);// "a"
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.GroundsMapChars.get(nameTiles)= " + SpritesMap.GroundsMapChars.get(nameTilesG));// 1
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.tilesLoad[SpritesMap.GROUNDS][SpritesMap.GroundsMapChars.get(nameTiles)]= " 
    + SpritesMap.tilesLoad[SpritesMap.GROUNDS][SpritesMap.GroundsMapChars.get(nameTilesG)]);// "a"
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.GroundsMapString.get(nameTiles)= " + SpritesMap.GroundsMapString.get(nameTilesG));// stone (камень)
    */
    
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
    //ITEMS
    // так кодируются тайлы для слоя предметов
    SpritesMap.ITEMS_RING        = "a";//1
    SpritesMap.ITEMS_SWORD_1     = "b";//2
    SpritesMap.ITEMS_SWORD_2     = "c";//3
    SpritesMap.ITEMS_SWORD_3     = "d";//4
    SpritesMap.ITEMS_SHIELD      = "e";//5
    SpritesMap.ITEMS_ARMOR_1     = "f";//6
    SpritesMap.ITEMS_ARMOR_2     = "g";//7
    SpritesMap.ITEMS_ARMOR_3     = "h";//8
    SpritesMap.ITEMS_ARMOR_4     = "i";//9
    SpritesMap.ITEMS_ARMOR_5     = "j";//10
    SpritesMap.ITEMS_ARMOR_6     = "k";//11
    SpritesMap.ITEMS_FLOWER_1    = "l";//12
    SpritesMap.ITEMS_FLOWER_2    = "m";//13
    SpritesMap.ITEMS_FLOWER_3    = "n";//14
    SpritesMap.ITEMS_FLOWER_4    = "o";//15
    SpritesMap.ITEMS_FLOWER_5    = "p";//16
    SpritesMap.ITEMS_FLOWER_6    = "q";//17
    SpritesMap.ITEMS_POTION      = "r";//18
    SpritesMap.ITEMS_DOOR        = "s";//19

    // коллекция по кодирующим символам номера тайлов в массиве  для слоя предметов
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_RING,     1);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_SWORD_1,  2);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_SWORD_2,  3);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_SWORD_3,  4);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_SHIELD,   5);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_ARMOR_1,  6);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_ARMOR_2,  7);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_ARMOR_3,  8);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_ARMOR_4,  9);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_ARMOR_5,  10);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_ARMOR_6,  11);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_FLOWER_1, 12);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_FLOWER_2, 13);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_FLOWER_3, 14);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_FLOWER_4, 15);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_FLOWER_5, 16);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_FLOWER_6, 17);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_POTION,   18);
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_DOOR,     19);

    //массив по номерам тайлов их кодирующий символ для слоя предметов
    SpritesMap.tilesLoad[SpritesMap.ITEMS][1].tile_char  = SpritesMap.ITEMS_RING;  //1-1_item_ring    кольцо
    SpritesMap.tilesLoad[SpritesMap.ITEMS][2].tile_char  = SpritesMap.ITEMS_SWORD_1;  //2-2_item_sword   первый меч
    SpritesMap.tilesLoad[SpritesMap.ITEMS][3].tile_char  = SpritesMap.ITEMS_SWORD_2;  //3-2_item_sword2  второй меч
    SpritesMap.tilesLoad[SpritesMap.ITEMS][4].tile_char  = SpritesMap.ITEMS_SWORD_3;  //4-2_item_sword3  третий меч - не прозрачный фон
    SpritesMap.tilesLoad[SpritesMap.ITEMS][5].tile_char  = SpritesMap.ITEMS_SHIELD;  //5-3_item_shield  щит
    SpritesMap.tilesLoad[SpritesMap.ITEMS][6].tile_char  = SpritesMap.ITEMS_ARMOR_1;  //6-4_item_armor   первый доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][7].tile_char  = SpritesMap.ITEMS_ARMOR_2;  //7-4_item_armor2  второй доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][8].tile_char  = SpritesMap.ITEMS_ARMOR_3;  //8-4_item_armor3  третий доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][9].tile_char  = SpritesMap.ITEMS_ARMOR_4;  //9-4_item_armor4  четвертый доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][10].tile_char = SpritesMap.ITEMS_ARMOR_5;  //10-4_item_armor5 пятый доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][11].tile_char = SpritesMap.ITEMS_ARMOR_6;  //11-4_item_armor6 шестой доспех  - не прозрачный фон
    SpritesMap.tilesLoad[SpritesMap.ITEMS][12].tile_char = SpritesMap.ITEMS_FLOWER_1;  //12-5_item_flower первый цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][13].tile_char = SpritesMap.ITEMS_FLOWER_2;  //13-5_item_flower2 второй цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][14].tile_char = SpritesMap.ITEMS_FLOWER_3;  //14-5_item_flower3 третий цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][15].tile_char = SpritesMap.ITEMS_FLOWER_4;  //15-5_item_flower4 четвертый цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][16].tile_char = SpritesMap.ITEMS_FLOWER_5;  //16-5_item_flower5 пятый цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][17].tile_char = SpritesMap.ITEMS_FLOWER_6;  //17-5_item_flower6 шестой цветок  - не прозрачный фон
    SpritesMap.tilesLoad[SpritesMap.ITEMS][18].tile_char = SpritesMap.ITEMS_POTION;  //18-6_item_potion  элексир
    SpritesMap.tilesLoad[SpritesMap.ITEMS][19].tile_char = SpritesMap.ITEMS_DOOR;  //19-7_item_door    дверь

    //массив по номерам тайлов их название для слоя предметов
    SpritesMap.tilesLoad[SpritesMap.ITEMS][1].tile_String  = "ring(кольцо)";  //1-1_item_ring    кольцо
    SpritesMap.tilesLoad[SpritesMap.ITEMS][2].tile_String  = "sword(первый меч)";  //2-2_item_sword   первый меч
    SpritesMap.tilesLoad[SpritesMap.ITEMS][3].tile_String  = "sword2(второй меч)";  //3-2_item_sword2  второй меч
    SpritesMap.tilesLoad[SpritesMap.ITEMS][4].tile_String  = "sword3(третий меч-не прозрачный фон)";  //4-2_item_sword3  третий меч - не прозрачный фон
    SpritesMap.tilesLoad[SpritesMap.ITEMS][5].tile_String  = "shield(щит)";  //5-3_item_shield  щит
    SpritesMap.tilesLoad[SpritesMap.ITEMS][6].tile_String  = "armor(первый доспех)";  //6-4_item_armor   первый доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][7].tile_String  = "armor2(второй доспех)";  //7-4_item_armor2  второй доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][8].tile_String  = "armor3(третий доспех)";  //8-4_item_armor3  третий доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][9].tile_String  = "armor4(четвертый доспех)";  //9-4_item_armor4  четвертый доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][10].tile_String = "armor5(пятый доспех)";  //10-4_item_armor5 пятый доспех
    SpritesMap.tilesLoad[SpritesMap.ITEMS][11].tile_String = "armor6(шестой доспех-не прозрачный фон)";  //11-4_item_armor6 шестой доспех  - не прозрачный фон
    SpritesMap.tilesLoad[SpritesMap.ITEMS][12].tile_String = "flower(первый цветок)";  //12-5_item_flower первый цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][13].tile_String = "flower2(второй цветок)";  //13-5_item_flower2 второй цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][14].tile_String = "flower3(третий цветок)";  //14-5_item_flower3 третий цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][15].tile_String = "flower4(четвертый цветок)";  //15-5_item_flower4 четвертый цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][16].tile_String = "flower5(пятый цветок)";  //16-5_item_flower5 пятый цветок
    SpritesMap.tilesLoad[SpritesMap.ITEMS][17].tile_String = "flower6(шестой цветок-не прозрачный фон)";  //17-5_item_flower6 шестой цветок  - не прозрачный фон
    SpritesMap.tilesLoad[SpritesMap.ITEMS][18].tile_String = "potion(элексир)";  //18-6_item_potion  элексир
    SpritesMap.tilesLoad[SpritesMap.ITEMS][19].tile_String = "door(дверь)";  //19-7_item_door    дверь

    // коллекция по именам тайлов для слоя предметов
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_RING,     "ring(кольцо)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_SWORD_1,  "sword(первый меч)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_SWORD_2,  "sword2(второй меч)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_SWORD_3,  "sword3(третий меч-не прозрачный фон)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_SHIELD,   "shield(щит)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_ARMOR_1,  "armor(первый доспех)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_ARMOR_2,  "armor2(второй доспех)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_ARMOR_3,  "armor3(третий доспех)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_ARMOR_4,  "armor4(четвертый доспех)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_ARMOR_5,  "armor5(пятый доспех)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_ARMOR_6,  "armor6(шестой доспех-не прозрачный фон)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_FLOWER_1, "flower(первый цветок)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_FLOWER_2, "flower2(второй цветок)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_FLOWER_3, "flower3(третий цветок)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_FLOWER_4, "flower4(четвертый цветок)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_FLOWER_5, "flower5(пятый цветок)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_FLOWER_6, "flower6(шестой цветок-не прозрачный фон)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_POTION,   "potion(элексир)");
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_DOOR,     "door(дверь)");

    //тестовый вывод
    /*
    let nameTilesI = SpritesMap.ITEMS_RING;
    console.log("ITEMS");//
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.ITEMS_RING= " + nameTilesI);// "a"
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.ItemsMapChars.get(nameTilesI)= " + SpritesMap.ItemsMapChars.get(nameTilesI));// 1
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.tilesLoad[SpritesMap.ITEMS][SpritesMap.ItemsMapChars.get(nameTilesI)]= " 
    + SpritesMap.tilesLoad[SpritesMap.ITEMS][SpritesMap.ItemsMapChars.get(nameTilesI)]);// "a"
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap.ItemsMapString.get(nameTilesI)= " + SpritesMap.ItemsMapString.get(nameTilesI));// ring(кольцо)
    */
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
    //MONSTERS
    // так кодируются тайлы для слоя монстров
    SpritesMap.MONSTERS_GHOST    = "a";//1
    SpritesMap.MONSTERS_DRAGON   = "b";//2
    SpritesMap.MONSTERS_GOBLIN   = "c";//3
    SpritesMap.MONSTERS_HARPY    = "d";//4
    SpritesMap.MONSTERS_DRUID    = "e";//5
    SpritesMap.MONSTERS_VARNEY   = "f";//6
    SpritesMap.MONSTERS_LICH     = "g";//7
    SpritesMap.MONSTERS_MEDUSA   = "h";//8
    SpritesMap.MONSTERS_MINOTAUR = "i";//9
    SpritesMap.MONSTERS_GENIE    = "j";//10
    SpritesMap.MONSTERS_FIGHTER  = "k";//11
    SpritesMap.MONSTERS_GARGOYLE = "l";//12
    SpritesMap.MONSTERS_SKELETON = "m";//13
    SpritesMap.MONSTERS_TITAN    = "n";//14

    // коллекция по кодирующим символам номера тайлов в массиве  для слоя монстров
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_GHOST,    1 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_DRAGON,   2 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_GOBLIN,   3 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_HARPY,    4 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_DRUID,    5 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_VARNEY,   6 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_LICH,     7 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_MEDUSA,   8 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_MINOTAUR, 9 );
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_GENIE,    10);
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_FIGHTER,  11);
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_GARGOYLE, 12);
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_SKELETON, 13);
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_TITAN,    14);

    //массив по номерам тайлов их кодирующий символ для слоя монстров
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][1].tile_char  = SpritesMap.MONSTERS_GHOST;    //1_monster_ghost     привидение
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][2].tile_char  = SpritesMap.MONSTERS_DRAGON;   //2_monster_dragon    дракон
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][3].tile_char  = SpritesMap.MONSTERS_GOBLIN;   //3_monster_goblin    гоблин
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][4].tile_char  = SpritesMap.MONSTERS_HARPY;    //4_monster_harpy     гарпия
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][5].tile_char  = SpritesMap.MONSTERS_DRUID;    //5_monster_druid     друид
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][6].tile_char  = SpritesMap.MONSTERS_VARNEY;   //6_monster_varney    сет
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][7].tile_char  = SpritesMap.MONSTERS_LICH;     //7_monster_lich      лич
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][8].tile_char  = SpritesMap.MONSTERS_MEDUSA;   //8_monster_medusa    медуза
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][9].tile_char  = SpritesMap.MONSTERS_MINOTAUR; //9_monster_minotaur  минотавр
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][10].tile_char = SpritesMap.MONSTERS_GENIE;    //10_monster_genie    джин
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][11].tile_char = SpritesMap.MONSTERS_FIGHTER;  //11_monster_fighter  файтер(рыцарь)
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][12].tile_char = SpritesMap.MONSTERS_GARGOYLE; //12_monster_gargoyle гаргулия
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][13].tile_char = SpritesMap.MONSTERS_SKELETON; //13_monster_skeleton скелет
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][14].tile_char = SpritesMap.MONSTERS_TITAN;    //14_monster_titan    титан

//this.tile_Image ;// содержит картинку для отображения на карте
    //this.tile_path = " " ;//содержит путь по которому была загружена картинка
    //this.tile_char = " " ;//содержит символ соответствующий картинке на карте
    //this.tile_String = " " ;//содержит название картинки

    //массив по номерам тайлов их название для слоя монстров
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][1].tile_String  = "ghost(привидение)";    //1_monster_ghost     привидение
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][2].tile_String  = "dragon(дракон)";   //2_monster_dragon    дракон
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][3].tile_String  = "goblin(гоблин)";   //3_monster_goblin    гоблин
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][4].tile_String  = "harpy(гарпия)";    //4_monster_harpy     гарпия
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][5].tile_String  = "druid(друид)";    //5_monster_druid     друид
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][6].tile_String  = "varney(псоглавый)";   //6_monster_varney    сет
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][7].tile_String  = "lich(лич)";     //7_monster_lich      лич
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][8].tile_String  = "medusa(медуза)";   //8_monster_medusa    медуза
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][9].tile_String  = "minotaur(минотавр)"; //9_monster_minotaur  минотавр
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][10].tile_String = "genie(джин)";    //10_monster_genie    джин
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][11].tile_String = "fighter(файтер-рыцарь)";  //11_monster_fighter  файтер(рыцарь)
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][12].tile_String = "gargoyle(гаргулия)"; //12_monster_gargoyle гаргулия
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][13].tile_String = "skeleton(скелет)"; //13_monster_skeleton скелет
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][14].tile_String = "titan(титан)";    //14_monster_titan    титан


 // коллекция по именам тайлов для слоя монстров
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_GHOST,"ghost(привидение)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_DRAGON,"dragon(дракон)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_GOBLIN,"goblin(гоблин)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_HARPY,"harpy(гарпия)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_DRUID,"druid(друид)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_VARNEY,"varney(псоглавый)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_LICH,"lich(лич)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_MEDUSA,"medusa(медуза)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_MINOTAUR,"minotaur(минотавр)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_GENIE,"genie(джин)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_FIGHTER,"fighter(файтер-рыцарь)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_GARGOYLE,"gargoyle(гаргулия)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_SKELETON,"skeleton(скелет)");
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_TITAN,"titan(титан)");


//тестовый вывод
/*
let nameTilesM = SpritesMap.MONSTERS_GHOST;
console.log("MONSTERS");//
console.log("DD_HTML5_SpritesMaps.js:SpritesMap.MONSTERS_GHOST= " + nameTilesM);// "a"
console.log("DD_HTML5_SpritesMaps.js:SpritesMap.MonstersMapChars.get(nameTilesM)= " + SpritesMap.MonstersMapChars.get(nameTilesM));// 1
console.log("DD_HTML5_SpritesMaps.js:SpritesMap.tilesLoad[SpritesMap.MONSTERS][SpritesMap.MonstersMapChars.get(nameTilesM)]= " 
+ SpritesMap.tilesLoad[SpritesMap.MONSTERS][SpritesMap.MonstersMapChars.get(nameTilesM)]);// "a"
console.log("DD_HTML5_SpritesMaps.js:SpritesMap.MonstersMapString.get(nameTilesI)= " + SpritesMap.MonstersMapString.get(nameTilesM));// ring(кольцо)
*/
///////////////////////////////////////////////////////////////////

};
//============================================================================

//инициализируем массивы с картинками
  //============================================================================
  SpritesMap.loadAllSprite = function() {
    //SpritesMap.iniSprite(SpritesMap.REZERV,"");
    SpritesMap.iniSprite(SpritesMap.ADVENTURES,"image/DD_Map/adventures/advans_");
    SpritesMap.iniSprite(SpritesMap.GROUNDS,"image/DD_Map/grounds/gr_");
    SpritesMap.iniSprite(SpritesMap.ITEMS,"image/DD_Map/items/it_");
    SpritesMap.iniSprite(SpritesMap.MONSTERS,"image/DD_Map/monsters/mons_");

    SpritesMap.ini_tiles_char();
};
//============================================================================

//============================================================================
HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
HTML5_Canvas.context.strokeText ('script DD_HTML5_SpritesMaps.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

SpritesMap.isOk = "OK";//

//==============================================================================

/*
Методы и свойства:

new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.

*/