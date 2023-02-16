<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require_once 'Mailer/src/Exception.php';
require_once 'Mailer/src/SMTP.php';
require_once 'Mailer/src/PHPMailer.php';

$mail = new PHPMailer(true);


$message = htmlspecialchars($_POST['message']);

if (!empty($message)) {
  try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'razzouquis@gmail.com';
    $mail->Password = 'nearouknreiozzyj';
    $mail->SMTPSecure = "tls";
    $mail->Port = "587";

    $mail->setFrom('razzouquis@gmail.com');
    $mail->addAddress('razzouquis@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'Muslim Community';
    $mail->Body = $message;
    $mail->send();
    echo "SENT !";
  } catch (Exception $e) {
    echo 'Error';
  }
}
