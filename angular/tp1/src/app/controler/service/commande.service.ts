import { Injectable } from '@angular/core';
import {Commande} from "../model/commande.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private _item!:Commande;
  private _items!:Array<Commande>;
  private url ="http://localhost:8081/api/commande/";

  public save():Observable<Commande>{
    return this.http.post <Commande>(this.url,this._item);

  }

  constructor(private http:HttpClient) { }


  get item(): Commande {
    if (this._item==null){
   this._item = new Commande();

    }
    return this._item;
  }

  set item(value: Commande) {
    this._item = value;
  }

  get items(): Array<Commande> {
    if (this._items==null) {
      this._items = new Array<Commande>();
    }
      return this._items;
  }

  set items(value: Array<Commande>) {
    this._items = value;
  }
}
