document.addEventListener('DOMContentLoaded', function() {
    const numPlayers = 5; // This should come from the game's data
    createGuessFields(numPlayers);

    document.getElementById('guessForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const codebook = ["barn", "modern", "ballroom", "swing", "dance"];
        const guesses = [];
        const inputs = document.querySelectorAll('#guessInputsContainer input');
        inputs.forEach(input => guesses.push(input.value));

        let points = 0;
        guesses.forEach(guess => {
            if (codebook.includes(guess)) {
                points++; // correct guess
            } else {
                points--; // incorrect guess
            }
        });

        // Display results
        const resultsDiv = document.getElementById('results');
        document.getElementById('team-points').textContent = points;
        const list = document.getElementById('codebook-list');
        codebook.forEach(word => {
            const item = document.createElement('li');
            item.textContent = word;
            list.appendChild(item);
        });

        resultsDiv.style.display = 'block'; // Show results
    });
});

function createGuessFields(numPlayers) {
    const container = document.getElementById('guessInputsContainer');
    for (let i = 0; i < numPlayers; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Enter guess ${i + 1}`;
        input.required = true;
        container.appendChild(input);
    }
}
