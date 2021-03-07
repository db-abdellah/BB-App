
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character, Characters } from "src/assets/characters";
import { CharacterService } from '../character-service.service';

@Component({
    selector: 'characters-list',
    templateUrl: './characters-list.component.html',
    styleUrls:["./characters-list.component.css"]
})

export class CharactersList implements OnInit {

    public charactersList:Character[];

    constructor(private characterService : CharacterService) { 

        this.characterService.getAllCharacters().subscribe(
            (characters)=>{
                this.charactersList = characters
            },this.logError
        )
    }


    logError = (error: HttpErrorResponse) => console.error(error);

    ngOnInit() { }
}