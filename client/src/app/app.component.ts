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
    this.http.get<Pagination<Product[]>>("https://knaresbrook-legendary-space-dollop-4vr9g5v765q2qw5v-5000.preview.app.github.dev/api/products/products").subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error)
    })
  }
}
