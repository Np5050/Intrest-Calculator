// let simple = document.querySelector('.simple');
// let compound = document.querySelector('.compound');

let intrestType = document.querySelectorAll('.intrestType h3');

intrestType.forEach(element, () => {
    type.addEventListener('click', () => {
        element.style.backgroundColor = '5px';
    })
})
let sml = '₹ '
const amount = document.querySelector('.amount');
const intrest = document.querySelector('.intrest');
const time = document.querySelector('.time');

const amtRange = document.querySelector('.amountRange');
const intrestRange = document.querySelector('.intrestRange');
const timeRange = document.querySelector('.timeRange');

const principleAmt = document.querySelector('.principalAmt');
const intrestAmt = document.querySelector('.intrestAmt');
const tatalAmt = document.querySelector('.totalAmt');

amtRange.addEventListener("change", () => {
    principleAmt = amtRange.value;
});