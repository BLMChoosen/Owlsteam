document.addEventListener("DOMContentLoaded", function () {
    let cart = [
        { title: "Cyber Ninja", image: "assets/images/cyber-ninja.jpg", price: 39.99 },
        { title: "Hacker Quest", image: "assets/images/hacker-quest.jpg", price: 29.99 },
        { title: "Future Race", image: "assets/images/future-race.jpg", price: 49.99 }
    ];

    const cartList = document.getElementById("cart-list");
    const totalPriceEl = document.getElementById("total-price");

    // Renderizar carrinho
    function renderCart() {
        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((game, index) => {
            total += game.price;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <div class="info">
                    <h3>${game.title}</h3>
                    <p>R$ ${game.price.toFixed(2)}</p>
                </div>
                <button class="remove-btn" data-index="${index}">Remover</button>
            `;
            cartList.appendChild(cartItem);
        });

        totalPriceEl.textContent = `R$ ${total.toFixed(2)}`;

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                renderCart();
            });
        });
    }

    // Inicializa carrinho
    renderCart();

    // Simulação de Pagamento
    document.getElementById("checkout-btn").addEventListener("click", function () {
        alert("Compra finalizada com sucesso!");
        cart = [];
        renderCart();
    });
});
