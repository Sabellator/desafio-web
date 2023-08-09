function obtenerFechaActual() {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const fecha = new Date();
  const mes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();
  return `${mes} de ${anio}`;
}

function actualizarFechaActual() {
  const elementoFecha = document.getElementById("fecha-actual");
  elementoFecha.textContent = obtenerFechaActual();
}

actualizarFechaActual();
setInterval(actualizarFechaActual, 1000);
