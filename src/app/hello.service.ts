import { Injectable } from '@angular/core';

@Injectable()
export class HelloService{
    
    data:string;
    
    constructor(){}
    
    outContent():void{
        
        console.log( this.data );
    }
    
    getContent( d ):void{
        
        this.data = d;
    }
}