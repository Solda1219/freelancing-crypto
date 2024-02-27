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
import Typography from '@mui/material/Typography';
// icon
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
// utils
import getDeltaTime from 'src/utils/getdeltatime';

export default function Bids({ currents }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Awarded Bid</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>In Progress Milestones</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currents.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>{`${row.awardedBid.toFixed(2)} ${row.currency}`}</TableCell>
              <TableCell>{getDeltaTime(row.deadline)}</TableCell>
              <TableCell>
                <Typography variant="body2" sx={{ whiteSpace: 'pre' }}>
                  {row.milestone.length === 0
                    ? 'None'
                    : `${row.milestone[row.milestone.length - 1].toFixed(2)} ${row.currency}\n(${
                        row.milestone.length
                      } Milestone)`}
                </Typography>
              </TableCell>
              <TableCell>
                <ButtonGroup>
                  <Button
                    startIcon={<OnlinePredictionIcon fontSize="small" />}
                    sx={{ color: row.online ? 'primary.main' : 'text.disabled' }}
                  >
                    Chat
                  </Button>
                  <Button variant="contained">View Milestone</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
