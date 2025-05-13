// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Obtém a referência ao elemento <tbody> com o id "games-table-body"
    const tbody = document.getElementById("games-table-body");
    // Verifica se o array global window.siteGames existe e se o tbody foi encontrado
    if (!window.siteGames || !tbody) return;

    // Limpa o conteúdo atual do tbody, removendo linhas antigas da tabela
    tbody.innerHTML = "";

    // Percorre cada objeto de jogo presente no array window.siteGames
    window.siteGames.forEach(game => {
        // Cria um novo elemento de linha de tabela (<tr>)
        const tr = document.createElement("tr");
        // Define o conteúdo HTML da linha, preenchendo as colunas com dados do jogo
        tr.innerHTML = `
            <td>
                <!-- Ícone do jogo e título -->
                <i class='bx ${game.icon}' style="margin-right:6px"></i>
                ${game.title}
            </td>
            <td>
                <!-- Ícone de status e status do jogo -->
                <i class='bx bxs-flag' style="margin-right:4px"></i>
                ${game.status}
            </td>
            <td>
                <!-- Preço do jogo formatado com duas casas decimais -->
                R$${game.price.toFixed(2)}
            </td>
            <td>
                <!-- Ícone de requisitos e requisitos do jogo -->
                <i class='bx ${game.reqIcon}' style="margin-right:4px"></i>
                ${game.requirements}
            </td>
        `;
        // Adiciona a linha criada ao tbody da tabela
        tbody.appendChild(tr);
    });
});
