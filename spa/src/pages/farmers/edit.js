import {useState} from 'react'

import Grid from '@mui/material/Grid'
import FarmerForm from 'src/views/farmers/form/FarmerForm';

const edit = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={12} lg={12}>
                <FarmerForm />
            </Grid>
        </Grid>
    );
}

export default edit;