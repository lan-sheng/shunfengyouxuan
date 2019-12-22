<?php

include "conn.php";

if(isset($_GET['picsid'])){

    $sid=$_GET['picsid'];
   
    $result=$conn->query("select * from shunfengyouxuanpic where sid = $sid ");
    echo json_encode($result->fetch_assoc());
}
