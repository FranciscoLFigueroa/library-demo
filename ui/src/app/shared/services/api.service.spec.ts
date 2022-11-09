import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

import { ApiService, BookData } from './api.service';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getBookList should return expected data', (done) => {
    const expectedData: BookData[] = [
      { 
        'id': 1,
        'name': 'book name',
        'author': 'author name',
        'whishlist': false
      }
    ];

    service.getBookList().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${environment.apiurl}/Bookslists`);

    testRequest.flush(expectedData);
  });

  it('getBookList should return an empty object on error', (done) => {
    const expectedData: BookData[] = []

    service.getBookList().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(`${environment.apiurl}/Bookslists`);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
