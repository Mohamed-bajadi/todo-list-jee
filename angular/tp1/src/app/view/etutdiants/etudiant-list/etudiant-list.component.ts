import {Component,  OnInit} from '@angular/core';
import {Etudiant} from "../../../controler/model/etudiant.model";
import {EtudiantService} from "../../../controler/service/etudiant.service";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `etudiant-list.component.html`,
  styleUrl: './etudiant-list.component.css'
})
export class EtudiantListComponent implements OnInit{

  public findAll():void{
    this.service.findAll().subscribe(data=>this.items=data)
  }

public deleteByCode(etudiant:Etudiant,index:number):void{
    this.service.deleteByCode(etudiant.code).subscribe(data=>{
      if (data > 0){
        this.items.splice(index,1);
      }else {
        alert('Del Error');
      }
    });
  }

public edit(etudiant:Etudiant,index:number):void{
  this.item = {...etudiant};
  this.index = index;
  }


  constructor(private service:EtudiantService) {
  }

  ngOnInit(): void {
       this.findAll();
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
