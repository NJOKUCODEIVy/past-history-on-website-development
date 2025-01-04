<?php
// Start session
session_start();
include("include/connect.php");

// Handle signup logic
if (isset($_POST['signup'])) {
    // Debugging: Output POST data
    var_dump($_POST);

    // Retrieve and sanitize input
    $name = htmlspecialchars($_POST['full-name']); // Corrected to match form input name
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];

    // Check if email already exists in the database
    $checkEmail = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $result = $checkEmail->get_result();

    if ($result->num_rows > 0) {
        // Email already registered
        echo "<script>alert('Email is already registered. Please use a different email.')
        window.location.href = 'register.php';
        
        </script>";
    } else {
        // Hash the password securely
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Insert user details into the database
        $sql = $conn->prepare("INSERT INTO users (Name, email, password) VALUES (?, ?, ?)");
        $sql->bind_param("sss", $name, $email, $hashed_password);

        if ($sql->execute()) {
            // Registration successful
            echo "<script>alert('Registration successful! Redirecting to login page.')
             window.location.href = 'User.php'; // Redirect to login page after registration
            </script>";
           
            
        } else {
            // Error inserting data
            echo "<script>alert('Registration failed. Please try again.')
            window.location.href = 'register.php'; // Refresh the page on failure
            </script>";
        }
    }

    // Close prepared statements
    $checkEmail->close();
    $sql->close();
}
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register & Login</title>
    <link rel="stylesheet" href="user.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" 
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" 
          crossorigin="anonymous" referrerpolicy="no-referrer">
</head>
<body class="blue-gold-theme" > 

    <div class="container" >
        <h1 class="form-title">Register</h1>
        <form method="POST" id="register-form">
            <!-- Full Name Input -->
            <div class="input-group">
                <i class="fas fa-user"></i>
                <input type="text" name="full-name" placeholder="Full Name" required>
            </div>

            <!-- Email Input -->
            <div class="input-group">
                <i class="fas fa-envelope"></i>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" required>
            </div>

            <!-- Password Input -->
            <div class="input-group">
                <i class="fa fa-key"></i>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required>
            </div>

            <!-- Submit Button -->
            <input type="submit" class="btn" value="Sign Up" name="signup" id="button">

            <!-- Divider -->
            <p class="or">..........or..........</p>

            <!-- Social Media Icons -->
            <div class="icons">
                <i class="fab fa-google"></i>
                <i class="fab fa-facebook"></i>
            </div>

            <!-- Links -->
            <div class="links">
                <p>
                    Already have an account?
                   
                        <button id="signUpButton">Sign In</button>
                        
                    
                </p>
            </div>
        </form>
    </div>
</body>
</html>
