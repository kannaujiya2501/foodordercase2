import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem :number=0;

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.getdish()

    .subscribe(res=>{

this.totalItem = res.length;

    })
  }

}
