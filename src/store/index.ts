import {combineReducers, createStore} from "redux";
import {booksReducer} from "./reducer";

// Combine all reducers to create the root reducer (for now we have only one module books)
const rootReducer = combineReducers({
    books: booksReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

/**
 * Note: Using legacy createStore from redux by purpose because you use it in your project.
 * Otherwise, I would use recommended  Redux Toolkit and its configureStore method.
 */
export const store = createStore(
    rootReducer,
    // @ts-expect-error - for Redux DevTools Extension; ideally add only in development mode
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);