function register() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!isValidUsername(username)) {
    return showToast("Username is incorrect", true);
  }

  if (!isValidEmail(email)) {
    return showToast("Email is incorrect", true);
  }

  if (!isStrongPassword(password)) {
    return showToast("Weak password", true);
  }

  if (password !== confirmPassword) {
    return showToast("Password and confirm password do not match", true);
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.some((u) => u.username === username || u.email === email)) {
    return showToast("Username or email already exist", true);
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  showToast("Register successful");
  setTimeout(() => (window.location.href = "login.html"), 1000);
}

function isValidUsername(username) {
  if (username.length < 3 || username.length > 20) return false;

  for (let i = 0; i < username.length; i++) {
    let char = username[i];
    if (
      !(
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9") ||
        char === "_" ||
        char === "-"
      )
    ) {
      return false;
    }
  }

  return true;
}

function isValidEmail(email) {
  if (!email.includes("@") || !email.includes(".")) return false;

  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
    return false;
  }

  return true;
}

function isStrongPassword(pass) {
  let hasLowercase = false;
  let hasUppercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (let i = 0; i < pass.length; i++) {
    let char = pass[i];
    if (char >= "a" && char <= "z") hasLowercase = true;
    if (char >= "A" && char <= "Z") hasUppercase = true;
    if (char >= "0" && char <= "9") hasNumber = true;
    if ("@#$%&".includes(char)) hasSpecialChar = true;
  }

  return (
    hasLowercase &&
    hasUppercase &&
    hasNumber &&
    hasSpecialChar &&
    pass.length >= 8
  );
}

function showToast(msg, error = false) {
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    backgroundColor: error
      ? "linear-gradient(to right, red, darkred)"
      : "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
}