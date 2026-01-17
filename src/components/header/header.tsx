import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Bookmark from "@mui/icons-material/Bookmark";

/**
 * Static component to render the header section of the application.
 * Includes the application title and icon.
 */
export const Header = () => (
    <Box mb={4}>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Bookmark fontSize="large" />
            <Typography variant="h5" fontWeight="bold">
                FavBooks
            </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
            Vaša knižnica obľúbených kníh.
        </Typography>
    </Box>
)