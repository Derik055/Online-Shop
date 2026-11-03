import heroData from "../data/heroData"

export function fetchHero() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(heroData)
        }, 2000)
    })
}
