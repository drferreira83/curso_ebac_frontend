$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const tarefaLista = $('#tarefa').val();

        const novoItem = $(`<li>${tarefaLista}<img src="./imagens/excluir.png" alt="Excluir"></li>`);

        $(novoItem).appendTo('ul');

        $('#tarefa').val('');
    })

    $('.lista-tarefas').on('click', 'li', function(e) {
        e.preventDefault();
        $(this).toggleClass('item-concluido')
    })

    $('.lista-tarefas').on('click', 'img', function(e) {
        e.preventDefault();
        $(this).closest('li').remove();
    })
})