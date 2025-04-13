let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = "login.html";
}

document.getElementById("welcomeUser").textContent = currentUser.username;

function updateAccount() {
  const newUsername = document.getElementById("newUsername").value;
  const newEmail = document.getElementById("newEmail").value;
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (!isValidUsername(newUsername) || !isValidEmail(newEmail)) {
    return showToast("New data incorrect", true);
  }

  if (
    users.some(
      (u) =>
        (u.username === newUsername || u.email === newEmail) &&
        u.email !== currentUser.email
    )
  ) {
    return showToast("Username or email already exist", true);
  }

  users.forEach((u) => {
    if (u.email === currentUser.email) {
      u.username = newUsername;
      u.email = newEmail;
    }
  });

  currentUser.username = newUsername;
  currentUser.email = newEmail;
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  showToast("Reset successful");
  document.getElementById("welcomeUser").textContent = newUsername;
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
  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
    return false;
  }

  return true;
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
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
