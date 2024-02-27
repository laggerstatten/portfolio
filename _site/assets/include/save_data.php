<?php


// https://www.w3schools.com/php/php_functions.asp

function save_data($name, $email, $subject, $message, $terms, $form_data) {		// Create a function to save the form data. Pass the values from the form as arguments.


	// https://www.w3schools.com/php/php_mysql_insert.asp  Example (MySQLi Procedural)

	$servername = "localhost";			// Define variable for Server to connect to
	$username = "eric";				// Define variable for MySQL user name
	$password = "password";				// Define variable for MySQL password
	$dbname = "contact";					// Define variable for database to use (must be created prior in phpMyAdmin
	$tablename = "contact_form";		// Define variable for table to use (must be create with database.sql in phpMyAdmin

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "INSERT INTO " . $tablename . " (name, email, subject, message, terms, form_data) VALUES (";		// Insert values that match the table we created
	$sql .= "'" . $name . "', ";				// Use $name from function arguments. SQL stings in single quotes ex. 'My String'
	$sql .= "'" . $email . "', ";				// Use $email from function arguments. SQL stings in single quotes ex. 'My String'
	$sql .= "'" . $subject . "', ";				// Use $email from function arguments. SQL stings in single quotes ex. 'My String'	
	$sql .= "'" . $message . "', ";				// Use $email from function arguments. SQL stings in single quotes ex. 'My String'	
	
	if ($terms == "agreed") {							// For checkbox we use boolean field in MySQL. 				
		$sql .= "1, ";							// This means true or false, 1 or 0
	}	
	else {
		$sql .= "0, ";
	}
			
	$sql .= "'" . $form_data . "')";				// Use $formdata from function arguments. SQL stings in single quotes ex. 'My String' and close )


	if (mysqli_query($conn, $sql)) {
		echo "<p style='color:#008000'>Message has been saved</p>";
	} else {
		echo "<p class='error'>Save Error: " . $sql . "<br>" . mysqli_error($conn) . "</p>"; // Error with SQL
		//echo "<p class='error'>Save Error: " . mysqli_error($conn) . "</p>";
	}

	mysqli_close($conn);

}

?>