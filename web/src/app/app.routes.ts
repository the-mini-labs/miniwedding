import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'timeline', loadComponent: () => import('./pages/timeline/timeline.component').then(m => m.TimelineComponent) },
    { path: 'location', loadComponent: () => import('./pages/location/location.component').then(m => m.LocationComponent) },
    { path: 'weddingList', loadComponent: () => import('./pages/wedding-list/wedding-list.component').then(m => m.WeddingListComponent) },
    { path: 'contacts', loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent) },

  ]