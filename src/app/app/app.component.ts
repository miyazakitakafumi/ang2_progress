import { Component } from '@angular/core';
import {MyheaderComponent} from "../header/myheader.component";
import {Page1Component} from "../page1/page1.component";
import {Page2Component} from "../page2/page2.component";
import {TestpageComponent} from "../testpage/testpage.component";

export const ROUTE = [
    { path: '', component: Page1Component},
    { path: 'page2/:id/:author', component: Page2Component},
    { path: 'testpage', component: TestpageComponent}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
