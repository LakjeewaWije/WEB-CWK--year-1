/* Created by Yazeen Thariq on 3rd of July 2017 
 * This is the get data script for Comments Form.
 * ...
 */

function getData(){

    var queryString = decodeURIComponent(window.location.search);
    //console.log(queryString);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    //console.log(queries);

    var namequery;
    var emailquery;
    var messegequery;
    var selectQuery;
    
    for(var i = 0; i < queries.length; i++){

        var query1 = queries[i].split("=");
       // console.log(query1);

        if(i == 0){
            namequery = query1[1];
           // console.log(namequery);
        }
        
        if(i == 1){
            emailquery = query1[1];
           // console.log(emailquery);
        }
        if(i == 2){ 
            messegequery = query1[1];
           // console.log(messegequery);
        }
        if(i == 3){ 
            selectQuery = query1[1];
            //console.log(selectQuery);
        }
        
    }

    var msg = "Thank You " +namequery + " for rating Us "+ selectQuery + " and giving us Your feedback as: \""+messegequery+"\".";
    var rep = msg.replace(/\+/g, '%20'); // This is to replace the + character for space
    rep = decodeURIComponent(rep);
    document.getElementById("result").innerHTML= rep;
}