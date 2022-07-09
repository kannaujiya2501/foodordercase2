import { Component, Inject, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  menu : Menu[]=[];
  constructor(private menuService: MenuService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //  this.menuService.getAllFoods().subscribe(data=>this.menu =data);

   

  
  }

}
