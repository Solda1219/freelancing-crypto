// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
// utils
import getDeltaTime from 'src/utils/getdeltatime';

export default function Bids({ bids }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Total Bids</TableCell>
            <TableCell>Average Bid</TableCell>
            <TableCell>My Bid</TableCell>
            <TableCell>Bid Placed</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bids.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.totalBids}</TableCell>
              <TableCell>{`${row.averageBid.toFixed(2)} ${row.currency}`}</TableCell>
              <TableCell>{`${row.myBid.toFixed(2)} ${row.currency}`}</TableCell>
              <TableCell>{getDeltaTime(row.bidPlaced)}</TableCell>
              <TableCell>
                <ButtonGroup>
                  <Button sx={{ width: 70 }}>Edit</Button>
                  <Button variant="contained" sx={{ width: 70 }}>
                    Retract
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
