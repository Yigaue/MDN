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

// array filter 
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