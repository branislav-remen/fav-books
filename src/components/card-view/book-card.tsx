import {type FC, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { Book } from "../../store/interfaces.ts";
import { CardModal } from "./card-modal.tsx";

const FALLBACK_IMAGE = "https://placehold.co/150x250?text=Bez+obrazka";

/**
 * Single card component. Pure presentational component (holds inner state). Also renders details view in Modal window.
 * Note - I would move the modal open flag/selected book state to Redux, if this information is needed elsewhere in the app.
 */
export const BookCard: FC<Book> = (props) => {

    const { title, image, author } = props;

    const [imgSrc, setImgSrc] = useState(image);
    const [open, setOpen] = useState(false);

    // no need to memoize these simple handlers
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                sx={{ maxWidth: 200, cursor: 'pointer' }}
                onClick={handleOpen}
            >
                <CardMedia
                    component="img"
                    height="250"
                    width="150"
                    image={imgSrc}
                    alt={title}
                    onError={() => setImgSrc(FALLBACK_IMAGE)}
                />
                <CardContent>
                    <Typography variant="subtitle1">
                        {title}  ({author})
                    </Typography>
                </CardContent>
            </Card>
            <CardModal
                open={open}
                onClose={handleClose}
                book={props}
            />
        </>
    );
}