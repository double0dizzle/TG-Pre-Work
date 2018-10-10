const robot = {
    name: "R2D2",
    model: '1E78V2',
    energyLevel: 100,
    checkEnergy(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
  };
  console.log(robot.checkEnergy())