<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $comment = $_POST['comment'];

   // Validate the data...

   // Send the email...

$to = 'pascal@mogy.ch';
$subject = 'New contact form submission';
$body = "From: $name\n E-Mail: $email\n Message:\n $comment";

if (mail($to, $subject, $body)) {
echo 'Form submitted successfully!';
} else {
   echo 'There was a problem submitting the form.';
}
mail("pascal@mogy.ch","test","test");

}
?>
