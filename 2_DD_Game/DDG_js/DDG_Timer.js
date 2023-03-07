"use strict";
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -08.08.2021-31.07.2022-06.03.2023-
//


  /*
   НАЗНАЧЕНИЕ

   ИСПОЛЬЗУЕТ МОДУЛИ
       DDG_HTML5_Canvas.js

  */

//==============================================================================

window.Timer = {};

  Timer.isOk = " ";//
  Timer.NAME = "Timer";//

  // Внешние ссылки
  Timer.HTML5_Canvas_TestLoadedScripts_OUT;


  Timer.ticksPerSecond;// количество циклов в секунду или по другому количество кадров в секунду
  // 1000 задержка в секунду. т.е тысяча милисекунд это секунда
  // 60 кадров это 0,01(6) sek = 16,(6) millis
  // 30 кадров это 0,03(3) sek = 30,(3) millis
  // 25 кадров это 0,04 sek = 40 millis
  // 10 кадров это 0,1 sek = 100 millis

  Timer.tickMustTimeMs;// время отведенное на один круг

  Timer.timeStartTickMs;// фиксируем время начала тика
  Timer.timeEndTickMs;// фиксируем время после тика
  Timer.timeBetweenEndMinStartTickMs;// время тика	в это время идет расчет и отрисовка игры
  Timer.timeThreadSleepGameMs;// время бездействия потока игры. мы все сделали и оставшееся время бездействуем

  Timer.timeOldStartTickMs;// время начала предыдущего тика нужно для вычисления времени полного круга цикла
  Timer.timeBetweenStartMinOldStartTickMs;// время прошедшее за полный круг цикла игры

  //=============================================================================
  Timer.ini = function(){

    Timer.HTML5_Canvas_TestLoadedScripts_OUT = HTML5_Canvas.TestLoadedScripts;


      Timer.ticksPerSecond = 0;// количество циклов в секунду или по другому количество кадров в секунду
            // 1000 задержка в секунду. т.е тысяча милисекунд это секунда
            // 60 кадров это 0,01(6) sek = 16,(6) millis
            // 30 кадров это 0,03(3) sek = 30,(3) millis
            // 25 кадров это 0,04 sek = 40 millis
            // 10 кадров это 0,1 sek = 100 millis

      Timer.tickMustTimeMs = 0;// время отведенное на один круг

      Timer.timeStartTickMs = 0;// фиксируем время начала тика
      Timer.timeEndTickMs = 0;// фиксируем время после тика
      Timer.timeBetweenEndMinStartTickMs = 0;// время тика	в это время идет расчет и отрисовка игры
      Timer.timeThreadSleepGameMs = 0;// время бездействия потока игры. мы все сделали и оставшееся время бездействуем

      Timer.timeOldStartTickMs = 0;// время начала предыдущего тика нужно для вычисления времени полного круга цикла
      Timer.timeBetweenStartMinOldStartTickMs = 0;// время прошедшее за полный круг цикла игры
  }
  //=============================================================================

    /*
     * обновляется только в одном месте цикла игры
     * в главном цикле окна перед всеми вычислениями и выводами
     * именно здесь вычисляем промежуток времени прошедший за весь цикл
     * включая и время сна
     * это время должно стремиться к tickMustTimeMs = 1000 /(long)ticksPerSecond
     * сейчас ticksPerSecond мы должны задавать 60 в сек
     * т.е tickMustTimeMs = 16,(6)  msec  как принято в файтингах
     * однако реально ticksPerSecond = 30  в сек т.е
     * tickMustTimeMs = 33,(3) msec так как иначе не успеваем все обсчитать
     */
  //============================================================================
  Timer.updateTimeBeforeTick = function() {

		     Timer.timeOldStartTickMs = Timer.timeStartTickMs;
		     Timer.timeStartTickMs = (new Date).getTime();
		     Timer.timeBetweenStartMinOldStartTickMs = Timer.timeStartTickMs
         - Timer.timeOldStartTickMs;
	 };
  //============================================================================

	/*
	 * timeAfterTickMs время прошедшее после обсчета игры
	 * тут мы не учитываем время сна
	 * высчитываем время сколько мы должны спать для того что бы получить
	 * нужное время одного цикла а это tickMustTimeMs
	 * если время сна timeSleepGame_RMs оказывается отрицательным или просто меньше 5
	 * то делаем его 5
	 * отрицательное когда задержка в цикле больше чем отведено на цикл
	 */
  //============================================================================
  Timer.updateTimeAfterTick = function() {

		     Timer.timeEndTickMs = (new Date).getTime();
		     Timer.timeBetweenEndMinStartTickMs = Timer.timeEndTickMs
         - Timer.timeStartTickMs;

		     Timer.timeThreadSleepGameMs = Timer.tickMustTimeMs
         - Timer.timeBetweenEndMinStartTickMs;
		     //System.out.println("Timer: timeBetweenTickMs = " + timeBetweenTickMs );
		     //System.out.println("Timer: timeSleepGame_RMs = " + timeSleepGame_RMs );

		     if( Timer.timeThreadSleepGameMs < 1){
			      Timer.timeThreadSleepGameMs = 1;
			      //System.out.println("Timer: timeThreadSleepGameMs(< 1) = " + timeThreadSleepGameMs );
		     };
       //		if( timeThreadSleepGameMs > 33){
       //			    timeThreadSleepGameMs = 33;
       //			    //System.out.println("Timer: timeThreadSleepGameMs(> 33) = " + timeThreadSleepGameMs );
       //		}
	};
  //============================================================================

 // стартовая инициализация таймера
 //=============================================================================
 Timer.ini_OUT = function(_ticksPerSecond) {

     Timer.timeStartTickMs = (new Date).getTime();
     Timer.ticksPerSecond = _ticksPerSecond;
    	Timer.tickMustTimeMs = 1000 / Timer.ticksPerSecond;//33,(3)   16,(6)  msec
     //alert("!");
     //alert(Timer.tickMustTimeMs);
     //alert(Timer.ticksPerSecond);
 };
 //=============================================================================

 Timer.ini();

 //=============================================================================
 Timer.HTML5_Canvas_TestLoadedScripts_OUT.testLoading ('DDG_Timer.js');

 Timer.isOk = "OK";//

 //=============================================================================