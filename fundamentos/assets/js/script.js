
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const assunto = document.querySelector('#assunto')
nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    console.log(nome.value);
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
        nome.style.border = '3px solid red'
    } else {
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nome.style.border = '3px solid green'
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    console.log('email: '+email.value);
    if (email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
        email.style.border = '3px solid red'
    }else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        email.style.border = '3px solid green'
    }
}
