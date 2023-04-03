<?php 

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $form_body = $choice = "Product selected: ".nl2br($_POST['choice'])."\n";

    $form_body .= $question_1 = "Are you currently buying from China? ".nl2br($_POST['question-1'])."\n";
    $form_body .= $question_2 = "Are you currently buying your product from another source such as a US distributor? ".nl2br($_POST['question-2'])."\n";
    $form_body .= $question_3 = "What’s the main material your product is made from? ".nl2br($_POST['question-3'])."\n";
    $form_body .= $question_4 = "Does your product require any kind of special packing to ensure safe shipping? ".nl2br($_POST['question-4'])."\n";
    $form_body .= $question_5 = "Does your product require any kind of special testing or certification? ".nl2br($_POST['question-5'])."\n";
    $form_body .= $question_6 = "Will your product have its own branding? ".nl2br($_POST['question-6'])."\n";
    $form_body .= $question_part_2 = "Have you already designed your logo? ".nl2br($_POST['question-part-2'])."\n";
    $form_body .= $question_7 = "How soon are you looking to place an order? ".nl2br($_POST['question-7'])."\n";
    $form_body .= $question_8 = "Where do you sell/use your product? ".nl2br($_POST['question-8'])."\n";
    
    $name = $_POST['name'];
    $company_name = $_POST['company-name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $token = $_POST['token'];

    if (!empty($_POST['choice'])){
        $name = htmlspecialchars($_POST['choice']);
    }

    if (!empty($_POST['name'])){
        $name = htmlspecialchars($_POST['name']);
    }

    if (!empty($_POST['company-name'])){
        $name = htmlspecialchars($_POST['company-name']);
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

    if (!empty($_POST['message'])) {
        $message2 = htmlspecialchars($_POST['message']);
    }

    if (empty($_POST['token'])) {
        die('No token');
    }

    $mail_to = "evhanb@gmail.com";
    $header = "Red Bridge Lead";
    $mail_from = "You have received an email from: "."\n".$name."\n".$company_name."\n".$phone."\n".$email."\n".$message;

    mail($mail_to, $header,  $mail_from, $form_body);
    header("Location: thank-you.html?mailsent");
}