import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // searchTerm: String = "";

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
    // this.route.params.subscribe(params => {
    //   if (params['searchTerm'])
      // this.searchTerm = params['searchTerm'];
//     })

//     search(); void{
//       if  (this:SearchComponent) {}, 
//       this:this.router.navigateByUrl('/search/' +  this.searchTerm),
      
//     }
//   }

// } 
// function search() {
//   throw new Error('Function not implemented.');
}
