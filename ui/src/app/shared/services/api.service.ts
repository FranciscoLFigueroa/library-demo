import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getBook():Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiurl}Bookslists`)
  }

  putBook(book:any) {
    console.log("put", book);
    return this.http.put<any>(`${environment.apiurl}Bookslists/${book.id}`,book).subscribe(data=>{console.log(data)})
  }
}
