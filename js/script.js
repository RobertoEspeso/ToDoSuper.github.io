let lista = document.getElementById("lista");
let btnSumar = document.getElementById("btnSumar");

btnSumar.addEventListener("click", popSumar);

function popSumar() {}
lista.innerHTML;

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

/*
var horario = new Date();
let horarioArgentina = "";
horarioArgentina = horario.toLocaleString("es-AR");
horarioArgentina.toString();
let tiempoToast2 = document.getElementById("tiempoToast").innerText;


*/
let dropDownIconsBase = document.getElementById("dropDownIcons");
function guardarValorClickeado(clicked_id) {
  let dropDownIcons = document.getElementById("dropDownIcons");
  let iconoSeleccionado = document.getElementById(clicked_id);
  let toastProductoSeleccionado = document.getElementById("productoAgregado");

  switch (clicked_id) {
    default:
      dropDownIcons.innerHTML = dropDownIconsBase.innerHTML;
      break;
    case "opcion1":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion2":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion3":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion4":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion5":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion6":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion7":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion8":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion9":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion10":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion11":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion12":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion13":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion14":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
    case "opcion15":
      dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
      toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
      break;
  }
}
