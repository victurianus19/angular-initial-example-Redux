import {incrementadorAction, multiplicarAction} from '../contador/contador.actions';
import { Reducer, Action} from '../ngrx-fake/ngrx';
import { reducer } from "../contador/contador.reducer";

// Store, para saber lo que hace internamente
class Store<T> {
  // private state: T;

  constructor(private reducer: Reducer<T>, private state: T) {}

  getState() {
    return this.state;
  }

  dispatch( action: Action ) {
    this.state = this.reducer(  this.state, action );
  }
}

const store = new Store( reducer, 10); // estado inicial 10
console.log( store.getState() );

// Accion de incrementar en 1
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
console.log( store.getState() );

// Accion de multiplicar
store.dispatch(multiplicarAction);
console.log(store.getState());
