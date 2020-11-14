let form__square = document.getElementById('form__square');
let form_packing = document.getElementById('form_packing');
let form_variant = document.getElementById('form_variant');
let total = document.querySelector('.total__quantity');

function result(){
    return ((form__square.value / form_packing.value)*form_variant.value).toFixed(2);
}
form__square.oninput = function(){
    animate(result());
}
form_packing.onchange = function(){
    animate(result());
}
form_variant.onchange = function(){
    animate(result());
}
function animate(num){
    let count = 0;
    let step = .13;
    let time = Math.round(500 / (num / step));

    let interval = setInterval(() => {
        total.innerHTML=(count+=step).toFixed(2);
        if (count >= num){
            clearInterval(interval);
            total.innerHTML = result();
        }
    }, time);
}