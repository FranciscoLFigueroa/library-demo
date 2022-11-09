import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // console.log(this.Inputdata)
    // console.log(this.Statusdata)
  }

  @Input() Inputdata:any;
  @Output() Update: EventEmitter<any> = new EventEmitter();

  updateBookWishlistEvent() {
    this.Update.emit(this.Inputdata);
  }
}
