import styles from './book-list-section.module.scss';
import clsx from "clsx";
import {EmptyState} from "../../components/empty-state/empty-state.tsx";
import {BookListPage} from "./book-list.tsx";

/**
 * Book list section shows list of the books added by the user.
 * On top of the list, there is a search bar to filter books by title.
 */
export const BookListSection = () => {

    const hasBooks = false; // todo - replace with actual check

    return (
        <div className={clsx(styles.section)}>
            {
                hasBooks
                    ? (
                        <EmptyState />
                    ) : (
                        <BookListPage />
                    )
            }
        </div>
    );
};