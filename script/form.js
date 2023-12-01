const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const erroMsg = document.querySelector('#ErroMsg');
const btnForm = document.querySelector('#formSubmit');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

btnForm.addEventListener('click', () => {
    if (validateName() && validateEmail()) {
        nameInput.value = '';
        emailInput.value = '';
        erroMsg.innerHTML = ' ';
        alert('Obrigado por se inscrever, entraremos em contato em breve!');
    }
});


function validateName() {
    if (nameInput.value.length < 3) {
        nameInput.classList.add('error');
        erroMsg.innerHTML = 'O nome precisa ter no mínimo 3 caracteres';
        return false;
    } else {
        nameInput.classList.remove('error');
        erroMsg.innerHTML = ' ';
        return true;
    }
}
  
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        erroMsg.innerHTML = 'O Email precisa ser válido';
        return false;
    } else {
        emailInput.classList.remove('error');
        erroMsg.innerHTML = ' ';
        return true;
    }
}
