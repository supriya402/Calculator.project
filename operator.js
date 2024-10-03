// arithmetic operator

console.log(10+2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 % 2); // remainder
console.log(5 / 2); // division

// Note if we want to have floor(not in decimal)division
// 1 way - parseint(5/2)
// 2 way - Math.floor(5/2)

// Assignment operator
let x =5; //assign 10 to the variable x
x += 2; //x = x+2
x -= 2; // x = x-2
x *= 2; // x = x*2
x /= 2; // x = x/2
x %= 2; // x = x%2

// logical Operator

console.log((10>5) && (7<6));
console.log((10>5) || (7<6));
// retuen value according to AND , OR gate truth table..
// this concept is known as short circuting.
console.log(4 && 0);
console.log(4 || 0);
console.log(0 && 4);
console.log(0 || 4);
console.log(4 && 5);
console.log(4 || 5);

// Bitwise operator.
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
console.log(5 << 3);
console.log(5 >> 3);

// string concatenation operator
console.log("supriya" + "Bharti");
console.log(5 + 5 +"5" + 5);

// ternary operator..
console.log((2 > 1)? "sanket" : "supriya");

// conditional statement..
if(10< 20){
    console.log("hi")
}

if(10%2 == 0){
    console.log("even number");

}else{
    console.log("odd number");
}
if(10 / 2 == 0){
    console.log("True")
}else if(10 != 0){
    console.log("false")
}else{
    console.log("nothing")
}
console.log(3**2);   // exponentiation...

// loops..
let i = 0;
while(i < 10){
    console.log(i);
    i+= 1;
}

for(let i = 0; i < 10; i++)  // for loop..
    console.log(i);

// Break statement..

for(let i = 2; i < 10; i++){
    if(i%7 == 0){
        console.log("breaking");
        break;
    } else{
    console.log(i)
    }
}
 // nested loop...

for(let i = 0; i < 10; i++){
    let str = "";
    for(let j = 0; true; j++){
        str += "*";
        if(j == i){
            break;
        }
    }
    console.log(str);
    }

 

// Switch CAse...

let exp = "*";
let a = 10;
let b = 3;

switch(exp){
    case "+":
        console.log(a + b); // Adds a and b
        break;
    case "-":
        console.log(a - b); // Subtracts b from a
        break;
    case "*":
        console.log(a * b); // Multiplies a and b
        break;
    case "/":
        console.log(a / b); // Divides a by b
        break;
    case "%":
        console.log(a % b); // Gets the remainder of a divided by b
        break;
    default:
        console.log("invalid input"); // Handles any other value of exp
        break;
}

// Functions..

function fun(x) {
    console.log(x + 10);
    return x * 10;
}

let x = fun(10);
console.log(fun(10));

// unary operator..

let y = 10
let c = y++;
let z = y++;
console.log(y,c,z);


    


 