//DECLARAÇÃO DA FUNÇÃO: COMO A FUNÇÃO VAI FUNCIONAR
//NOME_FUNCAO(PARAMETROS)

    function exibir_mensagem(mensagem){
        console.log(mensagem);
        alert(mensagem);
    }

     function somar(){
        var a = parseInt(document.getElementById('valor1').value);
        var b = parseInt(document.getElementById('valor2').value);
        res_soma = a + b;
        exibir_mensagem(res_soma);
    }

    function dividir(){
        var a = parseInt(document.getElementById('valor1').value);
        var b = parseInt(document.getElementById('valor2').value);
        if( b == 0 ){
            exibir_mensagem('Não existe divisão por 0.');
        }else{
            res_divisao = a / b;
            exibir_mensagem(res_divisao);

        }
    }

    function subtrair(){
        var a = parseInt(document.getElementById('valor1').value);
        var b = parseInt(document.getElementById('valor2').value);
        return false;
    }

    function multiplicar(){
        var a = parseInt(document.getElementById('valor1').value);
        var b = parseInt(document.getElementById('valor2').value);
        return false;
    }