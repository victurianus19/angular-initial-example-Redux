import {
  dividirAction,
  multiplicarAction,
  decrementadorAction,
  incrementadorAction,
  resetAction
} from "../contador/contador.actions";
import { Action } from "../ngrx-fake/ngrx";

// Reducer
function reducer(state = 10, action: Action) {
  // if (action.type === 'INCREMENTAR') {
  //     return state += 1;
  // }
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);

    case "DECREMENTAR":
      return (state -= 1);

    case "MULTIPLICAR":
      return state * action.payload; // recibirá un numero

    case "DIVIDIR":
      return state / action.payload; // recibirá un numero

    case "RESET":
      return state = 0; // reset

    default:
      return state;
  }
}

console.log(reducer(10, incrementadorAction)); // 11

console.log(reducer(10, decrementadorAction)); // 9

console.log(reducer(10, multiplicarAction)); // 20

console.log(reducer(10, dividirAction)); // 5

console.log(reducer(10, resetAction)); // 0
