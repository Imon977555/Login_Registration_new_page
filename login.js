function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  const userData = localStorage.getItem(email);

  if (!userData) {
    message.textContent = "Account not found!";
    return false;
  }

  const user = JSON.parse(userData);
  if (user.password !== password) {
    message.textContent = "Incorrect password!";
    return false;
  }

  message.style.color = "green";
  message.textContent = "Login successful! Redirecting...";
  setTimeout(() => window.location.href = "home.html", 2000);
  return false;
}


