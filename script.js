let cashier = 0; // average score for cashier
let c_tot = 0; // total score for cashier
let c_num = 0; // number of rating the cashier received

let overall = 0; // average score for overall experience
let o_tot = 0; // total score for overall experience
let o_num = 0; // number of rating the overall experience received


const showButton = document.getElementById("show-hide");
const showOrHide = document.getElementById("show-scores");
const showConentCashier = document.getElementById("cashierScore");
const showConentOverall = document.getElementById("overallScore");

const cashierScoreBtn1 = document.querySelector("#cashier-1");
cashierScoreBtn1.addEventListener('click',(e)=>{
    c_tot += 1;
    c_num += 1;
    cashier = c_tot / c_num;
    showConentCashier.textContent = cashier;
})

const cashierScoreBtn2 = document.querySelector("#cashier-2");
cashierScoreBtn2.addEventListener('click',(e)=>{
    c_tot += 2;
    c_num += 1;
    cashier = c_tot / c_num;
    showConentCashier.textContent = cashier;
})

const cashierScoreBtn3 = document.querySelector("#cashier-3");
cashierScoreBtn3.addEventListener('click',(e)=>{
    c_tot += 3;
    c_num += 1;
    cashier = c_tot / c_num;
    showConentCashier.textContent = cashier;
})

const cashierScoreBtn4 = document.querySelector("#cashier-4");
cashierScoreBtn4.addEventListener('click',(e)=>{
    c_tot += 4;
    c_num += 1;
    cashier = c_tot / c_num;
    showConentCashier.textContent = cashier;
})


const overallScoreBtn1 = document.querySelector("#overall-1");
overallScoreBtn1.addEventListener('click',(e)=>{
    o_tot += 1;
    o_num += 1;
    overall = o_tot / o_num;
    showConentOverall.textContent = overall;
})

const overallScoreBtn2 = document.querySelector("#overall-2");
overallScoreBtn2.addEventListener('click',(e)=>{
    o_tot += 2;
    o_num += 1;
    overall = o_tot / o_num;
    showConentOverall.textContent = overall;
})

const overallScoreBtn3 = document.querySelector("#overall-3");
overallScoreBtn3.addEventListener('click',(e)=>{
    o_tot += 3;
    o_num += 1;
    overall = o_tot / o_num;
    showConentOverall.textContent = overall;
})

const overallScoreBtn4 = document.querySelector("#overall-4");
overallScoreBtn4.addEventListener('click',(e)=>{
    o_tot += 4;
    o_num += 1;
    overall = o_tot / o_num;
    showConentOverall.textContent = overall;
})



// showConentCashier.textContent = cashier;
// showConentOverall.textContent = overall;

showButton.addEventListener('click',()=>{
    if (showButton.textContent === "Hide Ratings"){
        showOrHide.style.display = 'none';
        showButton.textContent = "Display Ratings"
    } else if (showButton.textContent === "Display Ratings"){
        showOrHide.style.display = 'block';
        showButton.textContent = "Hide Ratings"

    }
})