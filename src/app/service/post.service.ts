import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { essaie,  } from './models';


@Injectable({
  providedIn: 'root'
})
export class PostService{
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: HttpClient) { }

  getPosts(): Observable<essaie[]> {
    return this.http.get<essaie[]>(this.apiUrl);
  }

  createPost(post: essaie): Observable<essaie> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<essaie>(this.apiUrl, post, { headers });
  }

  updatePost(id: number, post: essaie): Observable<essaie> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<essaie>(url, post, { headers });
  }

  deletePost(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  patchPost(id: number, partialPost: Partial<essaie>): Observable<essaie> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch<essaie>(url, partialPost, { headers });
  }
}