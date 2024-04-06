import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (message) => {
  toast.success(message, {
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "light",
    toastId: "successtoast",
  });
};

export const warningToast = (message) => {
  toast.warning(message, {
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "light",
    toastId: "warningtoast",
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "light",
    toastId: "errortoast",
  });
};
