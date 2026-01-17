import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

/** component to render an empty state message and icon, when there are no books in the library */
export const EmptyState = () => (
    <Box textAlign="center" mt={8}>
        <SentimentDissatisfiedIcon fontSize="large" color="disabled" />
        <Typography variant="h6" color="text.secondary">
            Zoznam obľúbených kníh sa čoskoro objaví tu!
        </Typography>
    </Box>
);