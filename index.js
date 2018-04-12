// var gmailArray = ["abc","cde","klm","kjdsf"];
// var hotmailArray = ["sdkljwe","sehfe","asdfn","asdkjfn"];
// var yahooArray = ["dsafn","lasdkfj","asjdnfkna"];
var peek;
var generateCount=0;
var mailsArray=["ab@gmail.com","add@xyz.com","dd@hotmail.com","adsdsjj@yahoo.com","sdeiouwrj@gmail.com","dsfanfdlsdasjkfjasklsdd@outlook.com","ekwer@yahoo.com","asdfndksn@gmail.com","askdjfnsfdn@hotmail.com","ab@gmail.com","dd@hotmail.com","afjj@outlook.com","adsdsjj@yahoo.com","sdeiouwrj@gmail.com","ab@gmail.com","dd@hotmail.com","adsdsjj@yahoo.com","sdeiouwrj@gmail.com","ab@gmail.com","dd@hotmail.com","afjj@outlook.com","adsdsjj@yahoo.com","sdeiouwrj@gmail.com","ab@gmail.com","dd@hotmail.com","afjj@outlook.com","adsdsjj@yahoo.com","sdeiouwrj@gmail.com"];
gmailArray=[];
hotmailArray=[];
yahooArray=[];
othersArray=[];
function generateTable(){

   separateMails();
    generateCount++;    
    if(generateCount ===1)
    {
       peek = getPeek(gmailArray,hotmailArray,yahooArray);
    
     var table = document.createElement("table");
     table.setAttribute("id","mainTable");
     document.body.appendChild(table);
   
     var tr = document.createElement("tr");
     var th1= document.createElement("th");
     var th2= document.createElement("th");
     var th3= document.createElement("th");
     var th4= document.createElement("th");
     
     var gmail=document.createTextNode("Gmail");
     var hotmail=document.createTextNode("Hotmail");
     var yahoo=document.createTextNode("Yahoo");
     var others=document.createTextNode("Others");
      
      th1.appendChild(gmail);
      th2.appendChild(hotmail);
      th3.appendChild(yahoo);
      th4.appendChild(others);
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);

      table.appendChild(tr);
      
     for(var i=0;i<peek;i++)
     {
        var trow = document.createElement("tr");
        if(gmailArray[i])
           trow.innerHTML = '<td>'+gmailArray[i]+'</td>';
        else
           trow.innerHTML = '<td></td>';
        if(hotmailArray[i])
           trow.innerHTML += '<td>'+hotmailArray[i]+'</td>';
        else
           trow.innerHTML += '<td></td>';
      
        if(yahooArray[i])
           trow.innerHTML += '<td>'+yahooArray[i]+'</td>';
        else
           trow.innerHTML += '<td></td>';
        if(othersArray[i])
           trow.innerHTML += '<td>'+othersArray[i]+'</td>';
        else
           trow.innerHTML += '<td></td>';

        table.appendChild(trow);

     }

    }
     else{
         window.alert("Already Generated");
     } 

}

function getPeek(a,b,c){
    if((a.length > b.length) && (a.length > c.length))
        return a.length;

    else if(b.length>c.length)
        return b.length;

    else
        return c.length;
   
}


function separateMails()
{
    for(var i=0;i<mailsArray.length;i++)
    {
      if(mailsArray[i].indexOf("@gmail.com")>0)
        gmailArray.push(mailsArray[i]);
      else if(mailsArray[i].indexOf("@hotmail.com")>0)
        hotmailArray.push(mailsArray[i]);
      else if(mailsArray[i].indexOf("@yahoo.com")>0)
        yahooArray.push(mailsArray[i]);
      else
        othersArray.push(mailsArray[i]);
    }
}