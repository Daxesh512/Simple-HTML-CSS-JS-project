let slider = document.getElementById('slider');
let value = document.getElementById('value');

value.innerHTML = slider.value;

slider.oninput = function() {
    value.innerHTML = this.value
}