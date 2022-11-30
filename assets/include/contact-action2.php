<?php

require "./send_mail.php";
require "./save_data.php";

//error_reporting(E_ERROR | E_WARNING | E_PARSE);
error_reporting(3);

// define variables and set to empty values
$nameErr = $emailErr = $subjectErr = $termsErr = $messageErr =  "";
$name = $email = $message = $subject = $terms = "";
$boolErrors = false;

// Regular Expressions https://regexr.com/

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
	$boolErrors = true;
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ']*$/",$name)) {
      $nameErr = "Only letters and white space allowed";	  
	  $boolErrors = true;
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
	$boolErrors = true;
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
	  $boolErrors = true;
    }
  }
	
  if (empty($_POST["subject"])) {
    $subject = "";
  } else {
    $subject = test_input($_POST["subject"]);
  }

  if (empty($_POST["message"])) {
    $message = "";
  } else {
    $message = test_input($_POST["message"]);
  }

  if (empty($_POST["terms"])) {
    $termsErr = "You must agree with terms";
	$boolErrors = true;
  } else {
    $terms = test_input($_POST["terms"]);
  }



	if (!$boolErrors) {
		
		
		$recipient = "eschall@my.lonestar.edu";			// Who will get the form submission
		//$subject = "Visitor Feedback Form"; 				// Subject for email
		
		$body = "Sent: " . date("m:d:Y h:m") . "<br>";		// Put all the form fields together in an string
		$body .= "Name: " . $name . "<br>";
		$body .= "E-mail: " . $email . "<br>";
		$body .= "Subject: " . $subject . "<br>";
    $body .= "Message: " . $message . "<br>";
		$body .= "Agreed To Terms: " . $terms . "<br>";
	
		
		send_mail($email,$recipient,$subject,$body);		// Call the send_mail() function to send the email message. file: send_mail.php
		
		save_data($name, $email, $subject, $message, $terms, $body);			// Call the save_data() fundtion to save to the database. file: save_data.php
		
    header("Location: ../../thank-you.html");
    die();

	}

}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>