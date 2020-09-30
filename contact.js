// declaration variables
var inputLastName, inputFirstName, inputEmail, inputPurpose
var validate = false;

function validateForm()
{
    inputFirstName = document.getElementById("inputFirstName").value;
    inputLastName = document.getElementById("inputLastName").value;
    inputEmail = document.getElementById("inputEmail").value;
    inputPurpose = document.getElementById("inputPurpose").value;

    if(!(inputFirstName) || inputFirstName.length < 2)
    {
        alert("Please enter a first name with at least 2 letters");
        return false;
    }
    if(inputLastName == "" || inputLastName.length < 2)
    {
        alert("Please enter a last name with at least 2 letters");
        return false;
    } 
    if(inputEmail == "" || inputEmail.length < 6)
    {
        alert("Please enter a valid email address");
        return false;
    } 
    if(inputPurpose == "" || inputPurpose.length < 10)
    {
        alert("Please enter a purpose with at least 10 letters");
        return false;
    } 
    else
        return true;
}


// function to return message
function message()
{
    validate = validateForm();
    if(validate){
        alert("Hello " + inputFirstName + " " + inputLastName +  ", thank you for your message. I will contact you soon!");
        location.reload();
    }
}
