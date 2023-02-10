// ** React import 
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Network Imports
import axios from 'axios'
import Swal from 'sweetalert2'

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import YouthPerCounty from 'src/views/dashboard/YouthPerCounty'
import FarmersPerCounty from 'src/views/dashboard/FarmersPerCounty'
import FarmersPerFarmType from 'src/views/dashboard/FarmersPerFarmType'
import FarmersPerStatus from 'src/views/dashboard/FarmersPerStatus';
import FarmerMap from 'src/views/dashboard/FarmerMap'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [youthPerCounty, setYouthPerCounty] = useState({})
  const [farmerPerCounty, setFarmerPerCounty] = useState({})
  const [farmersPerFarmType, setFarmersPerFarmType] = useState({})
  const [farmersPerStatus, setFarmersPerStatus] = useState({})

  useEffect( () => {
    getFarmersPerCounty();
    getYouthPerCounty();
    getFarmersPerFarmType();
    getFarmersPerStatus();
  }, []);

  useEffect( () => {
    if(Object.keys(youthPerCounty).length != 0 
    && Object.keys(farmerPerCounty).length != 0 
    && Object.keys(farmersPerFarmType).length != 0
    && Object.keys(farmersPerStatus).length != 0) {
      setIsLoading(false);
    }
  }, [isLoading, youthPerCounty, farmerPerCounty, farmersPerFarmType, farmersPerStatus]);

  const getFarmersPerCounty = () => {
    if(isLoading) {
      axios.get('http://localhost/api/dashboard?filter=county&specify=all')
      .then(res => {
        setFarmerPerCounty(res.data);
        console.log(farmerPerCounty);
      });
    }
  }

  const getYouthPerCounty = () => {
    if(isLoading) {
      axios.get('http://localhost/api/dashboard?filter=dob&specify=35')
      .then(res => {
        setYouthPerCounty(res.data);
      });
    }
  }

  const getFarmersPerFarmType = () => {
    if(isLoading) {
      axios.get('http://localhost/api/dashboard?filter=farm_type&specify=all')
      .then(res => {
        setFarmersPerFarmType(res.data);
      });
    }
  }

  const getFarmersPerStatus = () => {
    if(isLoading) {
      axios.get('http://localhost/api/dashboard?filter=status&specify=all')
      .then(res => {
        setFarmersPerStatus(res.data);
      });
    }
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={6}>
          <FarmerMap />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <FarmersPerCounty data={farmerPerCounty} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <YouthPerCounty data={youthPerCounty} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <FarmersPerFarmType data={farmersPerFarmType} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <FarmersPerStatus data={farmersPerStatus} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
