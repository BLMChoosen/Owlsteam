document.addEventListener("DOMContentLoaded", function () {
    // Banco de dados simulado de jogos
    const games = {
        "cyber-ninja": {
            title: "Cyber Ninja",
            image: "assets/images/cyber-ninja.jpg",
            description: "Um jogo de ação futurista onde você é um ninja cibernético lutando contra corporações.",
            price: "R$ 59,90",
            recommendations: ["hacker-quest", "future-race"]
        },
        "hacker-quest": {
            title: "Hacker Quest",
            image: "assets/images/hacker-quest.jpg",
            description: "Um jogo de estratégia onde você invade sistemas e descobre segredos obscuros.",
            price: "R$ 45,00",
            recommendations: ["cyber-ninja", "stealth-agent"]
        }
    };

    // Pegando o parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get("game");

    if (games[gameKey]) {
        const game = games[gameKey];

        document.getElementById("game-image").src = game.image;
        document.getElementById("game-title").innerText = game.title;
        document.getElementById("game-description").innerText = game.description;
        document.getElementById("game-price").innerText = game.price;

        // Carregar jogos recomendados
        const recommendedContainer = document.getElementById("recommended-container");
        game.recommendations.forEach(recKey => {
            if (games[recKey]) {
                const recGame = games[recKey];
                const recElement = document.createElement("div");
                recElement.classList.add("recommended-item");
                recElement.innerHTML = `
                    <img src="${recGame.image}" alt="${recGame.title}">
                    <p>${recGame.title}</p>
                    <a href="jogo-detalhe.html?game=${recKey}" class="btn-detalhes">Ver Detalhes</a>
                `;
                recommendedContainer.appendChild(recElement);
            }
        });
    } else {
        document.querySelector(".game-details").innerHTML = "<p>Jogo não encontrado.</p>";
    }
});
