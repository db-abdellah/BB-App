import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { QuotesList } from '../Container/quotes-list.components';
import { QuoteComponent } from '../Components/quote-componenet.componenet';

//service
import { QuoteService } from '../quote-service.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, HttpClientModule,CommonModule],
  exports: [],
  declarations: [QuotesList, QuoteComponent],
  providers: [QuoteService],
})
export class QuotesModule {}
