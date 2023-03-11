const cartTotal = (cart) => {
    console.log(cart);
    let sum = 0;

    cart.forEach((item) => {
        sum += (parseFloat(item.price) + parseFloat(item.tax)) * item.quantity;
    });

    return sum;
};

const cartTaxTotal = (cart) => {
    console.log(cart);
    let sum = 0;

    cart.forEach((item) => {
        sum += item.tax * item.quantity;
    });

    return sum;
};

const cartItemTotal = (cart) => {
    console.log(cart);
    let sum = 0;

    cart.forEach((item) => {
        sum += item.price * item.quantity;
    });

    return sum;
};

export { cartItemTotal, cartTaxTotal, cartTotal };