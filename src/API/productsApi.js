import productList from "../data/productList"

export function fetchProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productList)
        }, 2000)
    })
}