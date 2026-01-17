import {CardView} from "../../components/card-view/card-view.tsx";
import {SearchBar} from "../search/search-bar.tsx";
import Box from "@mui/material/Box";

export const BookListPage = () => (
    <Box gap={4}>
        <SearchBar />
        <CardView />
    </Box>
);