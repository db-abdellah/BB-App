
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Quote, Quotes } from 'src/assets/quotes';
import { QuoteService } from '../quote-service.service';

@Component({
    selector: 'quotes-list',
    templateUrl: './quotes-list.components.html',
    styleUrls:["./quotes-list.components.css"]
})

export class QuotesList implements OnInit {
    public quotesList = [];
    constructor(private quoteService:QuoteService) { }

    ngOnInit() { 
        this.quoteService.getAllQuotes().subscribe((quotes)=>{
            this.quotesList=quotes;
        },this.logError);
    }

    logError = (error: HttpErrorResponse) => console.error(error);
}