import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions'

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() contador: number = 0;

  // @Output() cambioContador = new EventEmitter<number>();
  
  constructor(private store:Store<AppState>) { }
  
  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  multiplicar(){
    //this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({numero: 3}));
  }

  dividir(){
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.dividir({numero: 2}));
  }

  // changeContador(event: number){
  //   this.contador = event;
  //   this.cambioContador.emit(this.contador);
  // }
}
