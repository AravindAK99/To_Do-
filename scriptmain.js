var count = 0

function populate(){
  count = 0

    //Creaing an XMR Object
var xhttp = new XMLHttpRequest();
// EVentlistner
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText);
        var temp = "";
        
        

      for (var i = 0; i < response.length; i++) {
        temp += "<tr>";
        temp += "<td>" + response[i].id + "</td>";
        temp += "<td>" + response[i].title + "</td>";
        
        if(response[i].completed ==true){
          temp += "<td>" + `<input type = "checkbox" checked disabled/>` +"</td>"


        }else{
          temp += "<td>" + `<input type = "checkbox" onclick="countCheck(this)"/>` +"<td>"
        }


      


      
        
     

        
        
      }
        document.getElementById("data").innerHTML=temp;
    }
   
    

       
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}









                    




                //promise

function countCheck(x){
  // var count=0
  if(x.checked){
    count ++
  }else{
    count--
  }

let promise = new Promise(function(resolve,reject){
  if(count ==5){
    resolve("successfull : tasks has been completed!")
    
  }
    
  }

)
promise.then(
  function(value) {alert(value)}
)
}




                // logout return 

                function Logout(){
                  // alert("redirect")
                  window.location.href="./index.html"
              }
              