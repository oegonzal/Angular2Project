import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    //use snapshot method since we dont expect param to change
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
