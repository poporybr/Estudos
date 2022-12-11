const usuario = {
  // nome: nome,
  // cpf: cpf, 
  // senha: senha,
};

const bancoDedados = [];

function criarUsuario(usuario){
  let nomeUsuario = document.getElementById('nameUser');
  let cpfUsuario = document.getElementById('cpfUser');
  let senhaUsuario = document.getElementById('passwordUser');
  usuario.nome = nomeUsuario
  usuario.cpf = cpfUsuario
  usuario.senha = senhaUsuario
  return usuario;
}

bancoDedados.push(usuario);
console.log(bancoDedados)