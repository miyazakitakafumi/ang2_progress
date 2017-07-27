import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObservetestService } from '../observetest/observetest.service';


@Component({
  selector: 'sub-test',
  templateUrl: './subtest.html',
  styleUrls: ['./subtest.css'],
})
export class SubComponent implements OnInit, AfterViewInit {
    @ViewChild('inner', { read: ViewContainerRef }) vcr;
    private subscription: Subscription;
    
    constructor(
        private obt: ObservetestService,
    ){
        
    }
    
    ngAfterViewInit() {
        
    }
    
    //subscribe
    ngOnInit(){
        this.subscription = this.obt.content$.subscribe(
            value => {
                console.log('@@Sub@@');
                console.log(value);
            }
        );
    }
}