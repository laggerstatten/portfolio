<!DOCTYPE HTML>  
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<body>  


<?php

require "./send_mail.php";
require "./save_data.php";


//error_reporting(E_ERROR | E_WARNING | E_PARSE);
error_reporting(3);

// define variables and set to empty values
$nameErr = $emailErr = $phone_typeErr = $websiteErr = $termsErr = $phoneErr = $email_typeErr =  "";
$name = $email = $phone_type = $comment = $website = $terms = $phone = $email_type = "";
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
    
  if (empty($_POST["email_type"])) {
    $email_typeErr = "Email type is required";
	$boolErrors = true;
  } else {
    $email_type = test_input($_POST["email_type"]);
  }
	
	
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL";
	  $boolErrors = true;
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["phone"])) {
    $phoneErr = "Phone is required";
	$boolErrors = true;
  } else {
    $phone = test_input($_POST["phone"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/[0-9]{3}-[0-9]{3}-[0-9]{4}/",$phone)) {
      $phoneErr = "Only numbers and dashes allowed";
	  $boolErrors = true;
    }
  }

  if (empty($_POST["phone_type"])) {
    $phone_typeErr = "Phone Type is required";
	$boolErrors = true;
  } else {
    $phone_type = test_input($_POST["phone_type"]);
  }


  if (empty($_POST["terms"])) {
    $termsErr = "You must agree with terms";
	$boolErrors = true;
  } else {
    $terms = test_input($_POST["terms"]);
  }



	if (!$boolErrors) {
		
		
		$recipient = "imed2349-test@cgonzales.com";			// Who will get the form submission
		$subject = "Visitor Feedback Form"; 				// Subject for email
		
		$body = "Sent: " . date("m:d:Y h:m") . "<br>";		// Put all the form fields together in an string
		$body .= "Name: " . $name . "<br>";
		$body .= "E-mail: " . $email . "<br>";
		$body .= "Email Type: " . $email_type . "<br>";
		$body .= "Website: " . $website . "<br>";
		$body .= "Phone: " . $phone . "<br>";
		$body .= "Phone Type: " . $phone_type . "<br>";
		$body .= "Agreed To Terms: " . $terms . "<br>";
		$body .= "Comment: " . $comment . "<br>";
		
		send_mail($email,$recipient,$subject,$body);		// Call the send_mail() function to send the email message. file: send_mail.php
		
		save_data($name, $email, $terms, $body);			// Call the save_data() fundtion to save to the database. file: save_data.php
		
	}

}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}




?>

<h2>PHP Form Validation Example</h2>
<p><span class="error">* required field</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Name: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>

  E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>


  Email Type:
  <select name="email_type">
  <option <?php if (isset($email_type) && $email_type=="") echo "selected";?> value="">Choose
  <option <?php if (isset($email_type) && $email_type=="work") echo "selected";?> value="work">Work
  <option <?php if (isset($email_type) && $email_type=="home") echo "selected";?> value="home">Home
  </select>
  <span class="error">* <?php echo $email_typeErr;?></span>
 <br><br>




  Website: <input type="text" name="website" value="<?php echo $website;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>


  Phone: <input type="text" name="phone" value="<?php echo $phone;?>">
  <span class="error">* <?php echo $phoneErr;?></span>
  <br><br>

  Phone Type:
  <input type="radio" name="phone_type" <?php if (isset($phone_type) && $phone_type=="work") echo "checked";?> value="work">Work
  <input type="radio" name="phone_type" <?php if (isset($phone_type) && $phone_type=="home") echo "checked";?> value="home">Home
  <span class="error">* <?php echo $phone_typeErr;?></span>
  
  <br><br>

  <input type="checkbox" name="terms" <?php if (isset($terms) && $terms=="agreed") echo "checked";?> value="agreed">Yes, I agree to the terms of this site.
  <span class="error">* <?php echo $termsErr;?></span>
  <br><br>

  Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  <br><br>
  <input type="submit" name="submit" value="Submit">  
</form>






<?php


echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $email_type;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $phone;
echo "<br>";
echo $phone_type;
echo "<br>";
echo $terms;


?>

</body>
</html>