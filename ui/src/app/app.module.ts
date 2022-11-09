import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { BooksViewComponent } from './components/books-view/books-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
