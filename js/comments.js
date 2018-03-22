/* Created by Yazeen Thariq on 3rd of July 2017 
 * This is the validation codes for Comments Form.
 * ...
 */

function validateForm(){
    
    var nameBox = document.getElementById('name-text-box');
    var emailBox = document.getElementById('email-text-box');
    var feedbackBox = document.getElementById('feedback-text-area');
    
    nameBox.style.border = "1px solid #cecece";
    emailBox.style.border = "1px solid #cecece";
    feedbackBox.style.border = "1px solid #cecece";
    
	if(nameBox.value.trim() == "") {
		
		alert("The Name cannot be blanked.");
        nameBox.value = "";
		nameBox.focus();
		nameBox.style.border = "2px solid rgba(155, 10, 10, 0.8)";
		return false;
		
	}
    
	if(!validateEmail(emailBox.value)) {
		alert("The Email is invalid.");
        emailBox.value = "";
		emailBox.focus();
		emailBox.style.border = "2px solid rgba(155, 10, 10, 0.8)";
		return false;
		
	}
    
	if(feedbackBox.value.length < 18) {
		alert("Please Enter at least 18 Characters in the Message.");
		feedbackBox.focus();
		feedbackBox.style.border = "2px solid rgba(155, 10, 10, 0.8)";
		return false;	
	}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} /* REGEX TAKEN FROM CHROMIUM ----------> https://cs.chromium.org/chromium/src/third_party/WebKit/LayoutTests/fast/forms/resources/ValidityState-typeMismatch-email.js?sq=package:chromium&type=cs */