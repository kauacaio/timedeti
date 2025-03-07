// Lista de Tarefas
const tarefas = [
    "Acessar o Portal Jumpcloud User Login (https://console.jumpcloud.com/login)",
    "Inserir seu e-mail profissional e sua senha provisória",
    "Cadastrar o multi-fator (indicamos o Jumpcloud Protect)",
    "Acessar o campo 'Segurança'",
    "Dentro da aba 'Segurança', acesse 'Resetar Senha'",
    "Inserir sua senha provisória e criar/confirmar sua nova senha",
    "Senha alterada com sucesso",
    "Fechar o portal",
    "Acessar a conta Google e ir para a aba 'Segurança'",
    "Encontrar a etapa 'Google Authenticator'",
    "Adicionar um novo aplicativo autenticador",
    "Finalizar a configuração do multi-fator"
];

// Referências aos elementos do DOM
const listaTarefas = document.getElementById('lista-tarefas');
const barraProgresso = document.getElementById('progresso-preenchido');
const porcentagemProgresso = document.getElementById('porcentagem-progresso');
const finalizarBtn = document.getElementById('finalizar-btn');

// Função para carregar as tarefas na lista
function carregarTarefas() {
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" id="tarefa-${index}" onchange="atualizarProgresso()">
            <label for="tarefa-${index}">${tarefa}</label>
        `;
        listaTarefas.appendChild(li);
    });
}

// Função para atualizar a barra de progresso
function atualizarProgresso() {
    const checkboxes = document.querySelectorAll('#lista-tarefas input[type="checkbox"]');
    const tarefasConcluidas = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const progresso = (tarefasConcluidas / tarefas.length) * 100;

    barraProgresso.style.width = `${progresso}%`;
    porcentagemProgresso.textContent = `${Math.round(progresso)}% concluído`;

    // Habilitar o botão de finalizar se todas as tarefas estiverem concluídas
    if (tarefasConcluidas === tarefas.length) {
        finalizarBtn.disabled = false;
    } else {
        finalizarBtn.disabled = true;
    }
}

// Função para finalizar o checklist
function finalizarChecklist() {
    alert('Parabéns! Você concluiu todas as tarefas do checklist.');
    // Aqui você pode adicionar a lógica para exibir o certificado personalizado
}

// Carregar as tarefas ao iniciar a página
carregarTarefas();