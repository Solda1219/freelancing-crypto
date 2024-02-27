import Link from 'next/link';
// @mui
import { Card, Stack, Typography, CardActionArea, Box, Button } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// routes
import { paths } from 'src/routes/paths';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'primary.main',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundColor: 'primary.darker',
  },
}));

export default function SetupAccount() {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography>
            <b>Set up your Account</b>
          </Typography>
          <Typography color="text.disabled">80% done</Typography>
        </Stack>
        <BorderLinearProgress variant="determinate" value={80} />
        <Typography>
          Having a complete verifed account will increase the chances of getting jobs
        </Typography>
        <Typography>
          <b>Complete your account setup by:</b>
        </Typography>
        <Card sx={{ bgcolor: 'primary.main', color: 'white', mt: -1 }}>
          <CardActionArea>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Box>
                <VerifiedUserIcon />
              </Box>
              <Typography variant="body2">Pass the US English Exam - Level 1</Typography>
              <Typography variant="body2">+20%</Typography>
            </Stack>
          </CardActionArea>
        </Card>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          href={paths.dashboard.account.root}
        >
          Edit Your Profile
        </Button>
      </Stack>
    </Card>
  );
}
