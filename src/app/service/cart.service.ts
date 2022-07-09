import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../menu';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCart(): any {
    throw new Error('Method not implemented.');
  }
  changeQuantity(id: number, quantity: number) {
    throw new Error('Method not implemented.');
  } 
  public cartItemList:Menu[]=[]
  public famousdishList= new BehaviorSubject<any>([]);

  public search = new BehaviorSubject<string>("");

  constructor(private httpClient: HttpClient) {}
  getdish(){
 return this.famousdishList.asObservable();
  }

  setdish(famousdish:any){
    this.cartItemList.push(...famousdish);
    this.famousdishList.next(famousdish);

     }

     addtocart(famousdish : any)
     {
       this.cartItemList.push(famousdish);
       this.famousdishList.next(this.cartItemList);
       //this.getTotalPrice();
       console.log(this.cartItemList);
//post
 this.httpClient.post<any>('https://reqres.in/api/addItems', { title: 'Angular POST Request Example' }).subscribe(data => {
        //this.postId = data.id;

     });
     //this.httpClient.post<any>('https://reqres.in/api/addItems'

     }
    
     removecartItem(result:any){
       this.cartItemList.map((a:any,index:any)=>{
         if(result.id=== a.id){
           this.cartItemList.splice(index,1);
         }

       })
       this.famousdishList.next(this.cartItemList);
     }
     removeAllcart(){
       this.cartItemList =[]
       this.famousdishList.next(this.cartItemList);

     }
     
     getTotalPrice() : number{
      let grandTotal =0;
      this.cartItemList.map((a:any)=>{
        grandTotal += Number(a.total);
      })
      return grandTotal;
    }
     
     }
  

