import renderCart from "./renderCart";
import postData from './postData';
function cart() {
    const cartBtn = document.getElementById('cart');
    const cartElem = document.querySelector('.cart');
    const cartCloseElem = document.querySelector('.cart-close');
    const cartTotal = document.querySelector('.cart-total > span');
    const goodsWrapper = document.querySelector('.goods')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartSendBtn = document.querySelector('.cart-confirm')
    const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []
    const counterSpan = document.querySelector('.counter');
    let counter = cart.length;
    counterSpan.textContent = counter;

    console.log(cartTotal);
    const openCart = () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        cartElem.style.display = 'flex';
        renderCart(cart)
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }
    const closeCart = () => {
        cartElem.style.display = 'none';
    }
    cartBtn.addEventListener("click", openCart);
    cartCloseElem.addEventListener("click", closeCart)
    goodsWrapper.addEventListener("click", (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'))
            const counterSpan = document.querySelector('.counter');
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return item.id === +key
            })
            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))
            counter += 1;
            counterSpan.textContent = counter;

        }
    })

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []

            const card = event.target.closest('.card')
            const key = card.dataset.key;
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)

            counter -= 1;
            counterSpan.textContent = counter;


        }
    })



    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        postData(cart).then(() => {
            localStorage.removeItem('cart');
            renderCart([]);
            cartTotal.textContent = 0
        })
        counterSpan.textContent = 0;
    })
}

export default cart;