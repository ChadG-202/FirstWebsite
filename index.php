<?php
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $question = $_POST['question'];
    //database connection
    $conn = new mysqli('localhost', 'root', '', 'portfolio_form');
    if($conn->connect_error){
        die('Connection failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into inquiry(fullName, email, question) values(?, ?, ?)");
        $stmt->bind_param("sss",$fullName, $email, $question);
        $stmt->execute();
        header('Location: index.html');
        $stmt->close();
        $conn->close();
    }
?>