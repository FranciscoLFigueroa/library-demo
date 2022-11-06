import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-component',
  templateUrl: './books-component.component.html',
  styleUrls: ['./books-component.component.scss']
})
export class BooksComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() Inputdata:any;
  @Input() Statusdata:any;

}
