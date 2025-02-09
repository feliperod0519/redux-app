import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contador: number = 0;

  constructor(private store: Store<AppState>){
    //this.contador = 10;
    this.store.select('contador').subscribe(x => {
      console.log(x);
      this.contador = x;
    });
  }


  incrementar(){
    //this.contador++;
    this.store.dispatch(actions.incrementar());
  }

  decrementar(){
    //this.contador--;
    this.store.dispatch(actions.decrementar());
  }

}
