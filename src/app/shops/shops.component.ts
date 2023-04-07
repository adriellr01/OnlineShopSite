import { Component, OnInit } from '@angular/core';
import { ShopsService } from './shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  shops: any[] = [];

  constructor(private shopsService: ShopsService) {
    
  }

  ngOnInit(): void {
    this.shops = this.shopsService.getShops();
  }

  onShopClicked(shop: any) {

  }
}
