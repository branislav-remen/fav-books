import {ADD_BOOK, initialState} from "./constants.ts";
import type {AddBookAction, BooksState} from "./interfaces.ts";

/**
 * Books reducer - handles actions related to books state
 */
export const booksReducer = (state: BooksState = initialState, action: AddBookAction): BooksState => {
    switch (action.type) {
        case ADD_BOOK: {
            return { ...state, items: [ ...state.items, action.payload] };
        }
        default:
            return state;
    }
}