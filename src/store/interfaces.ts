import type {ADD_BOOK} from "./constants.ts";

/** Interface representing a Book */
export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    image?: string;
}

/** State interface for books module */
export interface BooksState {
    items: Book[];
}

export interface AddBookAction {
    type: typeof ADD_BOOK;
    payload: Book;
}
