import type { FC, ReactNode} from 'react';
import Grid from '@mui/material/Grid';

type Props = {
    /** renders on the left side on desktop and on the top on mobile */
    first: ReactNode,
    /** renders on the right side on desktop and on the bottom on mobile */
    second: ReactNode,
}

/**
 * Component to render content on 2 parts:
 * - left/right on desktop
 * - top/bottom on mobile
 */
export const TwoColLayout: FC<Props> = ({ first, second }) => (
    <Grid container spacing={2}>
        <Grid
            size={{ xs: 12, md: 6}}
        >
            {first}
        </Grid>
        <Grid
            size={{ xs: 12, md: 6}}
        >
            {second}
        </Grid>
    </Grid>
);