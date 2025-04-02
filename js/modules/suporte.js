// Suporte.js - Lógica de envio de formulário

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    // Função de validação
    const validateForm = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            return false;  // Retorna falso se algum campo estiver vazio
        }

        // Verificar se o e-mail tem formato válido
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            return false;  // Retorna falso se o e-mail for inválido
        }

        return true;
    }

    // Lidar com o envio do formulário
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Impede o envio padrão do formulário

        if (validateForm()) {
            // Caso os dados estejam corretos, exibe uma mensagem de sucesso
            showSuccessMessage();
        } else {
            // Caso haja erro, exibe uma mensagem de erro
            showErrorMessage();
        }
    });

    // Exibe a mensagem de sucesso
    const showSuccessMessage = () => {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Sua mensagem foi enviada com sucesso!';

        document.body.appendChild(successMessage);

        // Remove a mensagem de sucesso após 3 segundos
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    };

    // Exibe a mensagem de erro
    const showErrorMessage = () => {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Por favor, preencha todos os campos corretamente!';

        document.body.appendChild(errorMessage);

        // Remove a mensagem de erro após 3 segundos
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    };
});
