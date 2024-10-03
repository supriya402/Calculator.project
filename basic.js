console.log("supriya");
console.log("Aran");
//numbers
console.log("12.5");
console.log(0)
console.log(-1)
// string
//semicolon is not importnat but we use for better readability

console.log(`this is a backtik string`);

//object
console.log({"supriya":123});

//symbol(immutable data type)

console.log(Symbol("hello world"));
//operators typeof()

console.log(typeof "abc");
console.log(typeof -0);
console.log(typeof null);   // corner case
console.log(typeof undefined);
console.log(typeof {"sanket": 12});
console.log(typeof NaN)
console.log(typeof(typeof(true)));

//it will also store comma separated value

console.log(true,false,123,"supriya");

// variable
let x = 10;
var y = 20;
const z = 'abcd';
console.log(x, y, z);

// use this to print in same line of two diffrent line in same line.
process.stdout.write("hello");
process.stdout.write("supriya");

let exp = "/";
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

let x = 10
let c = x++;
let y = x++;
console.log(x,y,c);


