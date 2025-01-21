const listaAmigos = [];

function adicionarAmigo() {
  const campoNome = document.querySelector("#amigo");
  const nome = campoNome.value.trim();

  limparResultado();

  if (nome === "") {
    return exibirMensagem("O campo não pode estar vazio!");
  }

  if (!validarNome(nome)) {
    return exibirMensagem("Insira apenas letras e sem espaços extras.");
  }

  listaAmigos.push(nome);
  limparLista();
  exibirLista();
  campoNome.value = "";
}
