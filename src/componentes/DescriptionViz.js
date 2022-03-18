import {
    Box,
    Card,
    CardContent,
    Typography,
 
  } from '@material-ui/core';

  
  const DescriptionViz = ({
    sx,
    mensaje

  }) => { 
    return (
      <Card {...sx}>
        <CardContent>
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
          >
             <Typography
                color="textPrimary"
                variant="h3"
            >
                {mensaje}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };
  
  export default DescriptionViz;
  