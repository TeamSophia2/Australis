import React, { useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { csv } from "d3-fetch";
//import { convertColorToString } from "material-ui/utils/colorManipulator";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 300,
  },
});

let a =[]
let rows =[]

export default function StickyHeadTable({table,country}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columns,setColumns] = useState([]);
  //const [instancia,setinstancia]= useState([]);

  useEffect(() => {
    csv(table).then((data) => {setColumns(data)})
  }, [table]);
  
 if (columns["columns"]){
  const hola = columns["columns"].map(s=> {return({id:s, label:s})})
  a=hola
  
  rows = columns.map(s=>{
    return s})
  rows = rows.filter(s=>s.ISO3 ===country)

}
  //const columns1 = [[columns[2]].map((s)=>{return{id:Object.keys(s)}})]
  //console.log(columns1);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {a.map((column) => (
                <TableCell
                  key={column.id}
                  //align={column.align}
                 // style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {a.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}