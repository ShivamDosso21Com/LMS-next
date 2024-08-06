
import Swal from "sweetalert2";

export const Verify_otp = async (emailAddress:String, otp : number) => {
  console.log(emailAddress);
  try {
    const api = await fetch("http://localhost:5000/api/student/forgot-password/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        emailAddress,
        otp
      }),
    });
    const data = await api.json();
    console.log(data);
    if (!api.ok) {
      throw new Error(data.message);
    }

    if (data.status==200) {
      

      Swal.fire({
        title: "OTP Verified Successfully",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/update_password";
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
