import axios from "axios";

class MunchService {
  constructor() {
    if (this instanceof StaticClass) {
      throw Error(
        "MunchService is a static class, thus cannot be instantiated."
      );
    }
  }

  static http = axios.create({
    // baseURL ini sesuaikan dengan url backend Anda
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-type": "application/json",
    },
  });

  // COMMON
  static login(email, password) {
    return this.http.post("/login", {
      users_email: email,
      password,
    });
  }

  static register(
    nama,
    email,
    alamat,
    telepon,
    password,
    password_confirmation,
    role,
    tnc
  ) {
    return this.http.post("/register", {
      users_nama: nama,
      users_email: email,
      users_alamat: alamat,
      users_telepon: telepon,
      users_password: password,
      users_password_confirmation: password_confirmation,
      users_role: role,
      users_tnc: tnc,
    });
  }

  static getUser() {
    return this.http.get("/user");
  }

  static logout() {
    return this.http.post("/logout");
  }

  // ADMIN
  static getAllCustomers() {
    return this.http.get("/admin/users/getAllCustomers");
  }

  static getAllProviders() {
    return this.http.get("/admin/users/getAllProviders");
  }

  static banUser(id) {
    return this.http.patch("/admin/users/banUser/" + id);
  }

  static unbanUser(id) {
    return this.http.patch("/admin/users/unbanUser/" + id);
  }

  static approveProvider(id) {
    return this.http.patch("/admin/users/approveProvider/" + id);
  }

  // PROVIDER
  static menu() {
    return this.http.get("/provider/menu");
  }

  static addMenu() {
    return this.http.post("/provider/menu");
  }

  static getPesananProvider() {
    return this.http.get("/provider/pesanan/getPesananProvider");
  }
}

export default MunchService;
