
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




/////////////////////////





EXERCISE 1:

    // take the value car from the below array and assign it to a new array called arr2 as its first element.
    //Then console.log arr2.
    // is should return ['car']
    var arr = ['milk','cheese','car','lime']

***Your solution goes after this line***
//var arr = ['milk','cheese','car','lime']
var arr = ['milk','cheese','car','lime']
var arr2 = [];
arr2 = arr2.concat(arr[2]);
console.log(arr2);

EXERCISE 2:

    // take all values from arr and place them in a new array called newArr but in reversed order without using .reverse() method
    var arr = ['milk','cheese','car','lime']
    
    //then console.log newArr
    // expected output newArr = ['lime','car','cheese','milk']

***Your solution goes after this line***
var arr = ['milk','cheese','car','lime']
var newArr = arr.reverse(arr);
console.log(newArr);

EXERCISE 3:

    //swap the value apple from arr with the value dvd-player from arr2
    //starting point
    var arr  =  ['banana','apple','orange']
    var arr2 =  ['tv','dvd-player','playstation']
    
    //expected output
    //arr
    //["banana", "dvd-player", "orange"]
    
    //arr2
    //["tv", "apple", "playstation"]

***Your solution goes after this line***
var arr  =  ['banana','apple','orange']
arr [1] = 'dvd-player';
console.log(arr);

var arr2 =  ['tv','dvd-player','playstation']
arr2 [1] = 'apple';
console.log(arr2);

EXERCISE 4:

    //using splice remove the third element (bread) of the array below:
    //then console.log the array
    
    var arr = ['cheese','salame','bread','water','pizza']
    
    //expected output:arr = ['cheese','salame','water','pizza']

***Your solution goes after this line***
var arr = ['cheese','salame','bread','water','pizza']
arr.splice(2,1);
console.log(arr);

EXERCISE 5:

    //using the splice method remove the first and last element of the below array.
    //car and toothbrush
    //then console.log the array.
    var arr = ['car','soap','banana','tv','toothbrush']
    //expected output arr = ['soap','banana','tv']

***Your solution goes after this line***
var arr = ['car','soap','banana','tv','toothbrush']
arr.splice(0,1)
arr.splice(-1)
console.log(arr);

EXERCISE 6:

    //using array.splice remove all elements from the below array then console.log the array
    var arr =[1,2,3,4,5,6,7,8,9,0,3,4,523,44,3454]
    //expected output arr =[]

***Your solution goes after this line***
var arr =[1,2,3,4,5,6,7,8,9,0,3,4,523,44,3454]
arr.splice(0);
console.log(arr);

EXERCISE 7:

    //using push take all elements from arr and push them to a new variable called arr2
    //then console.log arr2
    
    var arr = ["one","two","three","four"]
    //expected output arr2 = ["one","two","three","four"]

***Your solution goes after this line***
var arr = ["one","two","three","four"]
var arr2 = [];
arr2.push(arr);
console.log(arr2);

EXERCISE 8:

    //using array.push take the third and fifth elements of arr and push them to a new variable called arr2
    
    // Psych and Gotham
    
    //then console.log arr2
    
    
    var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']
    
    //expected output arr2 = ["Psych", "Gotham"]

***Your solution goes after this line***
var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']
var arr2 = [];
arr2.push(arr[2]);
arr2.push(arr[4]);
console.log(arr2);

EXERCISE 9:

    //using array.concat create a new array called arr2 which takes all properties from arr
    // then remove the last one using splice.
    //last thing console.log arr2
    var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']
    
    //expected output arr2 = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter']

***Your solution goes after this line***
var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']
var arr2 = [];

arr2 = arr2.concat(arr);
console.log(arr2);

arr.splice(0);
console.log(arr);


EXERCISE 10:

    //using concat take apple and orange properties of arr1 and assign them to a new array called arr2.
    // then console.log both arr and arr2
    
    var arr = ['banana','kiwi','orange','apple','banana']
    
    //expected output arr2 = ["orange","apple"]

***Your solution goes after this line***
var arr = ['banana','kiwi','orange','apple','banana']
var arr2 = [];
arr2 = arr2.concat(arr[2]);
arr2 = arr2.concat(arr[3]);
console.log(arr);
console.log(arr2);

EXERCISE 11:

    //using indexof find the index of the car and the index of the watch and console.log them
    var arr = ['glass','car','watch','sofa','macbook']
    
    //expected output  : 
    //1
    //2

***Your solution goes after this line***
var arr = ['glass','car','watch','sofa','macbook']
console.log(arr.indexOf('car'));
console.log(arr.indexOf('watch'));

EXERCISE 12:

    //using indexof check if the following colors are in the array and if they are you should console.log true, and if they are not you should console.log false.
    
    //green, red, pink,
    
    var arr = ['green','red','black','blue','brown','yellow','purple']
    //expected output
    
    //true
    //true
    //false

***Your solution goes after this line***
var arr = ['green','red','black','blue','brown','yellow','purple']
console.log(arr.indexOf('green')>-1);
console.log(arr.indexOf('red')>-1);
console.log(arr.indexOf('pink')>-1);

EXERCISE 13:

    //now do the same exercise using the method includes only this time you should console.log false if the color is there and true if it's not!
    var arr = ['green','red','black','blue','brown','yellow','purple']
    //green, red, pink,
    
    //expected output
    //false
    //false
    //true

***Your solution goes after this line***
var arr = ['green','red','black','blue','brown','yellow','purple']
console.log(!arr.includes('green'));
console.log(!arr.includes('red'));
console.log(!arr.includes('pink'));

EXERCISE 14:

    // Using the string methods split and join remove the "," from the below string
    var str = 'I,Really,Like,Pizza'
    //then console.log the modified string which should ideally look like:
    //expected output : I Really Like Pizza"

***Your solution goes after this line***
var str = 'I,Really,Like,Pizza'
str = str.split(',').join(' ');
console.log(str);

EXERCISE 15:

    //Still using split and join remove the unwanted characters from our word so that it will be just banana, then console.log word
    var word = 'ba_*!*_na_*!*_na';
    
    
    //expected output banana
    

***Your solution goes after this line***
var word = 'ba_*!*_na_*!*_na';
word = word.split('_*!*_').join('');
console.log(word);

EXERCISE 16

    //check the following and console.log true if they are arrays and false if they are not, you will need to research a bit as this hasn't been covered.
    var one   = {name:'antonello'}
    var two   = ['name', 'antonello']
    var three = [[],[],{},"antonello",3,function(){}]
    
    //expected output 
    //false
    //true
    //true

***Your solution goes after this line***
var one   = {name:'antonello'}
console.log(one.constructor === Array);

var two   = ['name', 'antonello']
console.log(two.constructor === Array);

var three = [[],[],{},"antonello",3,function(){}]
console.log(three.constructor === Array);



