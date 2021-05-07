import { ProductHistory } from "./types";

export default {

    list: (): Promise<ProductHistory[]> => 
    Promise.resolve([
      {
        "img": {
          "url": "https://coding-challenge-api.aerolab.co/images/KoboAura-x1.png",
          "hdUrl": "https://coding-challenge-api.aerolab.co/images/KoboAura-x2.png"
        },
        "_id": "5a0b36c3734d1d08bf70857f",
        "name": "Kobo Audsadasdsadasdadsara",
        "cost": 15000,
        "createDate": "2017-11-13T14:33:05.920Z",
        "category": "Tablets & E-readers"
      },
      {
        "img": {
          "url": "https://coding-challenge-api.aerolab.co/images/iPhone8-x1.png",
          "hdUrl": "https://coding-challenge-api.aerolab.co/images/iPhone8-x2.png"
        },
        "_id": "5a0b35c1734d1d08bf7084c3",
        "name": "iPhone 8",
        "cost": 800,
        "createDate": "2017-11-13T14:33:05.920Z",
        "category": "Phones"
      },
      {
        "img": {
          "url": "https://coding-challenge-api.aerolab.co/images/Switch-x1.png",
          "hdUrl": "https://coding-challenge-api.aerolab.co/images/Switch-x2.png"
        },
        "_id": "5a0b35d7734d1d08bf7084c9",
        "name": "Nintendo Switch 32GB",
        "createDate": "2017-11-13T14:33:05.920Z",
        "cost": 300,
        "category": "Gaming"
      },




      ]),

} 
