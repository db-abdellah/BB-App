import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterService } from '../character-service.service';

//Components
import { CharacterComponent } from '../Components/character-component.component';
import { CharactersList } from '../Container/characters-list.component';

@NgModule({
    imports: [BrowserModule ,CommonModule,HttpClientModule],
    exports: [],
    declarations: [CharacterComponent,CharactersList],
    providers: [CharacterService],
})
export class CharactersModule { }
