<?php
$db = new SQLite3('../database/banco.db');

$placa = $_GET['placa'];

$res = $db->query("SELECT * FROM veiculos WHERE placa='$placa'");

$data = $res->fetchArray(SQLITE3_ASSOC);

echo json_encode($data);
?>