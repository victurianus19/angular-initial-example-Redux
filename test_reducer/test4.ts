import { Store, createStore } from "redux";
import { reducer } from "../contador/contador.reducer";
import { incrementadorAction } from "../contador/contador.actions";

// creamos el store
const store: Store = createStore( reducer );

// subcribirse al store, esto hará que cuando se produzca un cambio nos lo notificara
store.subscribe(() => {
    console.log('Subs: ', store.getState());
});

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
