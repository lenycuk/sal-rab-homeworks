
function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины
    let id // идентификатор
    let title // наименование
    let price // цена
    let count // количество

    let itemCountText = ''; // 1. Создайте переменную itemCountText, равную пустой строке
    itemCountText = `${itemCountText} count` ; // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
    itemCountText = `${itemCountText} ×`;  // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
    itemCountText = `${itemCountText} price`;// 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
    itemCountText = `${itemCountText} ₽ =`;// 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    let sum = count * price // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    itemCountText = `${itemCountText} sum `;// 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    itemCountText = `${itemCountText} ₽ `// 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
