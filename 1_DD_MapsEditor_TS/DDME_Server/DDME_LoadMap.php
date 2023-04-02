<?php 
    // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
    // -080822-
    
   // require_once('/home/alphagam/public_html/3_DD_DarkDungeon/3_DD_PHP_Server/TimerD.php');
//    $timer = new Timer();
    
    $nameUserMapValue     = htmlspecialchars($_POST["nameUserMapValue"]); 
//    $saveGroundsInServer  = htmlspecialchars($_POST["saveGroundsInServer"]);
//    $saveItemsInServer    = htmlspecialchars($_POST["saveItemsInServer"]);
//    $saveMonstersInServer = htmlspecialchars($_POST["saveMonstersInServer"]);
    
    
    //$file =  '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . $nameUserMapValue;
   // $file =  'G:/1_2_Andrey_programming_All/localhost/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . $nameUserMapValue;
    $file =  $_SERVER['DOCUMENT_ROOT']. '/2_DarkDungeon_Saved_Maps/' . $nameUserMapValue;
    //$file =  '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . 'Nameknul..._165986514025267200.map';
    //$file =  '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . 'testItems_165996122574092100.map';
    
    
    
    // Открываем файл для получения существующего содержимого
    $current = file_get_contents($file);
    //$myfile = fopen($file, "w") or die("Unable to open file!");;
  
    echo $current;
    //echo "<br> DOCUMENT_ROOT = " . $_SERVER['DOCUMENT_ROOT'];
    
    //echo "file = " . $file;
    
    //echo "nameUserMapValue = " . $nameUserMapValue . "\n";
    //echo "saveGroundsInServer \n" . $saveGroundsInServer;
    //echo "saveItemsInServer \n" . $saveItemsInServer;
    //echo "saveMonstersInServer \n" . $saveMonstersInServer;
?>