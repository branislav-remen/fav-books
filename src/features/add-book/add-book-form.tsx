import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./add-book-form.module.scss";
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {addBookAction} from "../../store/actions.ts";

/** Component rendering a form to add a new book */
export const AddBookForm = () => {

    const dispatch = useDispatch();
    const handleAdd = () => {
        const newBook = {
            id: Date.now().toString(),
            title: 'Rozpravky o psickovi a macicke',
            author: 'Jozef Capek',
            description: '',
        }
        dispatch(addBookAction(newBook))
    }

    return (
        <Box component="form" className={clsx(styles.form)}>
            <TextField label="Názov knihy" fullWidth />

            <TextField label="Autor" fullWidth />

            <TextField multiline label="Popis" fullWidth />

            {
                // TODO - add upload component for book cover image
            }

            <Button
                variant="contained"
                size="large"
                onClick={handleAdd}
            >
                Pridať medzi obľúbené
            </Button>
        </Box>
    );
};