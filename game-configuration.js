document.getElementById('gameConfigForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numPlayers = document.getElementById('numPlayers').value;
    const gameLength = document.getElementById('gameLength').value;
    const codeBreakTime = document.getElementById('codeBreakTime').value;

    const gameSettings = {
        numPlayers: parseInt(numPlayers, 10),
        gameLength: parseInt(gameLength, 10),
        codeBreakTime: parseInt(codeBreakTime, 10),
    };

    console.log('Game Settings:', gameSettings);
    // Here you might want to send these settings to the server or store them locally
    // Redirect to the next page or state change in the app
    window.location.href = 'profile-page.html'; // Redirect to profile page if needed
});
