document.addEventListener('DOMContentLoaded', function() {
    // Simulate the countdown timer for the game
    const startTime = 59; // minutes for demonstration
    let currentTime = startTime * 60; // convert to seconds

    const timerDisplay = document.getElementById('timer').querySelector('span');

    const countdown = setInterval(() => {
        const minutes = parseInt(currentTime / 60, 10);
        const seconds = parseInt(currentTime % 60, 10);

        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        currentTime--;

        if (currentTime < 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Time\'s up!';
            // Show code break if it's time
            document.getElementById('code-break').style.display = 'block';
        }
    }, 1000);

    // Assume the code break time is set for 30 minutes into the game
    setTimeout(() => {
        document.getElementById('code-break').style.display = 'block';
    }, 1800000); // 1800000 milliseconds = 30 minutes
});
