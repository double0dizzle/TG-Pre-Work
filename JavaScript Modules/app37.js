//Race Day Registration: There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
//Early adults receive a race number at or above 1000.
//All others receive a number below 1000.
//Start time:
//Adult registrants run at 9:30 am or 11:00 am.
//Early adults run at 9:30 am.
//Late adults run at 11:00 am.
//Youth registrants run at 12:30 pm (regardless of registration).



//will provide a random number to each of the thousand racers
let raceNumber = Math.floor(Math.random() * 1000);
 var earlyRegister = true;

var runnerAge = 1;

if (runnerAge > 18 && earlyRegister) {
   raceNumber += 1000;
  console.log(raceNumber + ": Your start time is at 9:30am.")
}
 else if (runnerAge > 18 && !earlyRegister) {
  raceNumber += 1000;
  console.log(raceNumber + ": Your start time is at 11:00am.")
}
else if (runnerAge <18) {
  console.log(raceNumber + ": Your start time is at 12:30pm.")
}
else {
  console.log("Runners who are 18, please see the registration tent.")
}