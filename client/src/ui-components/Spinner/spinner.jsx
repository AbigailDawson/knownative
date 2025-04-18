import { Box, CircularProgress } from "@mui/material";

export default function Spinner() {
    return (
        <>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#333" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
            <Box>
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                        'svg circle': { stroke: 'url(#my_gradient)' }
                    }}
                    size={80}
                    thickness={4}
                />
            </Box>
        </>
    )
}