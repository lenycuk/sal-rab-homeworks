function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    let shippingSum// создайте переменную shippingSum
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;
    }else ((productsSum > 0) & (productsSum < freeShippingMinSum)) 
            shippingSum = shippingPrice}
            
// Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountPrice// создайте переменную discountSum
    if(productsSum >= discountMinSum) {
        discountPrice = discountPart / 100 * productsSum;}
        else {(discountSum=0);} 
         // если productsSum больше или равно discountMinSum,
    // то присвойте d iscountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);
    
   
    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum  // создайте переменную totalSum
    totalSum = productsSum
    totalSum = totalSum - discountSum
    totalSum = totalSum + shippingSum
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    let freeShipping// создайте переменную freeShipping
    (shippingSum == 0) ? freeShipping = true : freeShipping = false;
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
