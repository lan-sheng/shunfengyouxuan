<?php

include "conn.php";

if(isset($_POST['username'])){
    $user=$_POST['username'];
    $result=$conn->query("select * from usertable where username='$user'");
    if($result->fetch_assoc()){//存在，用户名已经存在
        echo true;
    }else{
        echo false;
    }
}


if(isset($_POST['submit'])){
    $user=$_POST['username'];
    $pass=sha1($_POST['password']);
    $email=$_POST['email'];
    $conn->query("insert usertable values(null,'$user','$pass','$email',NOW())");
    header('location:http://localhost/js1911/day30/src/login.html');
}