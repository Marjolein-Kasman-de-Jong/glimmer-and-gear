function calculateShipping(productsTotal) {
    const shipping = productsTotal > 20 ? 0 : 9.99;
    return shipping;
}

export default calculateShipping;