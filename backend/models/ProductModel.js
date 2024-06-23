const products = [
    {
        id:'prod_1', 
        name:'sneakers', 
        price:100
    },
    {
        id:'prod_2', 
        name:'jacket', 
        price:200
    },
    {
        id:'prod_3', 
        name:'shirt', 
        price:150
    },
    {
        id:'prod_4', 
        name:'jeans', 
        price:80
    }
];
class Product {

    getProducts() {
        return products;
    }

}

module.exports = new Product();