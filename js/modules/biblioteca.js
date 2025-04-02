document.addEventListener("DOMContentLoaded", function () {
    const games = [
        { title: "Cyber Ninja", image: "../assets/images/cyber-ninja.jpg", status: "playing" },
        { title: "Hacker Quest", image: "../assets/images/hacker-quest.jpg", status: "installed" },
        { title: "Future Race", image: "../assets/images/future-race.jpg", status: "completed" }
    ];

    const gameList = document.getElementById("game-list");
    const searchBar = document.getElementById("search-bar");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Renderizar jogos
    function renderGames(filter = "all", search = "") {
        gameList.innerHTML = "";
        const filteredGames = games.filter(game => 
            (filter === "all" || game.status === filter) &&
            game.title.toLowerCase().includes(search.toLowerCase())
        );

        filteredGames.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.status.toUpperCase()}</p>
            `;
            gameList.appendChild(gameCard);
        });
    }

    // Inicializa a lista de jogos
    renderGames();

    // Filtros
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            renderGames(filter, searchBar.value);
        });
    });

    // Busca
    searchBar.addEventListener("input", () => {
        renderGames("all", searchBar.value);
    });
});
