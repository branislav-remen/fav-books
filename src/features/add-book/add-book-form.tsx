import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./add-book-form.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { addBookAction } from "../../store/actions.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const addBookSchema = z.object({
    title: z.string().min(1, "Názov knihy je povinný"),
    author: z.string().min(1, "Autor je povinný"),
    description: z.string()
        .min(1, "Popis knihy je povinný")
        .max(300, "Maximálna dĺžka popisu je 300 znakov"),
});

type AddBookFormFields = z.infer<typeof addBookSchema>;

/** Component rendering a form to add a new book */
export const AddBookForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddBookFormFields>({
        resolver: zodResolver(addBookSchema),
        defaultValues: {
            title: "",
            author: "",
            description: "",
        },
    });

    const onSubmit = (data: AddBookFormFields) => {
        const newBook = {
            id: crypto.randomUUID(),
            title: data.title,
            author: data.author,
            description: data.description,
        };
        dispatch(addBookAction(newBook));
        reset();
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={clsx(styles.form)}>
            <TextField
                label="Názov knihy"
                fullWidth
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
            />

            <TextField
                label="Autor"
                fullWidth
                {...register("author")}
                error={!!errors.author}
                helperText={errors.author?.message}
            />

            <TextField
                multiline
                label="Popis"
                fullWidth
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
            />

            {
                // TODO - add upload component for book cover image
            }

            <Button
                variant="contained"
                size="large"
                type="submit"
            >
                Pridať medzi obľúbené
            </Button>
        </Box>
    );
};