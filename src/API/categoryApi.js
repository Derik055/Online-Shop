import Categories from "../data/Categories"

export function fetchCategories() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Categories)
        }, 2000)
    })
}