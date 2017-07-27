import { Injectable, ViewContainerRef, ComponentFactoryResolver, Provider, ReflectiveInjector } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';


/**
 * Observe　のテスト(イベントを流す側、監視される側)
 */
@Injectable()
export class ObservetestService {

  //Subject を取得
  private contentSource: Subject<any> = new Subject<any>();
  // IObsrvable を取得。 IObservable の subscribe() を実行することで、IObsrvable にサブスクライブされたことを通知
  public content$= this.contentSource.asObservable();
  // 受け取る側
  private subscription: Subscription;

  constructor() {
      
    //ストリームから取得する処理
    this.subscription = this.contentSource.subscribe(
//    this.subscription = this.content$.subscribe( これでもよい   
        value => {
            console.log('@@@内部のサブスクライブ@@@');
            console.log(value);
        }
    );
  }

  //ストリームに流すのみ
  say(): void {
    this.contentSource.next('aiueo');
  }
}