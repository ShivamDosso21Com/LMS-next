import { useRouter } from 'next/router'; // Import useRouter from next/router
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export const update_passoword = async (oldPassword: string, newPassword: string) => {
  console.log(oldPassword, newPassword);
  try {
    const token = Cookies.get("token");
    if (!token) {
      throw new Error("No token found");
    }

    const api = await fetch("http://localhost:5000/api/password/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
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
