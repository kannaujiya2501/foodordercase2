import { Menu } from "./menu";

export class cartitem{

    constructor(food:Menu){

                this.food=food;

             }

             food:Menu;

             quantity:number=1;

             get price():number{

                 return this.food.price * this.quantity;

             }

}