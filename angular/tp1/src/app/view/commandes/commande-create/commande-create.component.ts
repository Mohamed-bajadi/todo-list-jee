
import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../controler/service/commande.service";
import {Commande} from "../../../controler/model/commande.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-commande-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './commande-create.component.html',
  styleUrl: './commande-create.component.css'
})
export class CommandeCreateComponent implements OnInit {

  public save (): void{
    this.service.save().subscribe(data=>{
      if (data == null) {
        alert("ok");
      }else {
        alert("prob");
      }
    })
  }

  ngOnInit(): void {
  }


  constructor(private service: CommandeService) {

  }
  get item(): Commande {
    return this.service.item;
  }

  set item(value: Commande) {
    this.service.item = value;
  }

  get items(): Array<Commande> {
    return this.service.items;
  }

  set items(value: Array<Commande>) {
    this.service.items=value;
  }
}
