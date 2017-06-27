import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { HelloService } from './service/hello.service'; 
import { ModalService } from './modal/modal.service';

import { AppComponent, ROUTE } from './app/app.component';
import { MyheaderComponent } from "./header/myheader.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { DetailComponent } from "./detail/detail.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    Page1Component,
    Page2Component,
    DetailComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [
      HelloService,
      ModalService,
      {provide: 'SERVICE_PATH', useValue: './service/'},
      {provide: 'DETAIL_TEXT_TOKEN', useValue: 'aaa'}
    ],
  bootstrap: [AppComponent],
  entryComponents: [
    DetailComponent
  ]
})
export class AppModule { }

    export const SERVICE_DIR = new OpaqueToken('./service/');
