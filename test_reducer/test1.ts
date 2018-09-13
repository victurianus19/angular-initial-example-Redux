// Accion
interface Action {
    type?: string;
    payload?: any;
}

// Reducer
function reducer ( state = 10, action: Action) {
    // if (action.type === 'INCREMENTAR') {
    //     return state += 1;
    // }
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
    
        case 'DECREMENTAR':
          return state -= 1;

          case 'MULTIPLICAR':
          return state * action.payload; // recibirá un numero

          case 'DIVIDIR':
          return state / action.payload; // recibirá un numero

        default:
            return state;
    }
}

// Usar el Reducer, se le manda en estado actual y la acción que se quiere ejecutar
// SUMAR
const incrementadorAction: Action = {
  type: 'INCREMENTAR'
};

console.log(reducer(10, incrementadorAction)); // 11

//Seccion 3, Clase 16

// Usar el Reducer, se le manda en estado actual y la acción que se quiere ejecutar
// RESTAR
const decrementadorAction: Action = {
  type: 'DECREMENTAR'
};

console.log(reducer(10, decrementadorAction)); // 9

// MULTIPLICAR
const multiplicarAction: Action = {
  type: 'MULTIPLICAR',
  payload: 2
};

console.log(reducer(10, multiplicarAction)); // 20

// DIVIDIR
const dividirAction: Action = {
  type: 'DIVIDIR',
  payload: 2
};

console.log(reducer(10, dividirAction)); // 5



