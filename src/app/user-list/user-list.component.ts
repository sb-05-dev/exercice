import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-user-list',
   standalone: true,
   imports: [CommonModule,],
   templateUrl: './user-list.component.html',
   styleUrl: './user-list.component.scss'
  })

export class UserListComponent implements OnInit {
  users$!: Observable<any[]>;
  fakeapi$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.http.get<any[]>('https://api.pabiosoft.com/index.php/posts');

  }
}



