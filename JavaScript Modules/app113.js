const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};

//this is for the file importing in Airplane
const Airplane = require('./2-airplane.js')

console.log(Airplane.displayAirplane())