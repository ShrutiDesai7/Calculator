let display=document.querySelector("#display")
let currentip="";

function appendNumber(number){
    currentip+=number;
    display.value=currentip;
}

function operation(op){
    currentip+=" "+op+ "";
    display.value=currentip;
}

function clearDisplay(){
    currentip="";
    display.value="";
}

function calculateResult(){
    try{
        currentip=eval(currentip).toString();
        display.value=currentip;
    }catch(err){
        display.value="Error";
        currentip="";
    }
}