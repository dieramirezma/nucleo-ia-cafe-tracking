// // Inicializar el escáner
// const qrCodeScanner = new Html5QrcodeScanner(
//   "qr-reader", // Elemento contenedor para el escáner
//   {
//     fps: 10, // Frames por segundo (puedes ajustarlo según sea necesario)
//     qrbox: 250, // Tamaño de la caja del QR (puedes ajustarlo también)
//   },
//   true // Si está en True, usa la cámara frontal por defecto (en algunos dispositivos)
// );

// // Función para manejar el escaneo exitoso
// function onScanSuccess(decodedText, decodedResult) {
//   // Muestra el texto decodificado en el contenedor de resultados
//   document.getElementById(
//     "result"
//   ).innerHTML = `<p><strong>QR Escaneado:</strong> ${decodedText}</p>`;
// }

// // Función para manejar errores
// function onScanError(errorMessage) {
//   // Puedes mostrar algún error si lo deseas
//   console.log(errorMessage);
// }

// document
//   .getElementById("scannerQR")
//   .addEventListener("click", function () {
//     // Iniciar el escáner de QR al hacer clic en el botón
//     qrCodeScanner.render(onScanSuccess, onScanError);
//   });