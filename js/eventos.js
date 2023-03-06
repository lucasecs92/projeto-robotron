/* #########  Chamando eventos dentro do JS  #########

function dizOi() {
    console.log('Olá');
}

document.querySelector('.robo').onclick = dizOi
*/
/* OU */ 
/*
const robotron = document.querySelector('.robo');

robotron.addEventListener('click', dizOi);

function dizOi () {
    console.log('Olá');
    console.log('Bem-vindo ao Robotron 2000');
}
*/

/* ##### FUNÇÃO ANÔNIMA ##### */ 
/*
const robotron = document.querySelector('.robo');

robotron.addEventListener('click', function() {
    console.log('Cliquei no robô');
});

function dizOi () {
    console.log('Olá');
    console.log('Bem-vindo ao Robotron 2000');
}

dizOi()
*/
/* ######  OU utilizando arrow function ###### */
/*
const robotron = document.querySelector('.robo');

robotron.addEventListener('click', () => {
    console.log('Cliquei no robô');
});

function dizOi () {
    console.log('Olá');
    console.log('Bem-vindo ao Robotron 2000');
}

dizOi()
*/

/*  ### PARÂMETROS ###
Precisaremos que essa função receba um parâmetro. O parâmetro vem dentro dos parênteses da criação de uma função. Aqui, o nome desse parâmetro será (nome).

Essa função vai receber um nome e vai imprimir esse nome.

E todas as vezes que chamarmos essa função é preciso dizer o que queremos imprimir, nesse caso Lucas
*/ 

const robotron = document.querySelector('.robo');

robotron.addEventListener('click', (evento) => {
    console.log(evento);
});

function dizOi (nome) {
    // console.log('Oi ' + nome);
    console.log(`Oi ${nome}`);
    console.log('Bem-vindo ao Robotron 2000');
}

dizOi('Lucas');