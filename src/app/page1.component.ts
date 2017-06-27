import { Component, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import 'rxjs/Rx';
import {HttpModule} from '@angular/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { Content } from './Content';
import { HelloService } from './service/hello.service';
import { DetailComponent } from './detail.component';

@Component({
  selector: 'page1',
  templateUrl: './page1/page1.html',
  styleUrls: ['./page1/page1.css']
})
export class Page1Component {
        
    @ViewChild(DetailComponent) private detail: DetailComponent;
//    @ViewChild('DetailComponent', {read: ViewContainerRef}) private detail: ViewContainerRef;
    
    private title:string;
    private body_template:string;
    private counter_limit;
    private contents:Content[];
    private selectedContent:Content;
    private detail_open:boolean;
    private status:number;
    private error:string;
    private url:string
    
    constructor(private router: Router, private helloservice: HelloService, private _http: Http){}
    
    ngOnInit(){
        this.title = '@@@This is page1@@@';
//        this.body_template = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus';
        this.url = 'http://192.168.88.77/fuel/search/list.json';
        this.contents = [];
        
        //取得
        this._http.get(this.url)
          .subscribe(
            res  => {
              this.contents = res.json();
              this.status = res.status;
              this.error = "";
            },
            error => {
              this.error = error.text().substr(287,100);
              this.status = error.status;
              this.contents = [];
          },);
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
    
    callCal(){
        
        console.log(this.calTest(4, 8));
    }

    calTest(a:number, b:number){
        
        return a + b;
    }
    
    //子要素のメソッド呼び出し(テスト用) 
    callChildSay(){
        console.log(this.detail);
        this.detail.sayHelloChild();
    }
}