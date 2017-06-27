import { Component } from '@angular/core';
import {MyheaderComponent} from "./myheader.component";
import {Page1Component} from "./page1.component";
import {Page2Component} from "./page2.component";

export const ROUTE = [
    { path: '', component: Page1Component},
    { path: 'page2/:id/:author', component: Page2Component}
]

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
