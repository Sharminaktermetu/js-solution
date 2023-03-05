function make_avg(numbers, length) {
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum= sum+element;
        var avg = sum/length;
    }
    
    return avg;
}
var marks = [4,3,5];
var my_avg= make_avg(marks, marks.length)
// console.log("my avg num is",my_avg);

let num1=33;
let num2=79;
let num3= 435;

if(num1>num2 && num1>num3){
    console.log("num1 is largest");
}
else if(num2>num1 && num2>num3){
    console.log("Num2 is largest");

}
else{
    console.log('num3 is largest');
}