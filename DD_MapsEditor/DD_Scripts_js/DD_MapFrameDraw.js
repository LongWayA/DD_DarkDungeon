"use strict";
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
   -

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
   
  */

window.MapFrameDraw = {};
  MapFrameDraw.isOk = " ";//

  MapFrameDraw.NAME = "MapFrameDraw";//

  //=============================================================================
  MapFrameDraw.ini_MapFrameDraw = function(){
      MapFrameDraw.checkbox_drawGrounds_checked  = true;
      MapFrameDraw.checkbox_drawItems_checked    = true;
      MapFrameDraw.checkbox_drawMonsters_checked = true;
  }
  //=============================================================================

  //============================================================================
  MapFrameDraw.drawMap = function(_left, _top, log = false) {

    let tipeTiles = 1  ;// сюда перезаписываем номер нужного тайла и потом отрисовывается тайл. и так для всех слоев
    let G_char_L  = " ";// сюда перезаписываем символ нужного тайла для земли
    let I_char_L  = " ";// сюда перезаписываем символ нужного тайла для предметов
    let M_char_L  = " ";// сюда перезаписываем символ нужного тайла для монстров
    let imageK    = " ";// сюда перезаписываем картинку тайла которую хотим нарисовать

    //HTML5_Canvas.context.clearRect(_left, _top, HTML5_Canvas.Id.width, HTML5_Canvas.Id.height);
    HTML5_Canvas.context.clearRect(_left, _top, Map.widthMax_px, Map.heightMax_px);
    
    for (let j = 0; j < Map.heightMaxTilesCount; j++) {
      for ( let i = 0; i < Map.widthMaxTilesCount; i++) { 
        
        //GROUNDS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(Map.MapArrayTile_2d) который мы рисуем
        G_char_L = Map.MapArrayTile_2d[i][j].G_char;// находим символ нужного тайла
        tipeTiles = SpritesMap.GroundsMapChars.get(G_char_L);// по символу находим номер нужного тайла
        
        if(log == true)  console.log('m ' + i + ' ' + j + ' G_char_L = ' + G_char_L);

        imageK = SpritesMap.tilesLoad[SpritesMap.GROUNDS][tipeTiles].tile_Image;// находим картинку тайла которую хотим нарисовать

        if(MapFrameDraw.checkbox_drawGrounds_checked == true){
          // рисуем тайл на экране в заданном месте и заданного размера
          HTML5_Canvas.Image.drawImageG(imageK, i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height);
        }
         // рисуем символ соответствующий тайлу
         //HTML5_Canvas.context.strokeText (Map.MapArrayTile_2d[i][j].G_char, i * Map.tile.width + _left, j * Map.tile.height + _top + 10);//

        //
        HTML5_Canvas.Primitive.drawRect(i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height, 1, 'blue', 0);

        
        //--------------------------------------------------------------------------------------

       //ITEMS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(Map.MapArrayTile_2d) который мы рисуем
        I_char_L = Map.MapArrayTile_2d[i][j].I_char;// находим символ нужного тайла
        if(log == true)  console.log('m ' + i + ' ' + j + ' I_char_L = ' + I_char_L);       
        
        if(I_char_L != "-"){
          tipeTiles = SpritesMap.ItemsMapChars.get(I_char_L);// по символу находим номер нужного тайла

          imageK = SpritesMap.tilesLoad[SpritesMap.ITEMS][tipeTiles].tile_Image;// находим картинку тайла которую хотим нарисовать
          
          if(MapFrameDraw.checkbox_drawItems_checked == true){
            // рисуем тайл на экране в заданном месте и заданного размера
            HTML5_Canvas.Image.drawImageG(imageK, i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height);
          }
        }
        //--------------------------------------------------------------------------------------
       
       //MONSTERS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(Map.MapArrayTile_2d) который мы рисуем
        M_char_L = Map.MapArrayTile_2d[i][j].M_char;// находим символ нужного тайла
        if(log == true)  console.log('m ' + i + ' ' + j + ' M_char_L = ' + M_char_L);              
        if(M_char_L != "-"){       
          tipeTiles = SpritesMap.MonstersMapChars.get(M_char_L);// по символу находим номер нужного тайла

          imageK = SpritesMap.tilesLoad[SpritesMap.MONSTERS][tipeTiles].tile_Image;// находим картинку тайла которую хотим нарисовать

          if(MapFrameDraw.checkbox_drawMonsters_checked == true){
            // рисуем тайл на экране в заданном месте и заданного размера
            HTML5_Canvas.Image.drawImageG(imageK, i * Map.tile.width + _left, j * Map.tile.height + _top, Map.tile.width, Map.tile.height);
          }
        }
        //-------------------------------------------------------------------------------------- 

      }
    }
    HTML5_Canvas.Primitive.drawRect(_left, _top, Map.widthMax_px,Map.heightMax_px, 1, 'blue', 0);
    //HTML5_Canvas.context.clearRect(_left, _top, Map.widthMax_px, Map.heightMax_px);

  };
  //============================================================================

  //
  MapFrameDraw.ini_MapFrameDraw();


 //=============================================================================
 HTML5_Canvas.yT = HTML5_Canvas.yT + HTML5_Canvas.dyT;//
 HTML5_Canvas.context.strokeText ('script DD_MapFrameDraw.js loaded', HTML5_Canvas.xT, HTML5_Canvas.yT);

 MapFrameDraw.isOk = "OK";//
 //=============================================================================