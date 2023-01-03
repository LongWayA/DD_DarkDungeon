<?php
// Copyright (c) 2021, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -051221-
?>

<?php

class FormPost{
  
     // имя пользователя из формы
     public $keyPost_nameUser;
     public $valuePost_nameUser;
     
    // почта пользователя из формы electronic mail
     public $keyPost_eMailUser;
     public $valuePost_eMailUser; 
     
     // пароль пользователя из формы
     public $keyPost_passwordUser; 
     public $valuePost_passwordUser; 
     
     public $keyPost_name_register_radio = 'radio'; // режим регистрации пользователя
     public $keyPost_radio_value_nothing = 'nothing'; // ничего не выбрал
     public $keyPost_radio_value_register = 'register'; // режим регистрации пользователя
     public $keyPost_radio_value_remind = 'remind'; // режим восстановления пользователя
     
     public $flagIs_register_radio_value = " "; // режим регистрации пользователя
     
     
    function __construct() {
    
       // имя пользователя из формы
     $this->keyPost_nameUser = 'post_nameUser';
     $this->valuePost_nameUser = htmlspecialchars($_REQUEST[$this->keyPost_nameUser]);
     
    // почта пользователя из формы electronic mail
     $this->keyPost_eMailUser = 'post_eMailUser';
     $this->valuePost_eMailUser = htmlspecialchars($_REQUEST[$this->keyPost_eMailUser]); 
     
     // пароль пользователя из формы
     $this->keyPost_passwordUser = 'post_passwordUser'; 
     $this->valuePost_passwordUser = htmlspecialchars($_REQUEST[$this->keyPost_passwordUser]); 
     
     $this->flagIs_register_radio_value = htmlspecialchars($_REQUEST[$this->keyPost_name_register_radio]); 
     
     //echo 'TEST class FormPost: $_REQUEST[$this->keyPost_name_radio] = ' . htmlspecialchars($_REQUEST[$this->keyPost_name_register_radio]); 
     //echo "<br>";
     echo 'class FormPost:function __construct(): redy ';
     echo "<br>";      
     
            
    }//function __construct() {
  
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    
    public function  clearREQUEST() {
        
         $_REQUEST[$this->keyPost_nameUser] = "";
         $_REQUEST[$this->keyPost_eMailUser] = "";
         $_REQUEST[$this->keyPost_passwordUser] = "";

    }// public function connectDatabase() {
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    
    
    
    
    
}// class FormPost{


?>



<?php
/*

$_REQUEST Ассоциативный массив (array), который по умолчанию содержит 
данные переменных $_GET, $_POST и $_COOKIE.

echo 'Привет, ' . htmlspecialchars($_COOKIE["name"]) . '!';
echo "<br>";
echo '$_POST = '.htmlspecialchars($_POST['username']);
echo ' $_REQUEST = '.htmlspecialchars($_REQUEST['username']);
echo "<br>";
echo '$_POST = '.htmlspecialchars($_POST['email']);
echo ' $_REQUEST = '.htmlspecialchars($_REQUEST['email']);
echo "<br>";
echo '$_GET = '.htmlspecialchars($_GET['username']);
echo ' $_REQUEST = '.htmlspecialchars($_REQUEST['username']);
echo "<br>";
echo '$_GET = '.htmlspecialchars($_GET['email']);
echo ' $_REQUEST = '.htmlspecialchars($_REQUEST['email']);


*/
?>