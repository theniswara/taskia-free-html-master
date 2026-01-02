class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    // Simpan user baru ke array users
    this.users.push(newUser);

    // Simpan ke localStorage
    localStorage.setItem("users",JSON.stringify(this.users));

    // Arahkan ke halaman sigin
    return (window.location.href = "../signin.html");
    console.log("User berhasil disimpan:", newUser);
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]")
  }
}