import { Injectable } from '@angular/core';
import {Etudiant} from "../model/etudiant.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
private _item!:Etudiant;
private _items!:Array<Etudiant>;
private url = 'http://localhost:8081/api/etudiant/';
private _index=-1;
  constructor(private http:HttpClient) { }

  public save():Observable<Etudiant>{
    return this.http.post<Etudiant>(this.url,this._item);
  }
  public update():Observable<Etudiant>{
    return this.http.put<Etudiant>(this.url,this._item);
  }

  public findAll():Observable<Array<Etudiant>>{
    return this.http.get<Array<Etudiant>>(this.url);
  }

  public deleteByCode(code:string):Observable<number>{
    return this.http.delete<number>(this.url + 'code/'+code)
  }


  get item(): Etudiant {
    if (this._item == null) {
      this._item = new Etudiant();
    }
    return this._item;
  }

  set item(value: Etudiant) {
    this._item = value;
  }

  get items(): Array<Etudiant> {
    if (this._items == null) {
      this._items = new Array<Etudiant>();
    }
    return this._items;
  }

  set items(value: Array<Etudiant>) {
    this._items = value;
  }


  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }
}
