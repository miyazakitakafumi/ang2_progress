import { Component, ViewChild, ViewContainerRef, ElementRef, Directive, Renderer, TemplateRef, Input} from '@angular/core';
import {HttpModule} from '@angular/http';
import {Http} from '@angular/http';


@Directive({
    selector: '[myUnless]'

})

export class UnlessDirective{
    private hasView = false;
    
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ){}
    
    @Input() set myUnless (condition: boolean){
        if(!condition && !this.hasView){
            
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView){
            
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}



@Component({
  selector: 'vcr',
  template: `
    <template #tpl>
      <h1>ViewContainerRef</h1>
    </template>
    <div>Some element</div>
  `
})
export class VcrComponent {
  @ViewChild('tpl') tpl;
    
  constructor(
    private _vcr: ViewContainerRef
  ) {}
    
  ngAfterViewInit() {
    this._vcr.createEmbeddedView(this.tpl, 2);
  }
}


@Component({
  selector: 'testpage',
  template: `
    <div>
      <vcr></vcr>
    </div>
    <div *myDirective>Hello</div>
    
    <button (click)="condition = !condition">change condition</button>
    
    <p *myUnless="condition" class="unless a">
      (A) This paragraph is displayed because the condition is false.
    </p>

    <p *myUnless="!condition" class="unless b">
      (B) Although the condition is true,
      this paragraph is displayed because myUnless is set to false.
    </p>
  `
})
export class TestpageComponent {
    condition = false;
    constructor() {
  }
}