import { ActionReducer, Action } from '@ngrx/store';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const todosReducer: ActionReducer<string[]> = (state: string[] = [], action: Action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        case DELETE_TODO: {
            var index = state.indexOf(action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return state;
        }
        default:
            return state;
    }
}