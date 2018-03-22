function submitAnswers() {

    var score = 18;
    var element = document.getElementsByTagName("section")[0];

    //get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;
    var q9 = document.forms["quizForm"]["q9"].value;

    //set correct answers
    var answers = ["c","c","a","d","b","b","d","c","a"];

    //validation
    for (i=1;i<=9;i++){
        if(eval("q"+i)==null||eval("q"+i)==''){
            alert('you missed question '+i);
            return false;
        } 
    }
    //check the answers
    //put the eval part if this is malfunctioning
    for(i=1;i<=9;i++){
        if(eval('q'+i)==answers[i-1]){
            //do nothing
        }else{
            score = +score - 1;  
        }
    }

    // document.getElementsByTagName("section")[0].style.background="-webkit-linear-gradient(180deg,rgba(27, 165, 216, 0.6) 0%, rgba(30, 221, 52, 0.6) 100%)";
    
   

    //display results
    var results = document.getElementById('results');
    results.innerHTML='<h3 id="sub-heading">You scored <span>'+ score +'</span> marks out of 20 marks</h3>';
    alert('You scored '+score+' marks out of 20 marks');
    
     if(score <= 5){
        element.style.background="-webkit-linear-gradient(180deg,rgba(237, 160, 16, 0.87) 0%, rgba(255, 0, 0, 0.88) 100%)";
    }else if (score <= 10){
        element.style.background="-webkit-linear-gradient(180deg,rgba(255, 216, 0, 0.96) 0%, rgb(255, 98, 0) 100%)";
    }else if (score <= 15){
        element.style.background="-webkit-linear-gradient(180deg,rgb(118, 255, 0) 0%, rgb(245, 255, 0) 100%)";
    }else{
        element.style.background="-webkit-linear-gradient(180deg,rgb(27, 165, 216) 0%, rgb(11, 226, 36) 100%)";
    }


    return true;

}