const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log('Players 1', players1);
console.log('Players 2', players2);

const [gk, ...fieldPlayers] = players1;
console.log('GK', gk);
console.log('Field Players', fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log('All Players', allPlayers);

const players1final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log('Players 1 Final', players1final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log('Team 1', team1);
console.log('Draw', draw);
console.log('Team 2', team2);

// Nested destructuring
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log('Team 1', team1);
// console.log('Draw', draw);
// console.log('Team 2', team2);

const printScores = function (...players) {
  console.log('Print scores', players, players.length);
  console.log(`${players.length} goals were scored by ${players}`);
};

printScores('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printScores(...game.scored);

console.log(team1 < team2 && 'Bayern Munich is more likely to win');

console.log(team1 > team2 && 'Borussia Dortmund is more likely to win');

// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
