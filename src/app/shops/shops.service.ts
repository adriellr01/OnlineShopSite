import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  shops: any[] =  [
    {
      name: "Pizzeria",
      phoneNumber: "59474578"
    },
    {
      name: "Dulceria",
      phoneNumber: "59474578"
    },
    {
      name: "Panaderia",
      phoneNumber: "59474578"
    }
  ];

  constructor() {
  }

  getShops() {
    return this.shops;
  }
}
