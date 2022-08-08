"use strict";
 // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
 // Last modified -06.08.2022-
 //

  /*
   НАЗНАЧЕНИЕ
   


   ИСПОЛЬЗУЕТ МОДУЛИ

   ВЫЗЫВАЕТСЯ В МОДУЛЯХ
  */

console.log("module TestModule.js start");

export let TestModule = {};

TestModule.setf = "";

TestModule.currentDate = new Date();
 
TestModule.getMessage = function(name_){
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрый вечер, " + name_;
    else if(hour > 10)
        return "Добрый день, " + name_;
    else
        return "Доброе утро, " + name_;
}

console.log("module TestModule.js end");