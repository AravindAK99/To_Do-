


function validation(callback){



    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var message = document.getElementById("message")


    if(username =="admin" && password == "12345"){
        
        callback()
    }else if(username == "" || password == ""){
        message.innerHTML = "Enter id and password!"
        message.style.color = "black"
        return false
        // message.style.color ="red"
        
    }else{
        message.innerHTML ="Invalid credentials!!"
        message.style.color = "red"
        return false
    } 
}


function redirect(){
   
    window.location.href="./main.html"
}



  