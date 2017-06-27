import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { HelloService } from './service/hello.service'; 

import { AppComponent, ROUTE } from './app.component';
import { MyheaderComponent } from "./myheader.component";
import { Page1Component } from "./page1.component";
import { Page2Component } from "./page2.component";
import { DetailComponent } from "./detail.component";

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    Page1Component,
    Page2Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [
      HelloService,
      {provide: 'SERVICE_PATH', useValue: './service/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
