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
/*
console.log(tentamen());

function tentamen() {
    var medelV = 0;
    var myArray = [10,2,89,9,65,13,3];
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
    var myFinalArray = [Math.round(summa), maximum, minimum]
    return myFinalArray;
}
*/
/*



//månad
var monthQ=true

while (monthQ) 
{
var month = prompt ("Vilken månad fyller du år ?(1-12)")

    if (month <= 12)
    {
    console.log(month);
    monthQ=false;
    }
   

}

var userday = prompt ("Vilken dag fyller du år")
console.log(userday);

var usermonth = (month-1);
console.log(usermonth);

//1 dag i millisekunder
var oneDay=(1000*60*60*24)
console.log(oneDay)

//Millisecs uptodate
var todayMilli = Date.now();
console.log(todayMilli+ " angivet datum i millisekunder")



//dagens datum
var today = new Date();
console.log(today);

//nuvarande månad
var thismonth = today.getUTCMonth();

var year=""

if (thismonth >= usermonth) {
    
    // Oktober 
    if (today > userday) {
        alert("året är 2016")
        year=today.getFullYear()+1
    }
    else
    {
        alert("året är 2015")
        year=today.getFullYear()
    }
    
}
else {
    alert("året är 2015")
    year=today.getFullYear()
}
var birthday = new Date(year ,usermonth, userday);
console.log(birthday);

var Bday = Date.parse(birthday)
console.log(Bday+ " födelsedagen")

var mellanskillnad = Bday - todayMilli
console.log(mellanskillnad+ " mellanskillnad")

var convertion = mellanskillnad/oneDay
console.log(Math.round(convertion));

var copy = new Date();
copy.setTime(birthday.getTime());
console.log(copy);


newContent()
function newContent()
{
alert("load new content");
document.open();
document.write("<h1>Out with the old - in with the new!</h1>");
document.close();
}
*/

    var items = 
    [
        ["förnamn", "efternamn", "telefon"],//element 1
        ["Haris", "kajs", "tyst"],//element 2
        ["lte2", "lte3", "lte3"],//element 3 i varje array
        
        
    ]
    
    hejsan(items)

function hejsan(cell) {
    document.write("<table>")
    for (var i = 0; i < items.length; i++) { //för varje array i++ betyder att den plussar på 1 till en ny "rad"
  //      document.write("<tr>") //TR på rad 266
        if (i % 2 )
        document.write("<tr class='even'>")
        else 
        document.write("<tr class='noteven'>")
            for (var j = 0; j < items[i].length; j++) {//detta ger mig allt i den inre arrayen 267 till 269
            
            if (i === 0)
            document.write("<th>" + items[i][j] + "</th>");
            else
            document.write("<td>" + items[i][j] + "</td>");
            
        }
        document.write("</tr>")
    }
    document.write("</table>")
    }
    






