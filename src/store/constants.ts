import type {BooksState} from "./interfaces.ts";

export const ADD_BOOK = 'books/ADD_BOOK';

// Initial state for books module
export const initialState: BooksState = {
    items: [],
}