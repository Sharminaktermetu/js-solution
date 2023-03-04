function minuteCheck(input) {
    const time = input*60;
    return time;
}
let timeInput = 3;
let theMinute =minuteCheck(timeInput);
// console.log("Your given hour minute is:",theMinute);

function leapYear(years){
    let theLeapYear =[];
 for (let i = 0; i < years.length; i++) {
    const element = years[i];

    if (element%4==0) {
       theLeapYear.push(element)
        
    }
    
 }

 return theLeapYear;
}
let years =[2023, 2024, 2025, 2028, 2030]

let showYear=leapYear(years);
//  console.log("The years are",showYear);

function getSumArray(numbers) {
    let sum =0
    let oddArray=[]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
       
        if (element%2==1) {
            oddArray.push(element)
            sum+=element
            console.log(oddArray);
        }
    }console.log(sum);
    
}
const arrayNumbers=[23,56,78,89,30]
getSumArray(arrayNumbers)