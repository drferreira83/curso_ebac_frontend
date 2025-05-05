const form = document.getElementById('form-compare');

function comparaNum(primeiroNum, segundoNum) {
    const comparaNumRes = segundoNum > primeiroNum;
    return comparaNumRes
}

form.addEventListener('submit', function(e){

    let formValido = false;

    e.preventDefault();

    const primeiroNum = document.getElementById('first_num');
    const segundoNum = document.getElementById('second_num');

    const mensagemSucesso = `O segundo número é maior que o primeiro <b> ( ${segundoNum.value} > ${primeiroNum.value} ) </b>, formulário válido.`;
    const mensagemErro = `O primeiro número é maior ou igual ao segundo <b> ( ${primeiroNum.value} >= ${segundoNum.value} ) </b>, formulário inválido.`;

    const containerMensagemSucesso = document.querySelector('.success_message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'none';

    const containerMensagemErro = document.querySelector('.error_message');
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = 'none';

    formValido = comparaNum(primeiroNum.value, segundoNum.value);

    if (formValido) {
        containerMensagemSucesso.style.display = 'block';
    } else {
        containerMensagemErro.style.display = 'block';
    }

    primeiroNum.value = '';
    segundoNum.value = '';

});

