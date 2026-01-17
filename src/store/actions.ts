import type { Book } from "./interfaces";
import {ADD_BOOK} from "./constants";

/**
 * Action to add a new book
 */
export const addBookAction = (book: Book)=> {
    return { type: ADD_BOOK, payload: book };
}