// Todas las Acciones
import { Action } from "../ngrx-fake/ngrx";

// SUMAR
export const incrementadorAction: Action = {
  type: "INCREMENTAR"
};

// Usar el Reducer, se le manda en estado actual y la acción que se quiere ejecutar
// RESTAR
export const decrementadorAction: Action = {
  type: "DECREMENTAR"
};

// MULTIPLICAR
export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2
};

// DIVIDIR
export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2
};

// RESET
export const resetAction: Action = {
  type: "RESET"
};
