import {type FC, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
    // todo: tbd
    image: string;
    // book title
    title: string;
}

const FALLBACK_IMAGE = "https://placehold.co/150x250?text=Bez+obrazka";

/** Single card component */
export const BookCard: FC<Props> = ({image, title}) => {

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
                <Typography variant="subtitle1" noWrap>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}