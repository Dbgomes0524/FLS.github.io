function calculo() 
{

    let nomeproduto = document.getElementById("nomeproduto").value;
    let precoproduto = document.getElementById("valorpreco").value;
    let 
    nomeDestaque = document.getElementById('nome-Produto'),
    total = document.getElementById('total'),
    precounico = document.getElementById("precounico")
    ;

    precoproduto = parseFloat(precoproduto);
    nomeDestaque.innerHTML = nomeproduto;
    total.innerHTML = precoproduto*2.5;
    precounico.innerHTML = precoproduto*0.5;
}

