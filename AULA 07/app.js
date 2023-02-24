/*****************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autor: Thiago
 * Versão: 1.0
******************************************************************/

// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSON

const listaNomes = ['José', 'Maria', 'Luiz', 'Antonio', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória'];

const exibindoDados = function () {

    // Verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes));

    // Verifica o tipo de dados dos itens do array
    console.log(typeof (listaNomes[0]));

    // Exibe o conteúdo de um indice
    console.log(listaNomes[0]);

    // Exibe todos os itens do array
    console.log(listaNomes);

    // table - permite visualizar o conteúdo do array em formato de tabela
    console.table(listaNomes);

    console.log('O nome do aluno é: ' + listaNomes[0]);
    console.log(`O nome do aluno é: ${listaNomes[0]}`);

    // length - retorna a quantidade de itens de um array
    console.log(listaNomes.length);

    // Percorrendo um array com While
    console.log('Exemplo com While');
    let cont = 0; // Start
    let qtdeItens = listaNomes.length; // Stop

    while (cont < qtdeItens) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`);
        cont += 1;
    }

    // Percorrendo um array com FOR
    console.log('Exemplo com FOR');
    for (let cont = 0; cont < qtdeItens; cont++) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`);
    }

    // Percorrendo um array com FOREACH
    console.log('Exemplo com FOREACH (forma mais antiga)');
    for (item in listaNomes) {
        console.log(`O nome do aluno é: ${listaNomes[item]}`);
    }

    console.log('Exemplo com FOREACH');
    listaNomes.forEach(function (nome) {
        console.log(`O nome do aluno é: ${nome}`);
    });

};

const manipulandoDados = function () {
    // push - Adiciona novos itens no final do Array, preservando os elementos anteriores
    listaProdutos.push('Memória');
    listaProdutos.push('WebCam', 'Gabinete', 'Fone');
    console.table(listaProdutos);

    // unshift - Adiciona novos itens no inicio do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'Placa-Mãe', 'SSD');
    console.table(listaProdutos);

    // pop - Remove o último item do Array, preservando os elementos anteriores
    listaProdutos.pop();
    console.table(listaProdutos);

    // shift - Remove o item do inicio do Array, re-organizando os elementos anteriores
    listaProdutos.shift();
    console.table(listaProdutos);

    // slice - Permite criar uma cópia de um Array
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos);

    // indexOf - Permite buscar dentro de um Array um item
    // Se o retorno for -1, o item não foi encontrado
    // Se o retorno for maior ou igual 0, o item foi encontrado e ele retorna o indice
    console.log(listaProdutos.indexOf('PC'));

    // Exemplo de utilização do indexOf
    if (listaProdutos.indexOf('PC') >= 0) {
        console.log('Item encontrado');
    } else {
        console.log('Item não encontrado');
    }

};

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    // splice - Permite apagar um ou mais itens de um array através do indice
    // Se for encaminhado somente o indice ele irá apagar todos os itens
    // para baixo
    // Para limitar a qtde de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }

    return status;

};

const removerItem = function (array ,nomeItem) {
    // Entrada
    let nome = nomeItem;
    let listaItens = array.slice();
    let indice = listaItens.indexOf(nome);

    if (indice >= 0) {
        listaItens.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }

    // Saída
    if (status == true) {
        return listaItens;
    } else {
        return status;
    }

};

// manipulandoDados();
// console.table(listaProdutos);
// console.log(removerProduto('Monitor'))

console.log(removerItem(listaProdutos ,'Monitor'))
console.table(listaProdutos);