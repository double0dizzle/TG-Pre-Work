function getSleepHours(day) {
    if (day === "monday") {
       return 8
    }
   else if (day === "tuesday") {
       return 4
    }
   else if (day === "wednesday") {
       return 5
    }
   else if (day === "thursday") {
       return 5.5
    }
   else if (day === "friday") {
       return 6
    }
   else if (day === "saturday") {
       return 5
    }
   else if (day === "sunday") {
       return 6
    }
 };
 //console.log(getSleepHours("tuesday"));
 //console.log(getSleepHours("wednesday"));
 //console.log(getSleepHours("thursday"))
 
 function getActualSleepHours() {
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
 };
 console.log(getActualSleepHours());
 
 function getIdealSleepHours() {
   var idealHours = 8;
   return idealHours * 7;
 }
 console.log(getIdealSleepHours());
 
 function calculateSleepDebt() {
   var actualSleepHours = getActualSleepHours();
   var idealSleepHours = getIdealSleepHours();
   if (actualSleepHours === idealSleepHours) {
     console.log("You got the perfect amount of sleep.")
   }
   else if (actualSleepHours > idealSleepHours) {
     console.log("You got more sleep than needed by " + (actualSleepHours - idealSleepHours) + " hours.")
   }
   else if (actualSleepHours < idealSleepHours) {
     console.log("You need at least " + (idealSleepHours - actualSleepHours) + " more hours of sleep. You should get some rest.")
   }
 }
 calculateSleepDebt()