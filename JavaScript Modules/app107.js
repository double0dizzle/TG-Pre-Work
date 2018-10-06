class School {
    constructor(name, level, numberOfStudents){
      this._name = name,
      this._level = level,
      this._numberOfStudents = numberOfStudents
    }
    
    get name(){
      return this._name
    }
    get level(){
      return this._level
    }
    get numberOfStudents(){
      return this._numberOfStudents
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    
    static pickSubstituteTeacher(substituteTeachers){
      //let substituteTeachers = [];
      Math.floor(Math.random() * substituteTeachers.length - 1)
    }
    set numberOfStudents(students){
      if (typeof numberOfStudents === ""){
        return ('Invalid input: numberOfStudents must be set to a Number.')
      } else return students === this.numberOfStudents
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, "primary", numberOfStudents),
      this._name = name,
      this._pickupPolicy = pickupPolicy
      this._numberOfStudents = numberOfStudents
    }
    
    get pickupPolicy(){
      return this._pickupPolicy
    }
  }
  
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
      super(name, "high", numberOfStudents),
      this._name = name,
      //this._pickupPolicy = pickupPolicy,
      this._sportsTeams = sportsTeams
    }
    
    get pickupPolicy(){
      return this._pickupPolicy
    }
    get sportsTeams(){
      return this._sportsTeams
    }
  }
  
  const lorraineHansbury = new PrimarySchool ("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  lorraineHansbury.quickFacts();
  //console.log(lorraineHansbury)
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  console.log(lorraineHansbury)
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportsTeams)