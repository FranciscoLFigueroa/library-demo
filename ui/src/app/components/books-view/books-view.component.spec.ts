import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

import { BooksViewComponent } from './books-view.component';

export interface BookData {
  id: number
  name: string
  author: string
  wishlist: boolean
}

describe('BooksViewComponent', () => {
  let component: BooksViewComponent;
  let fixture: ComponentFixture<BooksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BooksViewComponent);
    component = fixture.componentInstance;
    component.Inputdata = {
      'id': 1,
      'name': 'book name',
      'author': 'author name',
      'wishlist': false
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
