import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges, OpaqueToken, Inject } from '@angular/core';
import { Content } from '../Content';
import { ModalService } from '../modal/modal.service';

export const DETAIL_TEXT_TOKEN = new OpaqueToken('detail.text');

@Component({
  selector: 'detail',
  templateUrl: './detail.html',
  styles: ['./detail.css']
//  providers: [DETAIL_TEXT_TOKEN]
})

export class DetailComponent implements OnChanges{
    public text: string;
    
//    @Input('content') content: any;
//    @Output() onClearContent = new EventEmitter();
    
    constructor(
//        private modal: ModalService,
        @Inject(DETAIL_TEXT_TOKEN) t: string
    ){
        this.text = t;
    }
    
    clearSelect():void{
//        this.content = null;
//        this.onClearContent.emit('test event string');
    }
    
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
    
    //@ViewChild の動作検証用
    sayHelloChild(){
        
        console.log('hello this is child method');
    }
    
    setContent(c){
        
//        this.content = c;
    }
    
}