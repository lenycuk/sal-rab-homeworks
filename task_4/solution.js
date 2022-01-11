// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON

    let  data = JSON.parse (json);
     // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
    return data.products;
}

// Напишите функцию renderProductsCards(json) 
function renderProductsCards(json) {
    clearProducts ();
    let products = parseProducts(json);
    let length = products.length;
    for (let i= 0; i < length; i++){
    addProduct(products[i]);
    }
}
