import { useState} from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const FarmProduce = () => {
    return (
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Farm Produce</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            }
                            label="Gilad Gray"
                        />
                    
                    </FormGroup>
                    <FormHelperText>Select multiple farm produces</FormHelperText>
                </FormControl>
            </Box>
          </Grid>
        </Grid>       
    )
};

export default FarmProduce;