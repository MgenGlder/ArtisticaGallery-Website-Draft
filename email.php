
<?php
  require_once "/home/artisticagallery/public_html/PHPMailer/PHPMailerAutoload.php";

  //PHPMailer Object
  $mail = new PHPMailer;

  //From email address and name
  $mail->From = "from@yourdomain.com";
  $mail->FromName = $_POST["name"];

  //To address and name
  $mail->addAddress($_POST["emailAddress"], $_POST["fullName"]); //Pam's email

  //Address to which recipient will reply
  $mail->addReplyTo("reply@yourdomain.com", "Reply"); //Pam's email

  //CC and BCC
  $mail->addCC("cc@example.com");
  $mail->addBCC("bcc@example.com");

  //Send HTML or Plain Text email
  $mail->isHTML(true);

  $mail->Subject = $_POST["subject"];
  $mail->Body = $_POST["message"];
  $mail->AltBody = "This is the plain text version of the email content";

  //add attachment from the form (the art picture);
  if (isset($_FILES['picture']) &&
  $_FILES['picture']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture']['tmp_name'],
                          $_FILES['picture']['name']);
  }
  else {
    echo "There was an error with the picture upload";
  }

  if(!$mail->send())
  {
      echo "Mailer Error: " . $mail->ErrorInfo;
  }
  else
  {
      echo "You did it!!!!";
      echo "Message has been sent successfully";
      echo $_POST["fullName"];
      echo $_POST["emailAddress"];
      echo $_POST["phoneNumber"];
  }

?>
