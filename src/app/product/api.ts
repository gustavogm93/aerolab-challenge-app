import { Product } from "./types";

export default {

    list: (): Promise<Product[]> => 
    Promise.resolve([
        {
          "_id": "5a033eeb364bf301523e9b92",
          "name": "Alienware 13-x2",
          "cost": 20000,
          "category": "Hardware",
          "img": {
            "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
          }
        },
        {
          "_id": "5a033eeb364bf301523e9b92",
          "name": "Alienware 13-x2",
          "cost": 20000,
          "category": "Hardware",
          "img": {
            "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
            "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
          }
        },
        
        {
          "_id": "5a033f0f364bf301523e9b93",
          "name": "iPhone 7 Case Sea-Blue",
          "cost": 200,
          "category": "Accesorios",
          "img": {
            "url": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
            "hdUrl": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
          }
        }
      ]),

      redeem: (product: Product): Promise<String> =>
      Promise.resolve(`You have redeem the product sucessfully (${product.name})`)
} 
