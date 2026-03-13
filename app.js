
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7qJXYw7EwgSCwgxPCmEX5d7-z5JQiGME",
  authDomain: "controle-veiculos-5c712.firebaseapp.com",
  projectId: "controle-veiculos-5c712",
  storageBucket: "controle-veiculos-5c712.firebasestorage.app",
  messagingSenderId: "474398266384",
  appId: "1:474398266384:web:6a0989eb0c36c5a7a8e695"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let veiculosCache = [];

window.salvar = async function(){

let placa = document.getElementById("placa").value
let nome = document.getElementById("nome").value
let modelo = document.getElementById("modelo").value

if(!placa) return alert("Digite a placa")

await addDoc(collection(db,"veiculos"),{
placa,
nome,
modelo
})

alert("Veículo salvo")
limpar()
listar()

}

window.limpar = function(){

document.getElementById("placa").value=""
document.getElementById("nome").value=""
document.getElementById("modelo").value=""

}

window.buscar = function(){

let texto = document.getElementById("busca").value.toUpperCase()

let filtrados = veiculosCache.filter(v =>
v.placa.toUpperCase().includes(texto)
)

render(filtrados)

}

async function listar(){

const querySnapshot = await getDocs(collection(db,"veiculos"))

veiculosCache=[]

querySnapshot.forEach((d)=>{

veiculosCache.push({
id:d.id,
...d.data()
})

})

render(veiculosCache)

}

function render(lista){

let html=""

lista.forEach(v=>{

html += `
<div class="card">
<b>Placa:</b> ${v.placa}<br>
<b>Nome:</b> ${v.nome}<br>
<b>Modelo:</b> ${v.modelo}
<br>
<button class="delete" onclick="apagar('${v.id}')">Apagar</button>
</div>
`

})

document.getElementById("lista").innerHTML = html

}

window.apagar = async function(id){

if(!confirm("Apagar veículo?")) return

await deleteDoc(doc(db,"veiculos",id))

listar()

}

listar()
