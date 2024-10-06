
let counterNumber = document.getElementById("counterNumber");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

increaseBtn.onclick = function (){
    count++;
    counterNumber.textContent = count;
}

decreaseBtn.onclick = function (){
    count--;
    counterNumber.textContent = count;
}

resetBtn.onclick = function (){
    count = 0;
    counterNumber.textContent = count;
}
