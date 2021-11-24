import Swal from "sweetalert2";

export const alert = async (title, text, buttonText, icon) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: buttonText,
    confirmButtonColor: icon !== "error" ? "#10B981" : "#EF4444"
  });
};
