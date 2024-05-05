document.getElementById('joinGameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const playerName = document.getElementById('playerName').value;
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }

    // Simulate checking if this is the first player or not
    // This would ideally be a server-side check or a check against a shared state
    const isFirstPlayer = checkIfFirstPlayer();  // This function needs to be defined based on actual game logic

    if (isFirstPlayer) {
        window.location.href = 'game-configuration.html'; // Redirect first player to game config
    } else {
        window.location.href = 'waiting-page.html'; // Redirect other players to waiting page
    }
});

function checkIfFirstPlayer() {
    // This is a placeholder function. You'll need to replace this logic
    // with an actual check against a server or shared resource.
    // For demonstration, let's assume it randomly decides.
    return Math.random() > 0.5;  // 50% chance to be the first player
}
