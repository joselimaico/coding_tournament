import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../../Services/event.service";
import {Evento} from "../../Models/Evento";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  eventos:Evento[]
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(private _formBuilder: FormBuilder,
              private _eventoService: EventService) { }


  ngOnInit() {
    this.getEventos();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getEventos(): void {
    this._eventoService.getEventos()
      .subscribe(eventos => this.eventos = eventos);
  }

}
