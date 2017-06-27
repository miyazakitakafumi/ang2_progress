import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page2',
    templateUrl: './page2.html',
  styleUrls: ['./page2.css']
})
export class Page2Component {
  title:string = '@@@This is page2@@@';
  id:number;
  author:string;
    
  constructor(private route: ActivatedRoute){ }
    
  ngOnInit(){
      this.id = this.route.snapshot.params['id'];
      this.author = this.route.snapshot.params['author'];
  }
}