import { Injectable } from '@angular/core';



import {HttpClient} from '@angular/common/http';    



import {Observable} from 'rxjs';    



import { Menu } from './menu';



@Injectable({



  providedIn: 'root'



})



export class MenuService{



  constructor(private httpClient:HttpClient) { }



  getAllFoods():Observable<Menu[]>{



    // return this.httpClient.get<Menu[]>("https://localhost:44390/api/foods",



    // {

      let url="https://localhost:44390/api/foods";

      console.log("Done");
  
      return this.httpClient.get<Menu[]>(url);

       headers:{"Access-Control-Allow-Origin";"*"}



    // });

  }

 }