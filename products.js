let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
const list = document.querySelector('ul');
const totalBox = document.querySelector('p');
totalBox.textContent = '';
let total = 0;
let name = [];
let price = [];
list.innerHTML = '';
for (let i = 0; i < products.length; i++) {// number 2
    let split = products[i].split(':');
    let name = split[0];
    let price = Number(split[1]);
    total += price; 

     // number 5
  let itemText = name + ' - $' + price;
  
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}
totalBox.textContent = 'Total: $' + total.toFixed(2);
