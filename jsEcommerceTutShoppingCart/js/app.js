//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productDOM = document.querySelector(".products-center");

//cart
let cart = [];

//getting the products
class Products{
    async getProducts(){
    let result = await fetch('product.json')
    }
}
//display products
class Storage{

}

document.addEventListener("DOMContentLoaded",()=>{
    const ui = new UI();
    const products = new Products();
});