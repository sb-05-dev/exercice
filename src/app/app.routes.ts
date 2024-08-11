import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: '', component: UserListComponent },
];

export const appConfig = [
    provideHttpClient(), // Fournit HttpClient
    provideRouter(routes), // Configure les routes
  ];
