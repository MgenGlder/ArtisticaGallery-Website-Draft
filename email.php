
<?php
  require_once "/home/artisticagallery/public_html/PHPMailer/PHPMailerAutoload.php";

  //PHPMailer Object
  $mail = new PHPMailer;

  //The artist's email address and name
  $mail->From = $_POST["emailAddress"];
  $mail->FromName = $_POST["name"];

  //To address and name
  $mail->addAddress("peizadkh@emich.edu", $_POST["fullName"]); //Pam's email

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

  //add attachment from the form (the art picture)
  if (isset($_FILES['picture']) &&
  $_FILES['picture']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture']['tmp_name'],
                          $_FILES['picture']['name']);
  }
  else {
    echo "There was an error with the picture upload";
  }
  if (isset($_FILES['picture1']) &&
  $_FILES['picture1']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture1']['tmp_name'],
                          $_FILES['picture1']['name']);
  }
  else {
    echo "There was an error with the picture upload";
  }
  if (isset($_FILES['picture2']) &&
  $_FILES['picture2']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture2']['tmp_name'],
                          $_FILES['picture2']['name']);
  }
  else {
    echo "There was an error with the picture upload";
  }
  if (isset($_FILES['picture3']) &&
  $_FILES['picture3']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture3']['tmp_name'],
                          $_FILES['picture3']['name']);
  }
  else {
    echo "There was an error with the picture upload";
  }
  if (isset($_FILES['picture4']) &&
  $_FILES['picture4']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture4']['tmp_name'],
                          $_FILES['picture4']['name']);
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
      echo "Message has been sent successfully";
      //echo $_POST["fullName"];
      //echo $_POST["emailAddress"];
      //echo $_POST["phoneNumber"];
  }

?>
