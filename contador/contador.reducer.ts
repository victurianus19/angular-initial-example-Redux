import {Action} from '../ngrx-fake/ngrx';

// Reducer
export function reducer(state = 10, action: Action) {
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
  