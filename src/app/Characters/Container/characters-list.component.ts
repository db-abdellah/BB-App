import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character, Characters } from 'src/assets/characters';
import { CharacterService } from '../character-service.service';

@Component({
  selector: 'characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersList implements OnInit {
  public charactersList: Character[] = [];
  public passengersSubscription$: Subscription;

  constructor(private characterService: CharacterService) {
   
  }

  logError = (error: HttpErrorResponse) => console.error(error);
  ngOnDestroy() {
    this.passengersSubscription$.unsubscribe();
  }
  ngOnInit() {
    this.passengersSubscription$ =this.characterService.getAllCharacters().subscribe((characters) => {
        this.charactersList = characters;
      }, this.logError);
  }
}
