let crecimiento = 0;
let crecimientoTexto = 0;
const dropDownIconsBase = " Elegí el tipo de producto*";
const dropDownsBase = document.getElementById("opcionBase");
const btnAgregarProductoALista = document.getElementById(
  "btnAgregarProductoALista"
);

let contenedorProductos = document.getElementById("contenedorProductos");
var btnSumar = document.getElementById("btnSumar");

function agregarProductoALista() {
  let iconoSeleccionado = document.getElementById("dropDownIcons");
  let tituloDeProducto = document.getElementById("tituloDelUsuario").value;
  let descripcionDeProducto = document.getElementById(
    "descripcionDelUsuario"
  ).value;
  var textoIcono = document.getElementById("textoIcono");
  let itemDeLista = document.getElementById("itemDeLista");
  let templateItemAgregado = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <div class="ms-2 me-auto d-flex itemLista">
  <div class="d-flex align-items-center itemDeLista" ${idEnCrecimiento()}>
  
  ${colocacionDeIcono()}
  </div>
  <div ${idTextosEnCrecimiento()}>
    <div class="fw-bold">${tituloDeProducto}</div>
    <p>${descripcionDeProducto}</p>
  </div>
  </div>
  <a href="#" data-bs-toggle="modal" data-bs-target="#modalDetalleProductos">
  <i class="fa-solid fa-circle-chevron-right"></i></a>
  </li>`;

  contenedorProductos.innerHTML += templateItemAgregado;

  function listaVaciaListaLLena() {
    var listaVacia = document.getElementById("listaVacia");
    var listaConItems = document.getElementById("listaConItems");
    listaVacia.classList.remove("seVe");
    listaVacia.classList.add("noSeVe");
    listaConItems.classList.remove("noSeVe");
    listaConItems.classList.add("seVe");
  }
  listaVaciaListaLLena();
  function verDetalle() {
    let iconoParaDetalle = document.getElementById();
  }

  function colocacionDeIcono() {
    let cloneIconoSeleccionado = iconoSeleccionado.cloneNode(true);
    let cloneInnerHtml = cloneIconoSeleccionado.innerHTML;
    let nIndexOf = cloneInnerHtml.indexOf('<span id="textoIcono">');
    let iconoSinTexto = cloneInnerHtml.slice(0, nIndexOf);
    return iconoSinTexto;
  }

  function idEnCrecimiento() {
    crecimientoTexto = ++crecimientoTexto;
    identificadorUnico = 'id="itemDeLista' + crecimientoTexto + '"';

    return identificadorUnico;
  }

  function idTextosEnCrecimiento() {
    crecimiento = ++crecimiento;
    identificadorUnico = 'id="textoDeLista' + crecimiento + '"';

    return identificadorUnico;
  }
}

function lanzarToast() {
  const toastTrigger = document.getElementById("btnAgregarProductoALista");
  const toastLiveExample = document.getElementById("liveToast");
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
}

function reseteoPopUP() {
  let dropDownIcons = document.getElementById("dropDownIcons");
  dropDownIcons.innerHTML = dropDownsBase.innerHTML;
}

btnSumar.addEventListener("click", function () {
  console.log("abriste el popup para agregar productos");
  formAdd.reset();
  reseteoPopUP();
});

btnAgregarProductoALista.addEventListener("click", function () {
  let tituloProductoPopUp = document.getElementById("tituloDelUsuario").value;
  let iconoProductoPopUp = document.getElementById("dropDownIcons");
  //debugger;
  if (
    tituloProductoPopUp != "" &&
    iconoProductoPopUp.outerText !== dropDownIconsBase
  ) {
    console.log("agregado");
    agregarProductoALista();
    lanzarToast();
  } else if (
    tituloProductoPopUp === "" &&
    iconoProductoPopUp.outerText !== dropDownIconsBase
  ) {
    alert("Te falta el titulo papu");
  } else if (
    tituloProductoPopUp !== "" &&
    iconoProductoPopUp.outerText === dropDownIconsBase
  ) {
    alert("No pusiste el icono, campeon");
  } else {
    alert("Te falta todo rey");
    console.log("no se agrego, entre al else");
  }
});

function guardarValorClickeado(clicked_id) {
  let dropDownIcons = document.getElementById("dropDownIcons");
  let iconoSeleccionado = document.getElementById(clicked_id);
  let toastProductoSeleccionado = document.getElementById("productoAgregado");

  function actualizarToast() {
    toastProductoSeleccionado.innerHTML = iconoSeleccionado.innerHTML;
  }
  function cambiarIconoDropDown() {
    dropDownIcons.innerHTML = iconoSeleccionado.innerHTML;
  }

  cambiarIconoDropDown();
  actualizarToast();

  function funcionamiento() {}
}

//formAdd.addEventListener("submit");

/*var horario = new Date();
let horarioArgentina = "";
horarioArgentina = horario.toLocaleString("es-AR");
horarioArgentina.toString();
let tiempoToast2 = document.getElementById("tiempoToast").innerText;*/
