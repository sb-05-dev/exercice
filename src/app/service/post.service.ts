import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Essaie } from '../model/essaie.models';


@Injectable({
  providedIn: 'root'
})
export class PostService{
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Essaie[]> {
    return this.http.get<Essaie[]>(this.apiUrl);
  }

  createPost(post: Essaie): Observable<Essaie> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Essaie>(this.apiUrl, post, { headers });
  }

  updatePost(id: number, post: Essaie): Observable<Essaie> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Essaie>(url, post, { headers });
  }

  deletePost(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  patchPost(id: number, partialPost: Partial<Essaie>): Observable<Essaie> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch<Essaie>(url, partialPost, { headers });
  }
}