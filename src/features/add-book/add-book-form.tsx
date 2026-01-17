import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./add-book-form.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { addBookAction } from "../../store/actions.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

const addBookSchema = z.object({
    title: z.string().min(1, "Názov knihy je povinný"),
    author: z.string().min(1, "Autor je povinný"),
    description: z.string()
        .min(1, "Popis knihy je povinný")
        .max(300, "Maximálna dĺžka popisu je 300 znakov"),
    image: z.instanceof(FileList)
        .refine((files) => files.length > 0, "Obrázok je povinný")
        .refine((files) => files[0] && files[0].type?.startsWith('image/'), "Súbor musí byť obrázok")
        .refine((files) => files[0] && files[0].size <= MAX_IMAGE_SIZE, "Obrázok nesmie presiahnuť 5 MB"),
});

type AddBookFormFields = z.infer<typeof addBookSchema>;

/** Component rendering a form to add a new book */
export const AddBookForm = () => {
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddBookFormFields>({
        resolver: zodResolver(addBookSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            author: "",
            description: "",
        },
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // early return if invalid
            if (!file.type.startsWith('image/')) {
                return;
            }
            if (file.size > MAX_IMAGE_SIZE) {
                return;
            }

            /**
             * NOTE: This is FE only image handling for preview purposes.
             * In a real-world application, you would typically upload the image
             * to a server or cloud storage and store the URL/reference in your database.
             */
            const reader = new FileReader();
            reader.onloadend = () => {
                // Set preview to base64 string
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (data: AddBookFormFields) => {
        const newBook = {
            id: crypto.randomUUID(),
            title: data.title,
            author: data.author,
            description: data.description,
            image: imagePreview as string, // validated by zod to be non-null
        };
        dispatch(addBookAction(newBook));
        reset();
        setImagePreview(null);
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

            <Box>
                <input
                    type="file"
                    accept="image/*"
                    {...register("image")}
                    onChange={handleImageChange}
                    className={clsx(styles.imageInput, errors.image && styles.error)}
                />
                {errors.image && (
                    <Typography className={styles.errorMessage}>
                        {errors.image.message}
                    </Typography>
                )}
                {imagePreview && (
                    <Box
                        component="img"
                        src={imagePreview}
                        alt="Preview"
                        className={styles.imagePreview}
                    />
                )}
            </Box>

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