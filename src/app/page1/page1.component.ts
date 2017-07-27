import { Component, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import 'rxjs/Rx';
import {HttpModule} from '@angular/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { DIRS } from '../const/constants';
import { HOST } from '../const/constants';
import { TEST } from '../const/constants';

import { Content } from '../Content';
import { HelloService } from '../service/hello.service';
import { ModalService } from '../modal/modal.service';
import { ObservetestService } from '../observetest/observetest.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'page1',
  templateUrl: './page1.html',
  styleUrls: ['./page1.css'],
  providers: [
      //{provide: DETAIL_TEXT_TOKEN, useValue: ''} //これがないとNG
  ]
})
export class Page1Component {
        
    @ViewChild(DetailComponent) private detail: DetailComponent; //子コンポーネントであるDetailComponentを参照するため
//    @ViewChild('DetailComponent', {read: ViewContainerRef}) private detail: ViewContainerRef;
    
    private title:string;           //タイトル
    private body_template:string;   //テキストテンプレート(後ほど除外)
    private counter_limit;          //Unknown
    private dailyReportList:any;    //サーバーから取得された日報リスト
    private selectedReport:any;     //選択中の日報
    private detail_open:boolean;    //詳細ページが開かれているかのフラグ
    private status:number;          //レスポンスのステータス
    private error:string;           //レスポンスのエラー
    private url:string              //URL
    private openCreateReportForm :boolean //日報作成画面のON/OFFフラグ
    
    constructor(
        private router: Router, 
        private helloservice: HelloService, 
        private _http: Http, 
        private modal: ModalService,
        private obt: ObservetestService
    ){
        this.openCreateReportForm = false;
    }
    
    /**
     * OnInit処理
     */
    ngOnInit(){
        this.title = '@@@This is page1@@@';
        this.body_template = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus';
//        this.url = 'http://192.168.88.77/fuel/dailyreport/search.json';
        this.dailyReportList = [];
        
        //APIから取得
        /*
        this._http.get(this.url)
          .subscribe(
            res  => {
              this.dailyReportList = res.json();
              this.status = res.status;
              this.error = "";
            },
            error => {
              this.error = error.text().substr(287,100);
              this.status = error.status;
              this.dailyReportList = [];
          },);
        */
        
        //ダミーデータをセット
        for (let i=0; i<10; i++){
            this.dailyReportList.push({'title': this.title + i, 'body': this.body_template});
        }
        
    }
    
    clickTitle( id:number, author:string ): void{
        this.router.navigate(['page2', id, author]);
    }
    
    getselectedReport( report: any):void{
        this.openCreateReportForm = false; //新規日報作成を閉じる
        this.selectedReport = null;
        this.selectedReport = report;
        window.scrollTo(0,0);
        
        
        //this.detail.setReport(report); //子コンポーネントのメソッド呼び出し
        
        //モーダル用
        /*
        const provider = { provide: DETAIL_TEXT_TOKEN, useValue: '登録が完了しました' };
        this.modal.open( DetailComponent, provider );
        */
    }
    
    handleEventFromDetail(e){
        console.log(e);
        this.selectedReport = null;
    }
    
    //日報作成画面を開く
    createReport(){
        
        this.openCreateReportForm = true;
        this.detail.report = null;
    }
    
    //新規日報を保存
    saveReport(){
        
        this.openCreateReportForm = !this.openCreateReportForm;
    }
    
    //新規日報をキャンセル
    cancelReport(){
        
        this.openCreateReportForm = false;
    }
    
    //子要素のメソッド呼び出し(テスト用) 
    /*
    callChildSay(){
       this.detail.sayHelloChild();
    }
    */
    
    //Observe テスト
    callObserveTest(){
        
        this.obt.say();
    }
}