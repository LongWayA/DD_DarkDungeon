"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -12.02.2023-20.02.2023-2.04m.2023-
//


  /*
   НАЗНАЧЕНИЕ
    Счетчик работает с php сервером и sql базой

   ИСПОЛЬЗУЕТ МОДУЛИ
    DDME_HTML5_Canvas.js
    DDME_Pathes.js
   
   
  */

    import { HTML5_Canvas } from './DDG_HTML5_Canvas.js';
    import { Pathes } from './DDME_Pathes.js';

    let visitСounter : any = document.getElementById("visit_counter");

// Внешние ссылки
var Out = {
  
  HTML5_Canvas_TestLoadedScripts : HTML5_Canvas.TestLoadedScripts,
  Pathes : Pathes,

  //=============================================================================
  ini : function() : void{
    //console.log('SaveInServer.NAME = ' + SaveInServer.NAME);
  },
  //=============================================================================
};


var VisitCounter = {

  isOk : " ",//
  NAME : "VisitCounter",//
  i : 0,

 //=============================================================================
 ini : function(){

 },
 //=============================================================================

  //=============================================================================
  start : function(){
    try {
      
             // 1. Создаём новый объект XMLHttpRequest
             let xhr = new XMLHttpRequest();
      
             // 2. Конфигурируем его: GET-запрос на URL скрипта считающего посещения на страницу. 
             // Посещения записываются в SQL базе
             xhr.open('GET', Out.Pathes.VisitCounter_Path_to_CountRequestsGet_php, false);
             //xhr.open('GET', VisitCounter.Pathes_OUT.VisitCounter_Path_to_CountRequestsGet_php, true);                     
             // 3. Отсылаем запрос
             xhr.send();
                              
             // 4. Если код ответа сервера не 200, то это ошибка
             if (xhr.status != 200) {
                  // обработать ошибку
                  //alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
                  //document.write(' err ' + xhr.status + ': ' + xhr.statusText);//
                  console.log('DDME_VisitCounter.js: err ' + xhr.status + ': ' + xhr.statusText);
             } else {
                  // вывести результат
                  //document.write(' Запросов к странице = ' + xhr.response);// 
                  //console.log('DDME_VisitCounter.js:i = ' + VisitCounter.i + ' Запросов к странице = ' + xhr.response + ' ');
                  visitСounter.value = ' Запросов к странице = ' + xhr.response + ' ';
                  VisitCounter.i = VisitCounter.i + 1;
             } //if (xhr.status != 200) {
         } catch(err) {
             console.log(' DDME_VisitCounter.js: err = ' + err);
         }//try {
  }
  //=============================================================================
};//VisitCounter

  VisitCounter.ini();

  Out.HTML5_Canvas_TestLoadedScripts.testLoading ('DDME_VisitCounter.js'); 

  VisitCounter.isOk = "OK";//

  export { VisitCounter };