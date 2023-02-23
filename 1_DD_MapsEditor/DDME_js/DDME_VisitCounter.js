"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -12.02.2023-20.02.2023-
//


  /*
   НАЗНАЧЕНИЕ
    Счетчик работает с php сервером и sql базой

   ИСПОЛЬЗУЕТ МОДУЛИ
    DDME_HTML5_Canvas.js
    DDME_Pathes.js
   
   
  */

window.VisitCounter = {};
  VisitCounter.isOk = " ";//
  VisitCounter.NAME = "VisitCounter";//

  // Внешние ссылки
  VisitCounter.HTML5_Canvas_TestLoadedScripts_OUT;
  VisitCounter.Pathes_OUT;

  VisitCounter.visitСounter;

  VisitCounter.i;

//=============================================================================
VisitCounter.ini = function(){

  VisitCounter.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;
  VisitCounter.Pathes_OUT = Pathes;
  VisitCounter.i = 1;
}
//=============================================================================

  //=============================================================================
  VisitCounter.start = function(){
    try {

      VisitCounter.visitСounter = document.getElementById("visit_counter");
      
             // 1. Создаём новый объект XMLHttpRequest
             let xhr = new XMLHttpRequest();
      
             // 2. Конфигурируем его: GET-запрос на URL скрипта считающего посещения на страницу. 
             // Посещения записываются в SQL базе
             xhr.open('GET', VisitCounter.Pathes_OUT.VisitCounter_Path_to_CountRequestsGet_php, false);
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
                  console.log('DDME_VisitCounter.js:i = ' + VisitCounter.i + ' Запросов к странице = ' + xhr.response + ' ');
                  VisitCounter.visitСounter.value = ' Запросов к странице = ' + xhr.response + ' ';
                  VisitCounter.i = VisitCounter.i + 1;
             } //if (xhr.status != 200) {
         } catch(err) {
             console.log(' DDME_VisitCounter.js: err = ' + err);
         }//try {
  }
  //=============================================================================


  VisitCounter.ini();

  VisitCounter.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDME_VisitCounter.js+'); 

  VisitCounter.isOk = "OK";//