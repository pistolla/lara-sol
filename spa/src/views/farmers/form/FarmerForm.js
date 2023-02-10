// ** React Imports
import { useState } from 'react'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

// ** Form Imports
import { useForm, FormContext, useFormContext } from "react-hook-form";
import PersonalDetail from './PersonalDetail';
import Boundary from './Boundary';
import FarmProduce from './FarmProduce';
import FarmHouse from './FarmHouse';
import TabSwitcher from 'src/@core/layouts/TabSwitcher';

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

const FarmerForm = () => {
    // ** State
    const methods = useForm();
    const { handleSubmit, control } = methods;

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <FormContext {...methods}>
            <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                display: "flex",
                flexDirection: "column",
                width: 400
            }}
            >
            <TabSwitcher
                tabs={[
                { label: "Personal Details", component: PersonalDetail },
                { label: "Boundaries", component: Boundary },
                { label: "Farm Produce", component: FarmProduce},
                { label: "Farm House", component: FarmHouse}
                ]}
            />
            <br />
            <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Validate
            </ButtonStyled>
            <ResetButtonStyled color='error' variant='outlined' onClick={() => alert('Reset Form')}>
                  Reset
            </ResetButtonStyled>
            </form>
        </FormContext>
    );
}

export default FarmerForm;
