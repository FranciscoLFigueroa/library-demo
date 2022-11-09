import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

export interface BookData {
  id: number
  name: string
  author: string
  whishlist: boolean
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

  getBookList():Observable<BookData[]> {
    // return this.http.get<BookData[]>(`${environment.apiurl}Bookslists`)

    let apiObserverable = this.http.get<BookData[]>(`${environment.apiurl}/Bookslists`);

    return apiObserverable.pipe(catchError(error => of<BookData[]>([])));
  }

  putBookWishlist(book:BookData) {
    return this.http.put<BookData>(`${environment.apiurl}/Bookslists/${book.id}`,book).subscribe(data=>{
      console.log(data)
    })
  }
}
