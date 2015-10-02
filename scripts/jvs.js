//Laboration 4

menu();

function menu() {
    var sten = true
    while (sten) {
        var meny = prompt("0. Exit\n\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Guess the number\n4. Uppgift 1\n5. Uppgift 2 moment 1\n6. Uppgift 2 moment 2\n7. Uppgift 5\n8. Uppgift 6\n9. Uppgift 7\n10. Uppgift 8");
        switch (meny) {
            case '0':
                console.log("You have chosen Exit");
                sten = false
                break;
            case '1':
                var fahrenheit = prompt("Fahrenheit to Celsius\n\nEnter the degree in celsius plz")
                alert(kamel(fahrenheit));
                break;
            case '2':
                var celsius = prompt("Celsius to Fahrenheit\n\nEnter the degree in fahrenheit plz")
                alert(lama(celsius));
                break;
            case '3':
                var gissaDNumber = prompt("Gissa på ett nummer mellan 1 - 100!");
                guessNumber(gissaDNumber);
                break;
            case '4':
                welcome();
                break;
            case '5':
                console.log(medel(1, 2, 3, 4));
                break;
            case '6':
                console.log(showArgument("giraff", "noshörning"));
                console.log(showArgument("bil", "åsna"));
                console.log(showArgument("titanic", "clown"));
                break;
            case '7':
                var TypeText = prompt("Skriv en text")
                InOut(TypeText);
                break;
            case '8':
                var aSquare = prompt("Ange längden på första katetetern")
                var bSquare = prompt("Ange längden på andra katetern")
                triangel(aSquare, bSquare);
                break;
            case '9':
                var nyvariabel = tentamen()
                console.log(nyvariabel);
                break;
            case '10':
                var month = prompt("Vilken månad fyller du år ? (1-12)")
                var userday = prompt("Vilken dag fyller du år ? (1-31)")
                myBirthday(userday, month);
                break;
            default:
                console.log("Choose wisely");
        }
    }
}
//uppgift 1
function welcome() {
    console.log("Hello World");
    alert("Rad1\nRad2");
}


//uppgift 2
function medel(mt1, mt2, mt3, mt4) {
    return ((mt1 + mt2 + mt3 + mt4) / 4);


}

//uppgift 2 moment 2
function showArgument(n1, n2) {

    return n1 + ", " + n2;
}


//Moment Fahrenheit & Celsius


function kamel(fahrenheit) {
    var fahrAnswer = (fahrenheit * (9 / 5) + 32);

    console.log(Math.round(fahrAnswer));
    return Math.round(fahrAnswer);
}

function lama(celsius) {
    var celAnswer = ((celsius - 32) * (5 / 9));

    console.log(Math.round(celAnswer.toFixed(2)));
    return Math.round(celAnswer.toFixed(2));
}

// Uppgift 3

function guessNumber(gissaDNumber) {

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

//Uppgift 5


function InOut(TypeText) {
    var HashT = ""
    for (var i = 0; i < TypeText.length; i++) {

        if (TypeText[i].toUpperCase() === 'A') {
            HashT += "#"
        }
        else if (TypeText[i] === TypeText[i].toUpperCase()) {
            HashT += TypeText[i].toLowerCase()
        }
        else if (TypeText[i] === TypeText[i].toLowerCase()) {
            HashT += TypeText[i].toUpperCase()
        }
        else {
            HashT += TypeText[i]
        }
    }
    console.log(HashT);
}



//Uppgift 6

function triangel(aSquare, bSquare) {

    var aAndb = Math.pow(aSquare, 2) + Math.pow(bSquare, 2);

    {
        console.log(aAndb);
        console.log(Math.round(Math.sqrt(aAndb)));

    }
}


//uppgift 7



function tentamen() {
    var medelV = 0;
    var myArray = [10, 2, 89, 9, 65, 13, 3];

    for (var i = 0; i < myArray.length; i++) {
        medelV += myArray[i];
    }
    var summa = (medelV / myArray.length)

    myArray = myArray.sort(function(a, z) {
        return a - z;
    })

    var minimum = myArray[0]
    var maximum = myArray[myArray.length - 1]
    var myFinalArray = [Math.round(summa), maximum, minimum]
    return myFinalArray;
}


// Uppgift 8
function myBirthday(userday, month) {
    if (month > 12) {
        myBirthday(month);
    }
    if (userday > 31) {
        myBirthday(userday);
    }
    var usermonth = (month - 1);

    //1 dag i millisekunder
    var oneDay = (1000 * 60 * 60 * 24)

    //Millisecs uptodate
    var todayMilli = Date.now();

    //dagens datum
    var today = new Date();

    //nuvarande månad
    var thismonth = today.getUTCMonth();

    var year = ""

    if (thismonth >= usermonth) {

        // Oktober 
        if (today > userday) {

            year = today.getFullYear() + 1
        }
        else {

            year = today.getFullYear()
        }
    }
    else {

        year = today.getFullYear()
    }
    var birthday = new Date(year, usermonth, userday);
    console.log(birthday);

    var Bday = Date.parse(birthday)


    var mellanskillnad = Bday - todayMilli


    var convertion = mellanskillnad / oneDay
    console.log("Du fyller år om " + Math.round(convertion) + " dagar.");

    var copy = new Date();
    copy.setTime(birthday.getTime());

}
