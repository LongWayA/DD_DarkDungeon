<?php 
    // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
    // -050822-140822-240223

    /*
    НАЗНАЧЕНИЕ
       Пишем на сервер карту переданную клиентом.

    ИСПОЛЬЗУЕТ МОДУЛИ
       DDME_Timer.php
    */
 try {
    require_once('DDME_Timer.php');
    $timer = new Timer();
    
    $nameUserMapValue       = htmlspecialchars($_POST["nameUserMapValue"]); 
    $saveMapStringInServer  = htmlspecialchars($_POST["saveMapStringInServer"]);
    
    // формируем имя файла: имя файла = путь до файла на сервере(файлы пишем в папку 2_DD_DarkDungeon_Saved_Maps) 
    // + название карты от клиента + уникальное число + расширение .map
    $file =  $_SERVER['DOCUMENT_ROOT']. '/2_DarkDungeon_Saved_Maps/' . $nameUserMapValue .'_'. $timer->microtime_ID. '.map';
    
    // Добавляем в файл
    $current = $saveMapStringInServer;
    
    // Пишем содержимое в файл
    $file_err = file_put_contents($file, $current);
    
    echo "file_put = " . $file_err;

 } catch (Throwable $e) {
    echo "Captured Throwable: " . $e->getMessage() . PHP_EOL;
 }
?>