"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -1.08.2022-19.02.2023-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
     DDME_HTML5_Canvas.js
     DDME_HTML5_SpritesMap_2D.js
     DDME_Map_2D.js
   
  */

window.MapFrameDraw = {};
  MapFrameDraw.isOk = " ";//
  MapFrameDraw.NAME = "MapFrameDraw";//

  // Внешние ссылки
  MapFrameDraw.HTML5_Canvas_OUT;
  MapFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT;
  MapFrameDraw.Map_2D_OUT;
  MapFrameDraw.SpritesMap_2D_OUT;
  

  MapFrameDraw.checkbox_drawGrounds_checked;
  MapFrameDraw.checkbox_drawItems_checked;
  MapFrameDraw.checkbox_drawMonsters_checked;


  //=============================================================================
  MapFrameDraw.ini = function(){

      MapFrameDraw.HTML5_Canvas_OUT = HTML5_Canvas;
      MapFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
      MapFrameDraw.Map_2D_OUT = Map_2D;
      MapFrameDraw.SpritesMap_2D_OUT = SpritesMap_2D;

      MapFrameDraw.checkbox_drawGrounds_checked  = true;
      MapFrameDraw.checkbox_drawItems_checked    = true;
      MapFrameDraw.checkbox_drawMonsters_checked = true;
  }
  //=============================================================================

  //============================================================================
  MapFrameDraw.drawMap = function(_x0, _y0, _log = false) {

    let tipeTiles = 1  ;// сюда перезаписываем номер нужного тайла и потом отрисовывается тайл. и так для всех слоев
    let G_char_L  = " ";// сюда перезаписываем символ нужного тайла для земли
    let I_char_L  = " ";// сюда перезаписываем символ нужного тайла для предметов
    let M_char_L  = " ";// сюда перезаписываем символ нужного тайла для монстров
    let imageK    = " ";// сюда перезаписываем картинку тайла которую хотим нарисовать

    //MapFrameDraw.HTML5_Canvas_OUT.context.clearRect(_x0, _y0, MapFrameDraw.HTML5_Canvas_OUT.Id.width, MapFrameDraw.HTML5_Canvas_OUT.Id.height);
    MapFrameDraw.HTML5_Canvas_OUT.context_OUT.clearRect(_x0, _y0, MapFrameDraw.Map_2D_OUT.widthMax_px, MapFrameDraw.Map_2D_OUT.heightMax_px);
    
    for (let j = 0; j < MapFrameDraw.Map_2D_OUT.heightMaxTilesCount; j++) {
      for ( let i = 0; i < MapFrameDraw.Map_2D_OUT.widthMaxTilesCount; i++) { 
        
        //GROUNDS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(MapFrameDraw.Map_2D_OUT.MapArrayTile_2d) который мы рисуем
        G_char_L = MapFrameDraw.Map_2D_OUT.MapArrayTile_2d[i][j].G_char;// находим символ нужного тайла
        tipeTiles = MapFrameDraw.SpritesMap_2D_OUT.GroundsMapChars.get(G_char_L);// по символу находим номер нужного тайла
        
        if(_log == true)  console.log('m ' + i + ' ' + j + ' G_char_L = ' + G_char_L);

        imageK = MapFrameDraw.SpritesMap_2D_OUT.tilesLoad[MapFrameDraw.SpritesMap_2D_OUT.GROUNDS][tipeTiles].tile_Image_OUT;// находим картинку тайла которую хотим нарисовать

        if(MapFrameDraw.checkbox_drawGrounds_checked == true){
          // рисуем тайл на экране в заданном месте и заданного размера, MapFrameDraw.HTML5_Canvas_OUT.Image.DRAW_MIRROR
          MapFrameDraw.HTML5_Canvas_OUT.Image.drawImage(imageK, i * MapFrameDraw.Map_2D_OUT.tile.width + _x0, j * MapFrameDraw.Map_2D_OUT.tile.height + _y0, MapFrameDraw.Map_2D_OUT.tile.width, MapFrameDraw.Map_2D_OUT.tile.height);
        }
         // рисуем символ соответствующий тайлу
         //MapFrameDraw.HTML5_Canvas_OUT.context.strokeText (MapFrameDraw.Map_2D_OUT.MapArrayTile_2d[i][j].G_char, i * MapFrameDraw.Map_2D_OUT.tile.width + _x0, j * MapFrameDraw.Map_2D_OUT.tile.height + _y0 + 10);//

        //
        MapFrameDraw.HTML5_Canvas_OUT.Primitive.drawRect(i * MapFrameDraw.Map_2D_OUT.tile.width + _x0, j * MapFrameDraw.Map_2D_OUT.tile.height + _y0, MapFrameDraw.Map_2D_OUT.tile.width, MapFrameDraw.Map_2D_OUT.tile.height, 1, 'blue', 0);

        
        //--------------------------------------------------------------------------------------

       //ITEMS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(MapFrameDraw.Map_2D_OUT.MapArrayTile_2d) который мы рисуем
        I_char_L = MapFrameDraw.Map_2D_OUT.MapArrayTile_2d[i][j].I_char;// находим символ нужного тайла

        if(_log == true)  console.log('m ' + i + ' ' + j + ' I_char_L = ' + I_char_L);       
        
        if(I_char_L != "-"){
          tipeTiles = MapFrameDraw.SpritesMap_2D_OUT.ItemsMapChars.get(I_char_L);// по символу находим номер нужного тайла

          imageK = MapFrameDraw.SpritesMap_2D_OUT.tilesLoad[MapFrameDraw.SpritesMap_2D_OUT.ITEMS][tipeTiles].tile_Image_OUT;// находим картинку тайла которую хотим нарисовать
          
          if(MapFrameDraw.checkbox_drawItems_checked == true){
            // рисуем тайл на экране в заданном месте и заданного размера , MapFrameDraw.HTML5_Canvas_OUT.Image.DRAW_MIRROR
            MapFrameDraw.HTML5_Canvas_OUT.Image.drawImage(imageK, i * MapFrameDraw.Map_2D_OUT.tile.width + _x0, j * MapFrameDraw.Map_2D_OUT.tile.height + _y0, MapFrameDraw.Map_2D_OUT.tile.width, MapFrameDraw.Map_2D_OUT.tile.height);
          }
        }
        //--------------------------------------------------------------------------------------
       
       //MONSTERS--------------------------------------------------------------------------------------
        // смотрим тип тайла записанный в массиве тайлов(MapFrameDraw.Map_2D_OUT.MapArrayTile_2d) который мы рисуем
        M_char_L = MapFrameDraw.Map_2D_OUT.MapArrayTile_2d[i][j].M_char;// находим символ нужного тайла

        if(_log == true)  console.log('m ' + i + ' ' + j + ' M_char_L = ' + M_char_L);              
        
        if(M_char_L != "-"){       
          tipeTiles = MapFrameDraw.SpritesMap_2D_OUT.MonstersMapChars.get(M_char_L);// по символу находим номер нужного тайла

          imageK = MapFrameDraw.SpritesMap_2D_OUT.tilesLoad[MapFrameDraw.SpritesMap_2D_OUT.MONSTERS][tipeTiles].tile_Image_OUT;// находим картинку тайла которую хотим нарисовать

          if(MapFrameDraw.checkbox_drawMonsters_checked == true){
            // рисуем тайл на экране в заданном месте и заданного размера , MapFrameDraw.HTML5_Canvas_OUT.Image.DRAW_MIRROR
            MapFrameDraw.HTML5_Canvas_OUT.Image.drawImage(imageK, i * MapFrameDraw.Map_2D_OUT.tile.width + _x0, j * MapFrameDraw.Map_2D_OUT.tile.height + _y0, MapFrameDraw.Map_2D_OUT.tile.width, MapFrameDraw.Map_2D_OUT.tile.height);
          }
        }
        //-------------------------------------------------------------------------------------- 

      }
    }
    //MapFrameDraw.HTML5_Canvas_OUT.Primitive.drawRect(_x0, _y0, MapFrameDraw.Map_2D_OUT.widthMax_px,MapFrameDraw.Map_2D_OUT.heightMax_px, 1, 'blue', 0);
    //MapFrameDraw.HTML5_Canvas_OUT.context.clearRect(_x0, _y0, MapFrameDraw.Map_2D_OUT.widthMax_px, MapFrameDraw.Map_2D_OUT.heightMax_px);

  };
  //============================================================================

  //
  MapFrameDraw.ini();

  MapFrameDraw.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_MapFrameDraw.js+'); 

  MapFrameDraw.isOk = "OK";//