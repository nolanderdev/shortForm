let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('keyup', write)

function write(){
    output.innerHTML = input.value;


}