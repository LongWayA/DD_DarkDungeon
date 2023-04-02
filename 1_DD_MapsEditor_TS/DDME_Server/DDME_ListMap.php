<?php 
    // Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
    // -100822-
    
   // require_once('/home/alphagam/public_html/3_DD_DarkDungeon/3_DD_PHP_Server/TimerD.php');
//    $timer = new Timer();
    
 //   $nameUserMapValue     = htmlspecialchars($_POST["nameUserMapValue"]); 
//    $saveGroundsInServer  = htmlspecialchars($_POST["saveGroundsInServer"]);
//    $saveItemsInServer    = htmlspecialchars($_POST["saveItemsInServer"]);
//    $saveMonstersInServer = htmlspecialchars($_POST["saveMonstersInServer"]);
    
    
 //   $file =  '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . $nameUserMapValue;
    
    //$file =  '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . 'Nameknul..._165986514025267200.map';
    //$file =  '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps/' . 'testItems_165996122574092100.map';
    
    
    
    // Открываем файл для получения существующего содержимого
 //   $current = file_get_contents($file);
    //$myfile = fopen($file, "w") or die("Unable to open file!");;
  
 //   echo $current;
    
    
    //echo "file = " . $file;
    
    //echo "nameUserMapValue = " . $nameUserMapValue . "\n";
    //echo "saveGroundsInServer \n" . $saveGroundsInServer;
    //echo "saveItemsInServer \n" . $saveItemsInServer;
    //echo "saveMonstersInServer \n" . $saveMonstersInServer;
    
    //$dir    = '/home/alphagam/public_html/3_DD_DarkDungeon_Saved_Maps';
    $dir    = $_SERVER['DOCUMENT_ROOT']. '/2_DarkDungeon_Saved_Maps/';
    
    $files  = scandir($dir, SCANDIR_SORT_NONE);// SCANDIR_SORT_ASCENDING SCANDIR_SORT_DESCENDING SCANDIR_SORT_NONE

    $cout_ar = count($files);
    /*
    SORT_REGULAR - обычное сравнение элементов (без изменения типов)
    SORT_NUMERIC - числовое сравнение элементов
    SORT_STRING - строковое сравнение элементов
    SORT_LOCALE_STRING - сравнивает элементы как строки с учетом текущей локали. Используется локаль, которую можно изменять с помощью функции setlocale()
    SORT_NATURAL - сравнение элементов как строк, используя естественное упорядочение, аналогичное упорядочению в функции natsort()
    SORT_FLAG_CASE - может быть объединен (побитовое ИЛИ) с константами SORT_STRING или SORT_NATURAL для сортировки строк без учета регистра.
    */
    //sort($files, SORT_REGULAR);//SORT_REGULAR SORT_NUMERIC SORT_STRING SORT_NATURAL
    
        for ($i = 0; $i < $cout_ar; $i++){
            if(is_dir($files[$i]) == false) echo $files[$i] . '!';
        }
    
?>