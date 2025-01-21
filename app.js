const listaAmigos = [];

function validarNome(nome) {
  const regexNomeValido = /^[A-Za-z]+( [A-Za-z]+)*$/;
  return regexNomeValido.test(nome);
}

function exibirMensagemDeErro(mensagem) {
  const resultado = document.querySelector("#resultado");
  resultado.textContent = mensagem;
}

function adicionarAmigo() {
  const campoNome = document.querySelector("#amigo");
  const nome = campoNome.value.trim();

  limparResultado();

  if (nome === "") {
    return exibirMensagemDeErro("O campo não pode estar vazio!");
  }

  if (!validarNome(nome)) {
    return exibirMensagemDeErro("Insira apenas letras e sem espaços extras.");
  }

  listaAmigos.push(nome);
  limparLista();
  exibirLista();
  campoNome.value = "";
}
