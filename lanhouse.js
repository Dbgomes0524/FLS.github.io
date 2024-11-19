function calcularValor() {
    const valorPor15Minutos = parseFloat(document.getElementById('valorMinuto').value);
    const tempoUso = parseInt(document.getElementById('tempoUso').value);

    if (isNaN(valorPor15Minutos) || isNaN(tempoUso) || tempoUso <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Cálculo do valor total
    const intervalos = Math.ceil(tempoUso / 15);
    const valorTotal = intervalos * valorPor15Minutos;

    document.getElementById('resultado').innerText = `Valor a ser pago: R$ ${valorTotal.toFixed(2)}`;
}
