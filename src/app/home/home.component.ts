import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { CartService } from '../service/cart.service';
// import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu : Menu[]=[];
  // home: any;
  // menuService: any;
   constructor(private menuService: MenuService,private route:ActivatedRoute,private cartservice:CartService) { }

  ngOnInit(): void {
     this.menuService.getdish().subscribe((data: Menu[])=>this.menu =data);
    //  this.route.params.subscribe(params => {
    //   if(params['searchterm'])
    //   this.menu = this.menuService.getAll().filter((foods: { name: { tolowercase: () => string | any[]; }; }) => foods.name.tolowercase().includes(params['searchTerm'].tolowercase()));
    //   else
    //   this.home = this.menuService.getAllFoods();
    //  })
  
  }
  addToCart(){

    this.cartservice.addtocart(this.menu);

    // this.router.navigateByUrl('/cart-page')

  }

}
