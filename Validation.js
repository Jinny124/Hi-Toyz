function validate(){
    const username = document.getElementById("Username").value 
    const age = document.getElementById("age").value 
    const email = document.getElementById("email").value 
    const password = document.getElementById("Password").value 
    const agreement = document.getElementById("agreement") 


//validate data
if(username.length < 8){
    alert("username must be at least 8 characters long")
    document.getElementById("error").innerHTML = "Username must be at least 8 characters long"
}
else if(age < 12){
    alert("age must be at least 12 years old")
}
else if(!email.endsWith("@gmail.com")){
    alert("Email must be end with @gmail.com")
}
else if(isAlphaNum(password) == false){
    alert("Password must contain at least one number)
}
else if(!aggrement.checked){
    alert("you must agree with our terms and conditions")
}

//password
function isAlphaNum(password){
    var isAlpha = false
    var isNum = false
    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else isNum = true
    }
    if(isAlpha == false || isNum == false){
        return false
    }
    return true
}