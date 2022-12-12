function calcularTriangulo(base, altura){
    return (base * altura) / 2
}

function calcularRetangulo(base, altura){
    return base * altura
}

function calcularQuadrado(lado){
    return lado * lado
}

function calcularTrapezio(baseMenor, baseMaior, altura){
    return (baseMaior + baseMenor) * altura / 2
}

function calcularCirculo(raio){
    return 3.14 * (raio * raio)
}

let resposta = ""
do{
    resposta = prompt('Calculadora geometrica!\n\n1- Calcular área do triangulo.\n2- Calcular área do retangulo.\n3- Calcular área do quadrado.\n4- Calcular área do trapézio.\n5- Calcular área do círculo.\n6- Sair')

    switch(resposta){
        case 1: 
            let base = prompt('Digite o valor da base: ');
            let altura = prompt('Digite o valor da altura: ');
            let valorCalculado = calcularTriangulo(base, altura);
            alert(`A área do triangulo é igual a ${valorCalculado}`);
            break;

        case 2:
            let base = prompt('Digite o valor da base: ');
            let altura = prompt('Digite o valor da altura: ');
            let valorCalculado = calcularRetangulo(base, altura);
            alert(`A area do retangulo é igual a ${valorCalculado}`);
            break;
        case 3:
            let lado = prompt('Digite o valor do lado: ');
            let valorCalculado = calcularQuadrado(lado);
            alert(`A area do quadrado é igual a ${valorCalculado}`);
            break
        case 4:
            let baseMenor = prompt('Digite a base menor: ');
            let baseMaior = prompt('Digite a base maior: ');
            let altura = prompt('Digite o valor da altura: ');
            let valorCalculado = calcularTrapezio(baseMenor, baseMaior, altura);
            alert(`O trapézio é igual a ${valorCalculado}`);
        case 5:
            let raio = prompt('Digite o valor do raio: ')
            let valorCalculado = calcularCirculo(raio);
            alert(`A area do circulo é ${valorCalculado}`)
        default:
            alert('Opção Invalida!!!')
    }
}while(resposta != 6)