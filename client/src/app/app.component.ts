import { Pagination } from './models/pagination';
import { Product } from './models/product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'skinet';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>("https://localhost:5001/api/products/products?pageSize=50").subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error)
    })
  }
}
