class Media {
    constructor(title){
      this._title = title,
      this._isCheckedOut = false,
      this._ratings = []
    }
     get title(){
     return this._title 
    }
    get isCheckedOut(){
     return this._isCheckedOut
    }
    get ratings(){
     return this._ratings 
    }
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
      
    }
    getAverageRating(){
     let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
     let lengthOfArray = this.ratings.length;
      return ratingsSum / lengthOfArray
    }
    
    addRating(newRate) {
      this.ratings.push(newRate)
    }
    set isCheckedOut(gone){
      this._isCheckedOut = gone;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages){
      super(title),
      this._author = author,
      this._pages = pages,
      this.isCheckedOut = false,
      this._ratings = []
    }
     get author(){
     return this._author
    }
    get pages(){
     return this._pages 
    }
    
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
     let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
     let lengthOfArray = this.ratings.length;
      return ratingsSum / lengthOfArray
    }
    
    addRating(newRate) {
      this.ratings.push(newRate)
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title),
      this._director = director,
      this._runTime = runTime,
      this.isCheckedOut = false,
      this._ratings = []
    }
     get director(){
     return this._director
    }
    get runTime(){
     return this._runTime
    }
    
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
     let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
     let lengthOfArray = this.ratings.length;
      return ratingsSum / lengthOfArray
    }
    
    addRating(newRate) {
      this.ratings.push(newRate)
    }
  }
  
  const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
  //console.log(historyOfEverything)
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything)
  console.log(historyOfEverything.isCheckedOut)
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.getAverageRating();
  console.log(historyOfEverything)
  
  const speed = new Movie("Jan de Bont", "Speed", 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  speed.getAverageRating();
  console.log(speed)