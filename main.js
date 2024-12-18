class game {
    constructor(name,link,playerCounts,difficulty) {
        this.playerCounts = playerCounts;
        this.difficulty = difficulty;


        this.name = name;
        this.link = link;
    }
}

// a list of possible games
let games = [];

games.push(new game("Solitaire", "https://www.officialgamerules.org/card-games/solitaire",["1"], ["nee"]));
games.push(new game("Pesten", "https://www.spel-regels.nl/pesten-html/",["2","3", "4", "5+"], "ja"));
games.push(new game("Klaverjassen", "https://www.spel-regels.nl/klaverjassen/",["4"], "nee"));
games.push(new game("Poker", "https://nl.wikipedia.org/wiki/Poker",["2","3", "4", "5+"], "nee"));
games.push(new game("Black jack", "https://www.spelregels.eu/wp-content/uploads/2021/01/spelregels-blackjack.pdf",["2","3", "4", "5+"], "nee"));
games.push(new game("Toepen", "https://nl.wikipedia.org/wiki/Toepen#:~:text=Een%20speler%20die%20zijn%20was,toont%20deze%20aan%20alle%20deelnemers.",["2","3", "4", "5+"], "ja"));
games.push(new game("Oorlogje", "https://nl.wikipedia.org/wiki/Oorlogje_(kaartspel)",["3","4","5+"], "ja"));


console.log(JSON.stringify(games, null, 5));


function recommendGame() {
    const players = document.getElementById('players').value;
    const difficulty = document.getElementById('difficulty').value;

    const result = document.getElementById('result');
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = "";

    const filteredGames = games.filter(game => {
        return (
            game.playerCounts.includes(players) &&
            game.difficulty.includes(difficulty)
        )
    });

    setTimeout(() => {
        filteredGames.forEach(game => {
            const p = document.createElement("a");
            p.textContent  = game.name;
            p.href = game.link;
            p.target = '_blank';
            gameContainer.appendChild(p);
        })
        const randomIndex = Math.floor(Math.random() * filteredGames.length);

        console.log(filteredGames.length);
        if (filteredGames.length === 0) {
            const p = document.createElement("p");
            p.textContent  = "Geen spellen, probeer opnieuw!";
            gameContainer.appendChild(p);
        } else {
            const p = document.createElement("a");
            p.target = '_blank';
            p.href = filteredGames[randomIndex].link;
            p.textContent  = filteredGames[randomIndex].name;
            //gameContainer.appendChild(p);
        }

        result.style.display = 'block';
    }, 100);
}