import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { Content } from './Content';
import { HelloService } from './hello.service';

@Component({
  selector: 'page1',
  templateUrl: './page1.html',
  styleUrls: ['./page1.css']
})
export class Page1Component {
        
    private title:string;
    private body_template:string;
    private counter_limit;
    private contents:Content[];
    private selectedContent:Content;
    private detail_open:boolean;
    
    constructor(private router: Router, private helloservice: HelloService){
        
        this.title = '@@@This is page1@@@';
        this.body_template = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus';
        this.counter_limit = 10;
        this.contents = [];
        
        for( let i=0; i<this.counter_limit; i++){
            
            this.contents.push(new Content(i, 'title' + i, this.body_template, 'yamada' + i));
        }
    }
    
    clickTitle( id:number, author:string ): void{
        this.router.navigate(['page2', id, author]);
    }
    
    getSelectedContent( content: Content):void{
        this.selectedContent = content;
        window.scrollTo(0,0);
    }
    
    handleEventFromDetail(e){
        console.log('event catch');
        console.log(e);
        this.selectedContent = null;
    }
}