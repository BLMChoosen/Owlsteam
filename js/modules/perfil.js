document.addEventListener("DOMContentLoaded", function () {
    const user = {
        name: "Gabriel Silva",
        email: "gabriel@owlsteam.com",
        avatar: "assets/images/user-avatar.png",
        purchasedGames: [
            { title: "Cyber Ninja", image: "../assets/images/cyber-ninja.jpg" },
            { title: "Hacker Quest", image: "../assets/images/hacker-quest.jpg" }
        ],
        wishlist: [
            { title: "Future Race", image: "../assets/images/future-race.jpg" },
            { title: "Stealth Agent", image: "../assets/images/stealth-agent.jpg" }
        ]
    };

    // Preencher informações do usuário
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-email").innerText = user.email;
    document.querySelector(".profile-avatar").src = user.avatar;

    // Função para gerar lista de jogos
    function populateGames(containerId, games) {
        const container = document.getElementById(containerId);
        games.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game-item");
            gameItem.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <p>${game.title}</p>
            `;
            container.appendChild(gameItem);
        });
    }

    // Preencher jogos comprados e wishlist
    populateGames("purchased-games", user.purchasedGames);
    populateGames("wishlist-games", user.wishlist);

    // Modo Escuro/Claro
    const toggleDarkMode = document.getElementById("toggle-dark-mode");
    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
