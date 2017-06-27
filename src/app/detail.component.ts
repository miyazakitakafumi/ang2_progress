import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { Content } from './Content';

@Component({
  selector: 'detail',
  templateUrl: './detail/detail.html',
  styles: ['./detail/detail.css']
})

export class DetailComponent implements OnChanges{
    @Input('content') content: Content;
    @Output() onClearContent = new EventEmitter();
    
    constructor(){
    }
    
    clearSelect():void{
        this.content = null;
        this.onClearContent.emit('test event string');
    }
    
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
    
    //@ViewChild の動作検証用
    sayHelloChild(){
        
        console.log('hello this is child method');
    }
    
}