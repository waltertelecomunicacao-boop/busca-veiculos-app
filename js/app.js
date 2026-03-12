function buscar(){

let placa = document.getElementById("placa").value;

fetch("api/buscar.php?placa="+placa)
.then(r=>r.json())
.then(d=>{

if(!d){
document.getElementById("resultado").innerHTML="Não encontrado";
return;
}

document.getElementById("resultado").innerHTML =
"Proprietário: "+d.nome+"<br>Modelo: "+d.modelo;

})

}