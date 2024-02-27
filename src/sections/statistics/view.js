'use client';

// @mui
import { styled, useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';
// components
import { useSettingsContext } from 'src/components/settings';
import Chart, { useChart } from 'src/components/chart';
import Scrollbar from 'src/components/scrollbar';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 6,
    backgroundColor: 'primary.main',
  },
}));
// ------------------------------------------------------------
const earningsPerSkill = [
  {
    skill: 'SKILL_1',
    earning: 1063.68,
  },
  {
    skill: 'SKILL_2',
    earning: 853.68,
  },
  {
    skill: 'SKILL_3',
    earning: 563.6,
  },
  {
    skill: 'SKILL_4',
    earning: 63.8,
  },
  {
    skill: 'SKILL_5',
    earning: 3.98,
  },
  {
    skill: 'SKILL_6',
    earning: 2.98,
  },
  {
    skill: 'SKILL_7',
    earning: 1.98,
  },
];
const earningsPerClient = [
  {
    client: 'CLIENT_1',
    earning: 403.68,
  },
  {
    client: 'CLIENT_2',
    earning: 300,
  },
  {
    client: 'CLIENT_3',
    earning: 250.3,
  },
  {
    client: 'CLIENT_4',
    earning: 36.02,
  },
  {
    client: 'CLIENT_5',
    earning: 323.68,
  },
];
const jobProficiency = [
  {
    label: 'completed jobs',
    value: 100,
  },
  {
    label: 'on time jobs',
    value: 100,
  },
  {
    label: 'on budget jobs',
    value: 100,
  },
  {
    label: 'rehire rate',
    value: 12,
  },
];
const ratingsPerSkill = [
  {
    skill: 'SKILL_1',
    rating: 5,
  },
  {
    skill: 'SKILL_2',
    rating: 5,
  },
  {
    skill: 'SKILL_3',
    rating: 5,
  },
  {
    skill: 'SKILL_4',
    rating: 5,
  },
  {
    skill: 'SKILL_5',
    rating: 3.5,
  },
];
// ------------------------------------------------------------

export default function StatisticsView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  // chart
  const categories = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const series = [{ name: 'USD', data: [0, 0, 0, 150, 200, 500] }];
  const chartOptions = useChart({
    xaxis: { categories },
  });
  // donut chart
  const donutChartOptions = useChart({
    chart: { type: 'donut' },
    labels: earningsPerClient.map((earning) => earning.client),
    legend: {
      horizontalAlign: 'center',
    },
  });
  // stacked columns
  const seriesStacked = [
    {
      name: 'BIDS PLACED',
      data: [6, 10, 20, 67, 122, 143],
    },
    {
      name: 'BIDS ON AWARDED PROJECTS',
      data: [2, 3, 5, 38, 13, 27],
    },
    {
      name: 'BIDS AWARDED TO YOU',
      data: [0, 0, 0, 1, 10, 5],
    },
  ];
  const columnsChartOptions = useChart({
    chart: {
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 5,
    },
    fill: {
      opacity: 1,
    },
  });
  // radialbar
  const seriesRadialBar = [(120 / 300) * 100];
  const radialChartOptions = useChart({
    chart: {
      offsetY: -26,
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        top: 24,
        bottom: 24,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '56%',
        },
        dataLabels: {
          name: {
            offsetY: 8,
          },
          value: {
            show: true,
            offsetY: -40,
          },
          total: {
            label: 'BIDS REMAINING',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          {
            offset: 0,
            color:
              theme.palette.mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.main,
          },
          {
            offset: 100,
            color:
              theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : theme.palette.primary.dark,
          },
        ],
      },
    },
  });

  const renderTotalEarnings = (
    <Card>
      <CardHeader title="Total earnings" />
      <Divider sx={{ mt: 2 }} />
      <Stack spacing={2} p={3} alignItems="center">
        <Typography variant="h4" color="primary.main">
          $1,313.68
        </Typography>
        <Typography align="center" variant="caption">
          YOUR TOTAL EARNINGS SINCE JOINING
        </Typography>
        <Divider flexItem />
        <Typography variant="h4" color="primary.main">
          $1,153.68
        </Typography>
        <Typography align="center" variant="caption">
          YOUR TOTAL EARNINGS FROM THE PAST 30 DAYS
        </Typography>
      </Stack>
    </Card>
  );
  const renderEarningsOverTime = (
    <Card>
      <CardHeader title="Earnings over time" />
      <Divider sx={{ mt: 2 }} />
      <Stack direction="row" spacing={1} alignItems="center" px={3} pt={2} mb={-1}>
        <Typography color="primary.main">
          <b>•</b>
        </Typography>
        <Typography variant="caption" color="text.disabled">
          AMOUNT EARNED (USD)
        </Typography>
      </Stack>
      <Chart dir="ltr" type="area" series={series} options={chartOptions} height={250} />
    </Card>
  );
  const renderEarningsPerSkills = (
    <Card>
      <CardHeader title="Earnings per skill" />
      <Divider sx={{ mt: 2 }} />
      <Box height={320} overflow="auto">
        <Scrollbar
          sx={{
            height: 1,
            '& .simplebar-content': {
              height: 1,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Stack p={3} spacing={2} divider={<Divider />}>
            {earningsPerSkill.map((earnings, index) => (
              <Stack key={index} direction="row" spacing={1} alignItems="center">
                <Avatar
                  sizes="small"
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: index === 0 ? 'secondary.main' : 'primary.main',
                  }}
                >
                  {index + 1}
                </Avatar>
                <Typography variant="body2">{earnings.skill}</Typography>
                <Box flexGrow={1} />
                <Typography variant="body2">{`$ ${earnings.earning.toFixed(2)}`}</Typography>
              </Stack>
            ))}
          </Stack>
        </Scrollbar>
      </Box>
    </Card>
  );
  const renderEarningsPerClients = (
    <Card>
      <CardHeader title="Earnings per client" />
      <Divider sx={{ my: 2 }} />
      <Chart
        type="donut"
        series={earningsPerClient.map((earning) => earning.earning)}
        options={donutChartOptions}
        height={350}
      />
    </Card>
  );
  const renderJobProficiency = (
    <Card>
      <CardHeader title="Job proficiency" />
      <Divider sx={{ mt: 2 }} />
      <Stack p={3} spacing={2}>
        {jobProficiency.map((item, index) => (
          <Stack key={index} spacing={0.5}>
            <Typography color="text.disabled" variant="caption">
              {item.label.toUpperCase()}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box width={1}>
                <BorderLinearProgress variant="determinate" value={item.value} />
              </Box>
              <Typography variant="body2">{`${item.value.toFixed(0)}%`}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
  const renderRatingPerSkill = (
    <Card>
      <CardHeader title="Rating per skill" />
      <Divider sx={{ mt: 2 }} />
      <Box height={320} overflow="auto">
        <Scrollbar
          sx={{
            height: 1,
            '& .simplebar-content': {
              height: 1,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Stack p={3} spacing={2} divider={<Divider />}>
            {ratingsPerSkill.map((item, index) => (
              <Stack key={index} spacing={1} direction="row" alignItems="center">
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: index === 0 ? 'secondary.main' : 'primary.main',
                  }}
                >
                  {index + 1}
                </Avatar>
                <Typography variant="body2">{item.skill}</Typography>
                <Box flexGrow={1} />
                <Rating value={item.rating} precision={0.1} readOnly size="small" />
              </Stack>
            ))}
          </Stack>
        </Scrollbar>
      </Box>
    </Card>
  );
  const renderBidConversion = (
    <Card>
      <CardHeader title="Bid conversion" />
      <Divider sx={{ my: 2 }} />
      <Chart type="bar" series={seriesStacked} options={columnsChartOptions} height={400} />
    </Card>
  );
  const renderBidSummary = (
    <Card>
      <CardHeader title="Bid summary" />
      <Divider sx={{ my: 2 }} />
      <Chart type="radialBar" series={seriesRadialBar} options={radialChartOptions} height={350} />
    </Card>
  );
  const renderBidsPerMilestone = (
    <Card>
      <CardHeader title="Bids per milestone" />
      <Divider sx={{ mt: 2 }} />
      <Stack p={3} alignItems="center" spacing={2}>
        <Typography color="primary.main" variant="h4">
          25.10
        </Typography>
        <Typography variant="caption" align="center">
          THE AVERAGE NUMBER OF BIDS YOU PLACE BEFORE REACHING A MILESTONE
        </Typography>
      </Stack>
    </Card>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Stack spacing={3}>
            {renderTotalEarnings}
            {renderEarningsOverTime}
            {renderEarningsPerSkills}
            {renderEarningsPerClients}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Stack spacing={3}>
            {renderJobProficiency}
            {renderRatingPerSkill}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Stack spacing={3}>
            {renderBidConversion}
            {renderBidSummary}
            {renderBidsPerMilestone}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
