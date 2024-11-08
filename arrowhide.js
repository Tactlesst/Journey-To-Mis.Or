var appended = false, bookmark = document.createElement("div");
bookmark.id = "arrowUp";
bookmark.innerHTML = "<a href=\"#\" title=\"Top of the page.\"> <i class=\"fa fa-angle-up\"></i></a>";

onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 500) {
    if (!appended) {
      document.body.appendChild(bookmark);
      appended = true;
    }
  } else {
    if (appended) {
      document.body.removeChild(bookmark);
      appended = false;
    }
  }
};
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');
  const registerLink = document.querySelector('.show-register');
  const loginLink = document.querySelector('.show-login');

  // Initially, show the login form and hide the register form
  registerForm.style.display = 'none';

  // Function to show the registration form and hide the login form
  registerLink.addEventListener('click', function () {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  });

  // Function to show the login form and hide the registration form
  loginLink.addEventListener('click', function () {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  });
});
