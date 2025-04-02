document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");

    // Data do lançamento (AAAA, MM -1, DD, HH, MM, SS)
    const launchDate = new Date(2025, 4, 15, 12, 0, 0).getTime(); 

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "🎉 Já disponível!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
