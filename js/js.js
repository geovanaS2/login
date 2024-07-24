const botao = document.getElementById("botao")
botao.addEventListener("click",evento)

var user = document.getElementById("user").value
var password =document.getElementById("password").value

function evento (){
    if ((user=="ge" )&& password=="2004")  {
        alert("Sucess!");  
    } else{
        alert("Error!")
   }   
}

