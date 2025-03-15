// Algoritmo de Like e Deslike
const likeButtons = document.querySelectorAll('.like');
let curtido = true;

likeButtons.forEach(botao => {
    botao.addEventListener('click', function() {
        if (curtido) {
            botao.textContent = '👍';
            registrarCurtida(botao); // Chama a função que exibe a mensagem para o usuário
            curtido = false;
        } else {
            botao.textContent = '👎';
            curtido = true;
        }
    });
});

// Função que exibe uma mensagem visível para o usuário
function registrarCurtida(botao) {
    // Tenta selecionar um elemento de mensagem já existente
    let mensagemElement = document.getElementById('mensagem');
    if (!mensagemElement) {
        // Se não existir, cria e configura um novo elemento
        mensagemElement = document.createElement('div');
        mensagemElement.id = 'mensagem';
        mensagemElement.style.position = 'fixed';
        mensagemElement.style.top = '10px';
        mensagemElement.style.right = '10px';
        mensagemElement.style.backgroundColor = '#333';
        mensagemElement.style.color = '#fff';
        mensagemElement.style.padding = '10px';
        mensagemElement.style.borderRadius = '5px';
        mensagemElement.style.zIndex = '1000';
        document.body.appendChild(mensagemElement);
    }
    
    // Define o conteúdo da mensagem
    mensagemElement.textContent = `O botão ${botao.id || 'sem id'} foi curtido!`;
    mensagemElement.style.display = 'block';
    
    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        mensagemElement.style.display = 'none';
    }, 3000);
}
