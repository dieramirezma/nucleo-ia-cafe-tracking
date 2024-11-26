document.addEventListener("DOMContentLoaded", function () {
  const actorSelect = document.getElementById("actorSelect");
  const formularios = [
    "formProd", // Productor
    "formProcPrim", // Procesadores Primarios
    "formInter", // Intermediarios
    "formProcSec", // Procesadores Secundarios
    "formExp", // Exportadores
    "formImp", // Importadores
    "formTost", // Tostadores
    "formDist", // Distribuidores
    "formMin", // Minoristas
    "formCons", // Consumidores
  ];

  function ocultarFormularios() {
    formularios.forEach(function (formId) {
      const form = document.getElementById(formId);
      if (form) {
        form.style.display = "none";
      }
    });
  }

  function mostrarFormulario() {
    const seleccionado = actorSelect.value;

    ocultarFormularios();

    if (seleccionado) {
      const formSeleccionado = document.getElementById("form" + seleccionado);
      if (formSeleccionado) {
        formSeleccionado.style.display = "block";
      }
    }
  }

  actorSelect.addEventListener("change", mostrarFormulario);

  ocultarFormularios();
});

function goHome() {
  window.location.href = "/";
}