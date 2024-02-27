// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// utils
import getDeltaTime from 'src/utils/getdeltatime';

export default function PastWorks({ past }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Awarded Bid</TableCell>
            <TableCell>Project Awarded</TableCell>
            <TableCell>Released Milestones</TableCell>
            <TableCell>Outcome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {past.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>
                {row.outcome === 'Deleted'
                  ? ''
                  : `${row.awarded.amount.toFixed(2)} ${row.awarded.currency} ${
                      row.awarded.hourly ? '/ hour' : ''
                    }`}
              </TableCell>
              <TableCell>{getDeltaTime(row.awarded.date)}</TableCell>
              <TableCell>
                <Typography variant="body2" sx={{ whiteSpace: 'pre' }}>
                  {row.outcome === 'Deleted'
                    ? ''
                    : row.released.length === 0
                    ? 'None'
                    : row.released.map(
                        (value, i) =>
                          `${value.toFixed(2)} ${row.awarded.currency}${
                            i < row.released.length - 1 ? '\n' : ''
                          }`
                      )}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    bgcolor:
                      row.outcome === 'Deleted'
                        ? 'none'
                        : row.outcome === 'Incomplete'
                        ? 'secondary.main'
                        : row.outcome === 'Award Rejected'
                        ? 'error.main'
                        : 'primary.main',
                    color: row.outcome !== 'Deleted' && 'white',
                    borderRadius: 5,
                  }}
                >
                  {row.outcome}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
