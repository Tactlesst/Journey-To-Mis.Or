<?php
// Include the database connection file
include('dbconnect.php');
include 'header.php';

// Initialize variables
$email = $err_msg = "";
$register_success_msg = "";

// Handle Login
if (isset($_POST['action']) && $_POST['action'] == 'login') {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $password = md5($password); // Encrypt password with md5

    // Check if email and password match in the database
    $sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $_SESSION['name'] = $row['name'];
            $_SESSION['userid'] = $row['email'];
            header("Location: index.php");
            exit();
        } else {
            $err_msg = "Incorrect Email or Password";
        }
    } else {
        $err_msg = "Some error occurred during login";
    }
}


// Handle Registration
if (isset($_POST['action']) && $_POST['action'] == 'register') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    // Check if password and confirm password match
    if ($password !== $confirm_password) {
        $err_msg = "Passwords do not match!";
    } else {
        $hashed_password = md5($password); // Hash the password

        // Check if email already exists in database
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $err_msg = "Email already registered!";
        } else {
            // Insert new user data into database
            $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $name, $email, $hashed_password);
            if ($stmt->execute()) {
                $register_success_msg = "Registration successful! You can now login.";
            } else {
                $err_msg = "Some error occurred during registration.";
            }
        }
    }
}
?>
<head>
  <!-- Meta Tag -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="copyright" content="Nazef" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <!-- Title -->
  <title>Prototype1</title>
  <!-- WebIcon-->
  <link rel="icon" href="images/img/favicon2.png" />
  <!-- IconLibrary -->
  <link rel="stylesheet" href="fonts/fontawesome-free-6.6.0-web/css/all.min.css">
  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
    rel="stylesheet" />
  <!-- leafleft -->
  <link rel="stylesheet" href="js/leaflet/leaflet.css" />
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <!-- Nice Select CSS -->
  <link rel="stylesheet" href="css/nice-select.css" />
  <!-- Font Awesome CSS -->
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <!-- icofont CSS -->
  <link rel="stylesheet" href="fonts/icofont/icofont/icofont.css" />
  <link rel="stylesheet" href="fonts/icofont/icofont/icofont.min.css" />
  <link rel="stylesheet" href="css/icofont.css" />
  <!-- Slicknav -->
  <link rel="stylesheet" href="css/slicknav.min.css" />

  <!-- Owl Carousel CSS -->
  <link rel="stylesheet" href="css/owl-carousel.css" />
  <!-- Datepicker CSS -->
  <link rel="stylesheet" href="css/datepicker.css" />
  <!-- Animate CSS -->
  <link rel="stylesheet" href="css/animate.min.css" />
  <!-- Magnific Popup CSS -->
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <!-- Prototype1 CSS -->
  <link rel="stylesheet" href="css/normalize.css" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <link rel="stylesheet" href="js/dist/leaflet-routing-machine.css" />
</head>
<!-- HTML for Login and Register Forms -->
<body>
    <section class="auth-section section">
        <div class="container">
            <div class="inner">
                <div class="row">
                    <!-- Login Form -->
                    <div class="col-lg-6">
                        <div class="login-form">
                            <h2>Login Here</h2>
                            <p>Don't have an account? <a href="#register">Register Here</a></p>
                            <?php if ($err_msg && isset($_POST['action']) && $_POST['action'] == 'login') { echo "<p style='color:red;'>$err_msg</p>"; } ?>
                            <form class="form" method="post">
                                <input type="hidden" name="action" value="login">
                                <div class="form-group">
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div class="form-group">
                                    <button class="btn" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Register Form -->
                    <div class="col-lg-6">
                        <div class="register-form">
                            <h2>Register Here</h2>
                            <p>Already have an account? <a href="#login">Login Here</a></p>
                            <?php if ($err_msg && isset($_POST['action']) && $_POST['action'] == 'register') { echo "<p style='color:red;'>$err_msg</p>"; } ?>
                            <?php if ($register_success_msg) { echo "<p style='color:green;'>$register_success_msg</p>"; } ?>
                            <form class="form" method="post">
                                <input type="hidden" name="action" value="register">
                                <div class="form-group">
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div class="form-group">
                                    <input type="password" name="confirm_password" placeholder="Confirm Password" required />
                                </div>
                                <div class="form-group">
                                    <button class="btn" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>

