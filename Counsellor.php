<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Counsellor login</title>
        <link rel="stylesheet" href="user.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
       
        <div class="container" id="signin">
            <h1 class="form-title">Counsellor SIGN IN</h1>
            <form method="post" action="">
                        <div class="input-group">
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="email" id="email" placeholder="Email" required>
                    <label for="email"></label>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="text" id="password" placeholder="password" required>
                    <label for="password"></label>
                    <input type="submit" class="btn" value="Sign In" name="Sign in">
                </div>
                
            
                <div class="links">
                    <p>Don't have Account yet?</p>
                    <button id="signUpbutton"> Sign Up</button>
                    </div>
            </form>
        </div>
</body>
</html>