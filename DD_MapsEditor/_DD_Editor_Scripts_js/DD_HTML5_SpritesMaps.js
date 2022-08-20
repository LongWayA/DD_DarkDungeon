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
  SpritesMap.GroundsMapChars   = new Map();// для GROUNDS
  SpritesMap.ItemsMapChars     = new Map();// для ITEMS
  SpritesMap.MonstersMapChars  = new Map();// для MONSTERS

  // коллекции Map (по символу выдает имя тайла)
  SpritesMap.GroundsMapString  = new Map();// для GROUNDS
  SpritesMap.ItemsMapString    = new Map();// для ITEMS
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

 // ini Image
  //============================================================================
  SpritesMap.iniSprite = function(_type,_path){

    let length = SpritesMap.tilesLoad[_type].length

    //console.log(" _type = " + _type + " _path = " + _path);
    //console.log(" length = " + length);

        for(let i = 0; i < length; i++ ){
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
    SpritesMap.GROUND_NOTHING        = "-";//0 пустая область
    SpritesMap.GROUND_STONE          = "a";//1 непробиваемый камень
    SpritesMap.GROUND_SEND           = "b";//2 копаемый песок
    SpritesMap.GROUND_FLOOR          = "c";//3 проходимый пол
    SpritesMap.GROUND_WALL           = "d";//4 стена подземелья
    SpritesMap.GROUND_WALL_FORTIFED  = "e";//5 укрепленная стена подземелья 
    SpritesMap.GROUND_VEIN_GOLD      = "f";//6 золотая жила
    SpritesMap.GROUND_VEIN_GEM       = "g";//7 драгоценный камень жила

    // коллекция. по кодирующим символам номера тайлов в массиве  для слоя земли (GROUND_NOTHING -> 0)
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_NOTHING, 0); // пустая область
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_STONE, 1);   // непробиваемый камень
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_SEND, 2);    // копаемый песок
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_FLOOR, 3);   // проходимый пол
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_WALL, 4);    // стена подземелья
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_WALL_FORTIFED , 5);// укрепленная стена подземелья
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_VEIN_GOLD, 6);// золотая жила
    SpritesMap.GroundsMapChars.set(SpritesMap.GROUND_VEIN_GEM, 7); // драгоценный камень жила

    //массив по номерам тайлов их кодирующий символ для слоя земли
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][0].tile_char = SpritesMap.GROUND_NOTHING;// пустая область
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][1].tile_char = SpritesMap.GROUND_STONE;  // непробиваемый камень
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][2].tile_char = SpritesMap.GROUND_SEND;   // копаемый песок
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][3].tile_char = SpritesMap.GROUND_FLOOR;  // проходимый пол
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][4].tile_char = SpritesMap.GROUND_WALL ;  //стена подземелья
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][5].tile_char = SpritesMap.GROUND_WALL_FORTIFED ; // укрепленная стена подземелья
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][6].tile_char = SpritesMap.GROUND_VEIN_GOLD;//золотая жила
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][7].tile_char = SpritesMap.GROUND_VEIN_GEM; //драгоценный камень жила

    // массив по номерам тайлов  имена тайлов для слоя земли
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][0].tile_String = "nothing(пустая область)"; // пустая область
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][1].tile_String = "stone(камень)";           // непробиваемый камень
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][2].tile_String = "sand(копаемый песок)";    // копаемый песок
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][3].tile_String = "floor(проходимый пол)";   // проходимый пол
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][4].tile_String = "wall(стена подземелья) "; // стена подземелья
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][5].tile_String = "fortified wall(укрепленная стена подземелья) " ; //укрепленная стена подземелья
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][6].tile_String = "gold vein(золотая жила)"; //золотая жила
    SpritesMap.tilesLoad[SpritesMap.GROUNDS][7].tile_String = "gem vein(драгоценный камень жила)";//драгоценный камень жила

    // коллекция по кодирующим символам  имена тайлов для слоя земли
    SpritesMap.GroundsMapString.set(SpritesMap.NOTHING, "nothing(пустая область)");    // пустая область
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_STONE, "stone(камень)");         // непробиваемый камень
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_SEND, "sand(копаемый песок)");   // копаемый песок
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_FLOOR, "floor(проходимый пол)"); // проходимый пол
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_WALL, "wall(стена подземелья) ");// стена подземелья
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_WALL_FORTIFED , "fortified wall(укрепленная стена подземелья) ");//укрепленная стена подземелья
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_VEIN_GOLD, "gold vein(золотая жила)");//золотая жила
    SpritesMap.GroundsMapString.set(SpritesMap.GROUND_VEIN_GEM, "gem vein(драгоценный камень жила)");//драгоценный камень жила

    
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
    //ITEMS
    // так кодируются тайлы для слоя предметов
    SpritesMap.ITEMS_NOTHING     = "-";//0
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
    SpritesMap.ItemsMapChars.set(SpritesMap.ITEMS_NOTHING,  0);
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
    SpritesMap.tilesLoad[SpritesMap.ITEMS][0].tile_char  = SpritesMap.ITEMS_NOTHING;  // пустая область
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
    SpritesMap.tilesLoad[SpritesMap.ITEMS][0].tile_String  = "nothing(пустая область)";  //nothing(пустая область)
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
    SpritesMap.ItemsMapString.set(SpritesMap.ITEMS_NOTHING,  "nothing(пустая область)");
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
    SpritesMap.MONSTERS_NOTHING  = "-";//0
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
    SpritesMap.MonstersMapChars.set(SpritesMap.MONSTERS_NOTHING,  0 );
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
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][0].tile_char  = SpritesMap.MONSTERS_NOTHING;  //nothing(пустая область)
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
    SpritesMap.tilesLoad[SpritesMap.MONSTERS][0].tile_String  = "nothing(пустая область)";    //nothing(пустая область)
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
 SpritesMap.MonstersMapString.set(SpritesMap.MONSTERS_NOTHING,"nothing(пустая область)");
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
    SpritesMap.iniSprite(SpritesMap.ADVENTURES,"images_DD_Map/adventures/advans_");
    SpritesMap.iniSprite(SpritesMap.GROUNDS,"images_DD_Map/grounds/gr_");
    SpritesMap.iniSprite(SpritesMap.ITEMS,"images_DD_Map/items/it_");
    SpritesMap.iniSprite(SpritesMap.MONSTERS,"images_DD_Map/monsters/mons_");

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