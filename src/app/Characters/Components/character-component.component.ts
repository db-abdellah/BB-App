import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/assets/characters';

@Component({
    selector: 'character-component',
    templateUrl: './character-component.component.html',
    styleUrls:["./character-component.component.css"]
})

export class CharacterComponent implements OnInit {

    @Input() public character:Character;
    constructor() { }

    ngOnInit() { }
}