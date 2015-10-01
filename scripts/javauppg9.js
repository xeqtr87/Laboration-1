    var items = 
    [
        ["Förnamn", "Efternamn", "Telefon"],//element 1
        ["Haris", "Kljajic", "7716"],//element 2
        ["Mats", "Loock", "7714"],//element 3 i varje array
        
        
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
    