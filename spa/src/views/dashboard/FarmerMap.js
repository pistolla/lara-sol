import {useEffect, useRef} from 'react'
import * as ChartGeo from 'chartjs-chart-geo'
import Chart from 'chart.js/auto';

Chart.register(ChartGeo.ChoroplethController);
Chart.register(ChartGeo.GeoFeature);
Chart.register(ChartGeo.ColorScale);
Chart.register(ChartGeo.ProjectionScale);

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

const FarmerMap = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const chart = null;
        fetch('http://localhost:3000/js/kenya.geojson').then((r) => r.json()).then((us) => {

        // const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
        const states = us.features;
        canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            
        chart = new Chart(canvasRef.current.getContext("2d"), {
            type: 'choropleth',
            data: {
                labels: states.map((d) => d.properties.COUNTY_NAM),
                datasets: [{
                    label: 'Counties',
                    data: states.map((d) => ({
                        feature: d,
                        value: Math.random() * 10
                    })),
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scale: {
                    projection: 'albersUsa'
                },
                geo: {
                    colorScale: {
                    display: true,
                    position: 'bottom',
                    quantize: 5,
                    legend: {
                        position: 'bottom-right',
                    },
                    },
                },
            }
        });
        });
        return () => {
            if(chart != null) {
                chart.destroy();
            }
        }
    })

  return ( 
    <Card>
      <CardHeader
        title='Farmers Demographic Map'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <canvas ref={canvasRef}></canvas> 
        <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            0
          </Typography>
          <Typography variant='body2'> farmers</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}


export default FarmerMap;