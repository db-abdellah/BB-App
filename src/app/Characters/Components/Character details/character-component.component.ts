import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/assets/characters';
import { CharacterService } from '../../character-service.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'character-detail',
  templateUrl: './character-component.component.html',
  styleUrls: ['./character-component.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  public character: Character[]=[];
  public characterSubscription$: Subscription;


  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    
    
    if (id){
      this.characterSubscription$ =this.characterService.getCharacterById(id).subscribe((result) => {
        this.character = result;
      }, this.logError);}
      else {
        console.log(this.route.snapshot.url.toString().split(","));
        const name:string = this.route.snapshot.url.toString().split(",").pop().replace("%20"," ");
        console.log(this.route.snapshot.url.toString().split(","));
        this.characterSubscription$=this.characterService.getCharacterByName(name).subscribe((result) => {
          this.character = result;
        }, this.logError);
      }

  }
  goBack(){
    this.location.back();
  }

  ngOnDestroy() {
    this.characterSubscription$.unsubscribe();
  }
  logError = (error: HttpErrorResponse) => console.error(error);
}
