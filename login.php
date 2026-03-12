<?php
session_start();

if($_POST){
    if($_POST['user']=="admin" && $_POST['pass']=="1234"){
        $_SESSION['logado']=true;
        header("Location: index.php");
    }else{
        echo "Login inválido";
    }
}
?>

<form method="post">
<input name="user" placeholder="Usuário">
<input type="password" name="pass" placeholder="Senha">
<button type="submit">Entrar</button>
</form>