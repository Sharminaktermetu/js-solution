function fullName (first, second){
    let connect = first+ " " + second;
    return connect;
}
let name1 = 'hablu';
let name2 ='kanto';
let result = fullName(name1,name2);
// console.log(result);


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। 


function square(number){
    let theSquare = number*number;
    
    // console.log(theSquare);
}
square(5)

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :এবং pepperoni প্রিন্ট করবা।



const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}

const show=pizza.toppings[2]
// console.log(show);
const fruits =['apple', 'banana', 'orange'];
const banana = fruits.indexOf('banana');
fruits[1]='mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);