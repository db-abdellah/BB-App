import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CharactersList } from './Characters/Container/characters-list.component';

import { DashboardComponent } from './Dashboard/Container/dashboard-component.component';
import { EpisodeListComponent } from './Episodes/Container/episode-list.component';
import { QuotesList } from './Quotes/Container/quotes-list.components';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharactersList },
  { path: 'quotes', component: QuotesList },
  { path: 'episodes', component: EpisodeListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }