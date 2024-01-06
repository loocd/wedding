<?php
$admin_email = "pascal@mogy.ch";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $form_type = $_POST["form_type"];

   // Common headers for HTML email
   $headers = "MIME-Version: 1.0" . "\r\n";
   $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
   $headers .= "From: pascal.mogy@bluewin.ch" . "\r\n";

   if($form_type == "signup") {
      // Process the signup form
      $name = $_POST['form--signup__name'];
      $email = $_POST['form--signup__email'];
      $comment = $_POST['form--signup__comment'];

      // Process guests
      $guestsList = '';
      foreach ($_POST as $key => $value) {
         if (strpos($key, 'form--signup__name-guest') !== false && $value != '') {
            $index = str_replace('form--signup__name-guest', '', $key);
            $guestName = $value;
            $guestAge = $_POST['form--signup__age-guest' . $index];
            $guestsList .= "<li>Name: $guestName, Age: $guestAge</li>";
         }
      }

      // Email content
      $body = "<h1>New Signup</h1>
               <p><strong>Name:</strong> $name</p>
               <p><strong>Email:</strong> $email</p>
               <p><strong>Comment:</strong> $comment</p>
               <h2>Guests:</h2>
               <ul>$guestsList</ul>";

      // Send email to admin
      mail($admin_email, "New Signup Submission", $body, $headers);

      // Send confirmation email to submitter
      mail($email, "Your Signup Confirmation", $body, $headers);

      // Write guest data to Microsoft Excel 365 sheet
      // This part requires additional setup and is not covered here

   } elseif ($form_type == 'contact') {
        // Process the contact form
      $name = $_POST['form--contact__name'];
      $email = $_POST['form--contact__email'];
      $subject = $_POST['form--contact__subject'];
      $message = $_POST['form--contact__message'];

        // Email content
      $body = "<h1>New Contact Message</h1>
               <p><strong>Name:</strong> $name</p>
               <p><strong>Email:</strong> $email</p>
               <p><strong>Subject:</strong> $subject</p>
               <p><strong>Message:</strong> $message</p>";

        // Send email to admin
      mail($admin_email, "New Contact Form Submission", $body, $headers);

        // Send confirmation email to submitter
      mail($email, "Your Contact Confirmation", $body, $headers);
   }

}
?>
