function addProducts(products){
    return {
        type:"ADD_PRODUCTS",
        payload:products
    }
}
module.exports = {addProducts}