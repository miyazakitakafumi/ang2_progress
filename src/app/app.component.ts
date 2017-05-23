import { Component } from '@angular/core';
import {Page1Component} from "./page1.component";
import {Page2Component} from "./page2.component";

export const ROUTE = [
    { path: 'page2/:id/:author', component: Page2Component},
    { path: '', component: Page1Component}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
