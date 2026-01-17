import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./add-book-form.module.scss";
import clsx from "clsx";

/** Component rendering a form to add a new book */
export const AddBookForm = () => {
    return (
        <Box component="form" className={clsx(styles.form)}>
            <TextField label="Názov knihy" fullWidth />

            <TextField label="Autor" fullWidth />

            <TextField multiline label="Popis" fullWidth />

            {
                // TODO - add upload component for book cover image
            }

            <Button variant="contained" size="large">
                Pridať medzi obľúbené
            </Button>
        </Box>
    );
};