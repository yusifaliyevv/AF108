let loginAttempts = 0;
let lockUntil = null;

function login() {
  const loginUser = document.getElementById("loginUser").value;
  const loginPass = document.getElementById("loginPass").value;

  if (lockUntil && Date.now() < lockUntil) {
    return showToast("Wait 15 minute (Too many wrong attempts)", true);
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => (u.username === loginUser || u.email === loginUser) && u.password === loginPass);

  if (!user) {
    loginAttempts++;
    if (loginAttempts >= 5) {
      lockUntil = Date.now() + 15 * 60 * 1000;
      return showToast("5 wrong attempt. Blocked 15 minute", true);
    }
    return showToast("The Username or Password is Incorrect", true);
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  showToast("Login successful");
  setTimeout(() => window.location.href = "settings.html", 1000);
}

function showToast(msg, error = false) {
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    backgroundColor: error ? "linear-gradient(to right, red, darkred)" : "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
}
