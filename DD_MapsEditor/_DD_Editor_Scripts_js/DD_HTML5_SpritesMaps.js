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

window.SpritesMap_2D = {};

  SpritesMap_2D.isOk = " ";//

  SpritesMap_2D.NAME = "SpritesMaps_2D";//

  SpritesMap_2D.REZERV           = 0;
  SpritesMap_2D.ADVENTURES       = 1;
  SpritesMap_2D.GROUNDS          = 2;
  SpritesMap_2D.ITEMS            = 3;
  SpritesMap_2D.MONSTERS         = 4;

  SpritesMap_2D.REZERV_MAX_COUNT         = 1;
  SpritesMap_2D.ADVENTURES_MAX_COUNT     = 25;
  SpritesMap_2D.GROUNDS_MAX_COUNT        = 8;
  SpritesMap_2D.ITEMS_MAX_COUNT          = 20;
  SpritesMap_2D.MONSTERS_MAX_COUNT       = 15;


  
  // Массив содержит картинки-тайлы для отображения на карте
  SpritesMap_2D.tilesLoad = new Array(5);
  SpritesMap_2D.tilesLoad[SpritesMap_2D.ADVENTURES] = new Array(SpritesMap_2D.ADVENTURES_MAX_COUNT);
  SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS]    = new Array(SpritesMap_2D.GROUNDS_MAX_COUNT );
  SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS]      = new Array(SpritesMap_2D.ITEMS_MAX_COUNT);
  SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS]   = new Array(SpritesMap_2D.MONSTERS_MAX_COUNT);

  // коллекции Map (по символу выдает номер тайла в массиве)
  SpritesMap_2D.GroundsMapChars   = new Map();// для GROUNDS
  SpritesMap_2D.ItemsMapChars     = new Map();// для ITEMS
  SpritesMap_2D.MonstersMapChars  = new Map();// для MONSTERS

  // коллекции Map (по символу выдает имя тайла)
  SpritesMap_2D.GroundsMapString  = new Map();// для GROUNDS
  SpritesMap_2D.ItemsMapString    = new Map();// для ITEMS
  SpritesMap_2D.MonstersMapString = new Map();// для MONSTERS


  // get Height Sprite
  //============================================================================
  SpritesMap_2D.getHeightSprite = function(_type, _index) {

      let height = SpritesMap_2D.tilesLoad[_type][_index].tile_Image.height;
      return height;
  };
  //============================================================================

  // get Width Sprite
  //============================================================================
  SpritesMap_2D.getWidthSprite = function(_type, _index) {

      let width = SpritesMap_2D.tilesLoad[_type][_index].tile_Image.width;
      return width;
  };
  //============================================================================

  // get Left Sprite
  //============================================================================
  SpritesMap_2D.getLeftSprite = function(_type, _index, _middle) {

      let width = SpritesMap_2D.tilesLoad[_type][_index].tile_Image.width;
      let left = _middle - width/2;
      return left;
  };
  //============================================================================

 // ini Image
  //============================================================================
  SpritesMap_2D.iniSprite = function(_type,_path){

    let length = SpritesMap_2D.tilesLoad[_type].length

    //console.log(" _type = " + _type + " _path = " + _path);
    //console.log(" length = " + length);

        for(let i = 0; i < length; i++ ){
          SpritesMap_2D.tilesLoad[_type][i]= new Tile_for_load_Image_C();
          SpritesMap_2D.tilesLoad[_type][i].tile_Image= new Image();
          SpritesMap_2D.tilesLoad[_type][i].tile_Image.src = _path + i + ".png";
          SpritesMap_2D.tilesLoad[_type][i].tile_path      = _path + i + ".png";
           //console.log(" OK " + _path + i + ".png");
         };
  };
  //============================================================================

  //инициализируем массивы с картинками
  //============================================================================
  SpritesMap_2D.ini_tiles_char = function() {

///////////////////////////////////////////////////////////////////
    //GROUNDS
    // так кодируются тайлы для слоя земли
    SpritesMap_2D.GROUND_NOTHING        = "-";//0 пустая область
    SpritesMap_2D.GROUND_STONE          = "a";//1 непробиваемый камень
    SpritesMap_2D.GROUND_SEND           = "b";//2 копаемый песок
    SpritesMap_2D.GROUND_FLOOR          = "c";//3 проходимый пол
    SpritesMap_2D.GROUND_WALL           = "d";//4 стена подземелья
    SpritesMap_2D.GROUND_WALL_FORTIFED  = "e";//5 укрепленная стена подземелья 
    SpritesMap_2D.GROUND_VEIN_GOLD      = "f";//6 золотая жила
    SpritesMap_2D.GROUND_VEIN_GEM       = "g";//7 драгоценный камень жила

    // коллекция. по кодирующим символам номера тайлов в массиве  для слоя земли (GROUND_NOTHING -> 0)
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_NOTHING, 0); // пустая область
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_STONE, 1);   // непробиваемый камень
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_SEND, 2);    // копаемый песок
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_FLOOR, 3);   // проходимый пол
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_WALL, 4);    // стена подземелья
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_WALL_FORTIFED , 5);// укрепленная стена подземелья
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_VEIN_GOLD, 6);// золотая жила
    SpritesMap_2D.GroundsMapChars.set(SpritesMap_2D.GROUND_VEIN_GEM, 7); // драгоценный камень жила

    //массив по номерам тайлов их кодирующий символ для слоя земли
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][0].tile_char = SpritesMap_2D.GROUND_NOTHING;// пустая область
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][1].tile_char = SpritesMap_2D.GROUND_STONE;  // непробиваемый камень
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][2].tile_char = SpritesMap_2D.GROUND_SEND;   // копаемый песок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][3].tile_char = SpritesMap_2D.GROUND_FLOOR;  // проходимый пол
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][4].tile_char = SpritesMap_2D.GROUND_WALL ;  //стена подземелья
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][5].tile_char = SpritesMap_2D.GROUND_WALL_FORTIFED ; // укрепленная стена подземелья
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][6].tile_char = SpritesMap_2D.GROUND_VEIN_GOLD;//золотая жила
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][7].tile_char = SpritesMap_2D.GROUND_VEIN_GEM; //драгоценный камень жила

    // массив по номерам тайлов  имена тайлов для слоя земли
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][0].tile_String = "nothing(пустая область)"; // пустая область
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][1].tile_String = "stone(камень)";           // непробиваемый камень
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][2].tile_String = "sand(копаемый песок)";    // копаемый песок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][3].tile_String = "floor(проходимый пол)";   // проходимый пол
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][4].tile_String = "wall(стена подземелья) "; // стена подземелья
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][5].tile_String = "fortified wall(укрепленная стена подземелья) " ; //укрепленная стена подземелья
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][6].tile_String = "gold vein(золотая жила)"; //золотая жила
    SpritesMap_2D.tilesLoad[SpritesMap_2D.GROUNDS][7].tile_String = "gem vein(драгоценный камень жила)";//драгоценный камень жила

    // коллекция по кодирующим символам  имена тайлов для слоя земли
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.NOTHING, "nothing(пустая область)");    // пустая область
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.GROUND_STONE, "stone(камень)");         // непробиваемый камень
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.GROUND_SEND, "sand(копаемый песок)");   // копаемый песок
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.GROUND_FLOOR, "floor(проходимый пол)"); // проходимый пол
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.GROUND_WALL, "wall(стена подземелья) ");// стена подземелья
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.GROUND_WALL_FORTIFED , "fortified wall(укрепленная стена подземелья) ");//укрепленная стена подземелья
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.GROUND_VEIN_GOLD, "gold vein(золотая жила)");//золотая жила
    SpritesMap_2D.GroundsMapString.set(SpritesMap_2D.GROUND_VEIN_GEM, "gem vein(драгоценный камень жила)");//драгоценный камень жила

    
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
    //ITEMS
    // так кодируются тайлы для слоя предметов
    SpritesMap_2D.ITEMS_NOTHING     = "-";//0
    SpritesMap_2D.ITEMS_RING        = "a";//1
    SpritesMap_2D.ITEMS_SWORD_1     = "b";//2
    SpritesMap_2D.ITEMS_SWORD_2     = "c";//3
    SpritesMap_2D.ITEMS_SWORD_3     = "d";//4
    SpritesMap_2D.ITEMS_SHIELD      = "e";//5
    SpritesMap_2D.ITEMS_ARMOR_1     = "f";//6
    SpritesMap_2D.ITEMS_ARMOR_2     = "g";//7
    SpritesMap_2D.ITEMS_ARMOR_3     = "h";//8
    SpritesMap_2D.ITEMS_ARMOR_4     = "i";//9
    SpritesMap_2D.ITEMS_ARMOR_5     = "j";//10
    SpritesMap_2D.ITEMS_ARMOR_6     = "k";//11
    SpritesMap_2D.ITEMS_FLOWER_1    = "l";//12
    SpritesMap_2D.ITEMS_FLOWER_2    = "m";//13
    SpritesMap_2D.ITEMS_FLOWER_3    = "n";//14
    SpritesMap_2D.ITEMS_FLOWER_4    = "o";//15
    SpritesMap_2D.ITEMS_FLOWER_5    = "p";//16
    SpritesMap_2D.ITEMS_FLOWER_6    = "q";//17
    SpritesMap_2D.ITEMS_POTION      = "r";//18
    SpritesMap_2D.ITEMS_DOOR        = "s";//19

    // коллекция по кодирующим символам номера тайлов в массиве  для слоя предметов
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_NOTHING,  0);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_RING,     1);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_SWORD_1,  2);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_SWORD_2,  3);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_SWORD_3,  4);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_SHIELD,   5);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_ARMOR_1,  6);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_ARMOR_2,  7);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_ARMOR_3,  8);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_ARMOR_4,  9);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_ARMOR_5,  10);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_ARMOR_6,  11);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_FLOWER_1, 12);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_FLOWER_2, 13);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_FLOWER_3, 14);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_FLOWER_4, 15);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_FLOWER_5, 16);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_FLOWER_6, 17);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_POTION,   18);
    SpritesMap_2D.ItemsMapChars.set(SpritesMap_2D.ITEMS_DOOR,     19);

    //массив по номерам тайлов их кодирующий символ для слоя предметов
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][0].tile_char  = SpritesMap_2D.ITEMS_NOTHING;  // пустая область
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][1].tile_char  = SpritesMap_2D.ITEMS_RING;  //1-1_item_ring    кольцо
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][2].tile_char  = SpritesMap_2D.ITEMS_SWORD_1;  //2-2_item_sword   первый меч
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][3].tile_char  = SpritesMap_2D.ITEMS_SWORD_2;  //3-2_item_sword2  второй меч
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][4].tile_char  = SpritesMap_2D.ITEMS_SWORD_3;  //4-2_item_sword3  третий меч - не прозрачный фон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][5].tile_char  = SpritesMap_2D.ITEMS_SHIELD;  //5-3_item_shield  щит
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][6].tile_char  = SpritesMap_2D.ITEMS_ARMOR_1;  //6-4_item_armor   первый доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][7].tile_char  = SpritesMap_2D.ITEMS_ARMOR_2;  //7-4_item_armor2  второй доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][8].tile_char  = SpritesMap_2D.ITEMS_ARMOR_3;  //8-4_item_armor3  третий доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][9].tile_char  = SpritesMap_2D.ITEMS_ARMOR_4;  //9-4_item_armor4  четвертый доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][10].tile_char = SpritesMap_2D.ITEMS_ARMOR_5;  //10-4_item_armor5 пятый доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][11].tile_char = SpritesMap_2D.ITEMS_ARMOR_6;  //11-4_item_armor6 шестой доспех  - не прозрачный фон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][12].tile_char = SpritesMap_2D.ITEMS_FLOWER_1;  //12-5_item_flower первый цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][13].tile_char = SpritesMap_2D.ITEMS_FLOWER_2;  //13-5_item_flower2 второй цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][14].tile_char = SpritesMap_2D.ITEMS_FLOWER_3;  //14-5_item_flower3 третий цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][15].tile_char = SpritesMap_2D.ITEMS_FLOWER_4;  //15-5_item_flower4 четвертый цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][16].tile_char = SpritesMap_2D.ITEMS_FLOWER_5;  //16-5_item_flower5 пятый цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][17].tile_char = SpritesMap_2D.ITEMS_FLOWER_6;  //17-5_item_flower6 шестой цветок  - не прозрачный фон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][18].tile_char = SpritesMap_2D.ITEMS_POTION;  //18-6_item_potion  элексир
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][19].tile_char = SpritesMap_2D.ITEMS_DOOR;  //19-7_item_door    дверь

    //массив по номерам тайлов их название для слоя предметов
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][0].tile_String  = "nothing(пустая область)";  //nothing(пустая область)
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][1].tile_String  = "ring(кольцо)";  //1-1_item_ring    кольцо
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][2].tile_String  = "sword(первый меч)";  //2-2_item_sword   первый меч
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][3].tile_String  = "sword2(второй меч)";  //3-2_item_sword2  второй меч
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][4].tile_String  = "sword3(третий меч-не прозрачный фон)";  //4-2_item_sword3  третий меч - не прозрачный фон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][5].tile_String  = "shield(щит)";  //5-3_item_shield  щит
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][6].tile_String  = "armor(первый доспех)";  //6-4_item_armor   первый доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][7].tile_String  = "armor2(второй доспех)";  //7-4_item_armor2  второй доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][8].tile_String  = "armor3(третий доспех)";  //8-4_item_armor3  третий доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][9].tile_String  = "armor4(четвертый доспех)";  //9-4_item_armor4  четвертый доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][10].tile_String = "armor5(пятый доспех)";  //10-4_item_armor5 пятый доспех
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][11].tile_String = "armor6(шестой доспех-не прозрачный фон)";  //11-4_item_armor6 шестой доспех  - не прозрачный фон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][12].tile_String = "flower(первый цветок)";  //12-5_item_flower первый цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][13].tile_String = "flower2(второй цветок)";  //13-5_item_flower2 второй цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][14].tile_String = "flower3(третий цветок)";  //14-5_item_flower3 третий цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][15].tile_String = "flower4(четвертый цветок)";  //15-5_item_flower4 четвертый цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][16].tile_String = "flower5(пятый цветок)";  //16-5_item_flower5 пятый цветок
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][17].tile_String = "flower6(шестой цветок-не прозрачный фон)";  //17-5_item_flower6 шестой цветок  - не прозрачный фон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][18].tile_String = "potion(элексир)";  //18-6_item_potion  элексир
    SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][19].tile_String = "door(дверь)";  //19-7_item_door    дверь

    // коллекция по именам тайлов для слоя предметов
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_NOTHING,  "nothing(пустая область)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_RING,     "ring(кольцо)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_SWORD_1,  "sword(первый меч)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_SWORD_2,  "sword2(второй меч)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_SWORD_3,  "sword3(третий меч-не прозрачный фон)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_SHIELD,   "shield(щит)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_ARMOR_1,  "armor(первый доспех)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_ARMOR_2,  "armor2(второй доспех)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_ARMOR_3,  "armor3(третий доспех)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_ARMOR_4,  "armor4(четвертый доспех)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_ARMOR_5,  "armor5(пятый доспех)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_ARMOR_6,  "armor6(шестой доспех-не прозрачный фон)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_FLOWER_1, "flower(первый цветок)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_FLOWER_2, "flower2(второй цветок)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_FLOWER_3, "flower3(третий цветок)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_FLOWER_4, "flower4(четвертый цветок)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_FLOWER_5, "flower5(пятый цветок)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_FLOWER_6, "flower6(шестой цветок-не прозрачный фон)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_POTION,   "potion(элексир)");
    SpritesMap_2D.ItemsMapString.set(SpritesMap_2D.ITEMS_DOOR,     "door(дверь)");

    //тестовый вывод
    /*
    let nameTilesI = SpritesMap_2D.ITEMS_RING;
    console.log("ITEMS");//
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.ITEMS_RING= " + nameTilesI);// "a"
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.ItemsMapChars.get(nameTilesI)= " + SpritesMap_2D.ItemsMapChars.get(nameTilesI));// 1
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][SpritesMap_2D.ItemsMapChars.get(nameTilesI)]= " 
    + SpritesMap_2D.tilesLoad[SpritesMap_2D.ITEMS][SpritesMap_2D.ItemsMapChars.get(nameTilesI)]);// "a"
    console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.ItemsMapString.get(nameTilesI)= " + SpritesMap_2D.ItemsMapString.get(nameTilesI));// ring(кольцо)
    */
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
    //MONSTERS
    // так кодируются тайлы для слоя монстров
    SpritesMap_2D.MONSTERS_NOTHING  = "-";//0
    SpritesMap_2D.MONSTERS_GHOST    = "a";//1
    SpritesMap_2D.MONSTERS_DRAGON   = "b";//2
    SpritesMap_2D.MONSTERS_GOBLIN   = "c";//3
    SpritesMap_2D.MONSTERS_HARPY    = "d";//4
    SpritesMap_2D.MONSTERS_DRUID    = "e";//5
    SpritesMap_2D.MONSTERS_VARNEY   = "f";//6
    SpritesMap_2D.MONSTERS_LICH     = "g";//7
    SpritesMap_2D.MONSTERS_MEDUSA   = "h";//8
    SpritesMap_2D.MONSTERS_MINOTAUR = "i";//9
    SpritesMap_2D.MONSTERS_GENIE    = "j";//10
    SpritesMap_2D.MONSTERS_FIGHTER  = "k";//11
    SpritesMap_2D.MONSTERS_GARGOYLE = "l";//12
    SpritesMap_2D.MONSTERS_SKELETON = "m";//13
    SpritesMap_2D.MONSTERS_TITAN    = "n";//14

    // коллекция по кодирующим символам номера тайлов в массиве  для слоя монстров
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_NOTHING,  0 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_GHOST,    1 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_DRAGON,   2 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_GOBLIN,   3 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_HARPY,    4 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_DRUID,    5 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_VARNEY,   6 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_LICH,     7 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_MEDUSA,   8 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_MINOTAUR, 9 );
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_GENIE,    10);
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_FIGHTER,  11);
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_GARGOYLE, 12);
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_SKELETON, 13);
    SpritesMap_2D.MonstersMapChars.set(SpritesMap_2D.MONSTERS_TITAN,    14);

    //массив по номерам тайлов их кодирующий символ для слоя монстров
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][0].tile_char  = SpritesMap_2D.MONSTERS_NOTHING;  //nothing(пустая область)
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][1].tile_char  = SpritesMap_2D.MONSTERS_GHOST;    //1_monster_ghost     привидение
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][2].tile_char  = SpritesMap_2D.MONSTERS_DRAGON;   //2_monster_dragon    дракон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][3].tile_char  = SpritesMap_2D.MONSTERS_GOBLIN;   //3_monster_goblin    гоблин
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][4].tile_char  = SpritesMap_2D.MONSTERS_HARPY;    //4_monster_harpy     гарпия
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][5].tile_char  = SpritesMap_2D.MONSTERS_DRUID;    //5_monster_druid     друид
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][6].tile_char  = SpritesMap_2D.MONSTERS_VARNEY;   //6_monster_varney    сет
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][7].tile_char  = SpritesMap_2D.MONSTERS_LICH;     //7_monster_lich      лич
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][8].tile_char  = SpritesMap_2D.MONSTERS_MEDUSA;   //8_monster_medusa    медуза
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][9].tile_char  = SpritesMap_2D.MONSTERS_MINOTAUR; //9_monster_minotaur  минотавр
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][10].tile_char = SpritesMap_2D.MONSTERS_GENIE;    //10_monster_genie    джин
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][11].tile_char = SpritesMap_2D.MONSTERS_FIGHTER;  //11_monster_fighter  файтер(рыцарь)
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][12].tile_char = SpritesMap_2D.MONSTERS_GARGOYLE; //12_monster_gargoyle гаргулия
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][13].tile_char = SpritesMap_2D.MONSTERS_SKELETON; //13_monster_skeleton скелет
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][14].tile_char = SpritesMap_2D.MONSTERS_TITAN;    //14_monster_titan    титан

//this.tile_Image ;// содержит картинку для отображения на карте
    //this.tile_path = " " ;//содержит путь по которому была загружена картинка
    //this.tile_char = " " ;//содержит символ соответствующий картинке на карте
    //this.tile_String = " " ;//содержит название картинки

    //массив по номерам тайлов их название для слоя монстров
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][0].tile_String  = "nothing(пустая область)";    //nothing(пустая область)
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][1].tile_String  = "ghost(привидение)";    //1_monster_ghost     привидение
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][2].tile_String  = "dragon(дракон)";   //2_monster_dragon    дракон
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][3].tile_String  = "goblin(гоблин)";   //3_monster_goblin    гоблин
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][4].tile_String  = "harpy(гарпия)";    //4_monster_harpy     гарпия
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][5].tile_String  = "druid(друид)";    //5_monster_druid     друид
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][6].tile_String  = "varney(псоглавый)";   //6_monster_varney    сет
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][7].tile_String  = "lich(лич)";     //7_monster_lich      лич
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][8].tile_String  = "medusa(медуза)";   //8_monster_medusa    медуза
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][9].tile_String  = "minotaur(минотавр)"; //9_monster_minotaur  минотавр
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][10].tile_String = "genie(джин)";    //10_monster_genie    джин
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][11].tile_String = "fighter(файтер-рыцарь)";  //11_monster_fighter  файтер(рыцарь)
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][12].tile_String = "gargoyle(гаргулия)"; //12_monster_gargoyle гаргулия
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][13].tile_String = "skeleton(скелет)"; //13_monster_skeleton скелет
    SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][14].tile_String = "titan(титан)";    //14_monster_titan    титан


 // коллекция по именам тайлов для слоя монстров
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_NOTHING,"nothing(пустая область)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_GHOST,"ghost(привидение)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_DRAGON,"dragon(дракон)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_GOBLIN,"goblin(гоблин)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_HARPY,"harpy(гарпия)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_DRUID,"druid(друид)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_VARNEY,"varney(псоглавый)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_LICH,"lich(лич)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_MEDUSA,"medusa(медуза)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_MINOTAUR,"minotaur(минотавр)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_GENIE,"genie(джин)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_FIGHTER,"fighter(файтер-рыцарь)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_GARGOYLE,"gargoyle(гаргулия)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_SKELETON,"skeleton(скелет)");
 SpritesMap_2D.MonstersMapString.set(SpritesMap_2D.MONSTERS_TITAN,"titan(титан)");


//тестовый вывод
/*
let nameTilesM = SpritesMap_2D.MONSTERS_GHOST;
console.log("MONSTERS");//
console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.MONSTERS_GHOST= " + nameTilesM);// "a"
console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.MonstersMapChars.get(nameTilesM)= " + SpritesMap_2D.MonstersMapChars.get(nameTilesM));// 1
console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][SpritesMap_2D.MonstersMapChars.get(nameTilesM)]= " 
+ SpritesMap_2D.tilesLoad[SpritesMap_2D.MONSTERS][SpritesMap_2D.MonstersMapChars.get(nameTilesM)]);// "a"
console.log("DD_HTML5_SpritesMaps.js:SpritesMap_2D.MonstersMapString.get(nameTilesI)= " + SpritesMap_2D.MonstersMapString.get(nameTilesM));// ring(кольцо)
*/
///////////////////////////////////////////////////////////////////

};
//============================================================================

//инициализируем массивы с картинками
  //============================================================================
  SpritesMap_2D.loadAllSprite = function() {
    //SpritesMap_2D.iniSprite(SpritesMap_2D.REZERV,"");
    SpritesMap_2D.iniSprite(SpritesMap_2D.ADVENTURES,"images_DD_Map/adventures/advans_");
    SpritesMap_2D.iniSprite(SpritesMap_2D.GROUNDS,"images_DD_Map/grounds/gr_");
    SpritesMap_2D.iniSprite(SpritesMap_2D.ITEMS,"images_DD_Map/items/it_");
    SpritesMap_2D.iniSprite(SpritesMap_2D.MONSTERS,"images_DD_Map/monsters/mons_");

    SpritesMap_2D.ini_tiles_char();
};
//============================================================================

HTML5_Canvas.TestLoadedScripts.testLoading ('DD_HTML5_SpritesMaps.js'); 

SpritesMap_2D.isOk = "OK";//

/*
Методы и свойства:

new Map() – создаёт коллекцию.
Map_2D.set(key, value) – записывает по ключу key значение value.
Map_2D.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
Map_2D.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
Map_2D.delete(key) – удаляет элемент по ключу key.
Map_2D.clear() – очищает коллекцию от всех элементов.
Map_2D.size – возвращает текущее количество элементов.

*/