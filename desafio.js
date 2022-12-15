const vagas = []
let menu = ''
console.log(vagas)
do{

  menu = parseInt(prompt('Vagas de Empregos\nEscolha Uma Opção!!!\n\n1 - Listar vagas Disponíveis\n2 - Criar uma nova Vaga\n3 - Visualizar uma vaga\n4 - Inscrever candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair'))

  switch(menu){

    case 1:
      alert(`Nossas vagas disponíveis:\n${vagas}`)
      break
    case 2:
      const nomeVaga = prompt('Digite o nome da vaga:');
      const descVaga = prompt('Digite a descrição da vaga:');
      const dataVaga = prompt('Data limite para a inscrição (dia/mes/ano):');

      const vaga = {
        nome: 'nome',
        descricao: 'descricao',
        dataLimite: 'dataLimite',
      }

      vaga.nome = nomeVaga
      vaga.descricao = descVaga
      vaga.dataLimite = dataVaga

      confirm(`Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.dataLimite}`);

      vagas.push(vaga)

      
      console.log(vaga)
      console.log(vagas)
      break

    case 3:
    
    case 4:

    case 5:
  }
}while(menu !== 6)

