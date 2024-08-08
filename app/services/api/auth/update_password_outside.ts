import { useRouter } from 'next/router'; // Import useRouter from next/router
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export const update_passoword = async (password:string,emailAddress:string,otp:string) => {
  console.log(password,emailAddress,otp);
  try {
    const token = Cookies.get("token");
    if (!token) {
      throw new Error("No token found");
    }

    const api = await fetch("http://localhost:5000/api/student/forgot-password/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ password,emailAddress,otp }),
    });

    const data = await api.json();
    console.log(data);

    if (!api.ok) {
      throw new Error(data.message);
    }

    // Password update successful, redirect to login page
    const router = useRouter();
    router.push('/');

  } catch (error: any) {
    console.error("Password update error:", error);
    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
};
