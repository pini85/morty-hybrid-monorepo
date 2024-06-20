import { toast } from "react-toastify";
import "./toast.css";
let toastId: string | number | null = null;

const showAlert = (message: string) => {
  if (toastId === null || !toast.isActive(toastId)) {
    toastId = toast.error(message, {
      position: "bottom-center",
      className: "custom-toast",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export default showAlert;
