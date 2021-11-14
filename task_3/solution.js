
function renderCartItem(item) {
    const product = item
   
    // Задание №3.1. Формирование строки корзины
 //product.id = 'id';
 //product.title ='title';
 product.price = price;
 product.count = count;
   
    let sum = count * price;
    let itemCountText = ' '+ count + `×`+ price + `₽ =`+ sum ;
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
