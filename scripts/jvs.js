/*console.log("Hello World");
alert("Rad1\nRad2");

function medel(mt1, mt2, mt3, mt4) {
    return ((mt1 + mt2 + mt3 + mt4) / 4);
} {
    console.log(medel(1, 2, 3, 4));
}

function apa(n1, n2) {

    return n1 + ", " + n2;
}
console.log(apa("giraff", "noshörning"));
console.log(apa("idiot", "åsna"));
console.log(apa("titanic", "clown"));




// Uppgift 4

var sten = true
while (sten) {
    var meny = prompt("0. Exit\n\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Guess the number\n4. Convert to capitol");
    switch (meny)
    {
        case '0':
            console.log("You have chosen Exit");
            sten = false
            break;
        case '1':
            var fahrenheit = prompt("Fahrenheit to Celsius\n\nEnter the degree in celsius plz")
            alert(kamel(fahrenheit));
            console.log("You have chosen Fah..");
            break;
        case '2':
            var celsius = prompt("Celsius to Fahrenheit\n\nEnter the degree in fahrenheit plz")
            alert(lama(celsius));
            console.log("You have chosen Cel..");
            break;
        case '3':
            var gissaDNumber = prompt("Gissa på ett nummer mellan 1 - 100!");
            guessNumber();
            break;
            default:
            console.log("Chose wisely");
    }
    
}

//Moment Fahrenheit & Celsius
{

function kamel(fahrenheit) {
    var fahrAnswer =  (fahrenheit * (9 / 5) + 32);

    console.log(Math.round(fahrAnswer));
    return Math.round(fahrAnswer);
}

function lama(celsius) {
    var celAnswer = ((celsius - 32) * (5 / 9));

    console.log(Math.round(celAnswer.toFixed(2)));
    return Math.round(celAnswer.toFixed(2));
}
}
// Uppgift 3
{
function guessNumber() {

    var count = 1;
    var loop = true
    var theX = Math.floor(Math.random() * 101) + 1; {
        console.log(theX);
    }


    while (loop) {
        console.log(count);

        if (gissaDNumber === theX.toString()) {
            alert("My man! You guessed correct after " + count + " tries, noob!");
            loop = false;

        }
        else if (gissaDNumber > theX) {
            gissaDNumber = prompt("Your number " + gissaDNumber + " is to high, try again my good sir!")
        }
        else if (gissaDNumber < theX) {
            gissaDNumber = prompt("Your number " + gissaDNumber + " is to low, try again my good sir!")
        }
        count++;
    }
}
}





*/

//Uppgift 5


/*
var TypeText = prompt("Skriv en text")
var HashT = ""
for (var i = 0; i < TypeText.length; i++) {
    //    console.log("The character at " +i+ " is " + TypeText.charAt(i) );
    if (TypeText[i].toUpperCase() === 'A') {
        HashT += "#"
    }
    else if (TypeText[i] === TypeText[i].toUpperCase())
    {
        HashT += TypeText[i].toLowerCase()
    }
    else if (TypeText[i] === TypeText[i].toLowerCase())
    {
        HashT += TypeText[i].toUpperCase()
    }
    else {
        HashT += TypeText[i]
    }
}
console.log(HashT);

*/

//Uppgift 6
/*
function triangel ()
{
var aSquare = prompt("Ange längden på första katetetern")
var bSquare = prompt("Ange längden på andra katetern")
var aAndb = Math.pow(aSquare, 2) + Math.pow(bSquare, 2);

{
console.log(aAndb);
console.log(Math.round(Math.sqrt(aAndb)));

}
}
*/

//uppgift 7
console.log(tentamen());

function tentamen() {
    var medelV = 0;
    var myArray = [10, 20, 30, 40, 50];
    console.log(myArray); 
        for (var i = 0; i < myArray.length; i++) {
            medelV += myArray[i];
        }
        var summa = (medelV / myArray.length)
    console.log(summa)
    myArray = myArray.sort(function(a, z) {
        return a - z;
    })
    var minimum = myArray[0]
    var maximum = myArray[myArray.length - 1]
    var myFinalArray = [minimum, summa, maximum]
    return myFinalArray;
}
