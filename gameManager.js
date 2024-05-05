// gameManager.js
class GameManager {
    constructor() {
        this.players = [];
        this.teams = { red: [], black: [] };
    }

    addPlayer(player) {
        this.players.push(player);
        this.assignTeam(player);
    }

    assignTeam(player) {
        const teamName = this.players.length % 2 === 0 ? 'red' : 'black';
        this.teams[teamName].push(player);
        console.log(`${player.name} assigned to ${teamName} team.`);
    }

    getTeams() {
        return this.teams;
    }
}

module.exports = GameManager;
