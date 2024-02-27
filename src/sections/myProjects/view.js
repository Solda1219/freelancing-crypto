'use client';

import { useState } from 'react';
// mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// components
import { useSettingsContext } from 'src/components/settings';

import SearchBox from './search';
import Bids from './bids';
import CurrentWorks from './current-works';
import PastWorks from './past-works';

const _bids = [
  {
    title: 'Website for IT consulting and service website',
    totalBids: 15,
    currency: 'USD',
    averageBid: 2044,
    myBid: 2500,
    bidPlaced: new Date('Dec 09 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
  },
  {
    title: 'Website for IT consulting and service website',
    totalBids: 15,
    currency: 'USD',
    averageBid: 2044,
    myBid: 2500,
    bidPlaced: new Date('Dec 09 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
  },
  {
    title: 'Website for IT consulting and service website',
    totalBids: 15,
    currency: 'USD',
    averageBid: 2044,
    myBid: 2500,
    bidPlaced: new Date('Dec 09 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
  },
  {
    title: 'Website for IT consulting and service website',
    totalBids: 15,
    currency: 'USD',
    averageBid: 2044,
    myBid: 2500,
    bidPlaced: new Date('Dec 09 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
  },
  {
    title: 'Website for IT consulting and service website',
    totalBids: 15,
    currency: 'USD',
    averageBid: 2044,
    myBid: 2500,
    bidPlaced: new Date('Dec 09 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
  },
];
const _currentWorks = [
  {
    title: 'Website Development',
    client: '@someclient',
    awardedBid: 250,
    currency: 'USD',
    deadline: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    milestone: [375],
    online: true,
  },
  {
    title: 'Website Development',
    client: '@someclient',
    awardedBid: 250,
    currency: 'USD',
    deadline: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    milestone: [],
    online: true,
  },
  {
    title: 'Website Development',
    client: '@someclient',
    awardedBid: 250,
    currency: 'USD',
    deadline: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    milestone: [375],
    online: false,
  },
  {
    title: 'Website Development',
    client: '@someclient',
    awardedBid: 250,
    currency: 'USD',
    deadline: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    milestone: [],
    online: false,
  },
];
const _partWorks = [
  {
    title: 'Website development',
    client: '@Client',
    awarded: {
      amount: 500,
      currency: 'USD',
      hourly: false,
      date: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    },
    released: [500],
    outcome: 'Complete',
  },
  {
    title: 'Website development',
    client: '@Client',
    awarded: {
      amount: 10,
      currency: 'USD',
      hourly: true,
      date: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    },
    released: [500, 700],
    outcome: 'Complete',
  },
  {
    title: 'Website development',
    client: '@Client',
    awarded: {
      date: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    },
    released: [],
    outcome: 'Deleted',
  },
  {
    title: 'Website development',
    client: '@Client',
    awarded: {
      amount: 500,
      currency: 'USD',
      hourly: false,
      date: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    },
    released: [],
    outcome: 'Award Rejected',
  },
  {
    title: 'Website development',
    client: '@Client',
    awarded: {
      amount: 500,
      currency: 'USD',
      hourly: false,
      date: new Date('Dec 12 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    },
    released: [],
    outcome: 'Incomplete',
  },
];

export default function MyProjectsView() {
  const settings = useSettingsContext();
  const [buttonValue, setButtonValue] = useState('freelancer');
  const [tabValue, setTabValue] = useState('bids');

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
        <Typography variant="h4">Project Management</Typography>
        <ToggleButtonGroup
          color="primary"
          value={buttonValue}
          exclusive
          onChange={(e, newValue) => setButtonValue(newValue)}
        >
          <ToggleButton value="client">As Client</ToggleButton>
          <ToggleButton value="freelancer">As Freelancer</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack spacing={3}>
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          indicatorColor="secondary"
        >
          <Tab label="Bids" value="bids" />
          <Tab label="Current Jobs" value="current" />
          <Tab label="Past Jobs" value="past" />
        </Tabs>
        <SearchBox />
        {buttonValue === 'freelancer' && tabValue === 'bids' && <Bids bids={_bids} />}
        {buttonValue === 'freelancer' && tabValue === 'current' && (
          <CurrentWorks currents={_currentWorks} />
        )}
        {buttonValue === 'freelancer' && tabValue === 'past' && <PastWorks past={_partWorks} />}
      </Stack>
    </Container>
  );
}
