<?php


	//https://github.com/PHPMailer/PHPMailer
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;

	require 'src/Exception.php';
	require 'src/PHPMailer.php';
	require 'src/SMTP.php';
	
	
	
	function send_mail($from,$to,$subject,$body) {


	$mail = new PHPMailer(true);

	try {
		//Server settings
		//$mail->SMTPDebug = 3;                                     // Enable verbose debug output (USE 2 or 3 for level)
		$mail->isSMTP();                                            // Set mailer to use SMTP
		$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
		
		
		$mail->Username   = 'imed2349-test@cgonzales.com';          // SMTP username
		$mail->Password   = 'K3epTh1$se4cr3T';                      // SMTP password
		$mail->Host       = 'mail.cgonzales.com';                	// Specify main and backup SMTP servers
		$mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
		$mail->Port       = 465;                                    // TCP port to connect to

		//Recipients
		$mail->setFrom($from);
		$mail->addAddress($to);     								// Add a recipient
		//$mail->addReplyTo('reply@example.com', 'Name Optional');
		//$mail->addCC('cc@example.com');
		//$mail->addBCC('bcc@example.com');

		// Attachments
		//$mail->addAttachment('/var/tmp/file.tar.gz');         	// Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    	// Optional name

		// Content
		$mail->isHTML(true);                                  		// Set email format to HTML
		$mail->Subject = $subject;
		$mail->Body    = $body;
		//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

		$mail->send();
		echo "<p style='color:#008000'>Message has been sent</p>";
	} catch (Exception $e) {
		echo "<p class='error'>Message could not be sent. Mailer Error: {$mail->ErrorInfo}</p>";
	}
}