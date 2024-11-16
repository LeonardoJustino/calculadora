

let btn = document.querySelector('#switchButton')
let display = document.getElementById("result")




let insert= function(num){
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML= number + num;
}
let clean = function(){
    document.getElementById('result').innerHTML = "";
}
function back(){
    var resultado = document.getElementById("result").innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0,resultado.length -1);
}




let calcular = function(){
    var resultado = document.getElementById("result").innerHTML;
    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('result').innerHTML = "Nada para calcular!";
        
    }

}
btn.addEventListener("click", function () {
    let bg = document.getElementById("app");
    bg.classList.toggle("dark-mode");
});
while(bnt=== "dark-mode"){
    let color = document.getElementById("switchButton")
    color.classList.toggle("buttonColor")
}