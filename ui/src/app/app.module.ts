import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BooksComponentComponent } from './components/books-component/books-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponentComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }