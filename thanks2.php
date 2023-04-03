<?php 

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message2'];

    if (!empty($_POST['name'])){
        $name = htmlspecialchars($_POST['name']);
    }

    if (!empty($_POST['phone'])) {
        $phone = htmlspecialchars($_POST['phone']);
    }

    if (!empty($_POST['email'])) {
        $email = htmlspecialchars($_POST['email']);

        $email = trim(htmlspecialchars($_POST['email']));
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
        if ($email === false) {
            exit('Invalid Email');
        }
    }

    if (!empty($_POST['message2'])) {
        $message2 = htmlspecialchars($_POST['message2']);
    }

    if(empty($_POST['token'])) {
        die('No token');
    }

    $mail_to = "evhanb@gmail.com";
    $header = "Red Bridge Lead";
    $mail_from = "You have received an email from: "."\n".$name."\n".$phone."\n".$email."\n".$message;

    mail($mail_to, $header,  $mail_from);
    header("Location: thank-you.html?mailsent");
}