import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Local Modules
import { AppComponent } from './app.component';
import { DashBoardModule } from './Dashboard/Modules/dashboard-module.module';
import { AppRoutingModule } from './app-routing.module';
import { CharactersModule } from './Characters/Modules/characters-module.module';
import { QuotesModule } from './Quotes/Modules/quotes-module.module';
import { EpisodeModule } from './Episodes/Modules/episode-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashBoardModule,
    AppRoutingModule,
    CharactersModule,
    QuotesModule,
    CharactersModule,
    EpisodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
