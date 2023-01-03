<?php 
    // Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
    // -050822-140822
    
    require_once('/home/alphagam/public_html/3_DD_DarkDungeon/3_DD_PHP_Server/TimerD.php');
    $timer = new Timer();
    
    $nameUserMapValue       = htmlspecialchars($_POST["nameUserMapValue"]); 
    $saveMapStringInServer  = htmlspecialchars($_POST["saveMapStringInServer"]);
    
    $file =  '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . $nameUserMapValue .'_'. $timer->microtime_IDD. '.map';
    
    // Открываем файл для получения существующего содержимого
    $current = file_get_contents($file);
    
    
    // Добавляем в файл
    $current .= $saveMapStringInServer;
    
    // Пишем содержимое обратно в файл
    $file_err = file_put_contents($file, $current);
    
    echo "file_put = " . $file_err;

?>