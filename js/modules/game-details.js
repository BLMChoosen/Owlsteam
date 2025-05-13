document.addEventListener("DOMContentLoaded", function () {
    // Banco de dados simulado de jogos
    const games = {
        "cyber-ninja": {
            title: "Cyber Ninja",
            image: "../assets/images/cyber-ninja.jpg",
            description: "Um jogo de ação futurista onde você é um ninja cibernético lutando contra corporações.",
            price: "R$ 59,90",
            recommendations: ["hacker-quest", "future-race"]
        },
        "hacker-quest": {
            title: "Hacker Quest",
            image: "../assets/images/hacker-quest.jpg",
            description: "Um jogo de estratégia onde você invade sistemas e descobre segredos obscuros.",
            price: "R$ 45,00",
            recommendations: ["cyber-ninja", "stealth-agent"]
        },
        "stealth-agent":{
            title: "Stealth Agent",
            image: "../assets/images/stealth-agent.jpg",
            description: "Um jogo de estratégia onde você precisa invadir empresas na encolha, achar as informações necessárias para a missão, mas você mal sabia o que estava para descobrir.",
            price: "R$ 49,90",
            recommendations: ["cyber-ninja", "future-race"]
        },
        "future-race": {
            title: "Future Race",
            image: "../assets/images/future-race.jpg",
            description: "Um jogo de corrida onde você monta o seu carro no seu estilo e percorre por pistas mortais e cheias de perigos apenas pelo sentimento de vitória!",
            price: "R$ 59,90",
            recommendations: ["hacker-quest", "stealth-agent"]
        },
        "hollow-knight": {
            title: "Hollow Knight",
            image: "../assets/images/Jogo1.jpg",
            description: "Um jogo de ação e aventura em um mundo subterrâneo cheio de segredos e desafios.",
            price: "R$ 46,99",
            recommendations: ["celeste", "outer-wilds"]
        },
        "split-fiction": {
            title: "Split Fiction",
            image: "../assets/images/Jogo2.jpg",
            description: "Um jogo dois jogadores onde você e seu amigo podem jogar juntos, mas cada um em uma tela diferente, e o objetivo é consiliar entre histórias ficção cientifica e fantasia.",
            price: "R$ 199,99",
            recommendations: ["life-is-strange", "portal"]
        },
        "minecraft": {
            title: "Minecraft",
            image: "../assets/images/Jogo3.jpg",
            description: "Um jogo de construção e sobrevivência onde você pode criar e explorar mundos gerados aleatoriamente.",
            price: "R$ 124,90",
            recommendations: ["the-last-of-us-part-1", "journey"]
        },
        "outer-wilds": {
            title: "Outer Wilds",
            image: "../assets/images/Jogo4.jpg",
            description: "Um jogo de exploração espacial onde você investiga um sistema solar misterioso e cheio de segredos.",
            price: "R$ 64,99",
            recommendations: ["gris", "celeste"]
        },
        "the-last-of-us-part-1": {
            title: "The Last of Us Part I",
            image: "../assets/images/Jogo5.jpg",
            description: "Um jogo de ação e aventura em um mundo pós-apocalíptico, onde você deve sobreviver e proteger aqueles que ama.",
            price: "R$ 100,00",
            recommendations: ["bayonetta", "the-last-of-us-part-2"]
        },
        "the-last-of-us-part-2": {
            title: "The Last of Us Part II",
            image: "../assets/images/Jogo6.jpg",
            description: "Um jogo de ação e aventura em um mundo pós-apocalíptico, onde você deve sobreviver e se vingar por aqueles que ama.",
            price: "R$ 200,00",
            recommendations: ["the-last-of-us-part-1", "life-is-strange"]
        },
        "celeste": {
            title: "Celeste",
            image: "../assets/images/Jogo7.jpg",
            description: "Um jogo de plataforma onde você ajuda uma jovem chamada Madeline a escalar uma montanha enquanto enfrenta seus próprios demônios internos.",
            price: "R$ 47,98",
            recommendations: ["hollow-knight", "journey"]
        },
        "journey": {
            title: "Journey",
            image: "../assets/images/Jogo8.jpg",
            description: "Um jogo que se passa em um mundo desértico, onde você explora e descobre segredos enquanto interage com outros jogadores de forma única.",
            price: "R$ 14,99",
            recommendations: ["outer-wilds", "portal"]
        },
        "gris": {
            title: "Gris",
            image: "../assets/images/Jogo9.jpg",
            description: "Um jogo de plataforma e aventura que conta a história de uma jovem chamada Gris, que está lidando com uma experiência dolorosa.",
            price: "R$ 50,10",
            recommendations: ["hacker-quest", "minecraft"]
        },
        "life-is-strange": {
            title: "Life is Strange",
            image: "../assets/images/Jogo10.jpg",
            description: "Um jogo de escolhas e consequências, onde você joga como Max Caulfield, uma estudante de fotografia que descobre que pode voltar no tempo.",
            price: "R$ 39,99",
            recommendations: ["the-last-of-us-part-2", "gris"]
        },
        "portal": {
            title: "Portal",
            image: "../assets/images/Jogo11.png",
            description: "Um jogo de puzzle em primeira pessoa, onde você usa um dispositivo de portal para resolver quebra-cabeças e escapar de uma instalação de testes.",
            price: "R$ 19,99",
            recommendations: ["bayonetta", "split-fiction"]
        },
        "bayonetta": {
            title: "Bayonetta",
            image: "../assets/images/Jogo12.jpg",
            description: "Um jogo de ação e aventura onde você joga como uma bruxa poderosa que luta contra anjos e demônios em um mundo estilizado.",
            price: "R$ 79,90",
            recommendations: ["minecraft", "split-fiction"]
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
