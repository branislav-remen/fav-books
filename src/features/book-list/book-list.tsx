import {CardView} from "../../components/card-view/card-view.tsx";
import {SearchBar} from "../search/search-bar.tsx";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {getBooks} from "../../store/selectors.ts";

export const BookListPage = () => {

    const books = useSelector(getBooks);

    return (
        <Box gap={4}>
            <SearchBar />
            <CardView books={books} />
        </Box>
    );
};