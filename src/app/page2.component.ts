import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page2',
    templateUrl: './page2.html',
  styleUrls: ['./page2.css']
})
export class Page2Component {
  title:string = '@@@This is page2@@@';
  id:number;
  author:string;
    
  constructor(route: ActivatedRoute){
      this.id = route.snapshot.params['id'];
      this.author = route.snapshot.params['author'];
  }
    
  
}