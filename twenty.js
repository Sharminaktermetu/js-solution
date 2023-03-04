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
console.log("my avg num is",my_avg);