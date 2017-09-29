
var isPrompt = false, isAlert = false;
var name = 'John Reese';
console.log('Hello from the script js, ' + name);

if(isPrompt) {
    var pr = prompt('Input a random value');
    console.log(pr);
}

if(isAlert) {
    alert('You are doomed');
}

var job = 'teacher'; 
switch (job) {
    case 'teacher' :
        console.log('He is a teacher');
        break;
    default :
        console.log('He is jobless');
        break;
}

function calculateAge (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(name + ' has age ' + age);
}

var calculateRetirement = function(age) {
    var retirement = 65 - age;
    console.log(name + ' has ' + retirement + 'years to retirement');
}

calculateAge(1994);
calculateAge('1994');
calculateRetirement.age = 30;

//Expressions
3 + 4;
var age = 5;

//Statements
if(age===5) {}

//Arrays
var arr1 = ['aditya', 'seema'];
var arr2 = new Array(1980, 'Aditya', 6740);
console.log(arr1);
console.log(arr2[0]);

