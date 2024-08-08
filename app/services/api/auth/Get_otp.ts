import { Router, useRouter } from "next/router";
import Swal from "sweetalert2";

export const Get_otp = async (emailAddress: String) => {
  console.log(emailAddress);
  try {
    const api = await fetch(
      "http://localhost:5000/api/student/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          emailAddress,
        }),
      }
    );
    const data = await api.json();
    console.log(data);
    if (!api.ok) {
      throw new Error(data.message);
    }

    if (api.ok) {
      Swal.fire({
        title: "OTP sent Successful",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
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
