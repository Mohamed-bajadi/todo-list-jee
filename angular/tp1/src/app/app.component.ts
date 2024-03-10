import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommandeCreateComponent} from "./view/commandes/commande-create/commande-create.component";
import {EtudiantCreateComponent} from "./view/etutdiants/etudiant-create/etudiant-create.component";
import {EtudiantListComponent} from "./view/etutdiants/etudiant-list/etudiant-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommandeCreateComponent, EtudiantCreateComponent, EtudiantListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp1';
}
