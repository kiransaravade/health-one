import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PatientsListComponent } from './pages/patients-list/patients-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patients', component: PatientsListComponent },
  { path: '**', redirectTo: '' }
];