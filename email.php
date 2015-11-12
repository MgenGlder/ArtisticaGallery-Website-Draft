
<?php
  require_once "/home/artisticagallery/public_html/PHPMailer/PHPMailerAutoload.php";

  //PHPMailer Object
  $mail = new PHPMailer;

  //From email address and name
  $mail->From = "from@yourdomain.com";
  $mail->FromName = "name";

  //To address and name
  $mail->addAddress($_POST["email"], $_POST["name"]);

  //Address to which recipient will reply
  $mail->addReplyTo("reply@yourdomain.com", "Reply"); //Pam's email

  //CC and BCC
  $mail->addCC("cc@example.com");
  $mail->addBCC("bcc@example.com");

  //Send HTML or Plain Text email
  $mail->isHTML(true);

  $mail->Subject = "Hi " . $_POST["name"];
  $mail->Body = $_POST["message"];

  $mail->AltBody = "This is the plain text version of the email content";

  if(!$mail->send())
  {
      echo "Mailer Error: " . $mail->ErrorInfo;
  }
  else
  {
      echo "You did it!!!!";
      echo "Message has been sent successfully ";
      echo "Name: " . $_POST["name"] . " ";
      echo "Email address: " . $_POST["email"] . " ";
      echo "Message: " . $_POST["message"]. " ";
  }


?>
