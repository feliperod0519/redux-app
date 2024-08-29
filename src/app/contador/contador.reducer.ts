import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, dividir, reset } from './contador.actions';

export const initialState = 20;

// export function contadorReducer(state: number = 10, action: Action){
//     switch(action.type){
//         case incrementar.type:
//             return state + 1;
//         case decrementar.type:
//             return state - 1;
//         default:
//             return state;
//     }
// }

const _contadorReducer = createReducer(
    initialState,
    on(incrementar, state => state + 1),
    on(decrementar, state => state - 1),
    on(multiplicar, (state, props) => state * props.numero),
    on(dividir, (state, {numero}) => state / numero),
    on(reset, state => initialState)
);

export function contadorReducer(state: any, action: Action){
    return _contadorReducer(state, action);
}