//          100 days of coding challenge ( DAY 18 )
//   Question 01   ---Advertising a mobile phone
let smartphone = {
   make: "Infinix",
   model: "S5 lite",
   specs: {
    Storage: "64GB",
    ScreenSize: "7.6",
    batteryLife: "1 day bakeup",
   }
};
// shows what features my mobile have.
console.log(smartphone)

//   Question 02    
let developersSkills={
  languages:["Javascript","Typecript","Python"],
  frameworks:["React","Angular","Vue"],
  tools: ["Git","Webpc","Docker"],
};
  // --Getting more skills from this list
let {languages , frameworks, tools} = developersSkills
 //  -- show a skill
 console.log(`languages: ${languages[0]},frameworks: ${frameworks[0]}, tools: ${tools[0]}`)
 console.log(`languages: ${languages[1]},frameworks: ${frameworks[1]}, tools: ${tools[1]}`)
 console.log(`languages: ${languages[2]},frameworks: ${frameworks[2]}, tools: ${tools[2]}`)

//   Question 03 
  //  --A way to make a flexible list
function createObjectWithDynamicKey(key: any, value: string) {
  let dynamicObject = [{}];
  // --Setting up a section in the list with a changeable name
  dynamicObject[key] = value;
  return dynamicObject ;
}
  // --Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);