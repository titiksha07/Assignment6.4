import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {

  constructor() { }
  @Input()
   titled:string;
  ngOnInit() {
  }

}
