import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges, OpaqueToken, Inject } from '@angular/core';
import { Content } from '../Content';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})

export class DetailComponent{
    public text: string;
    
    @Input() report: any;
    @Output() onClearContent = new EventEmitter();
    
    constructor(
        //private report: any
    ){
    }
    
    clearSelect():void{
        this.onClearContent.emit('@@@Detail ページクリア');
        this.report = null;
    }
    
    //OnChange 検証用
    /*
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
    */
    
    //@ViewChild の動作検証用
    sayHelloChild(){
        
        console.log('hello this is child method');
    }
}