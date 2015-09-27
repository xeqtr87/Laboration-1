
console.log("Hello World");
alert("Rad1\nRad2");

function medel (mt1, mt2, mt3, mt4)
{
    return((mt1+mt2+mt3+mt4)/4);
}
{
    console.log(medel(1,2,3,4));
}

function apa (n1, n2)
{
   
    return n1 + ", " + n2;
}
console.log(apa("giraff","noshörning"));
console.log(apa("idiot","åsna"));
console.log(apa("titanic","clown"));

var theX = Math.floor( Math.random() * 101)+1;
{
    console.log(theX);
}
var gissaDNumber = prompt ("Gissa numret!")



if (gissaDNumber < theX)
{
    alert("fail, number " +gissaDNumber+ " is too low");
}
else if (gissaDNumber > theX)
{
    alert("fail, number "  +gissaDNumber+ " is to high");
}
else
{
    alert("GZ, the number " +gissaDNumber+ " is correct! You won the internet!")
}