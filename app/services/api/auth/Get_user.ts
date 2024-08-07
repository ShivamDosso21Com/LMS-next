import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const Get_user = async () => {
  try {
    const token = Cookies.get("token");
    console.log(token);
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch("http://localhost:5000/api/student/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`, // Use Bearer prefix if required by your API
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    if (data.data.status === true) {
      return data.data.name; // Adjust according to your API response structure
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error: any) {
    console.error("Error fetching user data:", error);
    Swal.fire({
      title: "Error!",
      text: error.message || "An unknown error occurred",
      icon: "error",
      confirmButtonText: "Try Again",
    });
    return null;
  }
};
