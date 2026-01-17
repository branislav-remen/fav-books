import {CardView} from "../../components/card-view/card-view.tsx";
import {SearchBar} from "../search/search-bar.tsx";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {getBooks} from "../../store/selectors.ts";
import {useMemo, useState} from "react";

export const BookList = () => {

    const books = useSelector(getBooks);
    const [searchTerm, setSearchTerm] = useState("");

    /**
     * Memoized filtered books based on search term; Simple solution is sufficient for this use-case
     * Additional optimizations like debouncing can be implemented if needed (not required for small datasets)
     */
    const filteredBooks = useMemo(() => {
        if (!searchTerm) return books;
        return books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [books, searchTerm]);

    return (
        <Box gap={4}>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            {filteredBooks.length === 0 && (
                <Box>Nenašli sa žiadne knihy. Skús hľadať niečo iné.</Box>
            )}
            {filteredBooks.length > 0 && (
                <CardView books={filteredBooks} />
            )}
        </Box>
    );
};