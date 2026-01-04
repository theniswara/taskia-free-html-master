document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userNameByInput = document.getElementById("username").value;

    const result = userManager.signIn(userNameByInput);

    if (result.success) {
      alert("success loggedin")
      // return (window.location.href = "../tasks.html")
    } else {
      console.log("proses login gagal");
    }
  });
});
