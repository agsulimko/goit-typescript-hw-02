/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
 const enum Weekend {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY= "sunday",

}

function isWeekend(day:Weekend): boolean {
  return  day === Weekend.SATURDAY || day === Weekend.SUNDAY
};
const day = Weekend.SATURDAY;
const days = Weekend.WEDNESDAY;
console.log('цей день вихідний?=>',isWeekend(day));
console.log('цей день вихідний?=>',isWeekend(days));



 
 

