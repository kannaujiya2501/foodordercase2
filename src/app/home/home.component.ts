import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu : Menu[]=[];
  constructor(private menuService: MenuService,private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.menuService.getAllFoods().subscribe(data=>this.menu =data);
  
  }

}
