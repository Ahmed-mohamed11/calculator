//definations
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//addeventlistener
keys.forEach(function(key){
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "0";
        return;
    }

    if(buttonText == "DEL"){
        output.textContent = output.textContent.substring(0,output.textContent.length-1);
        return;
    }
//eval() method is used because the numbers as a text string 
 //alternative to eval>>>>
    if(buttonText === "="){
        result.innerText =`= ` +eval(output.innerText);
        result.style.animation = "big 0.5s";
        output.style.animation = "small 0.5s";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }

    else{
        output.textContent += buttonText;
    } 
}