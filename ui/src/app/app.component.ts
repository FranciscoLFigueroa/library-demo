import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'library-demo';
  bookdata:any[] = [];
  // bookdata = [{
  //   name: "El evangelio del mal",
  //   date: "06/11/2022 1:40 AM",
  //   description: "Libro de terror",
  //   wishlist: "0"
  // },
  // {
  //   name: "Nisemonogatari",
  //   date: "06/11/2019 1:40 AM",
  //   description: "Libro de anime",
  //   wishlist: "1"
  // }]

  constructor(private serviceApi:ApiService) { }

  ngOnInit(): void {
    this.serviceApi.getBook().subscribe(data=>{
      // console.log(data)
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
        this.serviceApi.putBook(x);
      }
    });
  }
}
