var shoppingCart ={
    books: 3,
    pens : 10,
    mouse:1,
    keyboard:15,
    laptop:1

}
// const {books, pens , mouse} = shoppingCart;
// var penItem = pens;
// var bookItem =books;
var propertyKeys = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);
// console.log(propertyValue);

var getMouse = shoppingCart['mouse'];
// console.log(getMouse);

var getKeyboard = 'keyboard';
var theKeyboard = shoppingCart[getKeyboard];
// console.log(theKeyboard);

for (let i = 0; i < propertyKeys.length; i++) {
    const element = propertyKeys[i];
    const objValue= shoppingCart[element];
    // console.log(element,objValue);
}

for(var objValue in shoppingCart){
    var value = shoppingCart[objValue];
    console.log(objValue,value);
}