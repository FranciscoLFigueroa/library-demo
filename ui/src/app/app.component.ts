import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './shared/services/api.service'
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';
  bookdata:any[] = [];

  constructor(private serviceApi:ApiService) { }

  ngOnInit(): void {
    this.serviceApi.getBookList().subscribe(data=>{
      console.log(data)
      this.bookdata = data;
    })
  }

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  filterbook(data:any[], bool:boolean) {
    // console.log("data", data);
    const x = data.filter(dt => {
      return dt.whishlist == bool;
    });
    // console.log(x);
    return x;
  }

  updatingBook(event:any) {
    console.log("event", event);
    // event.whishlist = !event.whishlist;
    this.bookdata.find(x=> { 
      if(x.id == event.id) {
        x.whishlist = !event.whishlist;
        this.serviceApi.putBookWishlist(x);
      }
    });
  }
}
