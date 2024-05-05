document.addEventListener('DOMContentLoaded', function() {
    // Function to simulate checking game state
    function checkGameState() {
        // This is a placeholder for a real implementation where you might make an API call to check game state
        setTimeout(() => {
            // Simulate a condition where the game configuration is completed
            if (Math.random() > 0.5) { // Randomly decide if the game is ready
                window.location.href = 'profile-page.html'; // Redirect to profile page if the game is ready
            } else {
                console.log('Still waiting for game configuration...');
                setTimeout(checkGameState, 5000); // Check again in 5 seconds
            }
        }, 5000);
    }

    checkGameState(); // Initial check
});
