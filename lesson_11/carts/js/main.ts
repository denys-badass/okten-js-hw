// Task 11.1
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
const cartsURL = new URL('https://dummyjson.com/carts');
const usersURL = new URL('https://dummyjson.com/users');

cartsURL.searchParams.set('limit', '0');
usersURL.searchParams.set('limit', '0');

interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}

interface ICart {
    id: number;
    products: IProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

const accordionFlushDiv: HTMLDivElement = document.getElementById('accordionFlush') as HTMLDivElement;

const imgBlockCreator = (url: string, alt: string): HTMLDivElement => {
    const imgBlock = document.createElement('div');
    imgBlock.className = 'img-block';
    const img: HTMLImageElement = document.createElement('img');
    img.src = url;
    img.addEventListener('error', (e: ErrorEvent): void => {
        const target: HTMLImageElement = e.target as HTMLImageElement;
        target.src = 'img/product-placeholder.jpg';
        target.onerror = null;
    })
    img.alt = alt;
    imgBlock.appendChild(img);

    return imgBlock;
}

const prePCreator = (preWord: string): string => {
    return `<span class="pre-p">${preWord}</span>`;
}

const subBlockCreator = (className: string, subTag: keyof HTMLElementTagNameMap, tagContent :string): HTMLDivElement => {
    const block: HTMLDivElement = document.createElement('div');
    block.classList.add(className);
    const tag: HTMLElement = document.createElement(subTag);
    tag.innerHTML = tagContent;
    block.appendChild(tag);

    return block;
}

const productCreator = (product: IProduct): HTMLDivElement => {
    let {title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} = product
    total = Math.round(total * 100) / 100;
    const cartDiv: HTMLDivElement = document.createElement('div');
    cartDiv.className = 'product';
    const imgBlock: HTMLDivElement = imgBlockCreator(thumbnail, title);
    const titleBlock: HTMLDivElement = subBlockCreator('title', 'h4', title);
    const priceBlock: HTMLDivElement = subBlockCreator('price',
        'p',
        `${prePCreator('Price:')} $${price}`
    );
    const quantityBlock: HTMLDivElement = subBlockCreator('quantity',
        'p',
        `${prePCreator('Quantity:')} ${quantity}`
    );
    const discountBlock: HTMLDivElement = subBlockCreator('discount', 'p', `-${discountPercentage}%`);
    const totalWithoutBlock: HTMLDivElement = subBlockCreator('total-without', 'p', `$${total}`);
    const totalBlock: HTMLDivElement = subBlockCreator('total', 'p',
        `${prePCreator('Total:')} $${discountedTotal}`);

    cartDiv.append(imgBlock, titleBlock, priceBlock, quantityBlock, discountBlock, totalWithoutBlock, totalBlock);

    return cartDiv;
}

const cartTotalCreator = (cart: ICart): HTMLDivElement => {
    let {total, discountedTotal, totalProducts, totalQuantity} = cart;
    total = Math.round(total * 100) / 100;
    const cartTotalDiv: HTMLDivElement = document.createElement('div');
    cartTotalDiv.className = 'cart-total';
    const btnWrapper: HTMLDivElement = document.createElement('div');
    btnWrapper.className = 'btn-wrapper';
    const orderBtn: HTMLButtonElement = document.createElement('button');
    orderBtn.className = 'btn btn-success btn-lg order-btn';
    orderBtn.innerHTML = 'Order';
    btnWrapper.appendChild(orderBtn);

    cartTotalDiv.appendChild(subBlockCreator('total-products',
        'p',
        `${prePCreator('Products:')} ${totalProducts}`));
    cartTotalDiv.appendChild(subBlockCreator('total-without', 'p',`$${total}`));
    cartTotalDiv.appendChild(subBlockCreator('quantity',
        'p',
        `${prePCreator('Total Quantity:')} ${totalQuantity}`));
    cartTotalDiv.appendChild(subBlockCreator('total',
        'p',
        `${prePCreator('Total:')} $${discountedTotal}`));
    cartTotalDiv.appendChild(btnWrapper);

    return cartTotalDiv;
}

const accordionBtnCreator = (cart: ICart, flushCollapse: string): HTMLButtonElement => {
    const nameBtn: HTMLButtonElement = document.createElement('button');
    nameBtn.className = 'accordion-button collapsed';
    nameBtn.setAttribute('data-bs-toggle', 'collapse');
    nameBtn.setAttribute('data-bs-target', `#${flushCollapse}`);
    nameBtn.setAttribute('aria-expanded', 'false');
    nameBtn.setAttribute('aria-controls', flushCollapse);
    const orderSpan: HTMLSpanElement = document.createElement('span');
    orderSpan.className = `user-${cart.userId}`;
    nameBtn.innerHTML = `<i>Order#${cart.id} by&nbsp</i>`;
    nameBtn.appendChild(orderSpan);

    return nameBtn;
}

const accordionBodyCreator = (cart: ICart, flushCollapse: string): HTMLDivElement => {
    const collapseDiv: HTMLDivElement = document.createElement('div');
    collapseDiv.className = 'accordion-collapse collapse';
    collapseDiv.id = flushCollapse;
    collapseDiv.setAttribute('data-bs-parent', '#accordionFlush');
    const bodyDiv: HTMLDivElement = document.createElement('div');
    bodyDiv.className = 'accordion-body cart';

    for (const product of cart.products) {
        bodyDiv.appendChild(productCreator(product));
    }

    bodyDiv.appendChild(cartTotalCreator(cart));
    collapseDiv.appendChild(bodyDiv);

    return collapseDiv;
}

const accordionCreator = (cart: ICart): HTMLDivElement => {
    const flushCollapse = `flush-collapse-${cart.id}`;
    const accordionItem: HTMLDivElement = document.createElement('div');
    accordionItem.className = 'accordion-item';

    accordionItem.appendChild(accordionBtnCreator(cart, flushCollapse));
    accordionItem.appendChild(accordionBodyCreator(cart, flushCollapse));

    return accordionItem;
}

fetch(cartsURL)
    .then(res => res.json())
    .then(data => {
        for (const cart of data.carts) {
            accordionFlushDiv.appendChild(accordionCreator(cart));
        }
    });

fetch(usersURL)
    .then(res => res.json())
    .then(data => {
        for (const user of data.users) {
            const elems: HTMLCollectionOf<Element> = document.getElementsByClassName(`user-${user.id}`);
            if (elems.length > 0) {
                for (const elem of elems) {
                    const htmlElement: HTMLElement = elem as HTMLElement;
                    htmlElement.innerText = `${user.firstName} ${user.lastName}`;
                }
            }
        }
    })
