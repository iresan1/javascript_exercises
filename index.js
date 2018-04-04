
EXERCISE 1:

    //create a variable called apple and assign to it a value of 5
    //then create another variable called apple2 and give to it a value of 15.
    //and finally create a variable called basket and add to it the value of the two other  variables combined.
    //then console.log basket

***Your solution goes after this line***

var apple = 5;
var apple2 = 15;
var basket = apple + apple2;
console.log(basket);

EXERCISE 2:

    //create 3 variables:
    //a , b and c; 
    //assign 10 to a and 24 to b
    
    //make the third variable (c) and make it be to be the result of  a and b multiplied.
    
    // then console.log c

***Your solution goes after this line***
var a = 10;
var b = 24;
var c = a * b;
console.log(c);

EXERCISE 3:

    //Age calculator
    //Want to find out how old you'll be? Calculate it!
    
    //Store your birth year in a variable.
    
    //Store a future year in a variable.
    
    //Calculate your 2 possible ages for that year based on the stored values.
    
    //For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
    
    //Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

***Your solution goes after this line***
var birth = 1989;
var year = 2045;
var age1 = (year - birth);
var age2 = (year - birth - 1);
console.log('I will be either ' + age2 + ' or ' + age1 + ' in ' + year);

EXERCISE 4:

    //Ever wondered how much a "lifetime supply of Tea you will need?"
    //let's find out!!!
    //store  your current age in a variable
    //store your estimated end age in a variable
    //store how many teas you drink per day on average
    //calculate how many you will need until the end!
    //then console.log the following sentence replacing NUM with the actual number of Tea-bags you are going to need...
    
    //'I will need at least NUM of tea-bags for this lifetime'

***Your solution goes after this line***
var age = 29;
var end = 93;
var teapd = 2;
var teaTotal = ((end - age)*365)* 2
console.log('I will need at least ' + teaTotal + ' of tea-bags for this lifetime');

EXERCISE 5:

    //Declare the following variables with the following values:
    
    //a => 10
    //b => 22
    
    //c => 43
    //d => 54
    
    //e => 65
    //f => 34
    
    //
    //g => 10
    //h => 10
    
    //then compare them in pairs using the JavaScript Arithmetic Operators
    //https://www.w3schools.com/jsref/jsref_operators.asp
    //and make sure that the result of your comparison is the following:
    //false, false, true, true
    
    
    //example
    
    //console.log(10 > 5) 
    //this will return true
    
    //compare  (a,b) (c,d), (e,f), (g,h)
    
    
    
    //should console.log false, false, true, true

***Your solution goes after this line***
var a = 10;
var b = 22;
console.log(a > b);

var c = 43;
var d = 54;
console.log(c > d);

var e = 65;
var f = 34;
console.log(e > f);

var g = 10;
var h = 10;
console.log(g === h);

EXERCISE 6:

    //using 'strict equality' check, compare the following variables and console.log true if the are NOT the same and false if they are
    
    
    //num  =>  10 
    //num1 => "10"
    
    //num2 =>  33 
    //num3 =>  44 
    
    //num4 =>  21 
    //num5 =>  21 
    
    //num6 =>  0  
    //num7 =>  0 
    

***Your solution goes after this line***
console.log (10 !== "10");

console.log (33 !== 44);

console.log (21 !== 21);

console.log (0 !== 0);

EXERCISE 7:

    //tell which number is even
    //assign each of the below number to a variable, then using the module operator check which of them is even and which is odd, and console.log true if is even and false if is odd
    
    //3,  123 , 545 , 34 , 64 , 6634 , 876


***Your solution goes after this line***
var one = 3
one % 2 === 0

var two = 123
two % 2 === 0

var three = 545
three % 2 === 0

var four = 34
four % 2 === 0

var five = 64
five % 2 === 0

var six = 6634
six % 2 === 0

var seven = 876
seven % 2 === 0

EXERCISE 8:

    //knowing that the minimum age for driving a 50cc scooter is 15 ask yourself how old you are with a prompt and return true if you are old enough to drive a scooter and false if you are not


***Your solution goes after this line***
var age = prompt ('Enter your age please...')
console.log(age > 14)

EXERCISE 9:

    //using prompt :
    //get the name of the user
    //get the year of birth of the user
    //alert his name and current age in a sentence like in the example:
    //                                                                 ******EXAMPLE******
    //Hello Jason you are 34 years old
    
***Your solution goes after this line***
var name = prompt ('Enter your name please...')
var birth = prompt ('Enter your birth year please...')
var age = (2018 - birth)
alert ('Hello ' + name + ' you are ' + age + ' years old!')

EXERCISE 10:

    //get the age from the user with a prompt
    //then using document.write you need to output an h1 withe the following message, replacing the word *'DAYS'* with the actual value
    
    // you have lived for *'DAYS'* days already!


***Your solution goes after this line***
var age = prompt ('Enter your age please...')
var days = (age * 365)
document.write ("<h1>You have lived for</h1>" + days + "<h1>days already</h1>");

EXERCISE 11:

    //It's hot out! Let's make a converter based on the steps here:
    http://www.mathsisfun.com/temperature-conversion.html
        //- Store a celsius temperature into a variable.
        //- Convert it to fahrenheit and output "NN°C is NN°F".
        //- Now store a fahrenheit temperature into a variable.
        //- Convert it to celsius and output "NN°F is NN°C."

***Your solution goes after this line***
var tempc = 25;
var far = (tempc*1.8+32);
console.log(tempc + "°C is " + far + "°F");

var tempf = 113;
var cel = ((tempf-32)/1.8);
console.log(tempf + "°F is " + cel + "°C");
