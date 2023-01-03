<?php
// Copyright (c) 2022, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -041221-160722
?>

<?php

// cookie: key = value


class Cookie{
    
     public $time_now;// Время сейчас
     public $timeEndCookie_1_minute;// Время, когда срок действия cookie истекает, тут срок действия 1 минута
     public $timeEndCookie_1_hour;// Время, когда срок действия cookie истекает, тут срок действия 1 час
     public $timeEndCookie_30_days;// Время, когда срок действия cookie истекает, тут срок действия 30 дней
     
     public $expires;  //Время, когда срок действия cookie истекает.
     public $path;              // Путь к директории на сервере, из которой будут доступны cookie. Если задать '/', cookie будут доступны во всем домене domain.
     public $domain; // (Под)домен, которому доступны cookie. Задание поддомена (например, 'www.example.com') сделает cookie доступными в нем и во всех его поддоменах
     public $secure; // Указывает на то, что значение cookie должно передаваться от клиента по защищенному соединению HTTPS. Если задано TRUE, cookie от клиента будет передано на сервер, только если установлено защищенное соединение.
     public $httponly; // Если задано TRUE, cookie будут доступны только через HTTP-протокол. То есть cookie в этом случае не будут доступны скриптовым языкам, вроде JavaScript.
     //public $options; // Ассоциативный массив (array), который может иметь любой из ключей: expires, path, domain, secure, httponly и samesite. Значения имеют тот же смысл, как описано в параметрах с соответсвующим именем. 
    
    // номер пользователя считываем из куки
     public $keyCookie_oldUser;       
     public $valueCookie_oldUser;  

     // уникальный номер пользователя считываем из куки
     public $keyCookie_iddUser;        
     public $valueCookie_iddUser; 
    
    
     function __construct() {
          
        $this->time_now = time();// Время сейчас
        $this->timeEndCookie_1_minute = $this->time_now + 60;// Время, когда срок действия cookie истекает, тут срок действия 1 минута
        $this->timeEndCookie_1_hour = $this->time_now + 3600;// Время, когда срок действия cookie истекает, тут срок действия 1 час
        $this->timeEndCookie_30_days = $this->time_now + 86400*30;// Время, когда срок действия cookie истекает, тут срок действия 30 дней
     
        $this->expires = $this->timeEndCookie_1_minute;  //Время, когда срок действия cookie истекает.
        $this->path = "/";              // Путь к директории на сервере, из которой будут доступны cookie. Если задать '/', cookie будут доступны во всем домене domain.
        $this->domain = "alphagameset.xyz"; // (Под)домен, которому доступны cookie. Задание поддомена (например, 'www.example.com') сделает cookie доступными в нем и во всех его поддоменах
        $this->secure = FALSE; // Указывает на то, что значение cookie должно передаваться от клиента по защищенному соединению HTTPS. Если задано TRUE, cookie от клиента будет передано на сервер, только если установлено защищенное соединение.
        $this->httponly = FALSE; // Если задано TRUE, cookie будут доступны только через HTTP-протокол. То есть cookie в этом случае не будут доступны скриптовым языкам, вроде JavaScript.TRUE
     // $this->options = FALSE; // Ассоциативный массив (array), который может иметь любой из ключей: expires, path, domain, secure, httponly и samesite. Значения имеют тот же смысл, как описано в параметрах с соответсвующим именем. 
          
        $this->keyCookie_oldUser = 'cookie_oldUser';  
        $this->valueCookie_oldUser = htmlspecialchars($_COOKIE[$this->keyCookie_oldUser]);
        
        $this->keyCookie_iddUser = 'cookie_iddUser';  
        $this->valueCookie_iddUser = htmlspecialchars($_COOKIE[$this->keyCookie_iddUser]);
        
       //echo 'class Cookie:function __construct(): redy ';
       //echo "<br>";
       
     }// function __construct() {
    
    // пишем в куки уникальный номер пользователя(IDD) который был сгенерирован до этого
    public function setCookie_iddUser($_valueCookie_iddUser_new_) {
           
        setcookie($this->keyCookie_iddUser, $_valueCookie_iddUser_new_, $this->expires, $this->path, $this->domain, $this->secure, $this->httponly );// пишем  куки
        
        //echo 'class Cookie:setCookie_iddUser:$_valueCookie_iddUser2 =  ' . $_valueCookie_iddUser2;
        //echo "<br>"; 
        
    }//public function setCookie_iddUser() { 
    
    
    // пишем в куки  номер пользователя в базе который был сгенерирован до этого    
    public function setCookie_oldUser($_valueCookie_oldUser_new_) {
           
        setcookie($this->keyCookie_oldUser, $_valueCookie_oldUser_new_, $this->expires, $this->path, $this->domain, $this->secure, $this->httponly );// пишем  куки
        
        //echo 'class Cookie:setCookie_oldUser:$_valueCookie_oldUser_new =  ' . $_valueCookie_oldUser_new;
        //echo "<br>"; 
        
    }//public function setCookie_oldUser() {  
     
}


?>



<?php
/*

$_REQUEST Ассоциативный массив (array), который по умолчанию содержит 
данные переменных $_GET, $_POST и $_COOKIE.


*/
?>