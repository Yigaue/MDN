//  array map
[1, 5, 6, 7, 2].map((item) => item * 10);

let data  = [
    {id: 1, title: 'Nite watch', price: 33},
    {id: 2,  title: 'what I want', price: 12},
    {id: 3, title: 'Mercy at last', price: 405},
    {id: 4, title: 'Nothting between', price: 550}
];
data.map((book) => book.price + 200);
let addedPrice = data.map((book) => book.price + 200);

// array filter testing
addedPrice.filter((price) => price < 300);

data.map(item => {
    if (item.id === 1) {
        return {
            id: item.id,
            title: item.title,
            price: item.price / 2
        };
    }
    return item;
});

// using spread operator
data.map(item => {
    if (item.id === 1) {
        return {
            ...item,
            price: item.price / 2
        };
    }
    return item;
});

//  using for loop
let halfOfPrice = [];
for(let i = 0; i < data.length; i++){
    let item = data[i];
    if (item.id === 1){
         halfOfPrice.push({
            ...item,
            price: item.price/2
            
         });
    } else {
halfOfPrice.push(item);
    }
}

// Array filter 

let expensiveItems = data.filter(item => item.price > 100)


//  using for loop
expensiveItems = [];
for (let i = 0; i < data.length; i++){
    if (data[i].price > 100) {
        expensiveItems.push(data[i]);
    }
}

// alternatively
for (let i = 0; i < length; i++){
    const item = data[i];
    if (item.price > 100) {
        expensiveItems.push(item);
    }
}
