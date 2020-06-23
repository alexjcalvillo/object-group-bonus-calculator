const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
/*
//function employeeBonus() {
  for (let person of employees) {
    function newEmployeeProfile(person);
    console.log(newObj);
  }
}
*/

let employeeObj;

employeeObj = employees[0];
console.log(employeeObj);

let percentage;

function calculateBonusPercentage(employeeObj) {
  if (employeeObj.reviewRating <= 2) {
    // check for review rating
    percentage = 0;
  } else if (employeeObj.reviewRating === 3) {
    percentage = 0.04;
  } else if (employeeObj.reviewRating === 4) {
    percentage = 0.06;
  } else {
    percentage = 0.1;
  } // end check
}

// function takes employee object from for of loop to determine employee bonus breakdown
function newEmployeeProfile(employeeObj) {
  // create new object
  let newObj = {};
  // assigns original employee property name value to newObj property value
  newObj.name = employeeObj.name;
  // determine bonus percentage by employee
  calculateBonusPercentage(employeeObj);
  newObj.bonusPercentage = percentage;

  newObj.bonusPercentage = percentage;
  newObj.totalBonus = employeeObj.annualSalary * percentage;
  newObj.totalCompensation =
    parseInt(employeeObj.annualSalary) + parseInt(newObj.totalBonus);
  return newObj; // newObj = {name: Atticus, bonusPercentage: #}
}

employeeObj = employees[1];

console.log(newEmployeeProfile(employeeObj));
console.log(newEmployeeProfile(employees[2]));

/*
//testing purposes
for (let person of employees) {
    function newEmployeeProfile(person);
    console.log(newObj);
  }
*/
