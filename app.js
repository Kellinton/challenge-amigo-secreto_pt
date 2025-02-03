const listaAmigos = [];

function validarNome(nome) {
  const regexNomeValido = /^[A-Za-z]+( [A-Za-z]+)*$/;
  return regexNomeValido.test(nome);
}

function exibirMensagemDeErro(mensagem) {
  const resultado = document.querySelector("#resultado");
  resultado.textContent = mensagem;
}

function exibirLista() {
  const lista = document.querySelector("#listaAmigos");

  listaAmigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function limparConteudo(id) {
  document.querySelector(id).textContent = "";
}

function adicionarAmigo() {
  const campoNome = document.querySelector("#amigo");
  const nome = campoNome.value.trim();

  limparConteudo("#resultado");

  if (nome === "") return exibirMensagemDeErro("O campo não pode estar vazio!");
  if (!validarNome(nome)) return exibirMensagemDeErro("Insira apenas letras e sem espaços extras.");

  listaAmigos.push(nome);
  limparConteudo("#listaAmigos");
  exibirLista();
  campoNome.value = "";
}

function sortearAmigo() {
  const resultado = document.querySelector("#resultado");

  limparConteudo("#resultado");

  if (listaAmigos.length === 0) return exibirMensagemDeErro("Adicione pelo menos um amigo para sortear.");

  const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

  resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;

  limparConteudo("#listaAmigos");
  listaAmigos.length = 0;
}
