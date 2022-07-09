import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Menu } from './menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService { 
  public cartItemList:Menu[]=[]
  public famousdishList= new BehaviorSubject<any>([]);

  public search = new BehaviorSubject<string>("");

  constructor(private httpClient: HttpClient) {}
//   getdish(){
//  return this.famousdishList.asObservable();
//   }
getdish():Observable<Menu[]>{
  let url="https://localhost:44390/api/foods";
  console.log("Done");
  return this.httpClient.get<Menu[]>(url);
  headers:{"Access-Control-Allow-Origin";"*"}
};







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

//  this.httpClient.post<any>('https://reqres.in/api/addItems', { title: 'Angular POST Request Example' }).subscribe(data => {
     

    //  });
     

     }
    
     removecartItem(famousdish:any){
       this.cartItemList.map((a:any,index:any)=>{
         if(famousdish.id=== a.id){
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
  




 












// import { Injectable } from '@angular/core';



// import {HttpClient} from '@angular/common/http';    



// import {Observable} from 'rxjs';    



// import { Menu } from './menu';



// @Injectable({



//   providedIn: 'root'



// })



// export class MenuService {
//   menu!: Menu[];
  
  


//   constructor(private httpClient:HttpClient) { }



//   getAllFoods():Observable<Menu[]>{



//     // return this.httpClient.get<Menu[]>("https://localhost:44390/api/foods",



//     // {

//       let url="https://localhost:44390/api/foods";

//       console.log("Done");
  
//       return this.httpClient.get<Menu[]>(url);

//        headers:{"Access-Control-Allow-Origin";"*"}



//     };

//   }

 