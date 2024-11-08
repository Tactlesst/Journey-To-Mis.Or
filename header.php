<?php session_start(); ?>
<!DOCTYPE html>
<html>
<header class="header">
    <!-- End Topbar -->
    <!-- Header Inner -->
    <div class="header-inner">
      <div class="container">
        <div class="inner">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-3 col-12">
              <!-- Start Logo -->
              <div class="logo">
                <a href="index.html"><img src="images/img/rsz_logo.png" alt="#" /></a>
              </div>
              <!-- End Logo -->
              <!-- Mobile Nav -->
              <div class="mobile-nav"></div>
              <!-- End Mobile Nav -->
            </div>
            <div class="col-lg-7 col-md-9 col-12">
              <!-- Main Menu -->
              <div class="main-menu">
                <nav class="navigation">
                  <ul class="nav menu">
                    <li class="active">
                      <a href="#top"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">Places </a>
                      <ul class="dropdown">
                        <li><a href="Person.html">Tourism</a></li>
                        <li>
                          <a href="Person-details.html">Tourism Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"> Review </a>
                      <ul class="dropdown">
                        <li><a href="service.html">Service</a></li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"> Pages </a>
                      <ul class="dropdown">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="travels.html">Travels</a></li>
                        <li><a href="time-table.html">Time Table</a></li>
                        <li><a href="Dashboard_Admin.html">Dashboard</a></li>
                        <li><a href="dashboard_Places.html">Places</a></li>
                        <li><a href="register.html">Sign Up</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="mail-success.html">Mail Success</a></li>
                        <li><a href="404.html">404 Error</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"> Blogs </a>
                      <ul class="dropdown">
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-single.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html"> Contact Us</a></li>
                  </ul>
                </nav>
              </div>
              <!--/ End Main Menu -->
            </div>
            <div class="col-lg-2 col-12">
              <div class="get-quote">
              <?php if (isset($_SESSION['name'])) { ?>
        <div class="logout">
            <a href="logout.php" class="btn btn-login"><i class="fa fa-sign-out"></i> Logout</a>
        </div>
        <?php } else { ?>
        <a id="login"href="login.php" class="btn btn-login"><i class="fa fa-sign-in"></i> Login</a>
        <?php } ?>
        <div class="user">
            <?php if (isset($_SESSION['name'])) { ?>
                <span class="welcome"> &nbsp;&nbsp;<?php echo $_SESSION['name']; ?></span>
                <div class="profile-picture">
                    <img src="images/BALINGASAG.png" alt="Profile Picture" width="50" height="50">
                </div>
            <?php } ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Header Inner -->
  </header>
  </html>