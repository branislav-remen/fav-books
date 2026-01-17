import {type FC, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type {Book} from "../../store/interfaces.ts";

const FALLBACK_IMAGE = "https://placehold.co/150x250?text=Bez+obrazka";

/** Single card component */
export const BookCard: FC<Book> = (props) => {

    const { title, image } = props;

    const [imgSrc, setImgSrc] = useState(image);

    return (
        <Card sx={{ maxWidth: 200 }}>
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
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}