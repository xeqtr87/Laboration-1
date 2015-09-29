console.log("Hello World");
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
    var meny = prompt("0. Exit\n\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Guess the number");
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

function kamel(fahrenheit) {
    var fahrAnswer = (fahrenheit * (9 / 5) + 32);

    console.log(fahrAnswer);
    return fahrAnswer;
}

function lama(celsius) {
    var celAnswer = ((celsius - 32) * (5 / 9));

    console.log(celAnswer.toFixed(2));
    return celAnswer.toFixed(2);
}








// Uppgift 3
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