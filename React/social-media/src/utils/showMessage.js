import Swal from "sweetalert2";

export const showErrorMessage = (message) => {
  Swal.fire({
    icon: "error",
    title: message,
    timer: 2500,
    showConfirmButton: false,
  });
};

export const showSuccessMessage = (message) => {
  Swal.fire({
    icon: "success",
    title: message,
    timer: 2500,
    showConfirmButton: false,
  });
}