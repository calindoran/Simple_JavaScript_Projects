const team = {
  _players: [
    {
      firstName: "John",
      lastName: "Brom",
      age: 21,
    },
    {
      firstName: "Brom",
      lastName: "John",
      age: 23,
    },
    {
      firstName: "Jim",
      lastName: "Boo",
      age: 25,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 21,
      opponentPoints: 35,
    },
    {
      opponent: "Bulls",
      teamPoints: 11,
      opponentPoints: 27,
    },
    {
      opponent: "Hawks",
      teamPoints: 2,
      opponentPoints: 7,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Big Bad", 69, 42);
team.addGame("Titans", 100, 98);

console.log(team.games);
