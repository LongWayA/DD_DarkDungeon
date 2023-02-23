<?php
// Copyright (c) 2023, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -051221-160722-210123


class Timer{
  
   
    public string $microtime_now;//Возвращает текущую метку времени Unix с микросекундами, строку (string) в формате "msec sec" 0.23254800 1659715073
    public $microtime_now_array;
    public string $microtime_ID;// получаем строку без разрывов. в начале часы потом секунды 165971507323254800
     
    function __construct() {

        $this->microtime_now = microtime(FALSE);//Возвращает текущую метку времени Unix с микросекундами, строку (string) в формате "msec sec"
        $this->microtime_nowSplit();//
     
        //echo 'class Timer:function __construct(): redy ';
        //echo "<br>";      
     
            
    }//function __construct() {
  
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    
    // работа с microtime. разделение на две строки
    public function microtime_nowSplit(){
        
         /*
         По умолчанию microtime() возвращает строку (string) в формате "msec sec", 
         где sec представляет собой количество секунд с начала эпохи 
         Unix (1 января 1970 0:00:00 GMT), 
         а msec - это количество микросекунд, прошедших после sec.
         
         Применяя функцию substr($str, $start [, $length]),
         можно получить из одной строки ее определенную часть. 
         Данная функция обрезает строку $str, начиная c символа в 
         позиции $start до конца строки. С помощью дополнительного 
         необязательного параметра $length можно задать количество 
         вырезаемых символов.
         */
          $this->microtime_now_array[0] = substr($this->microtime_now, 2 , 8);//
          $this->microtime_now_array[1] = substr($this->microtime_now, 11);//
          $this->microtime_now_array[3] = $this->microtime_now_array[1].$this->microtime_now_array[0];//
          $this->microtime_ID =  $this->microtime_now_array[3];

            //echo '$this->microtime_now ='. $this->microtime_now;
            //echo "<br>";
          
            //echo '$this->microtime_now_array[0] ='. $this->microtime_now_array[0];
            //echo "<br>";
            
            //echo '$this->microtime_now_array[1] ='. $this->microtime_now_array[1];
            //echo "<br>";
            
            //echo '$this->microtime_now_array[3] ='. $this->microtime_now_array[3];
            //echo "<br>";

     }// function microtimeSplit($microtime_now){
    //FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    
     
}// class FormPost{


/*
$timer = new Timer();
echo 'class Timer:microtime_now = '. $timer->microtime_now;//
echo "<br>"; 
echo 'class Timer:microtime_IDD = '. $timer->microtime_IDD;//
echo "<br>"; 
*/

?>