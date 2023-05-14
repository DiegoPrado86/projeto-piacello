$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            nome: 'Digite o seu nome completo',
            email: 'Digite seu email',
            tel: 'Digite seu telefone'
        }
    })
});