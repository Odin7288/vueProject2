const button1 = document.querySelector('button');
const input1 = document.querySelector('input');
const list1 = document.querySelector('ul');

function addPlan(){
    const item = document.createElement('li');
    item.textContent = input1.value;
    list1.appendChild(item);
}

button1.addEventListener('click',addPlan);