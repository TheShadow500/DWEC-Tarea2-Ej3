window.onload = function(){
    const botoncampos = document.getElementById("botoncampos");
    botoncampos.addEventListener("click", crearCampos);
}

function crearCampos(){
    // Cogemos el valor de campos y lo validamos
    let elementos = document.getElementById("ndecampos").value;
    if(isNaN(elementos) || elementos < 0 || elementos > 10 || elementos == ''){
        window.alert("Valor Incorrecto");
    }
    else{
        // Ocultamos el primer campo
        document.getElementById("formularionumero").style.display = "none";

        // Generamos el codigo HTML y mostramos los campos
        document.getElementById("fdecampos").style.display = "block";

        let texto = "<div class='titulo'><h2>Introduzca los Valores</h2></div>";
        texto += "<div class='campos2'>";
        for(let i = 0; i < elementos; i++){
            texto += "<div class='valores'><label for='numero" + i + "'> Valor " + (i + 1) + " <input class='texto' type='text' id='numero" + i + "'></div>";
        }
        texto += "<button class='boton' id='enviarNumeros'>Calcular</button>";
        texto += "</div>";

        let campos = document.createElement("div");
        campos.innerHTML = texto;

        // Creamos el boton de calcular y le asignamos el evento de la pulsación
        let codigoFormulario = document.getElementById("fdecampos");
        codigoFormulario.appendChild(campos);

        const botonnumeros = document.getElementById("enviarNumeros");
        botonnumeros.addEventListener("click", function(){calcularMedia(elementos)});
    }
}

function calcularMedia(elementos){
    let correcto = true;
    let sumatoria = 0;
    let resultado;

    // Recorremos todos los campos para validarlos y sumar sus valores
    for(let i = 0; i < elementos; i++){
        let numero = parseFloat((document.getElementById("numero" + i).value).replaceAll(',','.'));
        if(isNaN(numero) || numero < 0 || numero == ''){
            correcto = false;
        }
        else{
            sumatoria += numero;
        }
    }
    
    // Si la validacion es correcta se muestra por pantalla el resultado
    if(correcto){
        resultado = sumatoria / elementos;
        let texto = "<div class='titulo'><h2>Resultado</h2></div>";
        texto += "<div class='campos'>";
        texto += "La media de los numeros introducidos es: " + resultado;
        texto += "</div>";

        let resultadoenviar = document.createElement("div");
        resultadoenviar.innerHTML = texto;

        let codigoFormulario = document.getElementById("fdecampos");
        codigoFormulario.appendChild(resultadoenviar);
    }
    else{
        window.alert("Debe introducir correctamente los valores");
    }
}