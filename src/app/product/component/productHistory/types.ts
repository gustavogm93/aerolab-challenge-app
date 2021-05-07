export interface ProductHistory {
    _id: string,
    name: string,
    cost: number,
    category: string,
    createDate: string,
    img: {
        url: string,
        hdUrl: string
    }
}
