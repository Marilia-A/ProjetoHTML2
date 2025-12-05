
function obterIMC(peso, altura) {
  peso = typeof peso === "string" ? peso.replace(",", ".") : peso;
  altura = typeof altura === "string" ? altura.replace(",", ".") : altura;

  peso = parseFloat(peso);
  altura = parseFloat(altura);

  if (peso <= 0 || altura <= 0) {
    return null;
  }

  const imc = peso / (altura * altura);
  return imc; 
}

function calcularIMC() {
  const pesoInput = document.getElementById('peso').value;
  const alturaInput = document.getElementById('altura').value;

  const imc = obterIMC(pesoInput, alturaInput);

  if (imc === null) {
    document.getElementById('resultado').textContent = "IMC: valores inválidos";
    document.getElementById('classificacao').textContent = "Classificação: —";
    return;
  }

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade Grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade Grau II (Severa)";
  } else {
    classificacao = "Obesidade Grau III (Mórbida)";
  }

  // exibe IMC com 1 casa decimal
  document.getElementById('resultado').textContent =
    `IMC: ${imc.toFixed(1)}`;

  document.getElementById('classificacao').textContent =
    `Classificação: ${classificacao}`;
}

function limparCampos() {
  document.getElementById('peso').value = "";
  document.getElementById('altura').value = "";
  document.getElementById('resultado').textContent = "IMC: ";
  document.getElementById('classificacao').textContent = "Classificação: ";
}
