'use client';

import NextLink from 'next/link';
// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// components
import Iconify from 'src/components/iconify/iconify';
//
import InviteFriends from './dashboard-invite-friends';
import Welcome from './dashboard-welcome';
import SetupAccount from './dashboard-account';
import Notifications from './dashboard-notifications';
import CurrentWorks from './dashboard-current-works';
import RecentProjects from './dashboard-recent-projects';

// ----------------------------------------------------------------------

const renderBalance = (
  <Card>
    <Stack spacing={2} p={3}>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
        <Typography>
          <b>Balance</b>
        </Typography>
        <Button color="primary" startIcon={<Iconify icon="gg:add" width={16} />}>
          Add funds
        </Button>
      </Stack>
      <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="space-between">
        <Typography variant="body2">TBNB</Typography>
        <Typography variant="body2">
          <b>1.00</b>
        </Typography>
      </Stack>
    </Stack>
  </Card>
);
const renderMemberShip = (
  <Card>
    <Stack spacing={2} p={3}>
      <Stack direction="row" spacing={0.5} alignItems="center" display="flex">
        <Iconify icon="game-icons:upgrade" width={20} />
        <Typography>
          <b>Plus Member</b>
        </Typography>
        <Box flexGrow={1} />
        <Button startIcon={<Iconify icon="uis:graph-bar" width={16} />} color="primary">
          Bid Insights
        </Button>
      </Stack>
      <Typography variant="body2">
        <b>26 bids</b> left out of 100
      </Typography>
    </Stack>
  </Card>
);
const renderGettingNoticed = (
  <Card>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <CardMedia
        component="img"
        image="/assets/background/dashboard/success.jpg"
        alt="You're getting notified"
        sx={{ width: { xs: 1, md: 250 } }}
      />
      <Stack p={3}>
        <Typography>
          You&apos;re getting noticed! <b>137 potential clients</b> have recently seen your bids
        </Typography>
        <Typography variant="caption" color="text.disabled">
          less than 20 senconds ago
        </Typography>
        <Typography mt={2} variant="body2">
          Keep placing great bids to attract more clients. To view the performance of your bids,
          check out your{' '}
          <NextLink href="#" style={{ color: 'inherit' }}>
            Bid Insights
          </NextLink>
        </Typography>
      </Stack>
    </Stack>
  </Card>
);

export default function OneView() {
  return (
    <Container maxWidth="lg">
      <Welcome
        title="Welcome back, Jayden Frankie"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="/assets/background/dashboard/welcome.png"
      />
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            {renderGettingNoticed}
            <Notifications />
            <CurrentWorks />
            <RecentProjects />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <SetupAccount />
            <InviteFriends
              price="20$"
              title={`Invite Friends \n and Earn`}
              description="Refer a friend and receive $20 for each successful referral. To earn credits, share your unique link."
              img="/assets/illustrations/characters/invite.png"
            />
            {renderBalance}
            {renderMemberShip}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
