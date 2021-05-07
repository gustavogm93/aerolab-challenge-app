import { Product } from "./types";

export default {

    list: (): Promise<Product[]> => 
    Promise.resolve([
        {
    "img": {
      "url": "https://coding-challenge-api.aerolab.co/images/iPhone8-x1.png",
      "hdUrl": "https://coding-challenge-api.aerolab.co/images/iPhone8-x2.png"
    },
    "_id": "5a0b35c1734d1d08bf7084c3",
    "name": "iPhone 8",
    "cost": 800,
    "category": "Phones"
  },
  {
    "img": {
      "url": "https://coding-challenge-api.aerolab.co/images/Switch-x1.png",
      "hdUrl": "https://coding-challenge-api.aerolab.co/images/Switch-x2.png"
    },
    "_id": "5a0b35d7734d1d08bf7084c9",
    "name": "Nintendo Switch 32GB",
    "cost": 300,
    "category": "Gaming"
  },
      ]),

      redeem: (product: Product): Promise<String> =>
      Promise.resolve(`You have redeem the product sucessfully (${product.name})`)
} 
