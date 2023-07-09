let key = "a219037e419db23b176493a877d4df0c";

function colocardadosnatela(dados) {
  console.log(dados);

  document.querySelector(".cidade").innerHTML = "tempo em " + dados.name;
  document.querySelector(".tempo").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    dados.main.humidity + "% Umidade";
  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarcidade(cidade) {
  let dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocardadosnatela(dados);
}

function cliqueinobotao() {
  let cidade = document.querySelector(".input-cidade").value;

  buscarcidade(cidade);
}
