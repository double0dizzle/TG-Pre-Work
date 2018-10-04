const team = {
    _players: [{firstName: "Bob", lastName: "Jones", age:               30},
              {firstName: "Sue", lastName: "Garrison", age:             37},
              {firstName: "Joe", lastName: "Smith", age:               37}],
    
    _games: [{opponent: "Bears", teamPoints: 3,                        opponentPoints: 0},
             {opponent: "Cats", teamPoints: 42,                        opponentPoints: 5},
             {opponent: "Monsters", teamPoints: 16,                    opponentPoints: 4}],
    
    get players(){
      return this._players;
    },
    
    get games(){
      return this._games;
    },
    
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
    
  }
  
  team.addPlayer("Steph", "Curry", 28)
  team.addPlayer("Lisa", "Leslie", 44)
  team.addPlayer("Bugs", "Bunny", 76)
  console.log(team._players)
  
  team.addGame("Jokers", 40, 30)
  team.addGame("Penguins", 64, 20)
  team.addGame("Riddlers", 14, 12)
  console.log(team._games)