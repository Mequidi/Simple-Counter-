const resetBtn = document.getElementById("reset-btn");
const incBtn = document.getElementById("inc-btn");
const decBtn = document.getElementById("dec-btn");
const countEl = document.getElementById("count-el")

let count = 0
const countColor = {black:"#28282B",red:"#DC2626",green:"#059669"}
function countDisplay()
{
    if(count < 0)
        countEl.style.color=countColor.red;
    else if(count > 0)
        countEl.style.color=countColor.green;
        else    countEl.style.color=countColor.black;

    countEl.textContent=count; 
}
resetBtn.addEventListener("dblclick",function(){
    count=0;
    countDisplay();
});

incBtn.addEventListener("click",function(){
    count++;
    countDisplay();
});

decBtn.addEventListener("click",function(){
    count--;
    countDisplay();
});
