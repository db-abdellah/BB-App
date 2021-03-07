import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/assets/episodes';

@Component({
    selector: 'episode-component',
    templateUrl: './episode.component.html',
    styleUrls:["./episode.component.css"]
})

export class EpisodeComponent implements OnInit {
    @Input() public episode:Episode;
    constructor() { }

    ngOnInit() { }
}