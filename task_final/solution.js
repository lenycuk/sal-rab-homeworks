// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе



function sendRequest(name, phone, address, goods, sum) {
    let data = {
        "client": name + ' ' + phone, 
        "order": {
            "address": `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`, 
            "sum": sum,
        }, 
         "goods":[],
    };
    let countOfGoods = goods.length;
    for (let i = 0; i < countOfGoods; i += 1) {
        let new1 = {
            "title": goods[i].title,
            "count": goods[i].count 
        }
        data.goods.push(new1);
    }
    let jsonData = JSON.stringify({data});
    return jsonData;
}

