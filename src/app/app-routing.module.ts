import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './Characters/Components/Character details/character-component.component';



import { CharactersList } from './Characters/Container/characters-list.component';

import { DashboardComponent } from './Dashboard/Container/dashboard-component.component';
import { EpisodeComponent } from './Episodes/Components/episode.component';
import { EpisodeListComponent } from './Episodes/Container/episode-list.component';
import { QuotesList } from './Quotes/Container/quotes-list.components';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'characters', component: CharactersList },
  { path: 'characters/name/:name', component: CharacterDetailsComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'quotes', component: QuotesList },
  { path: 'quotes/:id', component: QuotesList },
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'episodes/:id', component: EpisodeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }