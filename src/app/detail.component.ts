import { Component, Input } from '@angular/core';
import { Content } from './Content';

@Component({
  selector: 'detail',
  template: `
    <div [ngClass]="'row'" *ngIf="content">
    
        <div [ngClass]="'row'">
            <div [ngClass]="'col-md-8'">
                <h3>This is detail page</h3>
            </div>
             <div [ngClass]="'col-md-4 text-right'">
                <button type="button" [ngClass]="'btn btn-default detail-close'" (click)="clearSelect()">CLOSE</button>
             </div>
        </div>
    
            <div [ngClass]="'row detail-row'">
                <div [ngClass]="'col-md-2 detail-col'">
                    <h3>ID</h3>
                    <p>{{content.id}}</p>
                </div>
            
                <div [ngClass]="'col-md-3 detail-col'">
                    <h3>TITLE</h3>
                    <p>{{content.title}}</p>
                </div>

                <div [ngClass]="'col-md-4 detail-col'">
                    <h3>BODY</h3>
                    <p>{{content.body}}</p>
                </div>
    
                <div [ngClass]="'col-md-3 detail-col'">
                    <h3>AUTHOR</h3>
                    <p>{{content.author}}</p>
                </div>
            </div>
    </div>
    `,
    styles: [`
        .detail-col:hover{
            background: #efbdbd;
        }
        .detail-row{
            border-top: 2px solid;
            border-bottom: 2px solid;
        }
        .detail-close{
            margin-top: 20px;
        }
    `] 
})

export class DetailComponent {
    @Input() content: Content;
    constructor(){
    
    }
    
    clearSelect():void{
        
        this.content = null;
    }
    
}