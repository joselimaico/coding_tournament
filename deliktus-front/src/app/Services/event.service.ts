import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Evento} from "../Models/Evento";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private evenUrl ="http://localhost:1337/event";

  constructor(private http: HttpClient) {


  }

  getEventos():Observable<Evento[]> {
    return this.http.get<Evento[]>(this.evenUrl)

  }
}
