/* 
 * AUTHOR: YAZEEN THARIQ.
 * CODE DESCRIPTION: When user clicks on a certain button(sub-nav, or begin) it will smoothly scroll into view.
 * ...
 */

$(document).ready(function(){
   setBindings();
});

function setBindings(){
    $("div a").click(function(e){ // target parent and child
       // e.preventDefault();
        var sectionID = e.currentTarget.id + "Section"; // concate the section with ID.
        
      //  console.log(sectionID); testing
        $('html body').animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1100)
    })
}