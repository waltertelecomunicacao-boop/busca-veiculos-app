<?php
$db = new SQLite3('../database/banco.db');

$placa=$_POST['placa'];
$nome=$_POST['nome'];
$modelo=$_POST['modelo'];

$db->exec("INSERT INTO veiculos (placa,nome,modelo) VALUES ('$placa','$nome','$modelo')");

echo "ok";
?>