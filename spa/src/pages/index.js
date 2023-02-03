// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={6}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <WeeklyOverview />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
