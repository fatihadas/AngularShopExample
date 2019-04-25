import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';

//declare let alertify: any;
//providers: [AlertifyService]

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  title = "Ürün Listesi"
  filterText = ""

  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getproducts(params["categoryId"]).subscribe(data => { this.products = data; });
    });


  }

  addToCard(product) {
    //alert("sepete eklendi" + product.name)
    //alertify.success(product.name + " added")
    this.alertifyService.success(product.name + " added.")
    this.alertifyService.error(product.name + " added.")
    this.alertifyService.warning(product.name + " added.")
  }

  /*[
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://target.scene7.com/is/image/Target/GUEST_68bcad73-3137-4cac-8f44-0b97ce6f8a59?wid=488&hei=488&fmt=pjpeg" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80" },
    { id: 3, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80" },
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80" },
    { id: 3, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80" }
  ]*/

}
