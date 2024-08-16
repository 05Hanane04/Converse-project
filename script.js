var btn = document.getElementById("contact-btn");
btn.addEventListener("click",valider);
function valider(){

    var name = document.forms["contact"]["name"];
    var email = document.forms["contact"]["email"];
    var message = document.forms["contact"]["msg"];

    if (name.value == ""){
        alert("Please enter your name");
        name.focus();
        return false;
    }
    if (email.value == ""){
        
        email.focus();
        return false;
    }
    if (message.value == ""){
        alert("Please enter your message");
        message.focus();
        return false;
    }
    var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)){
             alert("Please enter a valid email");
       
        email.focus();
        return false;

    }
    if ((name.value!= "") && (email.value!= "") && (message.value!="")){

        alert("Your message has been submitted successfully!");

    }
}
