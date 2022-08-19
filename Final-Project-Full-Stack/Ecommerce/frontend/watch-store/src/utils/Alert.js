import Swal from "sweetalert2";

export const fireAlert = (message, isError = false) => {
  Swal.fire({
    icon: isError ? "error" : "success",
    title: message,
  });
};


export default fireAlert