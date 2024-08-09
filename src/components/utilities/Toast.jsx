import Swal from "sweetalert2";

export const Toast = (message, status) => {
  Swal.fire({
    text: message,
    icon: status,
    showConfirmButton: false,
    timer: 1500,
    position: "center",
  });

  return null;
};

export default Toast;
