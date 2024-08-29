import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent {
  // @Input() contador: number = 0;
  // @Output() cambioContador = new EventEmitter<number>();
  contador: number = 0;

  constructor(private store:Store<AppState>) { }

  reset(){
    // this.contador = 0;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.reset());
  }
}
