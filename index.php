<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Busca Veículos</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0d6efd">
<link rel="stylesheet" href="css/estilo.css">
</head>

<body>

<h1>Busca de Veículos</h1>

<input type="text" id="placa" placeholder="Digite a placa">
<button onclick="buscar()">Buscar</button>

<div id="resultado"></div>

<script src="js/app.js"></script>

<script>
if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('service-worker.js');
}
</script>

</body>
</html>