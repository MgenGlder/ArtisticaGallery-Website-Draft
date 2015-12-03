
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

  $mail->Subject = "Art Request";
  $mail->Body = "message";
  $mail->AltBody = "This is the plain text version of the email content";
  $numAttachments = 0;

  //add attachment from the form (the art picture)
  if (isset($_FILES['picture']) &&
  $_FILES['picture']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture']['tmp_name'],
                          $_FILES['picture']['name']);
  $numAttachments = $numAttachments + 1;
  }
  if (isset($_FILES['picture1']) &&
  $_FILES['picture1']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture1']['tmp_name'],
                          $_FILES['picture1']['name']);
  $numAttachments = $numAttachments + 1;
  }
  if (isset($_FILES['picture2']) &&
  $_FILES['picture2']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture2']['tmp_name'],
                          $_FILES['picture2']['name']);
  $numAttachments = $numAttachments + 1;
  }
  if (isset($_FILES['picture3']) &&
  $_FILES['picture3']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture3']['tmp_name'],
                          $_FILES['picture3']['name']);
  $numAttachments = $numAttachments + 1;
  }
  if (isset($_FILES['picture4']) &&
  $_FILES['picture4']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['picture4']['tmp_name'],
                          $_FILES['picture4']['name']);
  $numAttachments = $numAttachments + 1;
  }
  if(!$mail->send())
  {
      $array = array("error", $mail->ErrorInfo);
      echo json_encode($array);
      //echo "Mailer Error: " . $mail->ErrorInfo;
  }
  else
  {
      $array = array("success", $numAttachments);
      echo json_encode($array);
      //echo $_POST["fullName"];
      //echo $_POST["emailAddress"];
      //echo $_POST["phoneNumber"];
  }

?>
