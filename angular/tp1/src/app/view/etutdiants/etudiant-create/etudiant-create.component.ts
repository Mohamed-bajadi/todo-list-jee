import { Component ,OnInit} from '@angular/core';
import {Etudiant} from "../../../controler/model/etudiant.model";
import {EtudiantService} from "../../../controler/service/etudiant.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";



@Component({
  selector: 'app-etudiant-create',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: `etudiant-create.component.html`,
  styleUrl: './etudiant-create.component.css'
})
export class EtudiantCreateComponent implements OnInit{

  public save():void {
    this.service.save().subscribe(data=>{
      if (data != null) {
       this.items.push({...this.item});
        alert('Ok');
      }else{
        alert('save Error ::: Etudiant exit');
      }
    })
  }
  public update():void {
    this.service.update().subscribe(data=>{
      if (data != null) {
        alert('Ok');
        this.items[this.index]=this.item ;
      }else{
        alert('save Error ::: Etudiant exit');
      }
    })
  }
  constructor(private service:EtudiantService) {
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  get item(): Etudiant {
    return this.service.item;
  }

  set item(value: Etudiant) {
    this.service.item = value;
  }

  get items(): Array<Etudiant> {

    return this.service.items;
  }

  set items(value: Array<Etudiant>) {
    this.service.items = value;
  }
  get index(): number {
    return this.service.index;
  }

  set index(value: number) {
    this.service.index = value;
  }

}
