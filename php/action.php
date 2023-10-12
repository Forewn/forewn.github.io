<?php
    //datos server
    $servername = "localhost";
    $database = "design_db";
    $username = "user";
    $password = "0000";

    //create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    //check connection
    if(!$conn){
        die("connection failed: " / mysqli_connect_error());
    }
    echo "Connected succesfully";

    $first_name = htmlspecialchars($_POST["first_name"]);
    $last_name =  htmlspecialchars($_POST["last_name"]);
    $nickname = htmlspecialchars($_POST["user"]);
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);

    $sql = "INSERT INTO users(Nombre, Apellido, Usuario, Email, Contrasena) VALUES('$first_name', '$last_name', '$nickname', '$email', '$password')";
    if(mysqli_query($conn, $sql)){
        echo "New record created succesfully!";
    }
    else{
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
?>