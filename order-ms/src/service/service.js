'use strict';
const axios = require("axios");
const send_email = require("../utils");
const {USER_EMAIL} = require("../config");

const service = {
    order: async (formDetails) => {

        const getProducts = async () => {
            const products = [];
            await axios.get("http://localhost:8080/products/productsInCart")
                .then((res) => {
                    products.push(...res.data);
                });
            return products;
        }

        const composeHtmlContent = (products) => {

            let productListHTML = '';
            if(products.length > 0){
                productListHTML = productListHTML.concat(`<ul>`);
            }
            products.forEach((product) => {
                productListHTML = productListHTML.concat(`<li>${product.number}x ${product.title}</li>`);
            });
            if(products.length > 0){
                productListHTML = productListHTML.concat(`</ul>`);
            }

            return `
                <div>
                    <h1>New Order</h1>
                    <hr>
                    ${productListHTML}
                    <h4>Total: 937 EUR</h6>
                    <h2>Shipping Details</h2>
                    <hr>
                    <p> <b>Full Name:</b> ${formDetails.fullName} </p>
                    <p> <b>Phone Number:</b> ${formDetails.phoneNumber} </p>
                    <p> <b>Address:</b> ${formDetails.address} </p>
                </div>
            `
        }

        const products = await getProducts();
        const htmlContent = composeHtmlContent(products);

        send_email(USER_EMAIL, "razvan.atanasov@osubb.ro", "New Order - Shopping APP", htmlContent);
        return 200;
    },
};

module.exports = service;
