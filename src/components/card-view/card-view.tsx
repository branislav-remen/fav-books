import Box from "@mui/material/Box";
import {BookCard} from "./book-card.tsx";
import styles from "./card-view.module.scss";
import clsx from "clsx";

// mock
const books = [
    { title: "Harry Potter", image: "https://via.placeholder.com/150x250" },
    { title: "Lord of the Rings", image: "https://via.placeholder.com/150x250" },
    { title: "The Hobbit", image: "https://via.placeholder.com/150x250" },
    { title: "1984", image: "https://via.placeholder.com/150x250" },
    { title: "Lord of the Rings", image: "https://via.placeholder.com/150x250" },
    { title: "The Hobbit", image: "https://via.placeholder.com/150x250" },
    { title: "1984", image: "https://via.placeholder.com/150x250" },
];

/**
 * Dumb (no logic) UI component to display a cards.
 * Each card represents a book with its title and image.
 * Each card is clickable to view more details about the book.
 */
export const CardView = () => {
    return (
        <Box className={clsx(styles.list)}>
            {books.map((book, index) => (
                <BookCard key={index} title={book.title} image={book.image} />
            ))}
        </Box>
    );
}