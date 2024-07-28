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

let types = document.querySelectorAll(".type");

let turn0 = true;
types[0].style.borderColor = 'crimson';

types.forEach((type, Idx) => {
    type.addEventListener('click', () => {
        if(Idx === 0){
            types[0].style.borderColor = 'crimson';
            types[1].style.borderColor = 'white';
            smpIntCal();
            turn0 = true;
        } else {
            types[1].style.borderColor = 'crimson';
            types[0].style.borderColor = 'white';
            cmpIntCal();
            turn0 = false;
        }
    });
});

function mergeInp(key, merge){
    key.addEventListener('input', () => {
        merge.value = key.value;
        if(turn0){
            smpIntCal();
        } else {
            cmpIntCal();
        };
    });
}

mergeInp(amt, amtRange);
mergeInp(amtRange, amt);
mergeInp(intrest, intrestRange);
mergeInp(intrestRange, intrest);
mergeInp(time, timeRange);
mergeInp(timeRange, time);


let res;

const smpIntCal = () => {
    principalAmt.innerHTML = `${sbl}${amt.value}`;
    res = amt.value*intrest.value;
    res /= 100;
    res *= time.value;
    intrestAmt.innerHTML = `${sbl}${res.toFixed(0)}`;
    totalAmt.innerHTML = `${sbl}${(res + Number(amt.value)).toFixed(0)}`;
}

const cmpIntCal = () => {
    principalAmt.innerHTML = `${sbl}${amt.value}`;
    let totalInt = 0;
    let amount = Number(amt.value);
    for(let i = 1; i <= time.value; i++){
        res = amount*intrest.value;
        res /= 100;
        totalInt += res;
        amount += res;
    }
    intrestAmt.innerHTML = `${sbl}${totalInt.toFixed(0)}`;
    totalAmt.innerHTML = `${sbl}${amount.toFixed(0)}`; 
}