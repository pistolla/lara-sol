import { useState } from 'react';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'

import { useFormContext } from "react-hook-form";

const ImgStyled = styled('img')(({ theme }) => ({
    width: 240,
    height: 240,
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
  }))
const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }))
const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      textAlign: 'center',
      marginTop: theme.spacing(4)
    }
  }))

const FarmHouse = () => {
    const { register } = useFormContext();
    // ** State
    const [openAlert, setOpenAlert] = useState(true)
    const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

    const onChange = file => {
        const reader = new FileReader()
        const { files } = file.target
        if (files && files.length !== 0) {
        reader.onload = () => setImgSrc(reader.result)
        reader.readAsDataURL(files[0])
        }
    }
    return (
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Farm House Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload Farm House Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
    )
}

export default FarmHouse;