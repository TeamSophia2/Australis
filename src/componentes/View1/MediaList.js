import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableCell,
  TableRow,
  TableBody
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const MediaList = (props) => {
  //esta componente muestra una lista con los princiales medios de cada pais

  console.log('Render tabla');
  const result = props.media_outlet.filter((row) => row.country === props.iso3);
  return (
    <Card {...props}>
      <CardHeader title="MEDIA OUTLET LIST PER COUNTRY" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table size="small">
            <TableBody>
              {result.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left" size="small">
                    {row.media_outlet}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default MediaList;
