import {Header} from "../../components/header/header.tsx";
import {AddBookForm} from "./add-book-form.tsx";
import styles from  './add-book-section.module.scss';
import clsx from "clsx";

/**
 * Main section component for adding a new book.
 * Contains the web app title and form to add a book.
 */
export const AddBookSection = () => {
    return (
        <div className={clsx(styles.section)}>
            <Header />
            <AddBookForm />
        </div>
    );
}