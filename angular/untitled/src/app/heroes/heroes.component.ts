import { Component } from '@angular/core';
import {Hero} from "../hero";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgForOf,
    NgIf,
    HeroDetailComponent,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
heroes :Hero[] = [];

constructor(private heroService:HeroService,private messageService:MessageService) {
}

getHeroes():void{
  this.heroService.getHeroes().subscribe(heroes=>this.heroes= heroes);
}

ngOnInit():void{
  this.getHeroes();
}

}
