
function renderCartItem(item) {
    const product = item
   
    // Задание №3.1. Формирование строки корзины

let price;
let count;

product.count = count;
product.price = price;
    let sum = count * price;
    let itemCountText = ' '+ count + `×`+ price + `₽ =`+ sum ;
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
