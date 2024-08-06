import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const login = async (userName: string, password: string) => {
  console.log(userName, password);
  try {
    const api = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });
    const data = await api.json();
    console.log(data);
    if (!api.ok) {
      throw new Error(data.message);
    }

    if (data.data.token) {
      Cookies.set("token", data.token);

      Swal.fire({
        title: "Login Successful",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/home";
      });
    } else {
      throw new Error("Failed to get token from response");
    }
  } catch (error: any) {
    console.error("Login error:", error);
    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
};
