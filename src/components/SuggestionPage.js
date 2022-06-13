import * as React from 'react';
import Box from '@mui/material/Box';
import ApartmentCard from './ApartmentCard';
import { grey } from '@mui/material/colors';
import { Grid } from '@mui/material';


export default function SuggestionPage() {
    return (
        <Box
            sx={{
                mb: 15,
                backgroundColor: grey[100],
            }}
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "20vh" }}>
            <Box
                sx={{
                    m: 8
                }}>
                <h3>Nhà thuê dành cho bạn</h3>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                </Grid>
            </Box>
        </Box>
    )
}
