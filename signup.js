function signupUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    return false;
  }

  if (localStorage.getItem(email)) {
    message.textContent = "Account already exists!";
    return false;
  }

  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));

  message.style.color = "green";
  message.textContent = "Account created successfully! Redirecting...";
  setTimeout(() => window.location.href = "index.html", 2000);
  return false;
}




