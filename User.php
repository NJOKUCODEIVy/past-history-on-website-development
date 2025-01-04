<?php
// Start the session
session_start();
include("include/connect.php");

// Check if the 'signin' button is clicked
if (isset($_POST['signin'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Use a prepared statement to prevent SQL injection
    $sql = "SELECT * FROM users WHERE Email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the user exists
    $user_matched = mysqli_num_rows($result);
    if ($user_matched > 0) {
        $row = mysqli_fetch_assoc($result);

        // Verify the password using password_verify()
        if (password_verify($password, $row['password'])) {
            // Regenerate the session ID to prevent session fixation attacks
            session_regenerate_id(true);

            // Set session variables
            $_SESSION['loginUserID'] = $row['userID']; // Session variable for user ID
            $_SESSION['loginFullName'] = $row['Name']; // Session variable for full name
            $_SESSION['loginEmail'] = $row['Email']; // Session variable for email
            $_SESSION['loginPassword'] = $password; // Session variable for password (not recommended in production)

            // Redirect to the user dashboard or another page after login
            header("Location: dashboard.php"); // You can replace dashboard.php with your desired page
            exit; // Ensure no further code is executed after redirection
        } else {
            // Alert the user if the password is incorrect
            echo "<script>alert('Invalid email or password');</script>";
        }
    } else {
        // Alert the user if the email is not found
        echo "<script>alert('Invalid email or password');</script>";
    }
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="user.css">
</head>
<body class="blue-gold-theme">

    <div class="container" id="signIn">
        <h1 class="form-title">SIGN IN</h1>
        <form method="post" id="signInForm">
    <div class="input-group">
        <i class="fas fa-envelope"></i>
        <input type="email" name="email" id="email" placeholder="Email" required>
    </div>
    
    <div class="input-group">
        <i class="fas fa-lock"></i>
        <input type="password" name="password" id="password" placeholder="Password" required>
    </div>
    
    <!-- Sign In button that submits the form and redirects -->
    <button type="button" class="btn" onclick="submitForm()">Sign In</button>

    <div class="links">
        <p>Don't have an account yet? 
            <button type="button" onclick="window.location.href='signup.html'">Sign Up</button>
        </p>
    </div>
</form>

<script>
function submitForm() {
    // Submit the form
    document.getElementById("signInForm").submit();

    // Redirect to a new page (login.html) after submitting the form
    window.location.href = "login.html";
}
</script>

    </div>

</body>
</html>
