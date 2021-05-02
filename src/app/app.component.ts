import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public  active:boolean = false;
  mobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('ul');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    this.active = !this.active;
  }
  toggleActive(){
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('ul');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
  }
  onResize(event) {
    
    if(event.target.innerWidth>900 && this.active==true){
      this.mobileMenu();
    }
  }
}
