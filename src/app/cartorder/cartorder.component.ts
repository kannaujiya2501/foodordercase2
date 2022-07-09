import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cartorder',
  templateUrl: './cartorder.component.html',
  styleUrls: ['./cartorder.component.css']
})
export class CartorderComponent implements OnInit {
  public result: Menu[] = [];
  public grandTotal!: number;
public totalItem:number=0;
  constructor(private menuService:MenuService,private cartservice:CartService) { }
  
  ngOnInit(): void {
    this.menuService.getdish()
    .subscribe(res=>{
      this.result = res;
      this.grandTotal = this.menuService. getTotalPrice();
    })

this.menuService.getdish()
.subscribe(res=>{
  this.totalItem=res.length;
})

  }
  removeItem(dt:any){
this.cartservice.removecartItem(dt);
  }

  emptycart(){
    this.cartservice.removeAllcart();
  }

  calculatePrice(){
this.grandTotal=this.cartservice.getTotalPrice();
 }

  public calcGrandTotal():number
  {
let total:number = 0;
for(let result of this.result){
  total +=(result.quantity*result.price);
}
return total;
  }


  inc(result:any){
    if(result.quantity!=5){
      result.quantity+=1;
    }
  }



  dec(result:any){
    if(result.quantity!=1){
      result.quantity-=1;
    }
  }

  
}
  









  



  


  


