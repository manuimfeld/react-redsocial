import Swal from "sweetalert2";

const sweetAlert = (title, text, icon) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonText: "Ok",
    timer: 5000,
  });
};

export default sweetAlert;
