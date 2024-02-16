let tg = window.Telegram.WebApp;
let balance = 10000
document.getElementById("balance").textContent =" d "+ tg.initDataUnsafe.id

let btnred = document.getElementById("btn-red");
let btngreen = document.getElementById("btn-green");
let btnblack = document.getElementById("btn-black");

let betred = 0;
let betgreen = 0;
let betblack = 0;

var inputElement = document.getElementById('inputbet');



document.addEventListener("click", function(event) {
    var input = document.getElementById("inputbet");
    if (!input.contains(event.target)) {
      input.blur();
    }
  });
  

function bred(){
    if (isNaN(parseFloat(document.getElementById("inputbet").value)) || parseFloat(document.getElementById("inputbet").value) === '' || parseFloat(document.getElementById("inputbet").value)<=0) {
        
        return; 
    }
    if(balance<parseFloat(document.getElementById("inputbet").value)){
        return;
    }
    
    betred += parseFloat(document.getElementById("inputbet").value)
    balance-=parseFloat(document.getElementById("inputbet").value)
    document.getElementById("balance").textContent = "Balance: " + balance
    
  
}

function bgreen(){
    if (isNaN(parseFloat(document.getElementById("inputbet").value)) || parseFloat(document.getElementById("inputbet").value) === '' || parseFloat(document.getElementById("inputbet").value)<=0) {
        
        return; 
    }
    if(balance<parseFloat(document.getElementById("inputbet").value)){
        return;
    }
    
    betgreen += parseFloat(document.getElementById("inputbet").value)
    balance-=parseFloat(document.getElementById("inputbet").value)
    document.getElementById("balance").textContent = "Balance: " + balance
    
}

function bblack(){
    if (isNaN(parseFloat(document.getElementById("inputbet").value)) || parseFloat(document.getElementById("inputbet").value) === '' || parseFloat(document.getElementById("inputbet").value)<=0) {
        
        return; 
    }
    if(balance<parseFloat(document.getElementById("inputbet").value)){
        return;
    }
    
    betblack += parseFloat(document.getElementById("inputbet").value)
    balance-=parseFloat(document.getElementById("inputbet").value)
    document.getElementById("balance").textContent = "Balance: " + balance
    
}

