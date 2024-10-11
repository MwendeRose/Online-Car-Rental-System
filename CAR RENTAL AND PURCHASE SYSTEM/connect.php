<?php
   $email=$_POST['email'];
   $password=$_POST['password'];


   //Database connection
   $conn=new mysql('localhost','root','','test');
   if($conn->connect_error){
      die('connection Failed :'$conn->connect_error);
   }else{
      $stmt=$conn->prepared("insert into login(email,password) values(?,?)");
      $start->bind->param("ss",email, password);
      $start->execute();
      echo"login succesful...";
      $start->close();
      conn->close();
   }
?>