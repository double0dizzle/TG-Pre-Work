// Meal Maker
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

// In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!


const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      generateRandomMeal: function(){
        const appetizer =          menu.getRandomDishFromCourse("appetizers");
        const main = menu.getRandomDishFromCourse("mains");
        const desserts = menu.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.dishPrice + main.dishPrice + desserts.dishPrice;
        return `Your meal is ${appetizer.dishName}, ${main.dishName}, ${desserts.dishName}. The price is $${totalPrice}.`
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
      console.log(courseName)
       const dish = {
        courseName: courseName,
        dishName: dishName,
        dishPrice: dishPrice
      };
      this._courses[courseName].push(dish)
      
    },
    
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return(dishes[randomIndex])
    },
    
    get courses(){
      return{
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },
    
    get appetizers(){
    
  },
    
    set appetizers(appetizersIn){
      
    },
    
    get mains(){
    
  },
    
    set mains(mainsIn){
    
  },
    
    get desserts(){
    
  },
    
    set desserts(dessertsIn){
    
  },
    
  }
  
  menu.addDishToCourse("desserts", "Cupcakes", 1.99)
  menu.addDishToCourse("desserts", "Rice Crispy Treats", 2.99)
  menu.addDishToCourse("desserts", "Skittles", 1.50)
  menu.addDishToCourse("mains", "Ribeye", 11.99)
  menu.addDishToCourse("mains", "BBQ Burger", 10.99)
  menu.addDishToCourse("mains", "Spaghetti", 14.99)
  menu.addDishToCourse("appetizers", "Wings", 5.99)
  menu.addDishToCourse("appetizers", "Shrimp", 6.99)
  menu.addDishToCourse("appetizers", "Onion Rings", 4.99)
  
  const meal = menu._courses.generateRandomMeal();
  console.log(meal)