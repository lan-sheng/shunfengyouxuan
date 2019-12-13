<?php

include "conn.php";

if(isset($_POST['username']) && isset($_POST['password'])){
    $user=$_POST['username'];
    $pass=sha1($_POST['password']);//获取的已经是加密的内容，再次加密

    $result=$conn->query("select * from usertable where username='$user'");//获取用户名匹配的整条数据
    $arr=$result->fetch_assoc();//获取全部的数据
    $datapass=sha1($arr['password']);//获取数据库的密码  两次加密

    if($datapass==$pass){
        echo true;
    }else{
        echo false;
    }
    // $result=$conn->query("select * from usertable where username='$user' and password='$pass'");

    // if($result->fetch_assoc()){
    //     echo true;
    // }else{
    //     echo false;
    // }
}

// $result=$conn->query("select * from usertable where username='zhangsan123'");
// $arr=$result->fetch_assoc();
// echo $arr['password'];//数据库的密码
// echo "<hr>";
// echo sha1($arr['password']);//加密后，再加密
// echo "<hr>";
// echo sha1('7c4a8d09ca3762af61e59520943dc26494f8941b');//经历了两次加密
// foreach ($arr as $key => $value) {
//     echo $arr[]
// }
