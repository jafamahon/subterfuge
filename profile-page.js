function burnAfterReading() {
    const profileInfo = document.querySelector('.profile-info');
    profileInfo.style.display = 'none'; // Hide profile information

    // Optionally, replace with a message or redirect to another page
    alert('Your profile details are now hidden. Play wisely!');
}

document.addEventListener('DOMContentLoaded', function() {
    // Simulated role assignment and displaying of additional info based on role
    const role = document.getElementById('player-role').textContent;
    const moleCodeDisplay = document.getElementById('bona-fide-code');

    // Check role and display additional info for moles and spymasters
    if (role === 'Mole' || role === 'Spymaster') {
        moleCodeDisplay.style.display = 'block';
    }
});
