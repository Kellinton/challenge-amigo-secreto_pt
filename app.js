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

function limparLista() {
  document.querySelector("#listaAmigos").textContent = "";
}

function limparResultado() {
  document.querySelector("#resultado").textContent = "";
}

function adicionarAmigo() {
  const campoNome = document.querySelector("#amigo");
  const nome = campoNome.value.trim();

  limparResultado();

  if (nome === "") return exibirMensagemDeErro("O campo não pode estar vazio!");
  if (!validarNome(nome)) return exibirMensagemDeErro("Insira apenas letras e sem espaços extras.");

  listaAmigos.push(nome);
  limparLista();
  exibirLista();
  campoNome.value = "";
}

function sortearAmigo() {
  const resultado = document.querySelector("#resultado");

  limparResultado();

  if (listaAmigos.length === 0) return exibirMensagemDeErro("Adicione pelo menos um amigo para sortear.");

  const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

  resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;

  limparLista();
  listaAmigos.length = 0;
}
