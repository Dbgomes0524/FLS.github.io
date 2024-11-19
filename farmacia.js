function fmt(n){
    const formater = new Intl.NumberFormat('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    return formater.format(n);
}

function calculo(){
    let 
    name = document.getElementById("NomeDoProduto").value,
    Preco = document.getElementById("Preço").value
    ;

    let 
    NomeTrocar = document.getElementById("NomeTrocar"),
    valorproduto = document.getElementById("valorproduto")
    ;

    Preco = Math.floor(Preco);
    Preco = fmt(Preco*2);
    

    valorproduto.innerHTML = Preco;
    NomeTrocar.innerHTML = name;
}
