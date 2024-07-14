let sbl = '₹ ';
const amt = document.querySelector('.amount');
const intrest = document.querySelector('.intrest');
const time = document.querySelector('.time');

const amtRange = document.querySelector('.amountRange');
const intrestRange = document.querySelector('.intrestRange');
const timeRange = document.querySelector('.timeRange');

const principalAmt = document.querySelector('.principalAmt');
const intrestAmt = document.querySelector('.intrestAmt');
const totalAmt = document.querySelector('.totalAmt');

amtRange.addEventListener('input', ()=>{
    principalAmt.innerHTML = `${sbl}${amtRange.value}`;
    amt.value = amtRange.value;
    smpIntCal();
});
intrestRange.addEventListener('input', ()=>{
    intrest.value = intrestRange.value;
    smpIntCal();
});
timeRange.addEventListener('input', ()=>{
    time.value = timeRange.value;
    smpIntCal();
});
amt.addEventListener('input', ()=>{
    principalAmt.innerHTML = `${sbl}${amt.value}`;
    amtRange.value = amt.value;
    smpIntCal();
});
intrest.addEventListener('input', ()=>{
    intrestRange.value = intrest.value;
    smpIntCal();
});
time.addEventListener('input', ()=>{
    timeRange.value = time.value;
    smpIntCal();
});

let res;

const smpIntCal = () => {
    res = (amt.value)*(intrest.value);
    res /= 100;
    intrestAmt = (res.value)*(time.value);
    intrestAmt.innerHTML = intrestAmt.value;
    totalAmt.innerHTML = (intrestAmt.value) + (amt.value);
}

const comIntCal = () => {
    let int_rate;
    for(let i = 0; i <= time; i++){
        res = amt*intrest/100;
        int_rate += res;
        amt += res;
    }
    intrestAmt.innerHTML = int_rate;
    totalAmt.innerHTML = amt;
}