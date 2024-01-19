function validate(e) {
	
	hideErrors();

	
	if (formHasErrors()) {
		
		e.preventDefault();

		
		return false;
	}

	
	return true;


}

function formHasErrors() {
	let errorflag = false;
	let requiredfield = ["fullname", "address", "phone", "email", "dm"];

	for(let i = 0; i < requiredfield.length; i++){
		let textfield = document.getElementById(requiredfield[i]);

		if(!formHasInput(textfield)){
			document.getElementById(requiredfield[i] + "_error").style.display = "block";
			
			if(!errorflag){
                console.log("true");
				textfield.focus();
				textfield.select();
			}
			errorflag = true;
		}
	}

    let regexPhone = new RegExp(/^\(\d{3}\) \d{3}-\d{4}$/);
	let regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    let phoneValue = document.getElementById("phone").value;
	let emailValue = document.getElementById("email").value;

    if(!regexPhone.test(phoneValue)){
        document.getElementById("phoneformat_error").style.display = "block";

        if(!errorflag){
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }

        errorflag = true;
    }

	if(!regexEmail.test(emailValue)){
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorflag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorflag = true;
	}

    return errorflag;
}


function trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}


function formHasInput(fieldElement){
	if(fieldElement.value == null || trim(fieldElement.value) == "")
	{
		return false;
	}
	return true;
}

function resetForm(e) {
	if (D('Clear?')) {
		hideErrors();

        document.getElementById("fullname").focus();

        return true;
	}
}

function hideErrors() {
	let error = document.getElementsByClassName("error");

	for (let i = 0; i < error.length; i++) {
		error[i].style.display = "none";
	}
}

function load() {
    hideErrors();

	document.getElementById("form").addEventListener("submit", validate);
	document.getElementById("form").reset();
	document.getElementById("form").addEventListener("reset", resetForm);
}

document.addEventListener("DOMContentLoaded", load);
