//função: define uma lista de ações que serão executadas quando a função for chamada. Palavra reservada para criar uma função em java function
function insert(num){ //Início da função
    //Variável é um espaço na memória que armazena uma informação para uso posterior. Ao nomeá-la evite: nºs e letras maiúsculas no início, espaço entre palavras (use _ ou camelCase) e acentuação.
    //Captura o conteúdo atual exibido no elemento com id 'resultado' e armazena na variável 'numero'.
    var numero = document.getElementById('resultado').innerHTML;
    //Atualiza o conteúdo do elemento 'resultado' concatenando o valor atual com o nº ou o operador (+,-,/,*) passado no parâmetro num
    document.getElementById('resultado').innerHTML = numero + num;
}//Fim da função

//Função para limpar todo o conteúdo que aparece no visor (tag p [id=resultado])
function clean(){
    //Define que o conteúdo do elemento 'resultado' como um elemento de texto vazio, limpando a tela
    document.getElementById('resultado').innerHTML = "";
}

//Função para apagar o último caractére digitado.
function del(){
    //Variável para armazenar a informação atual do visor (tag p)
    var resultado = document.getElementById('resultado').innerHTML;
    //Usa o método substring para remover o último caractér digitado na tela.
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1);
}
//Função 'calcular' irá avaliar a expressão da tela e realizar o cálculo exibindo-o na tela.
function calcular(){

    var resultado = document.getElementById('resultado').innerHTML;
    //Se o conteúdo da tela (tag p) não estiver vazio
    if(resultado){
        //Use a função eval() para avaliar a expressão matemática e retornar o resultado da operação
        document.getElementById('resultado').innerHTML= eval(resultado);
    }
    //Senão, caso não haja nenhum conteúdo no visor
    else{
        //Exibe uma mensagem de erro
        document.getElementById('resultado').innerHTML='III NÃO TEM NADA';
    }
}

document.addEventListener('keydown', function(event){
    //'Salva' a tecla pressionada
    var tecla = event.key
    if(/[0-9+\-*/]/.test(tecla)){
        insert(tecla);
    }
    else if(tecla == 'Enter'){
        calcular();
    }
    //Verifica se a tecla pressionada é o Delete
    else if(tecla == 'Backspace'){
        del();//Chama a função del - Apaga o último caractér
    }
    else if(tecla == 'Delete'){
        clean();//Chama a função clean - Apagando todo o conteúdo do visor (tag p).
    }
    }//Fim da função
)//Fecha o bloco do evento