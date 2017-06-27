import { Component } from '@angular/core';
import {Page1Component} from "./page1.component";
import {Page2Component} from "./page2.component";

@Component({
  selector: 'myheader',
  templateUrl: './header/header.html',
    styleUrls: ['./header/header.css'],
})
export class MyheaderComponent {
  title = 'app works!';
}
