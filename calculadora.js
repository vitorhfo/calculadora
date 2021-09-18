function adicao(){
                var v1 = parseInt(document.getElementById("valor1").value);
                var v2 = parseInt(document.getElementById("valor2").value);
                var resultado = v1 + v2;
                console.log(v1)
                console.log(resultado);
                var elementoResultadoDaSoma = document.getElementById("resultadoDaOperacao");
                var resultadoDaOperacao = "A soma é igual a " + resultado;
                elementoResultadoDaSoma.innerHTML = resultadoDaOperacao;
}

function subtrair(){
                var v1 = parseInt(document.getElementById("valor1").value);
                var v2 = parseInt(document.getElementById("valor2").value);
                var resultado = v1 - v2;
                var elementoResultadoDaSubtracao = document.getElementById("resultadoDaOperacao");
                var resultadoDaOperacao = "A subtração é igual a " + resultado;
                elementoResultadoDaSubtracao.innerHTML = resultadoDaOperacao;
}

function multiplicar(){
                var v1 = parseInt(document.getElementById("valor1").value);
                var v2 = parseInt(document.getElementById("valor2").value);
                var resultado = v1 * v2;
                var elementoResultadoDaMultiplicacao = document.getElementById("resultadoDaOperacao");
                var resultadoDaOperacao = "A multiplicação é igual a " + resultado;
                elementoResultadoDaMultiplicacao.innerHTML = resultadoDaOperacao;              
}

function dividir(){
                var v1 = parseInt(document.getElementById("valor1").value);
                var v2 = parseInt(document.getElementById("valor2").value);
                var resultado = v1 / v2;
                var elementoResultadoDaDivisao = document.getElementById("resultadoDaOperacao");
                var resultadoDaOperacao = "A divisão é igual a " + resultado.toFixed(1);
                elementoResultadoDaDivisao.innerHTML = resultadoDaOperacao;
}