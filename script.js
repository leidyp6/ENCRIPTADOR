const inputTexto= document.querySelector(".texto-procesar")
const resultado= document.querySelector(".resultado")

function encriptar (textoUsuario){
	let matrizReglas= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	textoUsuario= textoUsuario.toLowerCase();

	for(let i=0; i<matrizReglas.length;i++){
		if(textoUsuario.includes(matrizReglas[i][0])){
			textoUsuario = textoUsuario.replaceAll(matrizReglas[i][0], matrizReglas[i][1]);
		}
	}
	return textoUsuario;
}

function desEncriptar (textoDesencriptado){
	let matrizReglas= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	textoDesencriptado= textoDesencriptado.toLowerCase();

	for(let i=0; i<matrizReglas.length;i++){
		if(textoDesencriptado.includes(matrizReglas[i][1])){
			textoDesencriptado = textoDesencriptado.replaceAll(matrizReglas[i][1], matrizReglas[i][0]);
		}
	}
	return textoDesencriptado;
}

function btnEncriptar (){
	let textoEncriptado = encriptar(inputTexto.value);
	resultado.value=textoEncriptado;
	resultado.style.backgroundImage="none";
	inputTexto.value="";
}

function btnDesencriptar(){	
	let textoDesencriptado = desEncriptar(inputTexto.value);
	resultado.value=textoDesencriptado;
	resultado.style.backgroundImage="none";
	inputTexto.value="";
}

function copy(){
	let content=document.getElementById("mensaje");
	content.select();
	document.execCommand("copy");
	alert("Texto copiado!");
	resultado.value="";
	resultado.style.backgroundImage="url(imagenes/binoculares.jpg)";
	
	
}