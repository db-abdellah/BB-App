import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/assets/quotes';

@Component({
    selector: 'quote-componenet',
    templateUrl: './quote-componenet.componenet.html',
    styleUrls:["./quote-componenet.componenet.css"]
})

export class QuoteComponent implements OnInit {
    @Input() quote:Quote;
    constructor() { }

    ngOnInit() { }
}