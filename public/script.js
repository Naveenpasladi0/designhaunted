// Signup logic
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    localStorage.setItem("websiteDesignerUser", JSON.stringify({ username, password }));
    alert("Signup successful! Please sign in.");
    window.location.href = "index.html";
  });
}

// Login logic
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedUser = JSON.parse(localStorage.getItem("websiteDesignerUser"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      window.location.href = "designer.html";
    } else {
      alert("Invalid login credentials");
    }
  });
}