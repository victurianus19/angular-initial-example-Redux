// Libreria de REDUX
export interface Action {
    type: string;
    payload?: any;
}

// Interfaz de una Accion
export interface Reducer<T> {
    (state: T, action: Action): T;
}


