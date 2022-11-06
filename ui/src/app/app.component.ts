import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-demo';
  bookdata = [{
    name: "El evangelio del mal",
    date: "06/11/2022 1:40 AM",
    description: "Libro de terror",
    wishlist: "0"
  },
  {
    name: "Nisemonogatari",
    date: "06/11/2019 1:40 AM",
    description: "Libro de anime",
    wishlist: "1"
  }]

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
