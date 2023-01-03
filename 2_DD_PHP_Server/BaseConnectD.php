<?php
// Copyright (c) 2021, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -041221-
?>

<?php

class BaseConnect{
    
    private $mysqli;
    
    private $base_adress_Unix;   // 
    private $base_name_database; // имя базы данных. она одна а таблиц в ней много
    private $base_name_user;     // имя того кто хочет подключится к базе
    private $base_password_user; // пароль того кто хочет подключится к базе
    
    // имена полей в таблице из базы данных
    private $key_tables_Spider_Inf_user;// название таблицы из базы данных
    private $key_tables_user_number;    // под каким порядковым номером находится пользователь number_of_user user_number
    private $key_tables_user_id;        // индентификационный код пользователя user_identification_number (uid) user_id
    private $key_tables_user_nikname;   // никнейм пользователя
    private $key_tables_user_email;     // электронная почта пользователя EMAIL ADDRESS user_email
    private $key_tables_user_password;  // кэш пароля пользователя user_password
    
    // данные из таблицы. заполняем через запрос к базе данных
    public $tables_user_number;    // под каким порядковым номером находится пользователь 
    public $tables_user_id;        // индентификационный код пользователя
    public $tables_user_nikname;   // никнейм пользователя
    public $tables_user_email;     // электронная почта пользователя 
    public $tables_user_password;  // кэш пароля пользователя
    

    
    
    
    
     function __construct() {
         
        include '/home/alphagam/php/_SQL_secret/_persona_SQL_base.php'; 
         
        $this->base_adress_Unix = $adress_Unix;
        $this->base_name_database = $name_database;
        $this->base_name_user = $name_user_1;
        $this->base_password_user = $password_user_1; 
         
        $this->key_tables_Spider_Inf_user = 'Spider_Inf_user';
        $this->key_tables_user_number = 'user_number';
        $this->key_tables_user_id = 'user_id';
        $this->key_tables_user_nikname = 'user_nikname';
        $this->key_tables_user_email = 'user_email';
        $this->key_tables_user_password = 'user_password';
    
        $this->tables_user_number = 0;
        $this->tables_user_id = 0;
        $this->tables_user_nikname = ' ';
        $this->tables_user_email = ' ';
        $this->tables_user_password = ' ';
        
       // используем объектно-ориентированный интерфейс mysqli
       // Соединяемся, выбираем базу данных
        $this->connectDatabase();
         
      //  echo 'class BaseConnect:function __construct(): redy ';
      //  echo "<br>"; 
         
     }//function __construct()
    
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF 
    // подключаемся к базе данных
    public function connectDatabase() {
        
        // используем объектно-ориентированный интерфейс mysqli
        // Соединяемся, выбираем базу данных
        $this->mysqli = new mysqli($this->base_adress_Unix, $this->base_name_user, $this->base_password_user, $this->base_name_database);
        if ($this->mysqli->connect_errno) {
             //echo "class BaseConnect:function connectDatabase:не удалось подключиться к MySQL: (" . $this->mysqli->connect_errno . ") " . $this->mysqli->connect_error. ' <br>';
        } else{
             //echo 'class BaseConnect:function connectDatabase:$mysqli->host_info =  '. $this->mysqli->host_info . ' <br>';
        }// if ($mysqli->connect_errno) {
    
    }// public function connectDatabase() {
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    


    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
     public function select_Spider_Inf_user(){
         
        if( ($this->tables_user_number != 0) && ($this->tables_user_id != 0) && ($this->tables_user_nikname != ' ') && ($this->tables_user_email != ' ') && ($this->tables_user_password != ' ') ){ 
         
         
            echo "class BaseConnect:function select_Spider_Inf_user: key_tables_Spider_Inf_user =  $this->key_tables_Spider_Inf_user  <br> " ;
            echo "class BaseConnect:function select_Spider_Inf_user: key_tables_user_number = $this->key_tables_user_number, key_tables_user_id = $this->key_tables_user_id , key_tables_user_nikname = $this->key_tables_user_nikname,<br>"; 
            echo "class BaseConnect:function select_Spider_Inf_user: key_tables_user_email = $this->key_tables_user_email , key_tables_user_password = $this->key_tables_user_password  <br> " ;
            echo "class BaseConnect:function select_Spider_Inf_user: tables_user_number = $this->tables_user_number, tables_user_id = $this->tables_user_id, tables_user_nikname = $this->tables_user_nikname,<br> " ;
            echo "class BaseConnect:function select_Spider_Inf_user: tables_user_email = $this->tables_user_email, tables_user_password = $this->tables_user_password  <br> " ;                                      
                                                  
            $query = "SELECT * FROM $this->key_tables_Spider_Inf_user"; 
             
             echo "$query= $query  <br>  ";
             
            //$result = $this->mysqli->query($query, MYSQLI_STORE_RESULT);//          
            $result = $this->mysqli->query($query);// 
            
            
             //$result->free();// free result
             $this->mysqli->close();// close connection   
             
            // var_dump — Выводит информацию о переменной
            //var_dump($result);   
                  
                  
            if ($result == TRUE) {
                
                $row_cnt = $result->num_rows;//Получение количества строк в наборе результатов
                echo "row_cnt = $row_cnt  <br>  ";
                
                $in_key_tables_user_number    = $this->key_tables_user_number;
                $in_key_tables_user_id        = $this->key_tables_user_id;
                $in_key_tables_user_nikname   = $this->key_tables_user_nikname;
                $in_key_tables_user_email     = $this->key_tables_user_email;
                $in_key_tables_user_password  = $this->key_tables_user_password;
                
           
                
                for($i = 0; $i < $row_cnt; $i++) {
                    $result->data_seek($i);// Переход к строке
                    $row = $result->fetch_array(MYSQLI_ASSOC);
                    echo "class BaseConnect:function select_Spider_Inf_user:user_number = $row[$in_key_tables_user_number]  <br>  ";
                    echo "class BaseConnect:function select_Spider_Inf_user:user_id = $row[$in_key_tables_user_id]  <br>  ";
                    echo "class BaseConnect:function select_Spider_Inf_user:user_nikname = $row[$in_key_tables_user_nikname]  <br>  ";
                    echo "class BaseConnect:function select_Spider_Inf_user:user_email = $row[$in_key_tables_user_email]  <br>  ";
                    echo "class BaseConnect:function select_Spider_Inf_user:user_password = $row[$in_key_tables_user_password]  <br>  ";
                    echo "------  <br>  ";
                }
                //var_dump($result); 
                
                //echo "result = $result  <br>  ";
                
                  //$result->data_seek(0);// Переход к строке 0
                  //$row = $result->fetch_assoc();// Извлекает результирующий ряд в виде ассоциативного массива
                  //$visitors_1 = $row["requests_ifrit_chess_engine"];
                  //echo '  $visitors_1  = ' .  $visitors_1  . '<br>';
                
                
            } else {
                //echo "Error: New record created in Spider_Inf_user " . $query . "<br>";
                echo "class BaseConnect:function select_Spider_Inf_user:Error: select in Spider_Inf_user <br>";
            }//           
                  
        }else{
            
            echo "class BaseConnect:function select_Spider_Inf_user:Error:no out data <br>";
        }// if( ($_user_number != 0) && ($_user_id != 0) && ($_user_nikname != ' ') && ($_user_email != ' ') && ($_user_password != ' ') ){  
        
     }//function select_Spider_Inf_user($_user_number, $_user_id, $_user_nikname, $_user_email, $_user_password){
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF  


    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
    public function delete_Spider_Inf_user(){    
    
               $query = " DELETE FROM $this->key_tables_Spider_Inf_user WHERE $this->key_tables_user_number = 1 ";
    
               $result = $this->mysqli->query($query);// 
            
               if ($result == TRUE) {
                   echo "class BaseConnect:function delete_Spider_Inf_user:Delete successfully in Spider_Inf_user <br>";
                
               } else {
                   echo "class BaseConnect:function delete_Spider_Inf_user:Error: Delete in Spider_Inf_user <br>";
               }//if ($result == TRUE) { 
    
    
    }//function delete_Spider_Inf_user($_user_number, $_user_id, $_user_nikname, $_user_email, $_user_password){
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    

  
 
    
    
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
     public function insert_into_Spider_Inf_user(){
         
         
        if( ($this->tables_user_number != 0) && ($this->tables_user_id != 0) && ($this->tables_user_nikname != ' ') && ($this->tables_user_email != ' ') && ($this->tables_user_password != ' ') ){ 
         
         
            echo "class BaseConnect:function insert_into_Spider_Inf_user: key_tables_Spider_Inf_user =  $this->key_tables_Spider_Inf_user  <br> " ;
            echo "class BaseConnect:function insert_into_Spider_Inf_user: key_tables_user_number = $this->key_tables_user_number, key_tables_user_id = $this->key_tables_user_id , key_tables_user_nikname = $this->key_tables_user_nikname,<br>"; 
            echo "class BaseConnect:function insert_into_Spider_Inf_user: key_tables_user_email = $this->key_tables_user_email , key_tables_user_password = $this->key_tables_user_password  <br> " ;
            echo "class BaseConnect:function insert_into_Spider_Inf_user: tables_user_number = $this->tables_user_number, tables_user_id = $this->tables_user_id, tables_user_nikname = $this->tables_user_nikname,<br> " ;
            echo "class BaseConnect:function insert_into_Spider_Inf_user: tables_user_email = $this->tables_user_email, tables_user_password = $this->tables_user_password  <br> " ;    


            // Формируем SQL-запрос
            $query = "INSERT INTO $this->key_tables_Spider_Inf_user 
                                 ($this->key_tables_user_number, $this->key_tables_user_id , $this->key_tables_user_nikname, $this->key_tables_user_email , $this->key_tables_user_password )
                           VALUES($this->tables_user_number,    '$this->tables_user_id',    '$this->tables_user_nikname',   '$this->tables_user_email',     '$this->tables_user_password' )";
            
          //$query = "INSERT INTO Spider_Inf_user(user_number, user_id , user_nikname, user_email , user_password ) VALUES(1, 163748390379717700, Andrey, ImmortalInDungeon@yandex.ru, 1)";  
         
             
            //$result = $_mysqli->query($query, MYSQLI_STORE_RESULT);//          
            $result = $this->mysqli->query($query);// 
            
            
             //$result->free();// free result
             $this->mysqli->close();// close connection   
             
            // var_dump — Выводит информацию о переменной
            //var_dump($result);   
                  
                  
            if ($result == TRUE) {
                echo "class BaseConnect:function insert_into_Spider_Inf_user:New record created successfully in Spider_Inf_user <br>";
            
            } else {
                //echo "Error: New record created in Spider_Inf_user " . $query . "<br>";
                echo "class BaseConnect:function insert_into_Spider_Inf_user:Error: New record created in Spider_Inf_user <br>";
            }//           
                  
        }else{
            
            echo "class BaseConnect:function insert_into_Spider_Inf_user:Error: no out data <br>";
        }// if( ($_user_number != 0) && ($_user_id != 0) && ($_user_nikname != ' ') && ($_user_email != ' ') && ($_user_password != ' ') ){  
        
     }//function insert_into_Spider_Inf_user($_user_number, $_user_id, $_user_nikname, $_user_email, $_user_password){
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
    
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
     public function update_Spider_Inf_user(){
    
    
        if( ($this->tables_user_number != 0) && ($this->tables_user_id != 0) && ($this->tables_user_nikname != ' ') && ($this->tables_user_email != ' ') && ($this->tables_user_password != ' ') ){ 
    
            $query = "UPDATE $this->key_tables_Spider_Inf_user SET  $this->key_tables_user_id = '$this->tables_user_id', $this->key_tables_user_nikname = '$this->tables_user_nikname',
                             $this->key_tables_user_email = '$this->tables_user_email', $this->key_tables_user_password = '$this->tables_user_password'
                       WHERE $_key_tables_user_number = $_user_number ";
                       
            $result = $this->mysqli->query($query);// 
            
            if ($result == TRUE) {
                echo "class BaseConnect:function update_Spider_Inf_user:Update successfully in Spider_Inf_user <br>";
                
            } else {
                echo "class BaseConnect:function update_Spider_Inf_user:Error in Spider_Inf_user <br>";
            }//if ($result == TRUE) {           
            
        }else{
            
            echo "class BaseConnect:function update_Spider_Inf_user:Error:no out data <br>";                                
                                
        }// if( ($_user_number != 0) && ($_user_id != 0) && ($_user_nikname != ' ') && ($_user_email != ' ') && ($_user_password != ' ') ){  
        
     }//function update_Spider_Inf_user($_user_number, $_user_id, $_user_nikname, $_user_email, $_user_password){
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF 
     
}//class BaseConnect{



/*

Your IP address has changed. Please log in again.

    // More than 100,000 users already registered
    // count_of_users
 

       // Формируем SQL-запрос
        $query = 'SELECT'. $key_tables_user_nikname . 'FROM'. $key_tables_Spider_Inf_user; 
         

    // Выполняем SQL-запрос
    $result = $mysqli->query($query, MYSQLI_STORE_RESULT);//
    
    echo 'Еще жив 1';
    echo "<br>"; 
    
    echo '$result='  . $result;
    echo "<br>";
    
    $result->data_seek(0);// Переход к строке 0
    
    echo 'Еще жив 2';
    echo "<br>";     
    
    $row = $result->fetch_assoc();// Извлекает результирующий ряд в виде ассоциативного массива
    $visitors_1 = $row['requests_my_games_page'];
//echo '  $visitors_1  = ' .  $visitors_1  . '<br>';
     echo $visitors_1;
    echo " посещений страницы.";  
    echo "<br>";
    
      $query = 'SELECT * FROM StatisticsVisitors';
    // Выполняем запрос к базе данных
    $result = $mysqli->query($query, MYSQLI_STORE_RESULT);//
  
    // var_dump — Выводит информацию о переменной
    //var_dump($result);
  
     if ($result == FALSE) {
       echo "Не удалось запрос к базе данных: <br>" ;
     } else{
       echo "Удалось запрос к базе данных: <br>" ;  
     }
  
    $result->data_seek(0);// Переход к строке 0
    $row = $result->fetch_assoc();// Извлекает результирующий ряд в виде ассоциативного массива
    $visitors_1 = $row["requests_ifrit_chess_engine"];
    echo '  $visitors_1  = ' .  $visitors_1  . '<br>';
    
    



$_REQUEST Ассоциативный массив (array), который по умолчанию содержит 
данные переменных $_GET, $_POST и $_COOKIE.


                      $passwordHash = password_hash(htmlspecialchars($_REQUEST[$keyPost_password]), PASSWORD_DEFAULT);
                      $res = password_verify('pass3345', $passwordHash);
                      //$valueCookie_iddUser = $microtime_now;
      
                      echo '$passwordHash =  ' . $passwordHash;
                      echo "<br>";
                      
                      if ($res) {
                          echo 'Пароль правильный!';
                          echo "<br>";
                      } else {
                          echo 'Пароль неправильный.';
                          echo "<br>";
                      }//if ($res)
                      
  
        $ip = $_SERVER['REMOTE_ADDR'];
        echo "ip= " . $ip . "<BR>"; // http://ipinfo.io/{94.25.177.52}/json
        
        $rp = $_SERVER['REMOTE_PORT'];
        echo "rp= " . $rp . "<BR>"; // 
   
        
    
        $from = "spider_inf@alphagameset.xyz";
        $to =   "ImmortalInDungeon@yandex.ru";
        //$to =   "brenkman7755@gmail.com";
        $subject = "Spider_Inf";
        $message = "This is a test to check the PHP Mail functionality. Hello from NUH :)";
        $headers = "From:" . $from;
        $su = mail($to,$subject,$message, $headers);
        echo "Test email sent ".$su."<br>";

  */   

?>