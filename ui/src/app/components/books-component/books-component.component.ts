import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-books-component',
  templateUrl: './books-component.component.html',
  styleUrls: ['./books-component.component.scss']
})
export class BooksComponentComponent implements OnChanges {

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

  updateBook() {
    this.Update.emit(this.Inputdata);
  }
  // @Input() Statusdata:any;

}
