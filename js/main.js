const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if (operacao === '-') {
        peca.value--
    } else {
        peca.value++
    }
}   

function atualizaEstatisticas(peca) {
    // console.log(pecas[peca]) // buscar o array pecas na posição peca escolhida, que tem o objeto daqueles dados.
    estatisticas.forEach( (elemento) => {
        // console.log(elemento.dataset.estatistica) // imprime o texto já setado do meu elemento data-estatistica nesse caso (força, poder, energia  e velocidade)
        // console.log(elemento.textContent) // imprime o número que quero atualizar 
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] // ao clicar em cada um dos elementos, eu quero atualizar o textContent (A cada clique nas peças altero o valor dos atributos do robo)
    })
}


/* RASCUNHOS */
/*
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

const controle = document.querySelectorAll('[data-controle]');

controle.forEach( (elemento) => {
    // console.log(elemento)
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent , evento.target.parentNode)
    })
})

// obs: Toda vez que é um input é um value e toda vez que é um texto, é um textContent.

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');

    if (operacao === '-') {
        peca.value--;
    } else {
        peca.value++;
    }
}   
*/



/*
somar.addEventListener('click', (evento) => {
    braco.value++;
    // braco.value = Number(braco.value) + 1;
});

subtrair.addEventListener('click', (evento) => {
    braco.value--;
    // braco.value = parseInt(braco.value) - 1;

});
*/

/*
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');

somar.addEventListener('click', () => {manipulaDados('somar')});
subtrair.addEventListener('click', () => {manipulaDados('subtrair')});

function manipulaDados(operacao) {
    if (operacao === 'subtrair') {
        braco.value--;
    } else {
        braco.value++;
    }
}   
*/