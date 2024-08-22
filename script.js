balance = 0;
sms = true;

let withdrawBtn = document.querySelector(".withdrawBtn");
let checkBtn = document.querySelector(".checkBtn");
let messege = document.querySelector(".messege");

function addCash(){
    let amount = parseFloat(document.querySelector(".amount").value);
    if(amount>0){
        balance += amount;
        document.querySelector(".messege").innerText = `${amount}/-PKR is added to your balance!`
        messegeClear();
    }
    else{
        document.querySelector(".messege").innerText = "Please enter a valid amount";
    }
    updateBalance();
    clearInput();
    closeMsg();
}

function withdrawCash(){
    let amount = parseFloat(document.querySelector(".amount").value);
    if(amount <= balance){
        balance -= amount;
        document.querySelector(".messege").innerText = `${amount}/-PKR is withdrawl from your balance`;
    }
    else if(amount > balance){
        document.querySelector(".messege").innerText = "Insufficient balance"
    }
    else{
        document.querySelector(".messege").innerText = "Please enter a valid amount";
    }
    updateBalance();
    clearInput();
}
function checkBalance(){
    console.log("clicked")
    updateBalance();
    document.querySelector(".messege").innerText = `The current balance is ${balance}/-PKR`
}

function updateBalance(){
    document.querySelector(".currentBalance").innerText = balance;
    console.log("updated")
}
function clearInput(){
    document.querySelector(".amount").value = "";
    console.log("cleared")
}
function messegeClear(){
    document.querySelector(".closeMsg").addEventListener("click", function(){
        document.querySelector(".messege").innerText = "";

        if(document.querySelector(".messege").innerText == ""){
            let closeMsg = document.querySelector(".closeMsg")
            closeMsg.style.opacity = 0;        
        }
    })
}
function closeMsg(){
    let closeMsg = document.querySelector(".closeMsg")
    closeMsg.style.opacity = 1;
}