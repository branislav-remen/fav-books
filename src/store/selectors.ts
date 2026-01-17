import type {RootState} from "./index.ts";

/**
 * Selector to get all books
 */
export const getBooks = (state: RootState) => state.books.items ?? [];

/** Selector to check if there are any books */
export const hasBooks = (state: RootState) => {
    const books = getBooks(state);
    console.log('hasBooks selector - books:', books);
    return books && books.length > 0;
}

/** Selector to get titles from all stored books */
export const getAllTitles = (state: RootState) => {
    const books = getBooks(state);
    return books.map(book => book.title);
}