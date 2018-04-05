
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
var arr2 =  ['tv','dvd-player','playstation']
var arr3 = 'apple'
arr [1] = arr2 [1]
arr2 [1] = arr3
console.log(arr);
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
arr2.push(arr[0,1,2,3]);
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


///////////////////////



EXERCISE 1

    //create a for loop that prints out the numbers from 1 to 100
    
    //expected output 1...100

***Your solution goes after this line***

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

EXERCISE 2

    //create a for loop that prints out the numbers from 100 to 0
    //expected output 100...0

***Your solution goes after this line***

for (var i = 100; i >= 0; i--) {
    console.log(i);
}

EXERCISE 3

    //create a  while loop  that checks the numbers from 0 to 100 and for each iteration if the number is not divisible by 2, should print false, and if it is it should print true
    
    //expected output 
    //true
    //false
    //true
    //false ... and so on to 100

***Your solution goes after this line***

var num = 0
while (num <= 100) {
    num++
    console.log(num %2 === 0);
}

EXERCISE 4

    //create a forEach loop that goes through an array like this one in the example and prints out the index and the array element in the same console.log.
    //next to each element and index add a semantic string, like for example 
    //'element' for the element and 'idex' for the index
    
    var arr = ['banana','pinapple','orange']
    
    //expected output //
    //element banana
    //index 0
    //element pinapple
    //index 1
    //element orange
    //index 2

***Your solution goes after this line***
var arr = ['banana','pinapple','orange']
arr.forEach(function(element,index){
    console.log('element', element);
    console.log('index', index);
});

!!!EXERCISE 5

    //write a forEach loop that loops through this example array and checks if the type of each element is a string, 
    //if it is it prints true, 
    //and if it isn't it prints out false, 
    //at the same time it needs to print out the indexes of all iterations so that we can see which of them returned true!
    
    var arr = ['banana',['hello'],12,true]
     //expected output
    //true 0
    //false 1
    //false 2
    //false 3

***Your solution goes after this line***
var arr = ['banana',['hello'],12,true]
arr.forEach (function (ele,index){
    console.log(typeof ele === 'string')
})


!!!EXERCISE 6

    //write a forEach loop that loops through this example array and prints out the type of each element
    var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]
    
    //expected output 
    //object
    //object
    //boolean
    //number
    //string
    //object
    //undefined

***Your solution goes after this line***
var arr = [{name:'Pedrito'}, ['Banana'],false,34,'hello',null,undefined]
arr.forEach(function (element,i){
    console.log(typeof arr[i])
});




EXERCISE 7

    //create a forEach loop  that loops through the array below and for each iteration if the element is divisible by 2, if it is it should print true, and if it isn't it should print false
    var arr =[1435,656,3234,96747458]
    //expected output
    //false
    //true
    //true
    //true

***Your solution goes after this line***
var arr =[1435,656,3234,96747458]
arr.forEach(function(element){
    console.log(element %2 === 0)
})

EXERCISE 8

    //Write a 'for of' loop that goes through the given array and prints out each element
    //you should also concatenate each element with a sentence...
    //example
    //if the name is mike it should console.log
    
    var arr  = ['mike','peter','luke','pedro','george','antonello']
    
    
    //expected output Hello NAME, how are you today?
    //replace NAME with the value from the array

***Your solution goes after this line***
var arr  = ['mike','peter','luke','pedro','george','antonello']
for (var element of arr){
    console.log (`Hello ${element}, how are you today?`);
}

EXERCISE 9

    //write a forOf loop that loops through the following array and sums the numbers up in a variable called sum, once the loop is finished you can console.log the following message:
    //"the the sum of the elements in the array is (here the actual sum)" 
    
    var arr = [1,4,55,77,44,66,44,55]
    
    //so if the sum is 200 it should console.log 'the sum of the elements in the array is 200'

***Your solution goes after this line***
var arr = [1,4,55,77,44,66,44,55];
var sum = 0;
for (var ele of arr){
    sum+=ele
};
console.log(`The the sum of the elements in the array is ${sum}`);

EXERCISE 10

    //Create a forEach loop that loops through the given array and multiplies each element inside it.
    //The result should be assigned to a variable called sum.
    
    // once done please console.log the following:
    // the result of multiplying each number of the array is (result goes here!)
    //for example
    var arr = [2,4,10]
    //should console.log()...
    //the result of multyplying each number of the array is 80

***Your solution goes after this line***
var arr = [2,4,10]
var sum = 1
arr.forEach (function(ele){
    sum*=ele
})
console.log(`the result of multiplying each number of the array is ${sum}`)


EXERCISE 11

    // write a forEach loop that goes through the array using the method push taking the elements of arr and placing them inside the arr2
    // so your starting point is
    var arr =['john','mike','robert','peter','luke']
    var arr2= []
    
    // expected output 
    // arr2
    // ["john", "mike", "robert", "peter", "luke"]

***Your solution goes after this line***
var arr =['john','mike','robert','peter','luke']
var arr2= []
arr.forEach(function(element){
    arr2.push(element);
});
console.log(arr2);


EXERCISE 12

    // Still using the foreach loop and two arrays push the numbers of arr to arr2 and multiply them by two on the way!
    
    // starting point
    var arr = [2,3,65,22]
    var arr2 = []
                            
    // expectd output
    // arr2
    // [4, 6, 130, 44]

***Your solution goes after this line***
var arr = [2,3,65,22]
var arr2 = []

arr.forEach(function(element){
    console.log('element', element);
    arr2.push(element*2);
});
console.log(arr2);

EXERCISE 13

    //add the elements of arr to arr2 using the concat method
    //your starting point is
    var arr = [1,2,3,4,5,65,23,6,'hello']
    var arr2  =[]
    
    //expected output
    //arr2
    //[1, 2, 3, 4, 5, 65, 23, 6, "hello"]

***Your solution goes after this line***
var arr = [1,2,3,4,5,65,23,6,'hello']
var arr2  =[]
arr2 = arr2.concat(arr);
console.log(arr2);

EXERCISE 14

    // write a foreach loop that compares the numbers of the two arrays with each other and returns true if they are the same and false if they are not.
    //it should do a strict check to check that they are also of the same type
    //so the below arrays should return
    
    var arr = [10,20,30, '55']
    var arr2 = [100,20,20, 55]
    
    //EXPECTED OUTPUT 
    //false
    //true
    //false
    //false

***Your solution goes after this line***
var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]
arr.forEach(function(ele,i){
    console.log(ele=== arr2[i])
})


EXERCISE 15

    //now do the same exercise only this time ignore the type.
    //expected output
    //false
    //true
    //false
    //true
    var arr = [10,20,30, '55']
    var arr2 = [100,20,20, 55]

***Your solution goes after this line***
var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]
arr.forEach(function(element,i){
    console.log(arr[i] == arr2[i])
})


EXERCISE 16

    //Using arr.includes loop through arr2 check if arr contains the elements from arr2...
    //it should console.log true if it does and false if it doesn't
    
    var arr = [10,20,30, '55']
    var arr2 = [100,20,20, 55]
    
    //expected output
    //false
    //true
    //true
    //false

***Your solution goes after this line***
var arr = [10,20,30, '55']
var arr2 = [100,20,20, 55]
arr.forEach(function(element,i){
    console.log(arr.includes(arr2[i]))
})

EXERCISE 17

    //take the original string which will contain some upper case characters, then create a new variable which needs to contain all the caracters of the original string but all have to be lowercase, once you are done console.log the new variable
    
    //You must use:
    //a loop
    //push
    //join
    
    original sentence = Antonello LIKEs PlaYing GaMeS
    
    // expected output           antonello likes playing games

***Your solution goes after this line***
var name = 'Antonello LIKEs PlaYing GaMeS'
var newName = []

for (var i = 0; i <= name.length; i++) {
    newName.push(name[i]name.toLowerCase(););
}
newName=newName.join('');

console.log(newName);

EXERCISE 18

    // TAKE THE BELOW STRING AND REVERSE THE ORDER OF THE LETTERS SO THAT IT MAKES SENSE;
    //CONSOLE.LOG THE REVERSED LONG SENTENCE
    //You must use:
    //a loop
    //push
    //join
    var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'
    
    //expected output
    //I love deep fried potatoes with mayo and with a nice pint of cold beer

***Your solution goes after this line***
var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'
var arr = []
for (var i = str.length; i >= 0; i--) {
    arr.push(str[i]);
}
arr.join('');

EXERCISE 19

    // you need to convert a name into an abbreviated form (initials), meaning that you take the first letter of the surname, make sure it is capitalized, and add a dot.
    //Examples
    
    Ada lovelace 
    //expected output => "Ada L." 
    
    Antonello Sanna
    //expected output => Antonello S.

***Your solution goes after this line***
var first = ('Ada lovelace')
var second = ('Antonello Sanna')
var fname = ''

fname = first[4].toLocaleUpperCase() + '.';
first = first.split('lovelace').join('');
fname = first + fname;

second = second.split('anna').join('') + '.';


EXERCISE 20

    //You went on vacation to Japan and now you came back and you need to check your finance a bit and in order to do that you need to find out:
    
    //the average expense per day in dollars, 
    
    // each element of the array will be  the daily expense in japanese yen
    
    // the conversion rate for yen to dollars is 0.0089
    
    //please console.log the message as shown in the example and make sure you provide us with a round number with no decimals...
    var arr = [
            //monday
            '10003', 
            //tuesday
            '46733', 
            //wednesday
            '45833', 
            //thursday
            '3534', 
            //friday
            '57354',
            //satuy
            '45334',
            //sunday
            '34856'
            
    ]
    
    
    //expected output
    //you spent an average of 310 per day in you trip to Japan
 
***Your solution goes after this line***
var arr = ['10003', '46733', '45833', '3534', '57354', '45334', '34856']
var num = []
var dol = 0

arr.map(function(ele){
    num.push(Number(ele))
});
num.forEach(function(ele){
    dol+= ele
});
dol = ((dol/7)*0.0089);
console.log (`You spent an average of ${Math.round(dol)} per day in your trip to Japan`);

