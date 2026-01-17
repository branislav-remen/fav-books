import Box from "@mui/material/Box";
import {BookCard} from "./book-card.tsx";
import styles from "./card-view.module.scss";
import clsx from "clsx";
import type {FC} from "react";
import type {Book} from "../../store/interfaces.ts";

type Props = {
    books: Book[];
};

/**
 * Dumb (no logic) UI component to display a cards.
 * Each card represents a book with its title and image.
 * Each card is clickable to view more details about the book.
 */
export const CardView: FC<Props> = ({ books }) => {
    return (
        <Box className={clsx(styles.list)}>
            {books.map((book) => (
                <BookCard key={book.id} {...book} />
            ))}
        </Box>
    );
}