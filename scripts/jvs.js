
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






var loop=true
var theX = Math.floor( Math.random() * 101)+1;
{
    console.log(theX);
}

while (loop){                   
var gissaDNumber = prompt ("Gissa ett nummer mellan 1 - 100!");
    if(gissaDNumber == theX){
    alert("Rätt");
    loop=false;
    }
    
    if( gissaDNumber > theX){
    prompt("Your number " +gissaDNumber+ " is to high try again")
        
    }
    
    if(gissaDNumber < theX){
    prompt("Your number " +gissaDNumber+ " is to low try again")
        
    }
} 


    
    
    

