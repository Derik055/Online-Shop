import brandList from "../data/brandList"

export function fetchBrands() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(brandList)
        }, 2000)
    })
}