// grade marking

let marks = 48;

if (marks>100) {
    console.log("100 er besi kemny hoy");
}
else if(marks=>0 && marks<=100){
    if(marks>=80){
        console.log('A+');
    }
    else if(marks>= 60){
        console.log("B");
    }
    else if(marks>= 50){
        console.log("c");
    }
    else if(marks>= 40){
        console.log("d");
    }
    else{
        console.log("F");
    }
}
else{
    console.log("minus number paicen?");
}